import Header from "./layout/Header"

function About() {
    return (
        <>
        <Header/>
        <div className="">
            <h1>About</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 grid-flow-row-dense">
                <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px]"></div>
                <div className="bg-green-500 rounded-lg shadow-xl min-h-[50px] col-span-3"></div>
                <div className="bg-blue-500 rounded-lg shadow-xl min-h-[50px]"></div>
                <div className="bg-yellow-500 rounded-lg shadow-xl min-h-[50px]"></div>
                <div className="bg-orange-500 rounded-lg shadow-xl min-h-[50px] row-span-2 col-span-2"></div>
                <div className="bg-pink-500 rounded-lg shadow-xl min-h-[50px]"></div>
                <div className="bg-violet-500 rounded-lg shadow-xl min-h-[50px]"></div>
                <div className="bg-teal-500 rounded-lg shadow-xl min-h-[50px]"></div>
                <div className="bg-purple-500 rounded-lg shadow-xl min-h-[50px]"></div>
                <div className="bg-indigo-500 rounded-lg shadow-xl min-h-[50px]"></div>
                <div className="bg-slate-500 rounded-lg shadow-xl min-h-[50px]"></div>
            </div>

            <div className="mt-10 grid grid-cols-6">
                <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px] col-span-3"></div>
                <div className="bg-green-500 rounded-lg shadow-xl min-h-[50px]"></div>
                <div className="bg-blue-500 rounded-lg shadow-xl min-h-[50px]"></div>
                <div className="bg-yellow-500 rounded-lg shadow-xl min-h-[50px]"></div>
                <div className="bg-orange-500 rounded-lg shadow-xl min-h-[50px]"></div>
                <div className="bg-pink-500 rounded-lg shadow-xl min-h-[50px]"></div>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-6">
                    <div className="col-span-3">
                        <form action="">
                            <div className="">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" className="shadow-xl border-2 border-slate-100 w-full min-h-[40px] rounded-lg" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default About