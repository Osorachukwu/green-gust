'use client'
import React from "react";
import { useForm, ValidationError } from '@formspree/react';

export default function NewsLetter() {
    const [state, handleSubmit] = useForm("mdkngwgw");
    if (state.succeeded) {
        return <p className="text-green-500 text-xl font-semibold">Thanks for joining!</p>;
    };

  return (
    <div>
     
      <form onSubmit={handleSubmit} action="">
        <div className="h-12 w-full flex justify-between bg-white p-1 rounded-md">
          <input
            type="email"
            placeholder="Your Email"
            name="your_email"
            maxLength={50}
            className="h-full w-full outline-green-500 pl-2 bg-white flex-auto text-black"
          />
          <button>
            <div className="bg-green-500 rounded-md h-full px-1 flex justify-center items-center">
              <p>SignUp</p>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}
