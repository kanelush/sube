import React from 'react'
import axios from 'axios'
import useSWR from 'swr'
import { motion } from 'framer-motion'

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
    <div className='hero pt-20 justify-center'>
      <motion.div initial='hidden' animate='visible' variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible:{
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          }
        }
      }}>
    {/* <h1 className='text-8xl text-center mt-10 m-auto'>Header magnate</h1> */}
        <h1 className='text-4xl text-gray-700 font-bold text-center pb-1'>Ignacio Cárdenas B.</h1>
        <h1 className='text-2xl text-gray-700 text-center'>Ingeniero Comercial</h1>
        <h1 className='text-2xl text-gray-700 text-center'>Msc Marketing</h1>
        <h1 className='text-2xl text-gray-700 text-center'>Software Developer</h1>
    </motion.div>
    </div>
    
    
    </>
  )
}
