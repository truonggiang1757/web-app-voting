import { EnvelopeIcon, KeyIcon } from "@heroicons/react/20/solid"
import { Form, Formik, FormikHelpers } from 'formik'
import InputField from '../../components/InputField'
import NextLink from "next/link"
import { LoginInput, MeDocument, MeQuery, useLoginMutation } from '@/generated/graphql'
import { mapFieldErrors } from '@/helpers/mapFieldErrors'
import { useRouter } from 'next/router'
import { useCheckAuth } from "@/utils/useCheckAuth"
import Link from "next/link"

const Login = () => {
    const router = useRouter()
    useCheckAuth()
    const initialValues: LoginInput = { usernameOrEmail: '', password: ''}

    const [loginUser, { loading: _loginUserLoading, data, error}] = useLoginMutation()
    const onLoginSubmit = async (values: LoginInput, {setErrors}: FormikHelpers<LoginInput>) => {
        const response = await loginUser({
            variables: {
                loginInput: values
            },
            update(cache, {data}) {
                console.log('DATA LOGIN', data)
                // const meData = cache.readQuery({query: MeDocument})
                // console.log('MeData', meData)

                if(data?.login.success) {
                    cache.writeQuery<MeQuery>({
                        query: MeDocument,
                        data: {me: data.login.user}
                    })
                }
            }
        })

        if(response.data?.login.errors){
            setErrors(mapFieldErrors(response.data.login.errors))
        }
        else if (response.data?.login.user) {
            router.push('/')
        }
    }

  return (
    
    <div className='flex flex-col items-center justify-center min-h-screen md:py-2 md:bg-gray-100 sm:bg-white'>
        <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
            <div className='bg-blue-400 rounded-2xl md:shadow-2xl lg:flex lg:w-2/3 xs:max-w-full sm:flex-row sm:px-0 max-w-4xl'>
                <div className='w-full lg:p-5 sm:max-w-screen'>
                    <div className='py-10'>
                        <h2 className='text-3xl font-bold text-white mb-2'>Login</h2>
                        <div className='border-2 w-10 border-white inline-block mb-2'></div>
                        <div className='flex justify-center my-2'></div>
                        <p className="text-white mb-5">Enter your credentials</p>
                        <div className="flex flex-col items-center">
                            {error && <p>Failed to Login. Internal server error</p>}
                            {data && data.login.success && <p>Registered successfully {JSON.stringify(data)}</p>}
                            <Formik initialValues={initialValues} onSubmit={onLoginSubmit}>
                                {
                                    ({ isSubmitting }) => (
                                    <Form>
                                        <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                                            <EnvelopeIcon className="text-gray-400 w-6" />
                                            <InputField name='usernameOrEmail' placeholder="Username or Email" label='Username or Email' type='text'/>    
                                        </div>
                                        <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                                            <KeyIcon className="text-gray-400 w-6" />
                                            <InputField name='password' placeholder="password" label='Password' type='password'/>     
                                        </div>
                                        <input type="submit" value="Login" className='border-2 mt-3 border-white text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-400'/>
                                    </Form>
                                )}
                            </Formik>
                            <div>
                                <Link href='/forgot-password'>
                                    Forgot password
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login