import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Section } from '../components/Section'
import { Header } from '../components/Header'
import { Contact } from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Section/>
      <Contact/>
      <Footer/>
    </div>
  )
}
