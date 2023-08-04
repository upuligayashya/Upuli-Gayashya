import React, { useRef } from 'react'
import {motion, useScroll} from 'framer-motion'
import Lilcon from './Lilcon';

const Details = ({position,company,companyLink,time,address,work}) =>{
    const ref = useRef(null)

    return( <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex-col items-center justify-between md:w-[80%]'>
        
        <Lilcon reference={ref}/>
        <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end", "center start"]
        }
    )


  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]'/>


            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details
                    position="DATA ENTRY OPERATOR"
                    company="Intelligent Image Management Inc. (IIMI) – Sri Lanka"
                    companyLink="https://www.iimdirect.com/"
                    time= "(2022 January - Present"
                    address="36 A Nawala Road, Nugegoda
                    SRI LANKA"
                    work="Working on a team responsible for quality oriented data logging and data quality checking before handling over."
                />

                <Details
                    position="Information Communication and Technology Technician"
                    company="Govt. Teaching Hospital - Anuradhapura"
                    companyLink=""
                    time= "2020 June – 2021 January"
                    address="Harischandra Mawatha, Anuradhapura, Sri Lanka"
                    work="Worked on a office with the responsibility of operating and maintaining computer systems and data processing."
                />

                <Details
                    position="ICT Technician"
                    company="City Resort - Anuradhapura"
                    companyLink="https://city-resort-anuradhapura.booked.net/"
                    time= "2020 April – 2020 October"
                    address="242, National Housing, New Town, Anuradhapura Town, Anuradhapura, Sri Lanka, Anuradhapura, North-Central 50000"
                    work="Worked on a privately ownes Resort with the responsibility of operating and maintaining computer systems of the resort and data processing of events and bookings."
                />

              
            </ul>
        </div>

    </div>


  )
}

export default Experience