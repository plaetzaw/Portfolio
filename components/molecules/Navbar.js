import Close from '../atoms/Close'
import Hamburger from '../atoms/Hamburger'

const Navbar = (props) => {
  const handleClick = () => {
    props.setMobileNav(!props.isOpen)
  }
  const closeMobileView = async () => {
    await props.setMobileNav(false)
    // console.log(props.refSet)
    props.executeScroll(props.refSet.contact)
  }

  return (
    <div className='flex flex-col p-4 bg-[#5F3C92] w-100'>
      <div className='pb-3 md:hidden' onClick={() => handleClick(!props.isOpen)}>
        {props.isOpen ? <Close /> : <Hamburger />}
      </div>
      <div className={`${props.isOpen ? 'h-screen' : 'auto'} `}>
        <ul className={`flex ${props.isOpen ? 'flex-col' : 'hidden'} items-center gap-1 text-center h-screen md:flex flex-row justify-evenly md:h-auto`}>
          <li className='text-4xl h-1/4 text-[#F2EFEF] md:text-xl py-2' onClick={closeMobileView}>About</li>
          <li className='text-4xl h-1/4 text-[#F2EFEF] md:text-xl py-2' onClick={closeMobileView}>Projects</li>
          <li className='text-4xl h-1/4 text-[#F2EFEF] md:text-xl py-2' onClick={closeMobileView}>Technologies</li>
          <li className='text-4xl h-1/4 text-[#F2EFEF] md:text-xl py-2' onClick={closeMobileView}>Contact</li>
          {/* <li className='text-4xl h-1/5 text-[#F2EFEF] md:text-xl py-2' onClick={closeMobileView}><a href='www.google.com'>Blog</a></li> */}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
