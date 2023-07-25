import type { NextPage } from 'next'
import Head from 'next/head'

import styles from "./index.module.css";
import { useState } from 'react'
import Link from 'next/link';
import PokeGrid from '../features/pokeForm/PokeGrid-Gen8';
import { Container } from '../features/background/Container';

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
      </Head>
      <Container />
    </div>
  );
}

export default IndexPage
