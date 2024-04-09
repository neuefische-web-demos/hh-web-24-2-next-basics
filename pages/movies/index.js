import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const movies = ["Poor-Things", "The-Room", "Dune-2", "Godzilla"];
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h1>My favorite Movies</h1>
      <ul>
        <li>
          <h2>
            <Link href={"/movies/poor-things"}>Poor Things</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link href={"/movies/godzilla"}>Godzilla</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link href={"/movies/the-room"}>The Room</Link>
          </h2>
        </li>
      </ul>
    </main>
  );
}
