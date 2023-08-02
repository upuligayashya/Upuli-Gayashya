import React from 'react'
import { CircleText, CircularText } from './icons'
import {CircleTextNew} from './icons'
import {CircleT,TextCircle} from './icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-10 bottom-6 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-4 md:bottom-auto md:absolute sm:right-2 '>
        <div className='w-48 h-auto flex items-center justify-center relative md:w-24 '>
            <TextCircle className={"fill-dark dark:fill-light animate-spin-slow"}/>
            {/* <CircularText className={"fill-dark dark:fill-light animate-spin-slow"}/> */}
            {/* <CircleTextNew className={"fill-dark dark:fill-light animate-spin-slow"}/> */}
            {/* <CircleText className={"fill-dark dark:fill-light animate-spin-slow"}/> */}

            {/* <Link href="mailto:abcd@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light text-light dark:text-dark shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light transition-all md:w-12 md:h-12 md:text-[10px]'>
                Hire Me
            </Link> */}
        </div>
    </div>
  )
}

export default HireMe