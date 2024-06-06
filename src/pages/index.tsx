import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '../features/background/Container';
import HobbyImage from '../features/pokeForm/HobbyImage';

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
              <HobbyImage 
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
            HobbyImage 
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
