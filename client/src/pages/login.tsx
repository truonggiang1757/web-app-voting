import { EnvelopeIcon, KeyIcon } from "@heroicons/react/20/solid"

const Login = () => {
    return (
        <>
        <div className='flex flex-col items-center justify-center min-h-screen md:py-2 md:bg-gray-100 sm:bg-white'>
            <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <div className='bg-white rounded-2xl md:shadow-2xl lg:flex lg:w-2/3 xs:max-w-full sm:flex-row sm:px-0 max-w-4xl'>
                    {/* Sign in */}
                    <div className='lg:w-3/5 lg:p-5 sm:max-w-screen'>
                        <div className='py-10'>
                            <h2 className='text-3xl font-bold text-blue-400 mb-2'>Sign in to Account</h2>
                            <div className='border-2 w-10 border-blue-400 inline-block mb-2'></div>
                            <div className='flex justify-center my-2'></div>
                            <p className="text-gray-700 mb-5">Sign in with your email</p>
                            <div className="flex flex-col items-center">
                                <form action="/api/auth/login" method="post">
                                    <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                                        <EnvelopeIcon className="text-gray-400 w-6" />
                                        <input type="email" name="email" placeholder="Email" className="bg-gray-200 border-none focus:ring-0 text-sm flex-1"/>    
                                    </div>
                                    <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                                        <KeyIcon className="text-gray-400 w-6" />
                                        <input type="password" name="password" placeholder="Password" className="bg-gray-200 border-none focus:ring-0 text-sm flex-1"/>    
                                    </div>
                                    <div className="flex justify-between w-64 mb-5">
                                        <label className="flex items-center text-xs mr-1 hover:text-blue-400"><input type="checkbox" name="remember" className="mr-1 hover:text-blue-400"/>Remember me</label>
                                        <a href="" className="text-xs hover:text-blue-400">Forgot Password?</a>
                                    </div>
                                    <input type="submit" value="Sign in" className='border-2 border-blue-400 text-blue-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-400 hover:text-white'/>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Sign up */}
                    <div className='lg:w-2/5 sm:max-w-full bg-blue-400 text-white sm:rounded-b-2xl lg:rounded-none lg:rounded-r-2xl py-36 px-12'>
                        <h2 className='text-3xl font-bold mb-2'>Welcome to iVote</h2>
                        <div className='border-2 w-10 border-white inline-block mb-2'></div>
                        <p className='mb-10'>Sign up today to use our latest technology!</p>
                            <a href="/signup" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-400'>Sign up</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login
