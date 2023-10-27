const Contacts = () => {
  return (
    <div className="bg-black p-12 flex flex-col gap-16 justify-center items-center" id="contact">
      <div className="text-[rgb(136,206,2)] text-5xl font-bold">Contact Us</div>
      <form action="" className="grid grid-rows-4 gap-12 w-full">
        <div className="">
          <label htmlFor="" className="text-[rgb(136,206,2)] text-4xl font-bold">Name</label>
          <input type="text" className="p-8 w-full"/>
        </div>
        <div>
          <label htmlFor="" className="text-[rgb(136,206,2)] text-4xl font-bold">Email</label>
          <input type="text" className="p-8 w-full"/>
        </div>
        <div>
          <label htmlFor="" className="text-[rgb(136,206,2)] text-4xl font-bold">Project Idea</label>
          <input type="text" className="p-8 w-full"/>
        </div>
        <button className="bg-[rgb(136,206,2)] rounded-md text-3xl font-bold">Submit</button>
      </form>
    </div>
  )
}

export default Contacts