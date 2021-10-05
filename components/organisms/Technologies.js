import NextJS from '../atoms/Next'
import ReactSVG from '../atoms/React'
import StyledComponents from '../atoms/StyledComponents'
import Tailwind from '../atoms/Tailwind'
import Figma from '../atoms/Figma'
import Storybook from '../atoms/Storybook'
import Node from '../atoms/Node'
import Express from '../atoms/Express'
import Jest from '../atoms/Jest'
import Knex from '../atoms/Knex'
import Sequelize from '../atoms/Sequelize'
import Postgres from '../atoms/Postgres'
import Git from '../atoms/Git'
import GraphQL from '../atoms/GraphQL'
import Heroku from '../atoms/Heroku'

const Technologies = () => {
  const MyTechnologies = [
    {
      tech: 'React',
      svg: <ReactSVG />
    },
    {
      tech: 'NextJS',
      svg: <NextJS />
    },
    {
      tech: 'Styled-Components',
      svg: <StyledComponents />
    },
    {
      tech: 'TailwindCSS',
      svg: <Tailwind />
    },
    {
      tech: 'Figma',
      svg: <Figma />
    },
    {
      tech: 'Storybook',
      svg: <Storybook />
    },
    {
      tech: 'Node',
      svg: <Node />
    },
    {
      tech: 'Express',
      svg: <Express />
    },
    {
      tech: 'Jest',
      svg: <Jest />
    },
    {
      tech: 'Knex',
      svg: <Knex />
    },
    {
      tech: 'Sequelize',
      svg: <Sequelize />
    },
    {
      tech: 'PostgreSQL',
      svg: <Postgres />
    },
    {
      tech: 'Git',
      svg: <Git />
    },
    {
      tech: 'GraphQL',
      svg: <GraphQL />
    },
    {
      tech: 'Heroku',
      svg: <Heroku />
    }
  ]

  const TechGrid = MyTechnologies.map((item, index) => {
    return (
      <div key={index} className='flex flex-col items-center justify-center h-40 w-40 bg-[#5F3C92] rounded-3xl'>
        {item.svg}
        <span className='text-center text-[#F2EFEF]'>{item.tech}</span>
      </div>
    )
  })
  return (
    <div className='bg-[#707097]'>
      <h1 className='text-[#F2EFEF] py-4 text-4xl text-center'>My Technologies</h1>
      <div className='p-4  grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
        {TechGrid}
      </div>
    </div>
  )
}

export default Technologies
