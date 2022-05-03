import * as S from './styles';

type AudioBackgroundProps = {
  audioStart: boolean;
};

export const AudioBackground = ({ audioStart }: AudioBackgroundProps) => {
  return (
    <S.Content>
      <audio src="/assets/background-song.mp3" autoPlay={audioStart} loop />
    </S.Content>
  );
};
