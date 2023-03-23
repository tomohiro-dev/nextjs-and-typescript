import type { NextPage }  from 'next'
import Image from 'next/image'
import { Fleur_De_Leah, Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const Home: NextPage = () => {
  // APIをたたくときは非同期処理になるのでasync関数で書く
  const fetchCatImage = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search")
    const result = res.json();
    // console.log(result[0]);
    return result;
  };

  const  handleClick = async () => {
    const catImage = await fetchCatImage()
    console.log(catImage);
  }
 
  
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"

    }}> 
      <h1>猫画像アプリ</h1>
      <img 
        src="https://cdn2.thecatapi.com/images/dc5.jpg" alt=""  
        width={500} 
        height="auto"
      />
      <button onClick={handleClick}>
        今日の猫さん
      </button>
    </div>
  )

}

export default Home;