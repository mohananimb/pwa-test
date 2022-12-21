import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button onClick={() => router.push("/documents")}>
        Click here to go documents page
      </button>
    </div>
  );
}
