'use client'
import { CustomButtonProps } from "@/types"
import Image from "next/image"


const CustomButton = ({btnType ,  title , cantainerStyles , handleClick }: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className = {`custom-btn ${cantainerStyles}`}
        onClick={()=>{}}
    >
        <span className= {`flex-1`}> 
            {title}
        </span>

    </button>
)
}

export default CustomButton