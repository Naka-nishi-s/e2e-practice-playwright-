"use client";
import styles from "./page.module.css";

export default function Home() {
  const requestToAPIRoute = async () => {
    const response = await fetch("/api/getJsonData");
    const data = await response.json();
    console.log(JSON.stringify(data));
  };

  return (
    <main className={styles.main}>
      <div>
        <button onClick={requestToAPIRoute}>
          API Routeにリクエストするボタン
        </button>
      </div>
    </main>
  );
}
