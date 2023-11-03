import ReCAPTCHA from "react-google-recaptcha";
import { useForm, ValidationError } from '@formspree/react';
import Modal from './Modal';
const Contacts = () => {
  const [state, handleSubmit] = useForm("mwkdzvdb");
  // if (state.succeeded) {
  //   return <p className="bg-black p-6 md:p-12 flex flex-col gap-12 md:gap-16 justify-center items-center"
  //   id="contact">Thanks for joining!</p>;
  // }
  return (
    <div
      className="bg-black p-8 md:p-12 flex flex-col gap-12 md:gap-16 justify-center items-center"
      id="contact"
    >
      {state.succeeded ?
        <Modal />
        :
        <>
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
              <input id="name" type="text" name="name" className="p-8 w-full" placeholder='Enter your name' />
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
              <input id="email" type="email" name="email" className="p-8 w-full" placeholder='Enter your email' />
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
                name="message" className="p-8 w-full" placeholder='Enter your message here' />
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
            {/* <div className="g-recaptcha bg-white" data-sitekey="6LcnBu4oAAAAAJT2zNV3pVHXKIlL6haBuBE1h0sm">Hi Load Recaptcha</div> */}
            <button
              className="bg-[rgb(136,206,2)] rounded-md text-3xl font-bold"
              type="submit" disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </>
      }
    </div>
  );
};

export default Contacts;
