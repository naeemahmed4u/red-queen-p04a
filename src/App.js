import React, { useRef } from 'react';
// import logo from './logo.svg';
import './App.css';
//import './test';
// import aliceSmall from './images/sprite_running-alice-queen_small.png';
//import useWebAnimations from '@wellyshen/use-web-animations';
import Background1 from './components/BackGround1';
import Background2 from './components/BackGround2';
import Foreground1 from './components/ForeGround1';
import Foreground2 from './components/ForeGround2';
import Alice from './components/RedQueenAlice';

function App() {

  // var sceneryFrames =   [
  //   { transform: 'translateX(100%)' },
  //   { transform: 'translateX(-100%)' }   
  // ];

  // var sceneryTimingBackground = {
  //   duration: 36000,
  //   iterations: Infinity
  // };

  // var sceneryTimingForeground = {
  //   duration: 12000,
  //   iterations: Infinity
  // };

  // // function background1(){
  // //   const {background1, getAnimation} = useWebAnimations({sceneryFrames, sceneryTimingBackground});
  // //   return getAnimation();

  // // }
  // const {background1} = useWebAnimations({keyframes:[sceneryFrames], sceneryTimingBackground});
  // //const {background1, getAnimation1} = useWebAnimations({id:"background1", sceneryFrames, sceneryTimingBackground});
  // //getAnimation1.background1.getAnimation();


  // const {background2} = useWebAnimations({keyframes:[sceneryFrames], sceneryTimingBackground});

  // const {foreground1} = useWebAnimations({keyframes:[sceneryFrames], sceneryTimingForeground});
  // const {foreground2} = useWebAnimations({keyframes:[sceneryFrames], sceneryTimingForeground});

  // // function background2(){
  // //   const {background2, getAnimation} = useWebAnimations({sceneryFrames, sceneryTimingBackground});
  // //   return getAnimation();

  // // }

  // // function foreground1(){
  // //   const {foreground1, getAnimation} = useWebAnimations({sceneryFrames, sceneryTimingBackground});
  // //   return getAnimation();

  // // }

  // // function foreground2(){
  // //   const {foreground2, getAnimation} = useWebAnimations({sceneryFrames, sceneryTimingBackground});
  // //   return getAnimation();

  // // }



  // var spriteFrames = [
  //   { transform: 'translateY(0)' },
  //   { transform: 'translateY(-100%)' }   
  // ];

  // //var redQueen_alice = document.getElementById('red-queen_and_alice_sprite');

  //  const {alice} = useWebAnimations({keyframes: [spriteFrames], timing: {
  //   easing: 'steps(7, end)',
  //   direction: "reverse",
  //   duration: 600,
  //   playbackRate: 1,
  //   iterations: Infinity
  // }});



  // //var redQueen_alice = document.getElementById('red-queen_and_alice_sprite');

  // //redQueen_alice.getAnimations().playbackRate
  // //redQueen_alice = getAnimation();
  // const redQueen_alice = useRef(alice);

  // //console.log(redQueen_alice.playbackRate);

  // //var sceneries = [{foreground1()}, {foreground2()}, {background1()}, {background2()}];

  // //console.log({alice});
  // /*const adjustBackgroundPlayback = () => {
  //   const alice = getAnimation();
  //   //const anim=
  //   if (alice.playbackRate < .8){
  //     sceneries.forEach((anim)=>{
  //       anim.playbackRate = alice.playbackRate/2 *-1;
  //     });
  //   } else if (alice.playbackRate > 1.2 ){
  //     sceneries.forEach((anim)=>{
  //       anim.playbackRate = alice.playbackRate/2 *-1;
  //     });
  //   } else {
  //       sceneries.forEach((anim)=>{
  //       anim.playbackRate = 0;
  //     });
  //   }
  // }; */

  // //document.getAnimations()
  //   const adjustBackgroundPlayback = function () {
  //     //const redQueen_alice = getAnimation();
  //     //console.log(alice.getAnimation().playbackRate);
  //     if(redQueen_alice){
  //     if (redQueen_alice.playbackRate < .8){
  //       document.getAnimations().forEach((anim)=>{
  //         anim.updatePlaybackRate(anim.playbackRate/2 *-1);        
  //       });
  //     } else if (redQueen_alice.playbackRate > 1.2 ){
  //       document.getAnimations().forEach((anim)=>{
  //       anim.updatePlaybackRate(anim.playbackRate/2 *-1);
  //       });
  //     } else {
  //         document.getAnimations().forEach((anim)=>{
  //         anim.playbackRate = 0;
  //       });
  //     }}
  //   };

  //   adjustBackgroundPlayback();

  //  // /* If Alice and the Red Queen are running at a speed of 1, the background doesn't move. */
  //  // /* But if they fall under 1, the background slides backwards */
  //  setInterval( function() {

  //    // Make sure the playback rate never falls below .4
  //    if (redQueen_alice && redQueen_alice.playbackRate > .4) {
  //      redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * .9);
  //    }

  //  }, 3000);

  //  var goFaster = function() {
  //    redQueen_alice && redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 1.1);
  //  }

  // document.addEventListener("click", goFaster);
  // document.addEventListener("touchstart", goFaster);

  let [bg1, bg1Animation] = Background1();
  let [bg2, bg2Animation] = Background2();
  let [fg1, fg1Animation] = Foreground1();
  let [fg2, fg2Animation] = Foreground2();
  let [queen, queenAnimation] = Alice();
  let animation;
  let redQueen_alice = queenAnimation();

  let sceneries = [fg1Animation, fg2Animation, bg1Animation, bg2Animation];


  const adjustBackgroundPlayback = function () {
    if (redQueen_alice) {

      if (redQueen_alice.playbackRate < .8) {
        sceneries.forEach(function (anim) {
          animation=anim();
          animation&& animation.updatePlaybackRate(redQueen_alice.playbackRate / 2 * -1);
        });
      } else if (redQueen_alice.playbackRate > 1.2) {
        sceneries.forEach(function (anim) {
          animation=anim();
          animation&& animation.updatePlaybackRate(redQueen_alice.playbackRate / 2);
        });
      } else {
        sceneries.forEach(function (anim) {
          animation=anim();
          animation && animation.updatePlaybackRate(0);
        });
      }
    }
  }
  adjustBackgroundPlayback();
  setInterval(function () {
    /* Set decay */
    if (redQueen_alice && redQueen_alice.playbackRate > .4) {
      redQueen_alice.updatePlaybackRate(.9 * redQueen_alice.playbackRate);
    }
    adjustBackgroundPlayback();
  }, 3000);

  var goFaster = function () {
    /* But you can speed them up by giving the screen a click or a tap. */
    redQueen_alice && redQueen_alice.updatePlaybackRate(1.1 * redQueen_alice.playbackRate)
    adjustBackgroundPlayback();
  }


  return (

    <div className="wrapper" onClick={goFaster} onTouchStart={goFaster}>
      {queen}
      {fg1}
      {fg2}
      {bg1}
      {bg2}
      {/* <div className="sky"></div>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img id="red-queen_and_alice_sprite" ref={redQueen_alice}
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
            alt="Alice and the Red Queen running to stay in place." />
        </div>
      </div>
      <div className="scenery" id="foreground1" ref={foreground1}>
        <img id="palm3"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
      </div>
      <div className="scenery" id="foreground2" ref={foreground2}>
        <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
        <img id="w_rook_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
      </div>
      <div className="scenery" id="background1" ref={background1}>
        <img id="r_pawn_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
        <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
        <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
      </div>
      <div className="scenery" id="background2" ref={background2}>
        <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />
        <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
        <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
      </div> */}
    </div>

  );
}

export default App;
