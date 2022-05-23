import { data } from "autoprefixer"
import Image from "next/image"
import useSWR from "swr";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loader } from "./Loader";

export const Section2 = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('https://chillin.cl/api/competencias', fetcher);
  console.log("From sec2 comp:", data);
  if (error)
    return (
      <div>
        <h1>404</h1>
        <p>Loading failed...</p>
      </div>
    );
  if (!data)
    return (
      <div>
       <Loader/>
      </div>
    );
  return(
      
      <section className="text-gray-600 body-font">
      
      <div className="container px-5 py-24 mx-auto">
      <h1 className="title-font text-4xl font-bold text-gray-700 mb-6 text-center">Experiencia Comprobable</h1>
        <div className="flex flex-wrap -m-4">
          {data.map((compe, i) => {return <>
          <motion.div key={compe.id} initial='first' animate='last' transition={{duration:0.3, delay: i *0.1}} className="p-4 md:w-1/3" whileHover={{
            position:'relative',
            zIndex: 1,
            transition: {
              duration: .1
            }
          }} variants={{
            first: {
              opacity:0,
            },
            last: {
              opacity:1,
            }
          }}>
          <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
            
          <Link href="/competencias/[id]" as={`/competencias/${compe.id}`}>
            <img width="50px" height="50px" className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={`https://chillin.cl/${compe.image}`} alt="blog"/>
            </Link>
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
              <h1 className="title-font text-lg font-medium text-gray-600 mb-3">{ compe.title }</h1>
              <p className="leading-relaxed mb-3">{ compe.description }</p>
              <div className="flex items-center flex-wrap ">
                <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Learn more</button>
               
              </div>
            </div>
          </div>
        </motion.div>
        </>
          })}
          
            
        </div>
      </div>
    </section>
    
  )
}