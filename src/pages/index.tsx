import { useState } from "react"
import type { GetServerSideProps, NextPage }  from 'next'
import Image from 'next/image'
import { Fleur_De_Leah, Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

interface SearchCatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

type SearchCatImageResponse = SearchCatImage[];

interface IndexPageProps {
  initialCatImageUrl: string;

}

// APIをたたくときは非同期処理になるのでasync関数で書く
const fetchCatImage = async (): Promise<SearchCatImage> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = (await res.json()) as SearchCatImageResponse;
  return result[0];
};

const Home: NextPage<IndexPageProps> = ({ initialCatImageUrl }) => {
  const [catImageUrl, setCatImageUrl] = useState(initialCatImageUrl)


  const  handleClick = async () => {
    const catImage = await fetchCatImage()
    setCatImageUrl(catImage.url)
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
        src={catImageUrl}
        alt=""  
        width={500} 
        height="auto"
      />
      <button onClick={handleClick}>
        今日の猫さん
      </button>
    </div>
  )

}

// サーバーサイドレンダリングを実装
export const getServerSideProps: GetServerSideProps<
  IndexPageProps
> = async () => {
  const catImage = await fetchCatImage();
  return {
    props: {
      initialCatImageUrl: catImage.url,
    },
  };
};

export default Home;