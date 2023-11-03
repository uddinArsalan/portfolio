const Modal = () => {
    return (
        <div className="">
            <dialog open className="flex flex-col justify-around items-center p-10 bg-gray-800">
                <p className="text-white text-2xl font-bold">Thanks for joining</p>
                <form method="dialog">
                    <button className="bg-[rgb(136,206,2)] rounded-md text-xl font-bold p-2 text-white">OK</button>
                </form>
            </dialog>
        </div>
    )
}

export default Modal