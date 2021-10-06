import Image from 'next/image'
import Check from '../atoms/Check'
import Github from '../atoms/GitHub'
import LinkedIn from '../atoms/LinkedIn'
import Medium from '../atoms/Medium'

const Hero = () => {
  const SMIcons = [{
    name: 'Github',
    svg: <Github />,
    src: 'https://github.com/plaetzaw'
  },
  {
    name: 'LinkedIn',
    svg: <LinkedIn />,
    src: 'https://www.linkedin.com/in/alexplaetzer/'
  },
  {
    name: 'Medium',
    svg: <Medium />,
    src: 'https://medium.com/@plaetzaw'
  }]

  const Navigate = (url) => {
    window.open(`${url}`)
  }

  const SMDisplay = SMIcons.map((icon, index) => {
    return (
      <div key={index} onClick={() => { Navigate(icon.src) }} className='px-2.5 py-4 cursor-pointer hover:animate-bounce'>{icon.svg}</div>
    )
  })
  return (
    <div className='bg-[#5F3C92] pb-8 min-h-3/4 flex flex-col items-center justify-center text-center md:flex-row'>
      <div className='py-4 md:w-1/4'>
        <Image
          src='/AlexHS.png'
          width={200}
          height={200}
        />
      </div>
      <div className='flex flex-col items-center md:w-3/4'>
        <span className='text-[#F2EFEF] pb-2 text-5xl'>Hi, my name is</span>
        <span className='text-[#FF7A00] text-4xl'>ALEX PLAETZER</span>
        <div className='animate-pulse'><Check /></div>
        <span className='text-[#F2EFEF] pt-1 text-4xl'>Full-Stack Developer</span>
        <div className='flex flex-row'>
          {SMDisplay}
        </div>
      </div>

    </div>
  )
}

export default Hero
