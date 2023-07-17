import { MouseEventHandler } from "react"

export interface CustomButtonProps{
    title: string
    containerStyles?: string
    handleClick? : 
    MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit" ; 
    textStyles?: string ; 
    rightIcon? : string ;
    isDisabled? : boolean;

}

export interface CustomFilterProps{
    title: string
}

export interface SearchManufacturerProps{
    manufacturer: string , 
    setManufacturer: (manufacturer : string) => void;
}

export interface CarProps {
city_mpg?:number | undefined,
class?:string | undefined,
combination_mpg?:number  | undefined,
cylinders?:number | undefined,
displacement?:number | undefined,
drive?:string | undefined,
fuel_type?:string | undefined,
highway_mpg?:number | undefined,
make?:string | undefined,
model?:string | undefined,
transmission?:string | undefined , 
year?:number | undefined ,


}

export interface SearchbutonProps {
    otherClasses?: string , 
}