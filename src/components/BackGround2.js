import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';
import '../App.css';
import sceneryFrames from './sceneryFrames';
import sceneryTimingBackground from './sceneryTimingBackground';


function BackGround2()  {

  const { ref, getAnimation } = useWebAnimations({
      keyframes: [...sceneryFrames], 
      timing: {...sceneryTimingBackground},
    });


    return [
        <div className="scenery" id="background2" ref={ref}>
        <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />
        <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
        <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
      </div>, getAnimation
    ];
}

export default BackGround2;