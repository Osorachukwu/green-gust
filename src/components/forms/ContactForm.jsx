"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("meojgrob");
  if (state.succeeded) {
    return <p className="text-green-500 text-xl font-semibold">Thanks for reaching out! We&apos;ll get back to you shortly.</p>;
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <div className="grid grid-cols-2 gap-5 mb-4">
          <input
            type="text"
            placeholder="Your Name"
            name="your_name"
            maxLength={30}
            className="rounded-md h-14 outline-green-500 px-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="your_email"
            maxLength={50}
            className="rounded-md h-14 outline-green-500 px-4"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <input
            type="tel"
            placeholder="Your Mobile"
            name="phone_number"
            maxLength={15}
            className="rounded-md h-14 outline-green-500 px-4"
          />
          {/* <input
                type="text"
                placeholder="Your Select A Service"
                className="rounded-md h-14 outline-green-500 px-4"
              /> */}
        </div>

        <textarea
          rows={3}
          className="rounded-md h-14 outline-green-500 px-4"
          placeholder="Special Text..."
          name="message"
          maxLength={1000}
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="my-5">
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-green-500 text-white rounded-full inline-block py-4 px-10"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default ContactForm;
