import { useState, useEffect, forwardRef, useImperativeHandle } from 'react'

const Message = forwardRef(({ type, text }, ref) => {
    const [action, setAction] = useState(false)
    const [messageType, setMessageType] = useState(type || 'success')
    const [message, setMessage] = useState(text || 'Your action was completed successfully.')
    const [messageColor, setMessageColor] = useState('bg-green-100 border-green-400 text-green-700')

    useImperativeHandle(ref, () => ({
        show: () => {
            setAction(true)
        }
    }))

    useEffect(() => {
        if (type && text) {
            setMessageType(type)
            setMessage(text)
        }
    }, [type, text])

    useEffect(() => {
        if (messageType === 'error') {
            setMessageColor('bg-red-100 border-red-400 text-red-700')
        } else if (messageType === 'warning') {
            setMessageColor('bg-yellow-100 border-yellow-400 text-yellow-700')
        } else if (messageType === 'info') {
            setMessageColor('bg-blue-100 border-blue-400 text-blue-700')
        } else {
            setMessageColor('bg-green-100 border-green-400 text-green-700')
        }
    }, [messageType])
    
    if (!action) return null

    return (
        <>
        <div className={`${messageColor} border px-4 py-3 rounded relative`} role="alert">
            <strong className="font-bold">{messageType.charAt(0).toUpperCase() + messageType.slice(1)}! </strong>
            <span className="block sm:inline">{message}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <button className="cursor-pointer" onClick={() => setAction(false)}>
                <svg className="fill-current h-6 w-6" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Close</title>
                    <path d="M14.348 5.652a1 1 0 10-1.414-1.414L10 7.172 7.066 4.238a1 1 0 10-1.414 1.414L8.586 8.586l-2.934 2.934a1 1 0 101.414 1.414L10 9.828l2.934 2.934a1 1 0 001.414-1.414L11.414 8.586l2.934-2.934z"/>
                </svg>
                </button>
            </span>
        </div>
        </>
    )
})



export default Message