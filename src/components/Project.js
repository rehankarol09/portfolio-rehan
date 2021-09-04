import React, { useEffect, useState } from 'react'
//import project from '../../studio/schemas/project';
import sanityclient from '../client'
/**
* @author
* @function ProjectPage
**/

export const ProjectPage = (props) => {
  const [projectdata, setProjectData] = useState(null);

  useEffect(() => {
    sanityclient.fetch(`* [_type == 'project']{
     title,
     date,
     place,
     description,
     projectType,
     link,
     tags
   }`)
      .then((data) => setProjectData(data))
      .catch(console.error)

  }, [])

  return (
    <>
      <main className='bg-green-100 min-h-screen p-12'>
        <section className='container mx-auto'>
          <h1 className='text-5xl flex justify-center cursive'>My Projects</h1>
          <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome To My Project Place</h2>
          <section className='grid grid-cols-2 gap-8'>
            {projectdata && projectdata.map((project,index)=>(
                  <article className='relative rounded-lg shadow-xl bg-white p-16'>
                  <h3 className='text-gray-800 text-3xl font-bold mb-2  hover:text-red-700'>
                    <a
                      href={project.link}
                      alt={project.title}
                      target='_blank'
                      rel='noopener norefererer'
                    >{project.title}</a>
                  </h3>
                  <div className='text-gray-500 text-xs space-x-4'>
                    <span>
                      <strong className='font-bold'>Finished On:</strong>{
                        new Date(project.date).toLocaleDateString()
                      }
                    </span>
                    <span>
                      {project.place}
                    </span>
                    <span>
                      <strong className='font-bold'>Type:</strong>{""}
                      {project.projectType}
                    </span>
                    <p className='text-lg text-gray-700 my-6 leading-relaxed'>{project.description}</p>
                    <a
                      href={project.link}
                      rel='noopener noreferrer'
                      target='_blank'
                      className='text-red-500 font-bold hover:text-red-400 hover:underline'
                    >
                      View The Project{" "}
                      <span role='img' aria-label='right pointer'>👉</span>
                    </a>
    
    
                  </div>
                </article>
            ))}
            
          </section>
        </section>
      </main>
    </>
  )

}