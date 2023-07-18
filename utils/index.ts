// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '0f5a6f8f6fmshc66ab7eebb14fdep1ca331jsncc146b193cfa',
// 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

import { CarProps, CustomFilterProps, FilterProps } from "@/types";



 export async function fetchCars(filters:FilterProps){
    
   const {manufacturer , year , model , fuel, limit} = filters;
   const headers = {
       
         'X-RapidAPI-Key': 'acefbeb391mshd5023aafcfc6363p1bb226jsncd56728bc273',
	     	'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        
    }

    const response =await fetch( `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}` , {
        headers: headers , 
    }) ;
    const result = await response.json();
    
    return result;
 }

 export const calculateCarRent = (city_mpg: number , year: number) => {
    const basePricePerDay = 50;

    const mileageFactor = 0.1 ; 

    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor ; 

    const ageRate = (new Date().getFullYear()- year) * ageFactor ; 

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate ; 

    return rentalRatePerDay.toFixed(0);

 }

 export const generateCarImageUrl = (car:CarProps  , angle?: string) => {
   const url = new URL('https://cdn.imagin.studio/getimage');

   const {make , model , year} = car;

   url.searchParams.append('customer' , 'hrjavascript-mastery');
   url.searchParams.append('make' , make);
   url.searchParams.append('modelFamily' , model.split(' ')[0]);
   url.searchParams.append('zoomType' , 'fullscreen');
   url.searchParams.append('modelYear' , `${year}`);
   url.searchParams.append('angle' , `${angle}`);

   return `${url}`

    

  

 }

 export const updateSearchParams = (type:string, value:string)=>{
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type , value);

 const  newPathName = `${window.location.pathname}?${searchParams.toString()}`; 
 return newPathName
 }