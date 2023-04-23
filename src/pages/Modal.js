import React  from "react";


let Modal = ({image, dateRelease, overview, vote_average}) => {
    let [showModal, setShowModal] = React.useState(false)

    return (
        <>
            <button type="button" 
            className="text-white items-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={() => setShowModal(true)}
            >View More
            </button>

            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur">
                        <div className="relative w-auto my-6 mx-auto max-w-sm ">
                            {/* content */}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-1 border-b border-solid border-slate-200 rounded-t">

                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>

                                </div>
                                {/*body*/}
                                <div className=" justify-center relative p-6 flex-auto">
                                    <img className="flex  ..." src = {image} alt=""/>
                                    <h4 className="font-bold text-2xl">IMDb: {vote_average}</h4>
                                    <h5 className=" flex text-2xl font-semibold">Release date: {dateRelease}</h5>
                                    <br></br>
                                    <h6 className="font-bold text-lg leading-relaxed">Overview</h6>
                                    <p className="text-slate-500 text-lg leading-relaxed">{overview}</p>

                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            ) : null}
            
        </>)
}


export default Modal;