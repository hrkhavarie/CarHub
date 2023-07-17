'use client'
import React , {useState} from 'react'
import {Dialog , Transition} from '@headlessui/react'

export interface CustomModalProps {
    isOpen: boolean ,
    closeModal: ()=>void
}


const CustomModal = ({isOpen , closeModal}: CustomModalProps) => {
  return (
    <Dialog open={isOpen} onClose={closeModal} >
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        {/* <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button> */}
      </Dialog.Panel>
    </Dialog>
  )
}

export default CustomModal