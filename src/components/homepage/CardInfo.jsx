import React from "react";
import { MdWifiCalling3 } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const CardInfo = () => {
  return (
    <div className="font-sans flex flex-col justify-start items-start gap-10 h-[700px] w-[50%] rounded-md bg-primary p-14 text-white">
      {/* title */}
      <div className="flex flex-col gap-5">
        <p className="text-2xl">Contact Information</p>
        <p>Say something to start a live chat!</p>
      </div>
      {/* info */}
      <div className="flex justify-center items-center gap-4">
        <MdWifiCalling3 className="w-7 h-7" />
        <p>+855 95 990 910</p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <IoIosMail className="w-7 h-7" />
        <p>support@showcase.com</p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <FaLocationDot className="w-7 h-7" />
        <p>St 562, Phnom Penh 12151</p>
      </div>
    </div>
  );
};

export default CardInfo;
