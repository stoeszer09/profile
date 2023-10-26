import React from 'react'

export default function Project({project}) {
  return (
    <div className='m-6 p-6 bg-green-50 rounded-3xl shadow-lg '>
      <img href={`${project.image}`} alt="project image" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  )
}
