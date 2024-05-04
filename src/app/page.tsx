import React from "react";
import RootLayout from "./layout";
import styles from "./page.module.css";
import ProductListContainer from "./components/products/ProductListContainer";
import NavBar from "./components/navbar/NavBar";

export default function Home() {
  return (
    <RootLayout>
      <NavBar />
      <main className={styles.main}>
        <ProductListContainer />
      </main>
    </RootLayout>
  );
}
