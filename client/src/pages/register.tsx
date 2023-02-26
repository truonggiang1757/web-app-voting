import { Formik, Form } from 'formik'
import { EnvelopeIcon, KeyIcon } from "@heroicons/react/20/solid"
import InputField from '../../components/InputField'

import { registerMutation } from '@/graphql-client/mutation'
import { useMutation } from '@apollo/client'

const Register = () => {

    const initialValues: NewUserInput = { username: '', email: '', password: ''}
    interface UserMutationResponse {
        code: number
        success: boolean
        message: string
        user: string
        errors: string
    }

    interface NewUserInput {
        username: string
        email: string
        password: string
    }


    const [registerUser, {data, error}] = useMutation<
        {register: UserMutationResponse},
        {registerInput: NewUserInput}
    >(registerMutation)

    const onRegisterSubmit = (values: NewUserInput) => {
        registerUser({
            variables: {
                registerInput: values
            }
        })
    }

  return (
    
    <div className='flex flex-col items-center justify-center min-h-screen md:py-2 md:bg-gray-100 sm:bg-white'>
        <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
            <div className='bg-blue-400 rounded-2xl md:shadow-2xl lg:flex lg:w-2/3 xs:max-w-full sm:flex-row sm:px-0 max-w-4xl'>
                <div className='w-full lg:p-5 sm:max-w-screen'>
                    <div className='py-10'>
                        <h2 className='text-3xl font-bold text-white mb-2'>Sign up</h2>
                        <div className='border-2 w-10 border-white inline-block mb-2'></div>
                        <div className='flex justify-center my-2'></div>
                        <p className="text-white mb-5">Enter your new credentials</p>
                        <div className="flex flex-col items-center">
                            {error && <p>Failed to register</p>}
                            {data && data.register.success && <p>Registered successfully {JSON.stringify(data)}</p>}
                            <Formik initialValues={initialValues} onSubmit={onRegisterSubmit}>
                                {
                                    ({ isSubmitting }) => (
                                    <Form>
                                        <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                                            <EnvelopeIcon className="text-gray-400 w-6" />
                                            <InputField name='username' placeholder="Username" label='Username' type='text'/>    
                                        </div>
                                        <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                                            <EnvelopeIcon className="text-gray-400 w-6" />
                                            <InputField name='email' placeholder="Email" label='Email' type='text'/>    
                                        </div>
                                        <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                                            <KeyIcon className="text-gray-400 w-6" />
                                            <InputField name='password' placeholder="password" label='Password' type='password'/>     
                                        </div>
                                        <input type="submit" value="Register" className='border-2 mt-3 border-white text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-400'/>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register