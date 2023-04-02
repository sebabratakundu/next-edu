import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from "@/components/Navbar";
import BaseLayout from "@/components/BaseLayout";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <BaseLayout title="Home Page">
        <h1>This is home page</h1>
      </BaseLayout>
    </>
  )
}
