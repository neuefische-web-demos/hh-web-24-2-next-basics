import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h1>Godzilla</h1>
      <Link href="/movies">Back</Link>
    </main>
  );
}
