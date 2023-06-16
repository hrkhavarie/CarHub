'use client'
import { manufacturers } from '@/constants'
import { SearchManufacturerProps } from '@/types'
import { Combobox , Transition } from '@headlessui/react'
import Image from 'next/image'
import { useState , Fragment} from 'react'


const SearchManufacturer = ({manufacturer , setManufacturer}:SearchManufacturerProps) => {
  const [query, setQuery] = useState('')
  const filteredManufacturers =
   query === "" 
   ? manufacturers
   :  manufacturers.filter((item)=>(
    item
    .toLowerCase()
    //.replace(/\s+/g , "")
    .includes(query.toLowerCase()
    //.replace(/\s+/g, "")
    )))
  return (
    <div className="search-manufacturer">
      <Combobox 
      value={manufacturer} 
      onChange = {setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={24}
              className='ml-4'
              alt='Car logo'
            />
          </Combobox.Button>
          <Combobox.Input className="search-manufacturer__input"
            placeholder='Volkeswagen'
            displayValue={(manufacturer:string)=>manufacturer}
            onChange={(e)=>setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave= 'transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={()=>setQuery('')}
          >
              <Combobox.Options>
                  {
                    filteredManufacturers.map((item)=>(
                      <Combobox.Option
                        key={item}
                        className={({active})=>
                      `${active ? `bg-primary-blue text-white` : `text-gray-900`}`
                      }
                      value={item} 
                      >
                       {({selected , active})=>(
                        <>
                         <span
                          className={`ml-10 pt-2 pb-2 block truncate ${
                            selected ? ' font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {/* {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        
                       ): null} */}
                       </>
                       )}

                      </Combobox.Option>
                    ))
                  }
              </Combobox.Options>
          </Transition>
          
       
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer