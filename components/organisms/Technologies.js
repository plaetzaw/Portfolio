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
  const Navigate = (url) => {
    window.open(`${url}`)
  }

  const MyTechnologies = [
    {
      tech: 'React',
      svg: <ReactSVG />,
      src: 'https://reactjs.org/'
    },
    {
      tech: 'NextJS',
      svg: <NextJS />,
      src: 'https://nextjs.org/'
    },
    {
      tech: 'Styled-Components',
      svg: <StyledComponents />,
      src: 'https://styled-components.com/'
    },
    {
      tech: 'TailwindCSS',
      svg: <Tailwind />,
      src: 'https://tailwindcss.com/'
    },
    {
      tech: 'Figma',
      svg: <Figma />,
      src: 'https://www.figma.com/'
    },
    {
      tech: 'Storybook',
      svg: <Storybook />,
      src: 'https://storybook.js.org/'
    },
    {
      tech: 'Node',
      svg: <Node />,
      src: 'https://nodejs.org/en/'
    },
    {
      tech: 'Express',
      svg: <Express />,
      src: 'https://expressjs.com/'
    },
    {
      tech: 'Jest',
      svg: <Jest />,
      src: 'https://jestjs.io/'
    },
    {
      tech: 'Knex',
      svg: <Knex />,
      src: 'https://knexjs.org/'
    },
    {
      tech: 'Sequelize',
      svg: <Sequelize />,
      src: 'https://sequelize.org/'
    },
    {
      tech: 'PostgreSQL',
      svg: <Postgres />,
      src: 'https://www.postgresql.org/'
    },
    {
      tech: 'Git',
      svg: <Git />,
      src: 'https://git-scm.com/'
    },
    {
      tech: 'GraphQL',
      svg: <GraphQL />,
      src: 'https://graphql.org/'
    },
    {
      tech: 'Heroku',
      svg: <Heroku />,
      src: 'https://dashboard.heroku.com/'
    }
  ]

  const TechGrid = MyTechnologies.map((item, index) => {
    return (
      <div key={index} onClick={() => { Navigate(item.src) }} className='flex flex-col items-center justify-center h-40 w-40 bg-[#5F3C92] rounded-3xl hover:border-4 border-[#FFFFFF]'>
        {item.svg}
        <span className='text-center text-[#F2EFEF]'>{item.tech}</span>
      </div>
    )
  })
  return (
    <div className='bg-[#707097]'>
      <h1 className='text-[#F2EFEF] py-4 text-4xl text-center'>My Technologies</h1>
      <div className='px-6 py-8  grid grid-cols-2 gap-6  md:grid-cols-3 lg:grid-cols-4'>
        {TechGrid}
      </div>
    </div>
  )
}

export default Technologies
