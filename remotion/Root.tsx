import {Composition} from 'remotion';
import {CannonMarble} from './CannonMarble';

export const RemotionRoot = () => {
  return (
    <Composition
      id="CannonMarble"
      component={CannonMarble}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
