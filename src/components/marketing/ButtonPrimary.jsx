import { Button } from "flowbite-react";
import { FaAngleRight } from "react-icons/fa";

export default function PrimaryButton ({text}){
    return(
        <>
        <Button className="bg-button-hover text-white hover:bg-gray-200 hover:text-button-hover">{text}</Button>
        </>
    );
};

export function AngelButton ({text}){
    return(
        <div className="flex flex-row gap-0  text-white border border-white rounded-xl w-36 hover:bg-button-hover hover:text-white hover:border-button-hover">
        <Button>{text}</Button>
        <span><FaAngleRight className="text-marketing-main-color bg-white mt-4 text-[12px] rounded-3xl"/></span>
        </div>
    );
};

export function SecondButton({text}){
    return(
        <div className="flex flex-row gap-0  text-white border bg-marketing-main-color border-marketing-main-color rounded-xl w-36 hover:bg-button-hover hover:text-white hover:border-button-hover">
        <Button>{text}</Button>
        <span><FaAngleRight className="text-marketing-main-color bg-white mt-4 text-[12px] rounded-3xl"/></span>
        </div>
    );
}