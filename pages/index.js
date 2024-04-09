import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log("hello");
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h1>Hello World</h1>
    </main>
  );
}
