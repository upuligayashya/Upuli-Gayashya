import React, { useEffect, useState } from 'react'


const BackToTopBtn = () => {

    const [backtoTopBtn, setBackToTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                setBackToTopBtn(true)
            }else{
                setBackToTopBtn(false)
            }
        })
    }, [])

    const scrollUp = () =>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }

  return (
    <div>
        {backtoTopBtn && (
            <button className='bg-dark text-light px-4 py-2 text-3xl fixed bottom-5 right-5 rounded-xl dark:bg-light dark:text-dark'
            onClick={scrollUp}>^</button>
        )}
    </div>
  )
}

export default BackToTopBtn