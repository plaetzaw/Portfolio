import React from 'react'

const AboutMe = (props) => {
  console.log(props)
  const QArray = [
    {
      Question: 'Where do I work?',
      Answer: "I'm currently a junior full stack developer at gitBabel"
    },
    {
      Question: 'What is my background?',
      Answer: 'I became a developer in 2019 after nearly a decade as a highly accomplished swim coach'
    },
    {
      Question: 'What is my avalibility?',
      Answer: 'I am open to full-time roles at this time. I am open to roles in the Houston metro area, as well as remote roles in any US timezone.'
    },
    {
      Question: 'Am I open to relocation?',
      Answer: 'No, I am not open to relocation at this time.'
    }
  ]

  const QPanel = QArray.map((item, index) => {
    return (
      <div key={index} className='flex-row py-4 min-text-left md:flex'>
        <p className='text-[#5F3C92] text-3xl md:w-1/2 text-4xl'>{item.Question}</p>
        <p className='text-[#241F36] text-xl md:w-1/2 text-2xl'>{item.Answer}</p>
      </div>

    )
  })
  return (
    <div className='bg-[#F2EFEF] px-8 py-8' ref={props.position}>
      {QPanel}
    </div>
  )
}

export default AboutMe
