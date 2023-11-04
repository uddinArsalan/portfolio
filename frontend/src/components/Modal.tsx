interface propTypes {
    closeModal : () => void
}

const Modal = ({ closeModal } : propTypes ) => {
    return (
        <dialog open className="grid grid-rows-2 place-items-center p-10 bg-gray-800 rounded-md z-20 w-1/2">
            <p className="text-white text-xl font-semibold">Thanks for joining</p>
            <form method="dialog">
                <button className="bg-[rgb(136,206,2)] rounded-md text-lg font-bold p-2 text-white" onClick={closeModal}>OK</button>
            </form>
        </dialog>
    )
}

export default Modal