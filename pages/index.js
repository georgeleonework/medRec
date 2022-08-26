import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam fugiat a vitae consequuntur vel expedita eveniet incidunt itaque animi mollitia enim ipsum et assumenda, sapiente magnam veniam, eos similique.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam fugiat a vitae consequuntur vel expedita eveniet incidunt itaque animi mollitia enim ipsum et assumenda, sapiente magnam veniam, eos similique.</p>
      <Link href="/records">
        <a> Get Started </a>
      </Link>
      <Footer />
    </div>
  )
}


//each page in next/react is it's own component and comes built in with its own routing