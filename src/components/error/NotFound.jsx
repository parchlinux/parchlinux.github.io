const NotFound = () => {
    return (
        <div className="max-w-[800px] flex justify-center items-center flex-col mx-auto p-3 min-h-screen">

            <div className="flex gap-4 items-center -mt-20">
                <h1 className="text-3xl sm:text-[40px] font-medium border-r border-zinc-700 p-4">404</h1>
                <p className="font-medium">This page could not be found.</p>
            </div>

        </div>
    )
}

export default NotFound