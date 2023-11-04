import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import Modal from './Modal';
const Contacts = () => {
  const [state, handleSubmit] = useForm("mwkdzvdb");
  // if (state.succeeded) {
  //   return <p className="bg-black p-6 md:p-12 flex flex-col gap-12 md:gap-16 justify-center items-center"
  //   id="contact">Thanks for joining!</p>;
  // }
  //flex-col gap-8 md:gap-16 p-8 md:p-12
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    if(state.succeeded) setOpen(true)
  },[state.succeeded])

  const closeModal = () => {
    setOpen(prev => !prev)
  }
  return (
    <>
        <div className={open ? 'relative top-60' : 'hidden'}>
          <Modal closeModal={closeModal} />
        </div>
      <div
        className={`${(open) ? 'bg-gray-900 bg-opacity-50 blur-sm' : ''} ${"flex justify-center items-center md:gap-16 flex-col gap-8 bg-black p-8 md:p-12"} `}
        id="contact"
      >
        <div className="text-[rgb(136,206,2)] text-5xl font-bold">Contact Us</div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-rows-5 gap-8 md:gap-12 w-full"
        >
          <div className="">
            <label
              htmlFor="name"
              className="text-[rgb(136,206,2)] text-4xl font-bold"
            >
              Name
            </label>
            <input id="name" type="text" name="name" className="p-8 w-full" placeholder='Enter your name' disabled={open}/>
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-[rgb(136,206,2)] text-4xl font-bold"
            >
              Email
            </label>
            <input id="email" type="email" name="email" className="p-8 w-full" placeholder='Enter your email' disabled={open}/>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-[rgb(136,206,2)] text-4xl font-bold"
            >
              Project Idea
            </label>
            <textarea id="message"
              name="message" className="p-8 w-full" placeholder='Enter your message here' disabled={open}/>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <ReCAPTCHA
            sitekey="6LcnBu4oAAAAAJT2zNV3pVHXKIlL6haBuBE1h0sm"
            className="items-start"
          />
          {/* <div className="g-recaptcha bg-white" data-sitekey="6LcnBu4oAAAAAJT2zNV3pVHXKIlL6haBuBE1h0sm">Hi Load Recaptcha</div>  */}
          <button
            className="bg-[rgb(136,206,2)] rounded-md text-3xl font-bold submit-form"
            type="submit" disabled={state.submitting || open}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contacts;
