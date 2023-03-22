import type { NextPage }  from 'next'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container} >
      <h1>猫画像アプリ</h1>
      <Image src="" alt="" />
      <button>今日の猫さん</button>
    </div>
  )

}

export default Home;