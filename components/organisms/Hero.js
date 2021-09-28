import Image from 'next/image'
import Check from '../atoms/Check'
import Github from '../atoms/GitHub'
import Indeed from '../atoms/Indeed'
import Medium from '../atoms/Medium'

const Hero = () => {
  return (
    <div className='bg-[#5F3C92] flex flex-col items-center justify-center text-center'>
      <div className='py-4'>
        <Image
          src='/AlexHS.png'
          width={152}
          height={156}
        />
      </div>
      <span className='text-[#F2EFEF] pb-2 text-5xl'>Hi, my name is</span>
      <span className='text-[#FF7A00] text-4xl'>ALEX PLAETZER</span>
      <div className='top-1'><Check /></div>
      <span className='text-[#F2EFEF] pt-1 text-4xl'>Full-Stack Developer</span>
      <div className='flex flex-row'>
        <div className='px-2.5 py-4'><Github /></div>
        <div className='px-2.5 py-4'><Indeed /></div>
        <div className='px-2.5 py-4'><Medium /></div>
      </div>

    </div>
  )
}

export default Hero
