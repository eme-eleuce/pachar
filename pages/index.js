import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Section1 from '../components/Section1'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>PACCHAR</title>
        <meta name="description" content="pacchar website"/>
        <link rel="icon" href="./logo/logo3.png" />
      </Head>
      <Hero />
      <Section1 />
      
      
      
    </div>
  )
}
