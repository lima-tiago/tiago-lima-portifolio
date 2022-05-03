import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { Header, LeftItems, Loading, AudioBackground } from 'components';

import * as S from './styles';

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [startSong, setStartSong] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setStartSong(true);
    }, 25000);
  }, []);
  return (
    <>
      <AudioBackground audioStart={startSong} />
      {isLoading ? (
        <Loading />
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
