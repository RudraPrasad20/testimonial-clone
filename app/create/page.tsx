
"use client"
import CreateForm from '@/components/create-form'
import ShowCard from '@/components/show-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

 const Createpage = () => {
  return (
    <div>
        <div className=' flex justify-between mx-36 bg-slate-500 px-7 gap-8'>
           <ShowCard/> 
           <CreateForm/>
          
        </div>
    </div>
  )
}

export default Createpage