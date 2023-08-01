import type { NextPage } from 'next'
import Head from 'next/head'

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
