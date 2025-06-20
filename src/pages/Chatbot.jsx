import { useState, useRef, useEffect } from "react"
import Header from "./layout/Header"


function Chatbot() {
    const [histories, setHistories] = useState([])
    const [userInput, setUserInput] = useState('')
    const messagesEndRef = useRef(null);

    const HtmlContent = ({content}) => {
        return (
            <>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </>
        )
    }

    useEffect(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
      }
    }, [histories]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput === '') {
            return false;
        }
        // added data to histories
        const userData = {
            role: "user",
            content: userInput
        }
        setHistories(prev => [...prev, userData])
        setUserInput('')

        fetch("http://127.0.0.1:8000/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({text: userInput})
        })
        .then(res => res.json())
        .then(data => {
            const botInput = {
                role: "assistant",
                content: data.message
            }
            setHistories(prev => [...prev, botInput])
        })
        .catch((err) => console.log(err))
    }

    return (
        <>
        <Header/>
        <div className="mt-10">
            <h1>Chatbot</h1>
            <hr />
            <div className="grid grid-cols-5 mt-20">
                <div className="col-span-3 col-start-2 border-1 border-slate-200 shadow-xl rounded-lg bg-slate-200">
                    <h1 className="text-left p-2 font-bold text-[20px] text-indigo-700">Bank and Business Chatbot</h1>
                    <div className="w-full bg-white rounded-lg py-4 px-3">
                        <div className="overflow-auto h-[400px] py-2" ref={messagesEndRef}>
                            {/* bot message */}
                            {histories.map((item, index) => (
                                <div key={index} className={item.role == 'user' ? "text-right mb-2" : "text-left mb-2"}>
                                    <p className="font-bold text-[18px] mb-2">{item.role == 'user' ? 'You: ' : 'Chatbot: '}</p>
                                    <p className={`text-[16px] px-3 py-2 rounded-xl w-fit ${item.role == 'user' ? "float-right bg-indigo-500 text-white" : "float-left bg-slate-200"}`}>{ <HtmlContent content={item.content} /> }</p>
                                    <p className="clear-both"></p>
                                </div>
                            ))}
                            
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="w-full p-3 flex flex-row">
                                <input type="text" name="userInput" value={userInput} onChange={(e) => setUserInput(e.target.value)} className="w-full border-1 border rounded-lg  min-h-[40px] px-3 mr-1" autoComplete="off" />
                                <button className="bg-teal-500 text-white min-h-[40px] px-3 py-1 rounded-xl font-bold cursor-pointer">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Chatbot