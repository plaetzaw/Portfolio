import React from 'react'

const AboutMe = () => {
  const QArray = [
    {
      Question: 'Where do I work',
      Answer: "I'm currently a junior full stack developer at gitBabel"
    },
    {
      Question: 'What technologies do I use?',
      Answer: 'React & NextJS, TailwindCSS & Styled-Components, NodeJS, ExpressJS, KnexJS & PostgreSQL, Sequelize, Git, GraphQL, Heroku'
    },
    {
      Question: 'Are you open to work?',
      Answer: 'I am open to full-time roles at this time'
    }
  ]

  const QPanel = QArray.map((item, index) => {
    return (
      <div key={index} className='text-left pl-3 pt-3 pr-3 pb-3'>
        <span className='text-[#5F3C92] text-3xl'>{item.Question}</span>
        <p className='text-[#241F36] text-xl'>{item.Answer}</p>
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
