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
        <div className="rightflex">
          <footer className="footer-button-container2">
            <a href="https://github.com/czheng181920/pokemusic/blob/main/README.md">
              <Image 
                  className="spotify-logo" 
                  src={`/backgrounds/github-mark-white.png`} 
                  alt='Github Link'
                  fill
                  sizes="50vw"
                />
            </a>
          </footer>
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
