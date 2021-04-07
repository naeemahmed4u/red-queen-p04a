import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';
import '../App.css';
import sceneryFrames from './sceneryFrames';
import sceneryTimingForeground from './sceneryTimingForeground';


function ForeGround1()  {

  const { ref, getAnimation } = useWebAnimations({
      keyframes: [...sceneryFrames], 
      timing: {...sceneryTimingForeground},
    });


    return [
        <div className="scenery" id="foreground1" ref={ref}>
        <img id="palm3"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
      </div>, getAnimation
    ];
}

export default ForeGround1;