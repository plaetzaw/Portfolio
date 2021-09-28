import Head from 'next/head'
import Navbar from '../components/molecules/Navbar'
import AboutMe from '../components/organisms/AboutMe'
import Hero from '../components/organisms/Hero'

export default function Home () {
  return (
    // <div className='flex flex-col items-center justify-center min-h-screen py-2'>
    <div className='bg-[#035263]'>
      <Head>
        <title>Alex Plaetzer Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <AboutMe />
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
