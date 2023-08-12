import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';

import { Container } from '../features/background/Container';

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PokéMusic</title>
      </Head>
      <Container />
      <div className="logo-container bottom">
        <a href="https://github.com/czheng181920/pokemusic/blob/main/README.md">
        </a>
        <div className="rightflex">
          <div className="footer-button-container2">
            <a href="https://github.com/czheng181920/pokemusic/blob/main/README.md">
              <Image 
                  className="spotify-logo" 
                  src={`/backgrounds/github-mark-white.png`} 
                  alt='back button'
                  fill
                  sizes="50vw"
                />
            </a>
          </div>
          {/* TODO: implement download playlist button */}
          {/* <div className="footer-button-container">
            <Image 
              className="download-button" 
              src={`/backgrounds/download-button.png`} 
              alt='back button'
              fill
              sizes="50vw"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default IndexPage
