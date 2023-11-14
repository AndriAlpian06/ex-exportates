import axios from 'axios'
import React, { useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'

const SignUp = () => {
    const [name, setName] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [city, setCity] = useState('')
    const [countryCode, setCountryCode] = useState('')
    const [province, setProvince] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [errModal, setErrModal] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const handleNameChange =  (e) => {
        setName(e.target.value)
    }

    const handleFirstnameChange = (e) => {
        setFirstname(e.target.value)
    }

    const handleLastnameChange = (e) => {
        setLastname(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    
    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    }
 
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    const handleCountryCodeChange = (e) => {
        setCountryCode(e.target.value)
    }

    const handleProvinceChange = (e) => {
        setProvince(e.target.value)
    }

    const handlePostalCode = (e) => {
        setPostalCode(e.target.value)
    }

    const handleSubmit = async (e) => {

        try{

            const response = await axios.post('https://api-exportates.vercel.app/register',
            {
                name: name,
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                address: address,
                phone: phone,
                city: city,
                province: province,
                postal_code: postalCode,
                country_code: countryCode
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
        {/* <div className="w-full h-screen relative lg:mt-20">
            <div className="mx-auto flex max-w-sm overflow-hidden rounded-lg bg-white shadow-lg lg:max-w-4xl">
                <div className="hidden bg-cover lg:block lg:w-1/2" style={backgroundImageStyle}></div>
                <div className="w-full p-8 lg:w-1/2">
                <h2 className="text-center text-2xl font-semibold text-gray-700">EXPROTATES</h2>
                <p className="text-center text-xl text-gray-600">Welcome</p>
                <div className="mt-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">Fullname</label>
                    <input className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none" type="text" value={name} onChange={handleNameChange} />
                </div>
                <div className="mt-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">Firstname</label>
                    <input className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none" type="text" value={name} onChange={handleNameChange} />
                </div>
                <div className="mt-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">Email</label>
                    <input className="focus:shadow-outline block w-full appearance-none rounded border border-gray-300 bg-gray-200 px-4 py-2 text-gray-700 focus:outline-none" type="email" value={email} onChange={handleEmailChanget} />
                </div>
                <div className="mt-4">
                    <label className="mb-2 block text-sm font-bold text-gray-700">Phone</label>
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
        </div> */}
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
            <div className="container mx-auto max-w-screen-lg">
                <div>

                <div className="mb-6 rounded bg-white p-4 px-4 shadow-lg md:p-8">
                    <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-3">
                    <div className="text-gray-600">
                        <p className="text-lg font-medium">Personal Details</p>
                        <p>Please fill out all the fields.</p>
                        
                    </div>

                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm md:grid-cols-6">
                        <div className="md:col-span-6">
                            <label htmlFor="full_name">Full Name</label>
                            <input type="text" name="name" id="full_name" className="mt-1 h-10 w-full rounded border bg-gray-50 px-4" value={name} onChange={handleNameChange} />
                        </div>

                        <div className="md:col-span-3">
                            <label htmlFor="firstname">Fisrtname</label>
                            <input type="text" name="firstname" id="firstname" className="mt-1 h-10 w-full rounded border bg-gray-50 px-4" value={firstname} onChange={handleFirstnameChange} placeholder="" />
                        </div>

                        <div className="md:col-span-3">
                            <label htmlFor="lastname">Lastname</label>
                            <input type="text" name="lastname" id="lastname" className="mt-1 h-10 w-full rounded border bg-gray-50 px-4" value={lastname} onChange={handleLastnameChange} placeholder="" />
                        </div>

                        <div className="md:col-span-6">
                            <label htmlFor="email">Email Address</label>
                            <input type="text" name="email" id="email" className="mt-1 h-10 w-full rounded border bg-gray-50 px-4" value={email} onChange={handleEmailChange} placeholder="email@domain.com" />
                        </div>
                        <div className="md:col-span-6">
                            <label htmlFor="email">Password</label>
                            <input type="password" name="password" id="password" className="mt-1 h-10 w-full rounded border bg-gray-50 px-4" value={password} onChange={handlePasswordChange} placeholder="xxxxxxxx" />
                        </div>

                        <div className="md:col-span-6">
                            <label htmlFor="email">Phone</label>
                            <input type="text" name="phone" id="phone" className="mt-1 h-10 w-full rounded border bg-gray-50 px-4" value={phone} onChange={handlePhoneChange} placeholder="email@domain.com" />
                        </div>

                        <div className="md:col-span-3">
                            <label htmlFor="address">Address / Street</label>
                            <input type="text" name="address" id="address" className="mt-1 h-10 w-full rounded border bg-gray-50 px-4" value={address} onChange={handleAddressChange} placeholder="" />
                        </div>

                        <div className="md:col-span-3">
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" id="city" className="mt-1 h-10 w-full rounded border bg-gray-50 px-4" value={city} onChange={handleCityChange} placeholder="" />
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="state">province</label>
                            <div className="mt-1 flex h-10 items-center rounded border border-gray-200 bg-gray-50">
                            <input name="province" id="state" placeholder="State" className="w-full appearance-none bg-transparent px-4 text-gray-800 outline-none" value={province} onChange={handleProvinceChange} />
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="postal_code">Zipcode</label>
                            <input type="postal_code" name="postal_code" id="zipcode" className="mt-1 flex h-10 w-full items-center rounded border bg-gray-50 px-4 transition-all" placeholder="" value={postalCode} onChange={handlePostalCode} />
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="country">Country Code</label>
                            <div className="mt-1 flex h-10 items-center rounded border border-gray-200 bg-gray-50">
                                <input name="country_code" id="country" placeholder="Country" className="w-full appearance-none bg-transparent px-4 text-gray-800 outline-none" value={countryCode} onChange={handleCountryCodeChange} />
                            </div>
                        </div>

                        <div className="text-right md:col-span-6">
                            <div className="inline-flex items-end">
                            <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
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
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp