import AdminHeader from '../layout/AdminHeader'

function Dashboard() {
    return (
        <>
            <AdminHeader />
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl text-center lg:max-w-4xl lg:text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dashboard</h2>
                </div>
            </div>
        </>
    )
}

export default Dashboard