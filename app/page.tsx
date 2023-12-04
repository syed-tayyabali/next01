import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      <Link href="/about">About page</Link>
    </main>
  );
}
