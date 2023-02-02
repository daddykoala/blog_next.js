
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Navbar from '@/component/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const id = "article"
  return (
    <>
    
    <div className={styles.container}>
    <h1> hello </h1>
    
    </div>
    </>
    
  )
}
