import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { Header, LeftItems, Loading, AudioBackground } from 'components';

import * as S from '../styles/styles';

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 25000);
  }, []);
  return (
    <>
      <AudioBackground
        isMuted={isMuted}
        handleMute={() => setIsMuted(!isMuted)}
      />
      {isLoading ? (
        <Loading isMuted={isMuted} />
      ) : (
        <>
          <Header />
          <S.Main className="container">
            <LeftItems />
          </S.Main>
        </>
      )}
    </>
  );
};

export default Home;
