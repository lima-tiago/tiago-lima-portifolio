import * as S from './styles';

type LoadingProps = {
  isMuted: boolean;
};

export const Loading = ({ isMuted }: LoadingProps) => {
  return (
    <S.Content>
      <video src="/assets/loader.mp4" autoPlay loop muted={isMuted} />
    </S.Content>
  );
};
