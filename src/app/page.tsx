import React from 'react';
import RootLayout from './layout';
import styles from './page.module.css';
import ProductListContainer from './components/products/ProductListContainer';


export default function Home() {
  return (
    <RootLayout>
      <main className={styles.main}>
        <ProductListContainer />
      </main>
    </RootLayout>
  );
}
