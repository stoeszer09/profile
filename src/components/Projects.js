import React from 'react'
import Project from './Project'

const projects = [
  {
    title: "Home Accounting",
    url: "",
    description: "",
    image: "",
  },
  {
    title: "You Betchya",
    url: "",
    description: "",
    image: "",
  },
]

export default function Projects() {

  return (
    <div >
      <h2 className='font-bold text-2xl'>Projects</h2>
      {projects.map((project, index) => {
        return (
          <Project project={project} />
        )
      })}
    </div>
  )
}
