import { User } from '../entities/User'
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import { UserMutationResponse } from '../types/UserMutationResponse'
import { RegisterInput } from '../types/RegisterInput'
import { LoginInput } from '../types/LoginInput'
import { validateRegisterInput } from '../utils/validateRegisterInput'
import { Context } from '../types/Context'
import { COOKIE_NAME } from '../constants'
const argon2 = require('argon2')

@Resolver()
export class UserResolver {
    @Mutation(_return => UserMutationResponse, {nullable: true})
    async register(
        @Arg('registerInput') registerInput: RegisterInput,
        @Ctx() {req}: Context
    ): Promise<UserMutationResponse> {
        const validateRegisterInputErrors = validateRegisterInput(registerInput)
        if(validateRegisterInputErrors !== null)
        return {code: 400, success: false, ...validateRegisterInputErrors}
        try {
            const {username, email, password} = registerInput
            const existingUser = await User.findOne({ where: [{username}, {email}] })
            if(existingUser){
                return {code: 400, success: false, message:`Username or email already exist`, errors: [{field: existingUser.username === username ? 'username' : 'email', message: `${existingUser.username === username ? 'Username' : 'Email'} already taken`}]}
            }

            const hashedPassword = await argon2.hash(password)

            const newUser = User.create({
                username,
                password: hashedPassword,
                email
            })

            await User.save(newUser)

            req.session.userId = newUser.id

            return {
                code: 200, success: true, message: 'User registered succussfully', user: newUser
            }
        } catch(error) {
            console.log(error)
            return {code: 500, success: false, message: `Internal server error ${error.message}`}
        }
    }

    @Mutation(_return => UserMutationResponse)
    async login(
        @Arg('loginInput') LoginInput: LoginInput,
        @Ctx() {req}: Context
    ): Promise<UserMutationResponse> {
        try {
            
            const {usernameOrEmail, password} = LoginInput
            const existingUser = await User.findOne({where: [usernameOrEmail.includes('@') ? {email:usernameOrEmail} : {username: usernameOrEmail}]})
            if(!existingUser)
            return {
                code: 400,
                success: false,
                message: 'User not found',
                errors: [{field:'usernameOrEmail', message:'Username or email incorrect'}],
            }

            const passwordValid = await argon2.verify(existingUser.password, password)

            if(!passwordValid)
            return {
                code: 400,
                success: false,
                message: 'Wrong password',
                errors:[{field: 'password', message: 'Wrong password'}]
            }
            //Create session and return cookie
            req.session.userId = existingUser.id


            return {code: 200, success: true, message: 'Logged in successfully', user: existingUser}
        } catch (error) {
            console.log(error)
            return {code: 500, success: false, message: `Internal server error ${error.message}`}
        }
    }

    @Mutation(_return => Boolean)
    async logout(@Ctx() {req, res}: Context): Promise<boolean> {
        return new Promise((resolve, _reject) => {
            res.clearCookie(COOKIE_NAME)
            req.session.destroy(error => {
                if(error) {
                    console.log('DESTROYING SESSION ERROR', error)
                    resolve(false)
                }
                resolve(true)
            })
        })
    }
}