import Header from '../layout/Header'
import { useState, useRef } from 'react'
import Message from '../../tools/Message'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [messageType, setMessageType] = useState('success')
    const [message, setMessage] = useState('')
    const messageRef = useRef()
    const navigate = useNavigate()

    const formData = new URLSearchParams()
    formData.append('username', username)
    formData.append('password', password)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (username === '' || password === '') {
            setMessageType('error')
            setMessage('Username and password are required')
            messageRef.current.show()
            return
        }
        fetch('http://127.0.0.1:8000/login', {
            method: 'POST',
            body: formData.toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(async (res) => {
            const data = await res.json();
            return { res, data };
        })
        .then(({ res, data }) => {
            if (res.status == 200) {
                setUsername('')
                setPassword('')
                setMessageType('success')
                setMessage('Login successful!')
                localStorage.setItem('token', data.token)
                navigate('/dashboard')
            } else {
                setMessageType('error')
                setMessage('Invalid credentials!')
            }
            messageRef.current.show()
        })
        .catch(err => console.log(err))
    }

  return (
    <>
    <div className="bg-white">
    <Header />

    <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
        </div>
        <div className="mx-auto w-full max-w-md py-32 sm:py-48 lg:py-56">
            <div className="sm:mb-8 sm:flex sm:justify-center grid grid-cols-6 gap-4">
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className='col-span-6'>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                            <div className="mt-2">
                                <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-6 mt-10'>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="mt-2">
                                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <button type="submit" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">Login</button>
                    </div>
                </form>
            </div>
            <Message ref={messageRef} type={messageType} text={message} />
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Login