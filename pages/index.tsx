import type { NextPage } from 'next';
import { Header, LeftItems } from 'components';

import * as S from './styles';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <S.Main className="container">
        <LeftItems />
      </S.Main>
    </>
  );
};

export default Home;
