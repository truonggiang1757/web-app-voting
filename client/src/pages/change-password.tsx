import { ChangePasswordInput, useChangePasswordMutation } from '@/generated/graphqlasdsad'
import { mapFieldErrors } from '@/helpers/mapFieldErrors'
import { EnvelopeIcon } from '@heroicons/react/20/solid'
import InputField from 'components/InputField'
import { Form, Formik, FormikHelpers } from 'formik'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Link from 'next/link'

const ChangePassword = () => {
    const {query} = useRouter()
    const initialValues = {newPassword: ''}
    const [changePassword, {loading}] = useChangePasswordMutation()
    const [tokenError, setTokenError] = useState('')
    const onChangePasswordSubmit = async (values: ChangePasswordInput, {setErrors}: FormikHelpers<ChangePasswordInput>) => {
        if(query.userId && query.token){
            const response = await changePassword({
                variables: {
                    userId: query.userId as string,
                    token: query.token as string,
                    changePasswordInput: values
                }
            })  
            
            if(response.data?.changePassword.errors) {
                const fieldErrors = mapFieldErrors(response.data.changePassword.errors)
                if('token' in fieldErrors) {
                    setTokenError(fieldErrors. token)
                }
                setErrors(fieldErrors)
            }
        }
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
                            <Formik initialValues={initialValues} onSubmit={onChangePasswordSubmit}>
                                {
                                    ({ isSubmitting }) =>(
                                    <Form>
                                        <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                                            <EnvelopeIcon className="text-gray-400 w-6" />
                                            <InputField name='newPassword' placeholder="New Password" label='New Password' type='text'/>
                                            {tokenError && 
                                            <div>
                                                <div className='text-red'>{tokenError}</div>
                                                <div>
                                                    <Link href='/forgot-password'>Go back</Link>
                                                </div>} 
                                            </div>   
                                        </div>
                                        <input type="submit" value="Change password" className='border-2 mt-3 border-white text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-400'/>
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

export default ChangePassword