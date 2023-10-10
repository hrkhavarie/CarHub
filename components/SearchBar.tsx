'use client'
import React, { useState , Fragment } from 'react'
import SearchManufacturer from './SearchManufacturer'
import { CustomButtonProps, SearchbutonProps } from '@/types'
import Image from 'next/image'
import { useRouter   } from 'next/navigation'

 
const SearchButton = ({otherClasses}:SearchbutonProps) => {
  return (
    <button type='submit' className={` -ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt='maginifying glass'
        width={40}
        height={40}
        className='object-contain' 
      />
    </button>

  )
}




const SearchBar = () => {
  
 

  const router = useRouter()
    const [manufacturer, setManufacturer] = useState('')

    const [model, setModel] = useState('');
    const handleSearch = (e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();

      if (manufacturer === ''  &&  model === '') {
          alert('Enter your Search Query')
    }
    updateSearchParams(
      model.toLowerCase() ,     
     manufacturer.toLowerCase()
     );
  }

  const updateSearchParams =(model: string , manufacturer: string )=>{
    const searchParams = new URLSearchParams(window.location.search)
    
    if (manufacturer){
      searchParams.set('manufacturer', manufacturer)
    }else
    searchParams.delete('manufacturer')

    if (model){
      searchParams.set('model', model)
    }else
    searchParams.delete('model')

    const newpathname = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newpathname , {scroll: false} );

  }


  return (
   <form className='searchbar' onSubmit={handleSearch}>
    <div className='searchbar__item'>
        <SearchManufacturer 
            manufacturer = {manufacturer}
            setManufacturer = {setManufacturer}/>

            <SearchButton  otherClasses=" sm-hidden" />
    </div>
    <div className="searchbar__item">
      <Image 
        src="/model-icon.png"
        width={25}
        height={25}
        alt='car model'
        className='absolute w-[20px] h-[20px] ml-4'
      />
      <input 
        type='text'
        name='model'
        value={model}
        onChange={(e)=> setModel(e.target.value)}
        placeholder='Tiguan'
        className='searchbar__input'

      />
        <SearchButton  otherClasses="sm-hidden" />
    </div>
   </form>
  )
}

export default SearchBar