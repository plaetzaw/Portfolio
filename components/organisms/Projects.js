import Image from 'next/image'

const Projects = () => {
  const ProjArray = [
    {
      src: '/PCGame 1.png',
      title: 'GameBargins',
      description: 'GameBargins is a NextJS App which allows a user to search for video game discounts and set-up price alerts'
    },
    {
      src: '/bingewatch 1.png',
      title: 'YourNextBinge',
      description: 'YourNextBinge is CRA App to help users find their next title to bingewatch.'
    }
  ]

  const ProjDisplay = ProjArray.map((project, index) => {
    return (
      <div key={index} className='flex flex-col justify-center items-center'>
        <Image src={project.src} height={175} width={175} className='' />
        <span className='text-[#F2EFEF] m-2 text-3xl'>{project.title}</span>
        <p className='text-[#707097] m-2 text-2xl'>{project.description}</p>
      </div>
    )
  })
  return (
    <div className='bg-[#241F36] text-center p-4'>
      <span className='text-[#F2EFEF] text-4xl p-20'>My Projects</span>
      {ProjDisplay}
    </div>
  )
}

export default Projects
