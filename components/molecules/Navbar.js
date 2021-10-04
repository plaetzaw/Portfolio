import Close from '../atoms/Close'
import Hamburger from '../atoms/Hamburger'

const Navbar = (props) => {
  const handleClick = () => {
    props.setMobileNav(!props.isOpen)
  }
  const closeMobileView = () => { props.setMobileNav(false) }

  const Links = [
    {
      item: 'About',
      url: '/about'

    }
  ]
  // const OpenText = props.isOpen ? 'Open' : 'Closed'

  console.log(props.isOpen)
  return (
    <div className='flex flex-col p-4 bg-[#5F3C92] w-100'>
      <div className='pb-3 md:hidden' onClick={() => handleClick(!props.isOpen)}>
        {props.isOpen ? <Close /> : <Hamburger />}
      </div>
      <div className={`${props.isOpen ? 'h-screen' : 'auto'} `}>
        <ul className={`flex ${props.isOpen ? 'flex-col' : 'hidden'} gap-1 text-center md:flex flex-row justify-between`}>
          <li className='text-4xl py-5 bg-pink-500 md:text-xl py-2' onClick={closeMobileView}>
            <a href='/#section-about'>About</a>
          </li>
          <li className='text-4xl py-5 bg-pink-500 md:text-xl py-2' onClick={closeMobileView}>Projects</li>
          <li className='text-4xl py-5 bg-pink-500 md:text-xl py-2' onClick={closeMobileView}>Technologies</li>
          <li className='text-4xl py-5 bg-pink-500 md:text-xl py-2' onClick={closeMobileView}>Contact</li>
          <li className='text-4xl py-5 bg-pink-500 md:text-xl py-2' onClick={closeMobileView}>Blog</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
