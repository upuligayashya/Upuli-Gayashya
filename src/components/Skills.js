import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) =>{

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark  text-light  py-3 px-6 shadow-dark  cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
            whileHover={{scale:1.05} }
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y ,transition:{duration:1.5}}}
            transition={{duration:1.5}}
            viewport={{once:true}} //for one time animation when scroll
            >
                {name}
            </motion.div>
    )
}


const QASkill = ({name, x, y}) =>{

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-qadark  text-light  py-3 px-6 shadow-qadark  cursor-pointer absolute dark:text-qadark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-qadark xs:dark:text-light xs:font-bold'
            whileHover={{scale:1.05} }
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y ,transition:{duration:1.5}}}
            transition={{duration:1.5}}
            viewport={{once:true}} //for one time animation when scroll
            >
                {name}
            </motion.div>
    )
}


const MLSkill = ({name, x, y}) =>{

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-mldark  text-light  py-3 px-6 shadow-mldark  cursor-pointer absolute dark:text-mldark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-mldark xs:dark:text-light xs:font-bold'
            whileHover={{scale:1.05} }
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y ,transition:{duration:1.5}}}
            transition={{duration:1.5}}
            viewport={{once:true}} //for one time animation when scroll
            >
                {name}
            </motion.div>
    )
}






const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[70vw]
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>

            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-me text-dark p-8 shadow-dark   cursor-pointer dark:text-dark dark:bg-me lg:p-6 md:p-4 xs:text-xs xs:p-2'
            whileHover={{scale:1.05}}
            >
                ME
            </motion.div>

            <Skill name="HTML" x="-25vw" y="2vw"/>
            <Skill name="CSS" x="-5vw" y="-6vw"/>
            <Skill name="JAVASCRIPT" x="20vw" y="6vw"/>
            <Skill name="ReactJS" x="-0vw" y="12vw"/>
            <Skill name="NextJS" x="-20vw" y="-15vw"/>
            <Skill name="GatsbyJS" x="15vw" y="-12vw"/>
            <Skill name="Web Desgin" x="27vw" y="-15vw"/>
            <Skill name="Figma" x="0vw" y="-20vw"/>
            <Skill name="Firebase" x="-25vw" y="18vw"/>
            <Skill name="Tailwind CSS" x="18vw" y="18vw"/>

            <QASkill name="Auto Testing" x="18vw" y="-5vw"/>
            <QASkill name="Manual Testing" x="4vw" y="-15vw"/>
            <QASkill name="Selenium" x="-27vw" y="-5vw"/>

            <MLSkill name="Unsupervised Learning" x="-11vw" y="-18vw"/>
            <MLSkill name="Neural Networks" x="-10vw" y="3vw"/>
            <MLSkill name="Regression" x="30vw" y="0vw"/>
            
        </div>
    </>
  )
}

export default Skills