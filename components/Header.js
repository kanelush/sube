import React from 'react'
import axios from 'axios'
import useSWR from 'swr'

export const Header = () => {
  
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, error } = useSWR('https://chillin.cl/api/competencias', fetcher);
  // console.log(data);
  // if (error)
  //   return (
  //     <div>
  //       <h1>404</h1>
  //       <p>Loading failed...</p>
  //     </div>
  //   );
  // if (!data)
  //   return (
  //     <div>
  //       <h1>Loading...</h1>
  //     </div>
  //   );

  return (
    <>
    <div className='hero'>
    <h1 className='text-8xl text-center mt-10 m-auto'>Header magnate</h1>
    </div>
    
    
    </>
  )
}
