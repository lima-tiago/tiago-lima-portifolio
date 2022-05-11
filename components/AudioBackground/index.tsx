/* eslint-disable @next/next/no-img-element */
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
      <button onClick={handleMute}>
        <img
          src={isMuted ? '/assets/mute.png' : '/assets/volume.png'}
          alt={isMuted ? 'Mute' : 'Sound'}
        />
      </button>
    </S.Content>
  );
};
