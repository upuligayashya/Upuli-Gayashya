import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePicNew from "../../public/images/profile/pp.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'



export default function Home() {
  return (
    <>
      <Head>
        <title>Upuli Gayashya</title>
        <meta name="description" content="Personal portfolio of Upuli Gayashya" />

      </Head>

      <TransitionEffect/>


      <main className='flex items-center text-dark dark:text-light w-full min-h-screen'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
              <div className='w-1/2 md:w-full'>
                {/* <Image src={profilePic} alt="BawaSen" className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
                /> */}
                <Image src={profilePicNew} alt="UG" className="p-20 w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
                />
              </div>
              <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                <AnimatedText text="Where Software Development and QA Converge for Boundless Solutions!" className='!text-6xl !text-left
                xl:!text-5xl lg!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                Building Beyond Boundaries: A Software Developer and QA Enthusiast on a Mission to Transform Challenges into Quality Solutions, Making a Meaningful Impact in the Digital Realm!
</p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                   <Link href="/UPULI GAYASHYA CV.pdf" target='_blank'
                   className='flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base' download={true}>Resume <LinkArrow className={"w-6 ml-1"}/>
                   </Link>
                   <Link href="mailto:upuligayashya12@gmail.com" target='_blank'
                    className='ml-4 text-lg font-medium capitalize  text-dark  dark:text-light underline md:text-base'
                   >Contact</Link>

                </div>
              </div>
          </div>
        </Layout>

        <HireMe/>
      </main>
    </>
  )
}
