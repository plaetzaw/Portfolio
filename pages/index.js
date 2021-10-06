
import { useEffect, useState, useRef } from 'react'

import Head from 'next/head'
import Navbar from '../components/molecules/Navbar'
import AboutMe from '../components/organisms/AboutMe'
import Hero from '../components/organisms/Hero'
import Projects from '../components/organisms/Projects'
import Technologies from '../components/organisms/Technologies'
import Contact from '../components/organisms/Contact'

export default function Home () {
  const [mobileNavOpen, setMobileNav] = useState(false)

  useEffect(() => {
    // Handler to call on window resize
    function handleResize () {
      // At greater than 768 pixel, mutate our mobileNavOpen to false
      if (window.innerWidth >= 768) {
        setMobileNav(false)
      }
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const technologiesRef = useRef(null)
  const contactRef = useRef(null)

  const executeScroll = (ref) => {
    ref.current.scrollIntoView()
  }

  const refSet = {
    about: aboutRef,
    projects: projectsRef,
    technologies: technologiesRef,
    contact: contactRef
  }

  return (
    // <div className='flex flex-col items-center justify-center min-h-screen py-2'>
    <div className='bg-[#5F3C92]'>
      <Head>
        <title>Alex Plaetzer Portfolio</title>
        <link rel='icon' href='/AlexHS.png' />
      </Head>

      <main>
        <Navbar setMobileNav={setMobileNav} isOpen={mobileNavOpen} executeScroll={executeScroll} refSet={refSet} />
        <div className={`${mobileNavOpen ? 'hidden' : 'block'}`}>
          <Hero />
          <AboutMe position={aboutRef} />
          <Projects position={projectsRef} />
          <Technologies position={technologiesRef} />
          <Contact position={contactRef} />
        </div>
      </main>

      {/* <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
        </a>
      </footer> */}
    </div>
  )
}
