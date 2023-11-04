interface propTypes {
    closeModal : () => void
}

const Modal = ({ closeModal } : propTypes ) => {
    return (
        <dialog open className="grid grid-rows-2 place-items-center p-8 bg-gray-800 rounded-md z-20 md:w-2/5 w-1/2 gap-6">
            <p className="text-white text-xl font-semibold">Thanks for Contacting Us 🎉</p>
            <form method="dialog">
                <button className="bg-[rgb(136,206,2)] rounded-lg text-lg font-bold pt-2 pb-2 pl-4 pr-4 text-white" onClick={closeModal}>OK</button>
            </form>
        </dialog>
    )
}

export default Modal