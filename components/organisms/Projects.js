import Image from 'next/image'
import Github from '../atoms/GitHub'
import Website from '../atoms/Website'

const Projects = () => {
  const ProjArray = [
    {
      src: '/PCGame 1.png',
      title: 'GameBargins',
      description: 'GameBargins is a NextJS App which allows a user to search for video game discounts and set-up price alerts. The app can search over 20 PC gaming stores to find you the best deals. This app is powered by the Cheapshark API',
      website: 'https://gamebargins.netlify.app/',
      feURL: 'https://github.com/plaetzaw/GameBargins-Client',
      beURL: 'https://github.com/plaetzaw/GameBargins-Server'
    },
    {
      src: '/bingewatch 1.png',
      title: 'YourNextBinge',
      description: 'YourNextBinge is CRA App to help users find their next title to bingewatch. Users can search for a specific title or search for a particular actor/actress. The app will also make recommendations of similar titles. This app is powered by the Open Movie Database API',
      website: 'https://yournextbinge.netlify.app/',
      feURL: 'https://github.com/plaetzaw/YourNextBinge-Client',
      beURL: 'https://github.com/plaetzaw/YourNextBinge-Server'
    }
  ]

  const Navigate = (url) => {
    window.open(`${url}`)
  }

  const ProjDisplay = ProjArray.map((project, index) => {
    return (
      <div key={index} className='px-4 py-8 flex flex-col justify-center md:flex-row'>
        <div className='md:w-1/3'>
          <div className='pb-2 md: pr-4'><Image src={project.src} height={250} width={250} /></div>
          <div className='flex flex-row justify-center text-[#F2EFEF] text-xl pb-2 px-5'>
            <div className='px-3 cursor-pointer hover:animate-bounce' onClick={() => { Navigate(project.website) }}><Website />
              <span>Deployed</span>
            </div>
            <div className='px-3 cursor-pointer hover:animate-bounce' onClick={() => { Navigate(project.feURL) }}><Github />
              <span>Front-End</span>
            </div>
            <div className='px-3 cursor-pointer hover:animate-bounce' onClick={() => { Navigate(project.beURL) }}><Github />
              <span>Back-End</span>
            </div>
          </div>
        </div>
        <div className='md:w-2/3 pr-6 flex-col'>
          <span className='text-[#F2EFEF] m-2 text-3xl'>{project.title}</span>
          <p className='text-[#707097] m-2 text-2xl'>{project.description}</p>
        </div>
      </div>
    )
  })
  return (
    <div className='bg-[#241F36] px-4 py-8 text-center'>
      <span className='text-[#F2EFEF] text-4xl text-center md:text-left'>My Projects</span>
      {ProjDisplay}
    </div>
  )
}

export default Projects
