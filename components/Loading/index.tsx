import * as S from './styles';

export const Loading = () => {
  return (
    <S.Content>
      <video src="/assets/loader.mp4" autoPlay loop />
    </S.Content>
  );
};
