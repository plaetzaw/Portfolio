import React from 'react'

const AboutMe = () => {
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
    },
    {
      Question: 'What technologies do you work with?',
      Answer: 'React & NextJS, TailwindCSS & Styled-Components, KnexJS, SequelizeJS & PostgreSQL, Git, GraphQL, Heroku'
    }
  ]

  const QPanel = QArray.map((item, index) => {
    return (
      <div key={index} className='min-text-left px-4 py-6 md:flex flex-row p-6'>
        <p className='text-[#5F3C92] text-3xl md:w-1/2 text-4xl'>{item.Question}</p>
        <p className='text-[#241F36] text-xl md:w-1/2 text-2xl'>{item.Answer}</p>
      </div>

    )
  })
  return (
    <div className='bg-[#F2EFEF]'>
      {QPanel}
    </div>
  )
}

export default AboutMe
