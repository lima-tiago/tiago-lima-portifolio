import * as S from './styles';

type AudioBackgroundProps = {
  isMuted: boolean;
  handleMute: () => void;
};

export const AudioBackground = ({
  isMuted,
  handleMute,
}: AudioBackgroundProps) => {
  return (
    <S.Content>
      <audio src="/assets/background-song.mp3" autoPlay loop muted={isMuted} />
      <button onClick={handleMute}>SOM</button>
    </S.Content>
  );
};
