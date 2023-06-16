'use client'
import { CarProps } from "@/types"
import Image from "next/image"

import { useState } from "react" 
import CustomButton from "./CustomButton"
import { calculateCarRent } from "@/utils"


interface CarCardProps {
    car : CarProps;
}


const CarCard = ({car}:CarCardProps) => {
    const {city_mpg , year , make , model , transmission , drive } = car ; 
    const carRent =  calculateCarRent(city_mpg , year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="slef-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="slef-end text-[14px] font-medium">/day</span>

      </p>
    </div>
   
  )
}

export default CarCard