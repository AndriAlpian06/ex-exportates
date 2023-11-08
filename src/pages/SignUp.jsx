import axios from 'axios'
import React, { useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [telepon, setTelepon] = useState('')
    const [password, setPassword] = useState('')
    const [errModal, setErrModal] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const handleNameChange =  (e) => {
        setName(e.target.value)
    }

    const handleEmailChanget = (e) => {
        setEmail(e.target.value)
    }
    
    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    }
 
    const handleTeleponChange = (e) => {
        setTelepon(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {

        try{

            const response = await axios.post('https://api-exportates.vercel.app/register',
            {
                name: name,
                email: email,
                address: address,
                telepon: telepon,
                password: password
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            //console.log(response)
            if(response.status === 200){
                navigate('/login')
            }
            else{
                setMessage('Ada kesalahan dalam sistem')
                setErrModal(true)
            }

        }
        catch (err){
            setMessage('Ada kesalahan ketika membuat akun')
            setErrModal(true)
        }

    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault()
            handleSubmit()
        }
    }

    const backgroundImageStyle = {
        backgroundImage: "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"
      };

  return (
    <>
        <div className="w-full h-screen relative lg:mt-20">
            <div className="mx-auto flex max-w-sm overflow-hidden rounded-lg bg-white shadow-lg lg:max-w-4xl">
                <div className="hidden bg-cover lg:block lg:w-1/2" style={backgroundImageStyle}></div>
                <div className="w-full p-8 lg:w-1/2">
                <h2 className="text-center text-2xl font-semibold text-gray-700">EXPROTATES</h2>
                <p className="text-center text-xl text-gray-600">Welcome</p>
                {/* <a href="#" className="mt-4 flex items-center justify-center rounded-lg text-white shadow-md hover:bg-gray-100">
                    <div className="px-4 py-3">
                    <svg className="h-6 w-6" viewBox="0 0 40 40">
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                    </svg>
                    </div>
                    <h1 className="w-5/6 px-4 py-3 text-center font-bold text-gray-600">Sign up with Google</h1>
                </a> */}
                {/* <div className="mt-4 flex items-center justify-between">
                    <span className="w-1/5 border-b lg:w-1/4"></span>
                    <a href="#" className="text-center text-xs uppercase text-gray-500">or login with email</a>
                    <span className="w-1/5 border-b lg:w-1/4"></span>
                </div> */}
                <div className="mt-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">Name</label>
                    <input className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none" type="text" value={name} onChange={handleNameChange} />
                </div>
                <div className="mt-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">Email</label>
                    <input className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none" type="email" value={email} onChange={handleEmailChanget} />
                </div>
                <div className="mt-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">Telephone</label>
                    <input className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none" type="number" value={telepon} onChange={handleTeleponChange} />
                </div>
                <div className="mt-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">Address</label>
                    <input className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none" type="text" value={address} onChange={handleAddressChange} />
                </div>
                <div className="mt-4">
                    <div className="flex justify-between">
                    <label className="mb-2 block text-sm font-bold text-gray-700">Password</label>
                    </div>
                    <input className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none" type="password" value={password} onChange={handlePasswordChange} onKeyDown={handleKeyPress} />
                </div>
                <div className="mt-8">
                    <button className="w-full rounded bg-gray-700 px-4 py-2 font-bold text-white hover:bg-gray-600" onClick={handleSubmit}>Register</button>
                </div>
                {errModal && (
                    <Transition appear show={true} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={() => setErrModal(false)}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>
                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title 
                                        as="h3" 
                                        className="text-lg font-medium leading-6 text-gray-900">
                                            Alert
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                            {message}
                                            </p>
                                        </div>
                                        <div className="pt-2 space-x-4">
                                            <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                            onClick={() => setErrModal(null)}
                                            >
                                            Close
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                )}
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp