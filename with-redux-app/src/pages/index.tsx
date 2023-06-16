import type { NextPage } from 'next'
import Head from 'next/head'

import styles from "./index.module.css";
import { useState } from 'react'
import Link from 'next/link';
import PokemonForm from '../features/pokeForm/PokemonForm';

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
      </Head>
      <Link href="/authentication">
          Go to authenticated route
      </Link>
      <PokemonForm />
    </div>
  );
}

export default IndexPage
