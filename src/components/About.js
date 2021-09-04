import React, { useState, useEffect } from 'react';
import sanityclient from '../client'
import bgimage from '../bg-image.jpg';
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react';
/**
* @author
* @function AboutPage
**/
const builder = imageUrlBuilder(sanityclient)

function urlFor(source) {
  return builder.image(source)
}

export const AboutPage = (props) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityclient.fetch(`*[_type=="author"]{
     name,
     bio,
     "authorImage":image.asset->url
   }`)
  .then((data) => setAuthor(data[0]))
  .catch(console.error)
  
  console.log(author)
  }, [])

  if (!author) {
    return (<div>Loding..</div>)
  }

  return (
    <>
      <main className='relative'>
         <img src={bgimage} alt='' className='absolute w-full'/>
         <div className='p-10 lg:pt-48 container mx-auto relative'>
           <section className='bg-green-800 rounded-lg shadow-2xl lg:flex p-20'>
             <img src={urlFor(author.authorImage).url()} alt={author.name}   className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8' />
             <div className='text-lg flex flex-col justify-center'>
               <h1 className='cursive text-6xl text-green-300 mb-4'>
                 Hey There.Im {""}
                 <span className='text-green-100'>{author.name}</span>
               </h1>
               <div className='prose lg:prose-xl text-white'>
                 <BlockContent blocks={author.bio}
           projectId='vr805hi8'
           dataset='production'/>
                </div>
             </div>
           </section>
         </div>
      </main>
    </>
  )

}

