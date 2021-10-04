import Close from '../atoms/Close'
import Hamburger from '../atoms/Hamburger'

const Navbar = (props) => {
  const handleClick = () => {
    props.setMobileNav(!props.isOpen)
  }
  const closeMobileView = () => { props.setMobileNav(false) }

  // const OpenText = props.isOpen ? 'Open' : 'Closed'

  console.log(props.isOpen)
  return (
    <div className='flex flex-row p-4 bg-[#5F3C92] w-100'>
      <div className='md:hidden' onClick={() => handleClick(!props.isOpen)}>
        {props.isOpen ? <Close /> : <Hamburger />}
      </div>
      <div>
        <ul className={`flex ${props.isOpen ? 'flex-col' : 'hidden'} md:flex flex-row`}>
          <li className='w-100 bg-pink-500'>About</li>
          <li className='w-100 bg-pink-500'>Projects</li>
          <li className='w-100 bg-pink-500'>Technologies</li>
          <li className='w-100 bg-pink-500'>Contact</li>
          <li className='w-100 bg-pink-500'>Blog</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
