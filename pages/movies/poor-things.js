import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h1>Poor Things</h1>
      <Image
        src="/mountain.jpg"
        alt="a mountain"
        width="300"
        height="200"
        style={{ width: "300px" }}
      />
      <Link href="/movies">Back</Link>
    </main>
  );
}
