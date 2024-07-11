import { TextField } from "@mui/material";
import React from "react";
import ButtonPrimary from "./ButtonPrimary";

const FormContact = () => {
  return (
    
    <form className="font-sans h-[700px]  w-[50%] flex flex-col justify-start gap-9 items-end">  
        
      <div className="flex justify-between w-full">
      <input type="text" className="boder border-t-0 border-l-0 border-r-0 focus:outline-0 focus:outline px-0 bg-transparent dark:text-gray-100 placeholder:text-gray-400 w-64" placeholder="Your name" />
      <input type="text" className="boder border-t-0 border-l-0 border-r-0 focus:outline-0 focus:outline px-0 bg-transparent dark:text-gray-100 placeholder:text-gray-400 w-64" placeholder="Email" />        
      </div>
      <input type="text" className="boder border-t-0 border-l-0 border-r-0 focus:outline-0 focus:outline px-0 bg-transparent dark:text-gray-100 placeholder:text-gray-400 w-full" placeholder="Message" />        
      <ButtonPrimary text="Send Message" />
    </form>
  );
};

export default FormContact;
