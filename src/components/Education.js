import React, { useRef } from 'react'
import {motion, useScroll} from 'framer-motion'
import Lilcon from './Lilcon';

const Details = ({degree,institue,institueLink,time,edWork, courses}) =>{
    const ref = useRef(null)

    return( <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex-col items-center justify-between md:w-[80%]'>
        
        <Lilcon reference={ref}/>
        <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{degree}&nbsp;<a href={institueLink}
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize'
            >@{institue}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} 
            </span>
            <p className='font-medium w-full md:text-sm'>
                {edWork}
            </p>
            <ul>
                <li><p>{courses}</p></li>
            </ul>
        </motion.div>
    </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end", "center start"]
        }
    )


  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full '>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'/>


            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details
                    degree="BICT (Hons) SOFTWARE ENGINEERING (U.g)"
                    institue="IBA Campus | AeUniversity."
                    institueLink="https://iba.lk/new/index.php"
                    time= "2021-Present"
                    edWork=" Year 3"
                />

                <Details
                    degree="GCP Psychology - Certificate Course"
                    institue="Lanka Institute of Phychologies (LIPs)"
                    institueLink="https://www.facebook.com/people/LANKA-Institute-of-Psychologies-Pvt-Ltd/100069297240681/"
                    time= "2022"
                    edWork=""
                />

                <Details
                    degree="NVQ level 4 - Information Communication and Technology Technician"
                    institue="National Apprentice and Industrial Training Authority
                    of Sri Lanka (NAITA)"
                    institueLink="https://naita.gov.lk/"
                    time= "2019"
                    edWork="Information Communication and Technology"
                />

                <Details
                    degree="Graphic Designing - Certificate Course"
                    institue="Open University of Sri lanka"
                    institueLink="https://ou.ac.lk/"
                    time= "2019"
                    edWork="Includes: Adobe Photoshop, CoralDraw, Adobe InDesign, Adobe Illustrator"
                />

                <Details
                    degree="General Certificate Examination (G.C.E) - Advanced Level"
                    institue="Swarnapali Girl’s College - Anuradhapura"
                    institueLink="https://swarnapalibalika.lk/"
                    time= "2018"
                    edWork="In Biology Stream"
                />

                <Details
                    degree="Cambridge Assessment English"
                    institue="British Council - Sri Lanka"
                    institueLink="https://www.britishcouncil.lk/"
                    time= "2016"
                    edWork=""
                />

                {/* <Details
                    degree="Online Coursework"
                    institueLink="https://sack.lk"
                    edWork="Online courses related to my stream"
                    courses="Machine Learning Basics" 
                /> */}

                
            </ul>
        </div>

    </div>


  )
}

export default Education