import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import Modal from './Modal';
const Contacts = () => {
  const [state, handleSubmit] = useForm("mwkdzvdb");
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (state.succeeded) setOpen(true);
  }, [state.succeeded]);

  const closeModal = () => setOpen(prev => !prev);

  return (
    <>
     <div className={open ? 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50' : 'hidden'}>
        <Modal closeModal={closeModal} />
      </div>
      <div
        className={`${open ? 'blur-sm' : ''} bg-gradient-to-b from-neutral-900 to-black py-16 px-4 sm:px-6 lg:px-8`}
        id="contact"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-600">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-emerald-400 text-sm font-bold mb-2">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full p-3 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder='Enter your name'
                required
                disabled={state.submitting || open}
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="email" className="block text-emerald-400 text-sm font-bold mb-2">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full p-3 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder='Enter your email'
                required
                disabled={state.submitting || open}
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="subject" className="block text-emerald-400 text-sm font-bold mb-2">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                className="w-full p-3 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder='Enter the subject'
                required
                disabled={state.submitting || open}
              />
              <ValidationError prefix="Subject" field="subject" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="message" className="block text-emerald-400 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 h-32"
                placeholder='Enter your message here'
                required
                disabled={state.submitting || open}
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_SITE_KEY}
              className="flex items-center m-0 h-fit"
            />
            <button
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md transition-colors duration-300"
              type="submit"
              disabled={state.submitting || open}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacts;