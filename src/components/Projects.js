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
    title: "Home Accounting",
    url: "",
    description: "",
    image: "",
  },
]

export default function Projects() {

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project, index) => {
        return (
          <Project project={project} />
        )
      })}
    </div>
  )
}
