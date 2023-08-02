import React, { useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import articel1 from '../../public/images/articles/pagination component in reactjs.jpg'
import articel2 from '../../public/images/articles/create loading screen in react js.jpg'
import { motion, useMotionValue } from 'framer-motion'
import articel3 from '../../public/images/articles/create modal component in react using react portals.png'
import articel4 from '../../public/images/articles/form validation in reactjs using custom react hook.png'
import TransitionEffect from '@/components/TransitionEffect'
import { blogPosts } from '@/lib/data'



const FramerImage = motion(Image);




const MovingImage = ({title,img,link}) =>{

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event){
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event){
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return(
        <Link href={link} target='_blank'
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}>
                <h2 className='capitalize text-xl font-semibold hover:underline cursor-pointer'>{title}</h2>
                <FramerImage
                style={{x:x, y:y}}
                initial={{opacity:0}}
                whileInView={{opacity:1,transition:{duration:0.2}}}
                ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'/>
            </Link>
    )
}




const Article =({img,title,date,link}) => {
    return(
        <motion.li
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light sm:flex-col'>
            
            <MovingImage title={title} img={img} link={link}/>
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}



const FeaturedArticle = ({img,title,time,summary,link}) =>{
    return(
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light '>
            <div className='absolute top-0 -right-4 -z-10 w-[102%] h-[103%] rounded-[1.5rem] bg-dark'/>
            
            <Link href={link} target='_blank' 
            className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"/>
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline dark:text-light xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2 dark:text-light'>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}








const articles = () => {

  return (
    <>
        <Head>
            <title>Bawanga Senevirathne | Articles</title>
            <meta name='description' content='any description'/>
        </Head>
        <TransitionEffect/>


        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
            <Layout className='pt-16'>
                <AnimatedText text="Words Can Change The World! " className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>


                {/* blogPosts map goes here */}
                <div>
                  {blogPosts.map((item) => (
                            <div key={item.slug} className='w-full px-8 xs:px-4 py-8 bg-light border border-dark my-6 rounded-[2rem] dark:bg-dark dark:border-light dark:text-light'>
                                <div className='text-2xl font-bold underline xs:text-xl'>
                                    <Link href={`/blog/${item.slug}`}>
                                    <div>{item.title}</div>
                                    </Link>
                                </div>
                                <p className='text-primary dark:text-primaryDark font-semibold sm:self-start sm:pl-0 xs:text-sm  my-3 xs:text-md '><span className='font-medium italic text-dark/75 dark:text-light/75'>from</span> {item.author}</p>
                                <p className=' border-b-[1px] border-dark/50 pb-2 xs:text-sm '>{item.intro_desc}</p>
                                <p className='mt-3 font-semibold text-dark/75'>{item.date}</p>
                            </div>
                    ))}

                </div>
                

                {/* <Link href="/posts" 
                className='flex w-[12rem] text-center justify-center items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base my-3'>
                    ALL POSTS
                </Link> */}







                {/* <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>

                    <FeaturedArticle
                        title="Build A Custom Pagination Component In Reactjs From Scratch"
                        time="30/07/2023"
                        summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
                        9 min read"
                        img={articel1}
                        link="/"
                    />

                    <FeaturedArticle
                        title="Create loading screen in ReactJs"
                        time="30/07/2023"
                        summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
                        9 min read"
                        img={articel2}
                        link="/"
                    />
                </ul>

                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light'>All Articles</h2>
                
                <ul>
                    <Article
                    title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                    date="12/07/2023"
                    link="/"
                    img={articel3}
                    />
                    <Article
                    title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
                    date="12/07/2023"
                    link="/"
                    img={articel4}
                    />
                    <Article
                    title="Creating An Efficient Modal Component In React Using Hooks And Portals"
                    date="12/07/2023"
                    link="/"
                    img={articel3}
                    />
                    <Article
                    title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
                    date="12/07/2023"
                    link="/"
                    img={articel3}
                    />
                </ul> */}

            </Layout>
        </main>
    </>
  )
}

export default articles

