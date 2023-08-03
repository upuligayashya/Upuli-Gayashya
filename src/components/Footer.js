import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg sm:text-base'>
        <Layout className='py-8 flex items-center justify-between dark:text-light lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div>
                <Link href="https://fusedsite.web.app/" 
                className='underline underline-offset-2'>UpuliGayashya</Link>
            </div>
            <div className='flex items-center lg:py-2'>
            <Link href="https://fusedsite.web.app/" target={"_blank"}>Say Hello</Link> <span className='text-primary text-2xl px-1 dark:text-primaryDark'>&#9825;</span>
            </div>
            
        </Layout>
    </footer>
  )
}

export default Footer