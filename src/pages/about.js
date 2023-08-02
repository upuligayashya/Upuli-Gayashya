import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePicBawa from "../../public/images/profile/photo-ug.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration:3000});
    const isInView = useInView(ref, {once:true});

    useEffect(()=>{
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(()=>{
        springValue.on("change", (latest) =>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    },[springValue,value])



    return <span ref={ref}></span>
}



const about = () =>{
  return (
    <>
        <Head>
            <title>Bawanga Senevirathne | About Page</title>
            <meta name='description' content='any description'/>
        </Head>
        <TransitionEffect/>

        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose! " className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light'>Biography</h2>
                        <p className='font-medium'>👋 Howdy! I&apos;m Bawanga Senevirathne, a software engineering undergrad with a passion for software development, quality assurance, and an obsession with all things machine learning (yes, I dream about algorithms). 🤖 Solving problems and thinking logically are my superpowers – call me the Code Crusader!</p>
                        <p className='my-4 font-medium'>💻 Crafting clean code is my secret sauce, and I&apos;m on a mission to squash bugs like a ninja. 🐞 Quality is my middle name – no software leaves my hands without a seal of approval</p>
                        <p className='my-4 font-medium'>When I&apos;m not nerding out with code, you can catch me exploring the outdoors or traveling through sci-fi novels 🚀📚 – gotta keep the imagination sharp!
</p>
                        <p className='my-4 font-medium'>Ready to join forces on some tech wizardry? Let&apos;s connect and cook up some groundbreaking projects together. Shoot me a message at [ Bawasen12@gmail.com ], and let&apos;s geek out! 😎🚀
                        </p>



                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light  '/>
                        {/* <Image src={profilePic} alt="BawaSen" className='w-full h-auto rounded-2xl'
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"/> */}
                        <Image src={profilePicBawa} alt="BawaSen" className='w-full h-auto rounded-2xl'
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"/>
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={5}/> +
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Clients</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:text-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={5}/> +
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:text-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={1}/> +
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of Experience</h2>
                        </div>
                    </div>

                </div>


                <Skills/>
                <Experience/>
                <Education/>

            </Layout>
        </main>
    </>
  )
}

export default about