import Layout from '@/components/Layout'
import { blogPosts } from '@/lib/data'
import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import motion from 'framer-motion'


export default function BlogPage ({title,date,author,intro_title,intro_desc,con_p1t1,con_p1d1,con_p2t2,con_p2d2,con_p3t3,con_p3d3,con_p4t4,con_p4d4,conc_title,conc_desc,img}){
  return (
    <div>
        <Head>
            <title>Blog | {title}</title>
            <meta name='description' content='any description'/>
        </Head>

        <main>
          <Layout>

              <Link href="/articles"
                   className='flex w-[12rem] xs:w-full  justify-center items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base my-6'  >
                    Back
              </Link>


              <AnimatedText text={title} className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-3xl mt-16 xs:mt-4'/>
              {/* <h1 className='text-8xl'>{title}</h1> */} 

              <div className='px-48 xs:px-0'>
                <p className='text-dark/75 font-bold text-xl dark:text-light/75 xs:text-xl'>Date: {date}</p>
                <p className='text-primary dark:text-primaryDark font-semibold sm:self-start sm:pl-0 xs:text-sm  mb-3'><span className='font-medium italic text-dark/75 dark:text-light/75'>from</span> {author}</p>

              
                <p className='text-2xl italic text-dark/75 dark:text-light/60 xs:text-xl'>{intro_title}</p>
                <p className='text-xl italic  text-dark/75 dark:text-light/60 mb-10 xs:text-sm'>{intro_desc}</p>

                {/* <Image src={img}  width={1000} height={600}/> */}

                <p className='text-2xl font-bold text-dark dark:text-light xs:text-xl'>{con_p1t1}</p>
                <p className='text-xl mb-6 dark:text-light xs:text-sm'>{con_p1d1}</p>

                <p className='text-2xl font-bold text-dark dark:text-light xs:text-xl'>{con_p2t2}</p>
                <p className='text-xl mb-6 dark:text-light xs:text-sm'>{con_p2d2}</p>

                <p className='text-2xl font-bold text-dark dark:text-light xs:text-xl'>{con_p3t3}</p>
                <p className='text-xl mb-6 dark:text-light xs:text-sm'>{con_p3d3}</p>

                <p className='text-2xl font-bold text-dark dark:text-light xs:text-xl'>{con_p4t4}</p>
                <p className='text-xl mb-10 dark:text-light xs:text-sm'>{con_p4d4}</p>

                <p className='text-2xl italic text-dark/75 dark:text-light/60 xs:text-xl'>{conc_title}</p>
                <p className='text-xl italic  text-dark/75 dark:text-light/60 mb-10 xs:text-sm'>{conc_desc}</p>

            

              </div>
              
             
              
          </Layout>

        </main>
        
    
    </div>
  )
}




export async function getStaticProps(context){
  const {params} = context;
  return{
    props:blogPosts.find((item) => item.slug === params.slug),
  };
}


export async function getStaticPaths(){
  return{
    paths:blogPosts.map((item)=> ({
      params:{
        slug: item.slug,
      },
    })),
    fallback:false,
  };
}