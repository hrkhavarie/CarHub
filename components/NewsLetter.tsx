'use client'
import React from 'react'
import CustomButton from './CustomButton'



const NewsLetter = () => {

const handleClick = () => {}

  return (
    <>
    <div className='news-letter-container bg-slate-50 flex justify-center flex-col items-center'>
        <h2 className='font-bold text-2xl py-5'>News Letter</h2>
        <p className='py-5 font-normal text-xl'>Subscribe the newsletter to get updated to news and promotions</p>
        <form >
            <input type="email" placeholder='enter your email' />
            <CustomButton
                title='submit'
                />

        </form>
    </div>
                </>
  )
}

export default NewsLetter