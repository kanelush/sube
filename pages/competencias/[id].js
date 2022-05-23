import { useState } from 'react';
import Link from 'next/link';
import { Contact } from '../../components/Contact';
import { Navbar } from '../../components/Navbar';

export const getStaticPaths = async () => {
      const res = await fetch('https://chillin.cl/api/competencias');
      const data = await res.json();
      console.log("Data: ", data);
      
      const paths = data.map(competencia => {
          return {
              params: { id: competencia.id.toString()}
          }
      })
      return {
          paths,
          fallback: false,
      }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://chillin.cl/api/competencias/' + id);
    const res1 = await fetch('http://localhost:8000/api/productos/sorted/' + id);
    const data = await res.json()
    const dato = await res1.json()

    return {
        props: {
            competencia: data,
            productos: dato
        }
    }
}
const SingleNegocioPage = ({ competencia, productos }) => {
    return(
    <>
    
    <div className="flex justify-center my-10">
        <div key={competencia.id} className="cursor-pointer rounded-lg shadow-lg pb-4 my-10 bg-white max-w-sm hover:bg-slate-200">
          <img className="rounded-t-lg object-cover max-h-64 w-full" src={`https://chillin.cl/${competencia.image}`} alt=""/>
          <div className="p-6">
          <h3 className="text-gray-900 text-xl font-medium mb-2 text-center">{competencia.title}</h3>
          <h3 className="text-gray-900 text-lg font-medium mb-2 text-center">{competencia.description}</h3>
          </div>
        <Contact/>
        </div>
        {productos.map(producto => {return <h1>{producto.name}</h1>})}
    </div>
    </>
    )
}

export default SingleNegocioPage;