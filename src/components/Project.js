import React from 'react'

export default function Project({project}) {
  return (
    <div>
      <img href={`${project.image}`} alt="project image" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  )
}
