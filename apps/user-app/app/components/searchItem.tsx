"use client"

import { Button } from "@repo/ui/button";

interface SearchItemProps {
    payId : string;
    name: string;
    email : string;
    phone: string;
    onClick: () => void;
}

export const SearchItem = ( props : SearchItemProps ) => {
    return (
        <div className="flex justify-between w-full bg-white rounded-lg p-5 m-3">
            <div className="flex flex-col justify-center items-start ">

            <span className="text-3xl font-bold ">
                {props.name}
            </span >
            
            <span className="text-sm  ml-3 mb-3">
                {props.email}
            </span>
            <span className="text-lg font-semibold  ml-3">
                Pay ID : {props.payId}
            </span>
            <span className="text-lg text-gray-500 ml-3">
                {props.phone}
            </span>
            
            </div>
            <div className="flex justify-center items-center flex-col mr-3">

            <Button onClick={props.onClick} >
                Send
            </Button>
            </div>
        </div>
    )
}