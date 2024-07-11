import React from "react";
import CardInfo from "./CardInfo";
import FormContact from "./FormContact";

function ContactSection() {
  return (
    <section
      className="dark:bg-gray-900 py-10 px-20 flex flex-col justify-center items-center font-sans section"
      name="contact"
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-4xl text-primary font-semibold">Contact Us</h2>
        <p className="text-lg dark:text-gray-100">
          Any question or remarks? Just write us a message!
        </p>
        <div className="w-44 rounded-md h-1 bg-primary"></div>
      </div>
      <div className="flex  mt-10 p-5 rounded-md w-[70%] gap-10 border border-gray-300 ">
        {/* card info */}
        <CardInfo />
        {/* form send message */}
        <FormContact />
        
      </div>
    </section>
  );
}

export default ContactSection;
