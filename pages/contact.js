import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Section } from '../components/Section'
import { Header } from '../components/Header'
import { Contact } from '../components/Contact'

export default function ContactPage() {
  return (
    <div>
      <Contact/>
      <Footer/>
    </div>
  )
}