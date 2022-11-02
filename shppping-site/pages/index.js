import Head from "next/head";
import Goods from "../components/Goods";
import Header from "../components/Header";
import "swiper/css/bundle";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Shopping Cards</title>
        <meta name="description" content="Created by iDev07" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Goods />
    </div>
  );
}
