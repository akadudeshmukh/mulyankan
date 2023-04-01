import Layout from '@/components/Layout/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Carousel from '@/components/PageComponents/Carousel'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title="Home-Barbarik">     
      <Carousel/>
      {/* Image Carousel */}
      {/* Feature Cards */}
      {/* Category Tiles */}
      {/* Trendy Products */}
      {/* Email Subscription */}
      {/* Brand Tiles */}
    </Layout>
  )
}
