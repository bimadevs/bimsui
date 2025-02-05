import React from 'react';
import styled from 'styled-components';

export const LoaderOne = () => {
    return (
        <StyledOne>
            <div className="card">
                <div className="loader">
                    <p>loading</p>
                    <div className="words">
                        <span className="word">buttons</span>
                        <span className="word">forms</span>
                        <span className="word">switches</span>
                        <span className="word">cards</span>
                        <span className="word">buttons</span>
                    </div>
                </div>
            </div>
        </StyledOne>
    );
}

const StyledOne = styled.div`
  .card {;
    padding: 1rem 2rem;
    border-radius: 1.25rem;
  }
  .loader {
    color: rgb(124, 124, 124);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 25px;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 40px;
    padding: 10px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 8px;
  }

  .words {
    overflow: hidden;
    position: relative;
  }
  .words::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      var(--bg-color) 10%,
      transparent 30%,
      transparent 70%,
      var(--bg-color) 90%
    );
    z-index: 20;
  }

  .word {
    display: block;
    height: 100%;
    padding-left: 6px;
    color: #956afa;
    animation: spin_4991 4s infinite;
  }

  @keyframes spin_4991 {
    10% {
      -webkit-transform: translateY(-102%);
      transform: translateY(-102%);
    }

    25% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }

    35% {
      -webkit-transform: translateY(-202%);
      transform: translateY(-202%);
    }

    50% {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
    }

    60% {
      -webkit-transform: translateY(-302%);
      transform: translateY(-302%);
    }

    75% {
      -webkit-transform: translateY(-300%);
      transform: translateY(-300%);
    }

    85% {
      -webkit-transform: translateY(-402%);
      transform: translateY(-402%);
    }

    100% {
      -webkit-transform: translateY(-400%);
      transform: translateY(-400%);
    }
  }`;

export const LoaderTwo = () => {
    return (
        <StyledTwo>
            <div className="container">
                <div className="loader" />
                <div className="loader" />
                <div className="loader" />
            </div>
        </StyledTwo>
    );
}

const StyledTwo = styled.div`
    .loader {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 10;
      width: 160px;
      height: 100px;
      margin-left: -80px;
      margin-top: -50px;
      border-radius: 5px;
      background: #1e3f57;
      animation: dot1_ 3s cubic-bezier(0.55,0.3,0.24,0.99) infinite;
    }
  
    .loader:nth-child(2) {
      z-index: 11;
      width: 150px;
      height: 90px;
      margin-top: -45px;
      margin-left: -75px;
      border-radius: 3px;
      background: #3c517d;
      animation-name: dot2_;
    }
  
    .loader:nth-child(3) {
      z-index: 12;
      width: 40px;
      height: 20px;
      margin-top: 50px;
      margin-left: -20px;
      border-radius: 0 0 5px 5px;
      background: #6bb2cd;
      animation-name: dot3_;
    }
  
    @keyframes dot1_ {
      3%,97% {
        width: 160px;
        height: 100px;
        margin-top: -50px;
        margin-left: -80px;
      }
  
      30%,36% {
        width: 80px;
        height: 120px;
        margin-top: -60px;
        margin-left: -40px;
      }
  
      63%,69% {
        width: 40px;
        height: 80px;
        margin-top: -40px;
        margin-left: -20px;
      }
    }
  
    @keyframes dot2_ {
      3%,97% {
        height: 90px;
        width: 150px;
        margin-left: -75px;
        margin-top: -45px;
      }
  
      30%,36% {
        width: 70px;
        height: 96px;
        margin-left: -35px;
        margin-top: -48px;
      }
  
      63%,69% {
        width: 32px;
        height: 60px;
        margin-left: -16px;
        margin-top: -30px;
      }
    }
  
    @keyframes dot3_ {
      3%,97% {
        height: 20px;
        width: 40px;
        margin-left: -20px;
        margin-top: 50px;
      }
  
      30%,36% {
        width: 8px;
        height: 8px;
        margin-left: -5px;
        margin-top: 49px;
        border-radius: 8px;
      }
  
      63%,69% {
        width: 16px;
        height: 4px;
        margin-left: -8px;
        margin-top: -37px;
        border-radius: 10px;
      }
}`;


export const LoaderThree = () => {
    return (
        <StyledThree>
            <div>
                <div className="loader">
                    <svg viewBox="0 0 80 80">
                        <circle r={32} cy={40} cx={40} id="test" />
                    </svg>
                </div>
                <div className="loader triangle">
                    <svg viewBox="0 0 86 80">
                        <polygon points="43 8 79 72 7 72" />
                    </svg>
                </div>
                <div className="loader">
                    <svg viewBox="0 0 80 80">
                        <rect height={64} width={64} y={8} x={8} />
                    </svg>
                </div>
            </div>
        </StyledThree>
    );
}

const StyledThree = styled.div`
  .loader {
    --path: #2f3545;
    --dot: #5628ee;
    --duration: 3s;
    width: 44px;
    height: 44px;
    position: relative;
  }

  .loader:before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    display: block;
    background: var(--dot);
    top: 37px;
    left: 19px;
    transform: translate(-18px, -18px);
    animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
      infinite;
  }

  .loader svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  .loader svg rect,
  .loader svg polygon,
  .loader svg circle {
    fill: none;
    stroke: var(--path);
    stroke-width: 10px;
    stroke-linejoin: round;
    stroke-linecap: round;
  }

  .loader svg polygon {
    stroke-dasharray: 145 76 145 76;
    stroke-dashoffset: 0;
    animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
      infinite;
  }

  .loader svg rect {
    stroke-dasharray: 192 64 192 64;
    stroke-dashoffset: 0;
    animation: pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
  }

  .loader svg circle {
    stroke-dasharray: 150 50 150 50;
    stroke-dashoffset: 75;
    animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
      infinite;
  }

  .loader.triangle {
    width: 48px;
  }

  .loader.triangle:before {
    left: 21px;
    transform: translate(-10px, -18px);
    animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
      infinite;
  }

  @keyframes pathTriangle {
    33% {
      stroke-dashoffset: 74;
    }

    66% {
      stroke-dashoffset: 147;
    }

    100% {
      stroke-dashoffset: 221;
    }
  }

  @keyframes dotTriangle {
    33% {
      transform: translate(0, 0);
    }

    66% {
      transform: translate(10px, -18px);
    }

    100% {
      transform: translate(-10px, -18px);
    }
  }

  @keyframes pathRect {
    25% {
      stroke-dashoffset: 64;
    }

    50% {
      stroke-dashoffset: 128;
    }

    75% {
      stroke-dashoffset: 192;
    }

    100% {
      stroke-dashoffset: 256;
    }
  }

  @keyframes dotRect {
    25% {
      transform: translate(0, 0);
    }

    50% {
      transform: translate(18px, -18px);
    }

    75% {
      transform: translate(0, -36px);
    }

    100% {
      transform: translate(-18px, -18px);
    }
  }

  @keyframes pathCircle {
    25% {
      stroke-dashoffset: 125;
    }

    50% {
      stroke-dashoffset: 175;
    }

    75% {
      stroke-dashoffset: 225;
    }

    100% {
      stroke-dashoffset: 275;
    }
  }

  .loader {
    display: inline-block;
    margin: 0 16px;
}`;


export const LoaderFour = () => {
    return (
        <StyledFour>
            <div className="loader">
                <div className="truckWrapper">
                    <div className="truckBody">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 198 93" className="trucksvg">
                            <path strokeWidth={3} stroke="#282828" fill="#F83D3D" d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z" />
                            <path strokeWidth={3} stroke="#282828" fill="#7D7C7C" d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z" />
                            <path strokeWidth={2} stroke="#282828" fill="#282828" d="M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z" />
                            <rect strokeWidth={2} stroke="#282828" fill="#FFFCAB" rx={1} height={7} width={5} y={63} x={187} />
                            <rect strokeWidth={2} stroke="#282828" fill="#282828" rx={1} height={11} width={4} y={81} x={193} />
                            <rect strokeWidth={3} stroke="#282828" fill="#DFDFDF" rx="2.5" height={90} width={121} y="1.5" x="6.5" />
                            <rect strokeWidth={2} stroke="#282828" fill="#DFDFDF" rx={2} height={4} width={6} y={84} x={1} />
                        </svg>
                    </div>
                    <div className="truckTires">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" className="tiresvg">
                            <circle strokeWidth={3} stroke="#282828" fill="#282828" r="13.5" cy={15} cx={15} />
                            <circle fill="#DFDFDF" r={7} cy={15} cx={15} />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" className="tiresvg">
                            <circle strokeWidth={3} stroke="#282828" fill="#282828" r="13.5" cy={15} cx={15} />
                            <circle fill="#DFDFDF" r={7} cy={15} cx={15} />
                        </svg>
                    </div>
                    <div className="road" />
                    <svg xmlSpace="preserve" viewBox="0 0 453.459 453.459" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Capa_1" version="1.1" fill="#000000" className="lampPost">
                        <path d="M252.882,0c-37.781,0-68.686,29.953-70.245,67.358h-6.917v8.954c-26.109,2.163-45.463,10.011-45.463,19.366h9.993
      c-1.65,5.146-2.507,10.54-2.507,16.017c0,28.956,23.558,52.514,52.514,52.514c28.956,0,52.514-23.558,52.514-52.514
      c0-5.478-0.856-10.872-2.506-16.017h9.992c0-9.354-19.352-17.204-45.463-19.366v-8.954h-6.149C200.189,38.779,223.924,16,252.882,16
      c29.952,0,54.32,24.368,54.32,54.32c0,28.774-11.078,37.009-25.105,47.437c-17.444,12.968-37.216,27.667-37.216,78.884v113.914
      h-0.797c-5.068,0-9.174,4.108-9.174,9.177c0,2.844,1.293,5.383,3.321,7.066c-3.432,27.933-26.851,95.744-8.226,115.459v11.202h45.75
      v-11.202c18.625-19.715-4.794-87.527-8.227-115.459c2.029-1.683,3.322-4.223,3.322-7.066c0-5.068-4.107-9.177-9.176-9.177h-0.795
      V196.641c0-43.174,14.942-54.283,30.762-66.043c14.793-10.997,31.559-23.461,31.559-60.277C323.202,31.545,291.656,0,252.882,0z
      M232.77,111.694c0,23.442-19.071,42.514-42.514,42.514c-23.442,0-42.514-19.072-42.514-42.514c0-5.531,1.078-10.957,3.141-16.017
      h78.747C231.693,100.736,232.77,106.162,232.77,111.694z" />
                    </svg>
                </div>
            </div>
        </StyledFour>
    );
}

const StyledFour = styled.div`
  .loader {
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .truckWrapper {
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    overflow-x: hidden;
  }
  /* truck upper body */
  .truckBody {
    width: 130px;
    height: fit-content;
    margin-bottom: 6px;
    animation: motion 1s linear infinite;
  }
  /* truck suspension animation*/
  @keyframes motion {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(3px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  /* truck's tires */
  .truckTires {
    width: 130px;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px 0px 15px;
    position: absolute;
    bottom: 0;
  }
  .truckTires svg {
    width: 24px;
  }

  .road {
    width: 100%;
    height: 1.5px;
    background-color: #282828;
    position: relative;
    bottom: 0;
    align-self: flex-end;
    border-radius: 3px;
  }
  .road::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 100%;
    background-color: #282828;
    right: -50%;
    border-radius: 3px;
    animation: roadAnimation 1.4s linear infinite;
    border-left: 10px solid white;
  }
  .road::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 100%;
    background-color: #282828;
    right: -65%;
    border-radius: 3px;
    animation: roadAnimation 1.4s linear infinite;
    border-left: 4px solid white;
  }

  .lampPost {
    position: absolute;
    bottom: 0;
    right: -90%;
    height: 90px;
    animation: roadAnimation 1.4s linear infinite;
  }

  @keyframes roadAnimation {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-350px);
    }
  }`;

export const LoaderFive = () => {
    return (
        <StyledFive>
            <div className="typewriter">
                <div className="slide"><i /></div>
                <div className="paper" />
                <div className="keyboard" />
            </div>
        </StyledFive>
    );
}

const StyledFive = styled.div`
    .typewriter {
      --blue: #5C86FF;
      --blue-dark: #275EFE;
      --key: #fff;
      --paper: #EEF0FD;
      --text: #D3D4EC;
      --tool: #FBC56C;
      --duration: 3s;
      position: relative;
      -webkit-animation: bounce05 var(--duration) linear infinite;
      animation: bounce05 var(--duration) linear infinite;
    }
  
    .typewriter .slide {
      width: 92px;
      height: 20px;
      border-radius: 3px;
      margin-left: 14px;
      transform: translateX(14px);
      background: linear-gradient(var(--blue), var(--blue-dark));
      -webkit-animation: slide05 var(--duration) ease infinite;
      animation: slide05 var(--duration) ease infinite;
    }
  
    .typewriter .slide:before, .typewriter .slide:after,
    .typewriter .slide i:before {
      content: "";
      position: absolute;
      background: var(--tool);
    }
  
    .typewriter .slide:before {
      width: 2px;
      height: 8px;
      top: 6px;
      left: 100%;
    }
  
    .typewriter .slide:after {
      left: 94px;
      top: 3px;
      height: 14px;
      width: 6px;
      border-radius: 3px;
    }
  
    .typewriter .slide i {
      display: block;
      position: absolute;
      right: 100%;
      width: 6px;
      height: 4px;
      top: 4px;
      background: var(--tool);
    }
  
    .typewriter .slide i:before {
      right: 100%;
      top: -2px;
      width: 4px;
      border-radius: 2px;
      height: 14px;
    }
  
    .typewriter .paper {
      position: absolute;
      left: 24px;
      top: -26px;
      width: 40px;
      height: 46px;
      border-radius: 5px;
      background: var(--paper);
      transform: translateY(46px);
      -webkit-animation: paper05 var(--duration) linear infinite;
      animation: paper05 var(--duration) linear infinite;
    }
  
    .typewriter .paper:before {
      content: "";
      position: absolute;
      left: 6px;
      right: 6px;
      top: 7px;
      border-radius: 2px;
      height: 4px;
      transform: scaleY(0.8);
      background: var(--text);
      box-shadow: 0 12px 0 var(--text), 0 24px 0 var(--text), 0 36px 0 var(--text);
    }
  
    .typewriter .keyboard {
      width: 120px;
      height: 56px;
      margin-top: -10px;
      z-index: 1;
      position: relative;
    }
  
    .typewriter .keyboard:before, .typewriter .keyboard:after {
      content: "";
      position: absolute;
    }
  
    .typewriter .keyboard:before {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 7px;
      background: linear-gradient(135deg, var(--blue), var(--blue-dark));
      transform: perspective(10px) rotateX(2deg);
      transform-origin: 50% 100%;
    }
  
    .typewriter .keyboard:after {
      left: 2px;
      top: 25px;
      width: 11px;
      height: 4px;
      border-radius: 2px;
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
      -webkit-animation: keyboard05 var(--duration) linear infinite;
      animation: keyboard05 var(--duration) linear infinite;
    }
  
    @keyframes bounce05 {
      85%, 92%, 100% {
        transform: translateY(0);
      }
  
      89% {
        transform: translateY(-4px);
      }
  
      95% {
        transform: translateY(2px);
      }
    }
  
    @keyframes slide05 {
      5% {
        transform: translateX(14px);
      }
  
      15%, 30% {
        transform: translateX(6px);
      }
  
      40%, 55% {
        transform: translateX(0);
      }
  
      65%, 70% {
        transform: translateX(-4px);
      }
  
      80%, 89% {
        transform: translateX(-12px);
      }
  
      100% {
        transform: translateX(14px);
      }
    }
  
    @keyframes paper05 {
      5% {
        transform: translateY(46px);
      }
  
      20%, 30% {
        transform: translateY(34px);
      }
  
      40%, 55% {
        transform: translateY(22px);
      }
  
      65%, 70% {
        transform: translateY(10px);
      }
  
      80%, 85% {
        transform: translateY(0);
      }
  
      92%, 100% {
        transform: translateY(46px);
      }
    }
  
    @keyframes keyboard05 {
      5%, 12%, 21%, 30%, 39%, 48%, 57%, 66%, 75%, 84% {
        box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
      }
  
      9% {
        box-shadow: 15px 2px 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
      }
  
      18% {
        box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 2px 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
      }
  
      27% {
        box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 12px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
      }
  
      36% {
        box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 12px 0 var(--key), 60px 12px 0 var(--key), 68px 12px 0 var(--key), 83px 10px 0 var(--key);
      }
  
      45% {
        box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 2px 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
      }
  
      54% {
        box-shadow: 15px 0 0 var(--key), 30px 2px 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
      }
  
      63% {
        box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 12px 0 var(--key);
      }
  
      72% {
        box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 2px 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
      }
  
      81% {
        box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 12px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
      }
    }`;

export const LoaderSix = () => {
    return (
        <StyledSix>
            <div className="🤚">
                <div className="👉" />
                <div className="👉" />
                <div className="👉" />
                <div className="👉" />
                <div className="🌴" />
                <div className="👍" />
            </div>
        </StyledSix>
    );
}

const StyledSix = styled.div`
      .🤚 {
        --skin-color: #E4C560;
        --tap-speed: 0.6s;
        --tap-stagger: 0.1s;
        position: relative;
        width: 80px;
        height: 60px;
        margin-left: 80px;
      }
    
      .🤚:before {
        content: '';
        display: block;
        width: 180%;
        height: 75%;
        position: absolute;
        top: 70%;
        right: 20%;
        background-color: black;
        border-radius: 40px 10px;
        filter: blur(10px);
        opacity: 0.3;
      }
    
      .🌴 {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--skin-color);
        border-radius: 10px 40px;
      }
    
      .👍 {
        position: absolute;
        width: 120%;
        height: 38px;
        background-color: var(--skin-color);
        bottom: -18%;
        right: 1%;
        transform-origin: calc(100% - 20px) 20px;
        transform: rotate(-20deg);
        border-radius: 30px 20px 20px 10px;
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        border-left: 2px solid rgba(0, 0, 0, 0.1);
      }
    
      .👍:after {
        width: 20%;
        height: 60%;
        content: '';
        background-color: rgba(255, 255, 255, 0.3);
        position: absolute;
        bottom: -8%;
        left: 5px;
        border-radius: 60% 10% 10% 30%;
        border-right: 2px solid rgba(0, 0, 0, 0.05);
      }
    
      .👉 {
        position: absolute;
        width: 80%;
        height: 35px;
        background-color: var(--skin-color);
        bottom: 32%;
        right: 64%;
        transform-origin: 100% 20px;
        animation-duration: calc(var(--tap-speed) * 2);
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        transform: rotate(10deg);
      }
    
      .👉:before {
        content: '';
        position: absolute;
        width: 140%;
        height: 30px;
        background-color: var(--skin-color);
        bottom: 8%;
        right: 65%;
        transform-origin: calc(100% - 20px) 20px;
        transform: rotate(-60deg);
        border-radius: 20px;
      }
    
      .👉:nth-child(1) {
        animation-delay: 0;
        filter: brightness(70%);
        animation-name: tap-upper-1;
      }
    
      .👉:nth-child(2) {
        animation-delay: var(--tap-stagger);
        filter: brightness(80%);
        animation-name: tap-upper-2;
      }
    
      .👉:nth-child(3) {
        animation-delay: calc(var(--tap-stagger) * 2);
        filter: brightness(90%);
        animation-name: tap-upper-3;
      }
    
      .👉:nth-child(4) {
        animation-delay: calc(var(--tap-stagger) * 3);
        filter: brightness(100%);
        animation-name: tap-upper-4;
      }
    
      @keyframes tap-upper-1 {
        0%, 50%, 100% {
          transform: rotate(10deg) scale(0.4);
        }
    
        40% {
          transform: rotate(50deg) scale(0.4);
        }
      }
    
      @keyframes tap-upper-2 {
        0%, 50%, 100% {
          transform: rotate(10deg) scale(0.6);
        }
    
        40% {
          transform: rotate(50deg) scale(0.6);
        }
      }
    
      @keyframes tap-upper-3 {
        0%, 50%, 100% {
          transform: rotate(10deg) scale(0.8);
        }
    
        40% {
          transform: rotate(50deg) scale(0.8);
        }
      }
    
      @keyframes tap-upper-4 {
        0%, 50%, 100% {
          transform: rotate(10deg) scale(1);
        }
    
        40% {
          transform: rotate(50deg) scale(1);
        }
      }`;

export const LoaderEight = () => {
    return (
        <StyledEight>
            <div className="loader">
                <div className="loader-square" />
                <div className="loader-square" />
                <div className="loader-square" />
                <div className="loader-square" />
                <div className="loader-square" />
                <div className="loader-square" />
                <div className="loader-square" />
            </div>
        </StyledEight>
    );
}

const StyledEight = styled.div`
        @keyframes square-animation {
         0% {
          left: 0;
          top: 0;
         }
      
         10.5% {
          left: 0;
          top: 0;
         }
      
         12.5% {
          left: 32px;
          top: 0;
         }
      
         23% {
          left: 32px;
          top: 0;
         }
      
         25% {
          left: 64px;
          top: 0;
         }
      
         35.5% {
          left: 64px;
          top: 0;
         }
      
         37.5% {
          left: 64px;
          top: 32px;
         }
      
         48% {
          left: 64px;
          top: 32px;
         }
      
         50% {
          left: 32px;
          top: 32px;
         }
      
         60.5% {
          left: 32px;
          top: 32px;
         }
      
         62.5% {
          left: 32px;
          top: 64px;
         }
      
         73% {
          left: 32px;
          top: 64px;
         }
      
         75% {
          left: 0;
          top: 64px;
         }
      
         85.5% {
          left: 0;
          top: 64px;
         }
      
         87.5% {
          left: 0;
          top: 32px;
         }
      
         98% {
          left: 0;
          top: 32px;
         }
      
         100% {
          left: 0;
          top: 0;
         }
        }
      
        .loader {
         position: relative;
         width: 96px;
         height: 96px;
         transform: rotate(45deg);
        }
      
        .loader-square {
         position: absolute;
         top: 0;
         left: 0;
         width: 28px;
         height: 28px;
         margin: 2px;
         border-radius: 0px;
         background: white;
         background-size: cover;
         background-position: center;
         background-attachment: fixed;
         animation: square-animation 10s ease-in-out infinite both;
        }
      
        .loader-square:nth-of-type(0) {
         animation-delay: 0s;
        }
      
        .loader-square:nth-of-type(1) {
         animation-delay: -1.4285714286s;
        }
      
        .loader-square:nth-of-type(2) {
         animation-delay: -2.8571428571s;
        }
      
        .loader-square:nth-of-type(3) {
         animation-delay: -4.2857142857s;
        }
      
        .loader-square:nth-of-type(4) {
         animation-delay: -5.7142857143s;
        }
      
        .loader-square:nth-of-type(5) {
         animation-delay: -7.1428571429s;
        }
      
        .loader-square:nth-of-type(6) {
         animation-delay: -8.5714285714s;
        }
      
        .loader-square:nth-of-type(7) {
         animation-delay: -10s;
        }`;

export const LoaderSeven = () => {
    return (
        <StyledSeven>
            <div className="pl">
                <div className="pl__dot" />
                <div className="pl__dot" />
                <div className="pl__dot" />
                <div className="pl__dot" />
                <div className="pl__dot" />
                <div className="pl__dot" />
                <div className="pl__dot" />
                <div className="pl__dot" />
                <div className="pl__dot" />
                <div className="pl__dot" />
                <div className="pl__dot" />
                <div className="pl__dot" />
                <div className="pl__text">Loading…</div>
            </div>
        </StyledSeven>
    );
}

const StyledSeven = styled.div`
          .pl {
            box-shadow: 2em 0 2em rgba(0, 0, 0, 0.2) inset, -2em 0 2em rgba(255, 255, 255, 0.1) inset;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            transform: rotateX(30deg) rotateZ(45deg);
            width: 14em;
            height: 14em;
            color: white;
          }
        
          .pl, .pl__dot {
            border-radius: 50%;
          }
        
          .pl__dot {
            animation-name: shadow724;
            box-shadow: 0.1em 0.1em 0 0.1em black, 0.3em 0 0.3em rgba(0, 0, 0, 0.5);
            top: calc(50% - 0.75em);
            left: calc(50% - 0.75em);
            width: 1.5em;
            height: 1.5em;
          }
        
          .pl__dot, .pl__dot:before, .pl__dot:after {
            animation-duration: 2s;
            animation-iteration-count: infinite;
            position: absolute;
          }
        
          .pl__dot:before, .pl__dot:after {
            content: "";
            display: block;
            left: 0;
            width: inherit;
            transition: background-color var(--trans-dur);
          }
        
          .pl__dot:before {
            animation-name: pushInOut1724;
            background-color: var(--bg);
            border-radius: inherit;
            box-shadow: 0.05em 0 0.1em rgba(255, 255, 255, 0.2) inset;
            height: inherit;
            z-index: 1;
          }
        
          .pl__dot:after {
            animation-name: pushInOut2724;
            background-color: var(--primary1);
            border-radius: 0.75em;
            box-shadow: 0.1em 0.3em 0.2em rgba(255, 255, 255, 0.4) inset, 0 -0.4em 0.2em #2e3138 inset, 0 -1em 0.25em rgba(0, 0, 0, 0.3) inset;
            bottom: 0;
            clip-path: polygon(0 75%, 100% 75%, 100% 100%, 0 100%);
            height: 3em;
            transform: rotate(-45deg);
            transform-origin: 50% 2.25em;
          }
        
          .pl__dot:nth-child(1) {
            transform: rotate(0deg) translateX(5em) rotate(0deg);
            z-index: 5;
          }
        
          .pl__dot:nth-child(1), .pl__dot:nth-child(1):before, .pl__dot:nth-child(1):after {
            animation-delay: 0s;
          }
        
          .pl__dot:nth-child(2) {
            transform: rotate(-30deg) translateX(5em) rotate(30deg);
            z-index: 4;
          }
        
          .pl__dot:nth-child(2), .pl__dot:nth-child(2):before, .pl__dot:nth-child(2):after {
            animation-delay: -0.1666666667s;
          }
        
          .pl__dot:nth-child(3) {
            transform: rotate(-60deg) translateX(5em) rotate(60deg);
            z-index: 3;
          }
        
          .pl__dot:nth-child(3), .pl__dot:nth-child(3):before, .pl__dot:nth-child(3):after {
            animation-delay: -0.3333333333s;
          }
        
          .pl__dot:nth-child(4) {
            transform: rotate(-90deg) translateX(5em) rotate(90deg);
            z-index: 2;
          }
        
          .pl__dot:nth-child(4), .pl__dot:nth-child(4):before, .pl__dot:nth-child(4):after {
            animation-delay: -0.5s;
          }
        
          .pl__dot:nth-child(5) {
            transform: rotate(-120deg) translateX(5em) rotate(120deg);
            z-index: 1;
          }
        
          .pl__dot:nth-child(5), .pl__dot:nth-child(5):before, .pl__dot:nth-child(5):after {
            animation-delay: -0.6666666667s;
          }
        
          .pl__dot:nth-child(6) {
            transform: rotate(-150deg) translateX(5em) rotate(150deg);
            z-index: 1;
          }
        
          .pl__dot:nth-child(6), .pl__dot:nth-child(6):before, .pl__dot:nth-child(6):after {
            animation-delay: -0.8333333333s;
          }
        
          .pl__dot:nth-child(7) {
            transform: rotate(-180deg) translateX(5em) rotate(180deg);
            z-index: 2;
          }
        
          .pl__dot:nth-child(7), .pl__dot:nth-child(7):before, .pl__dot:nth-child(7):after {
            animation-delay: -1s;
          }
        
          .pl__dot:nth-child(8) {
            transform: rotate(-210deg) translateX(5em) rotate(210deg);
            z-index: 3;
          }
        
          .pl__dot:nth-child(8), .pl__dot:nth-child(8):before, .pl__dot:nth-child(8):after {
            animation-delay: -1.1666666667s;
          }
        
          .pl__dot:nth-child(9) {
            transform: rotate(-240deg) translateX(5em) rotate(240deg);
            z-index: 4;
          }
        
          .pl__dot:nth-child(9), .pl__dot:nth-child(9):before, .pl__dot:nth-child(9):after {
            animation-delay: -1.3333333333s;
          }
        
          .pl__dot:nth-child(10) {
            transform: rotate(-270deg) translateX(5em) rotate(270deg);
            z-index: 5;
          }
        
          .pl__dot:nth-child(10), .pl__dot:nth-child(10):before, .pl__dot:nth-child(10):after {
            animation-delay: -1.5s;
          }
        
          .pl__dot:nth-child(11) {
            transform: rotate(-300deg) translateX(5em) rotate(300deg);
            z-index: 6;
          }
        
          .pl__dot:nth-child(11), .pl__dot:nth-child(11):before, .pl__dot:nth-child(11):after {
            animation-delay: -1.6666666667s;
          }
        
          .pl__dot:nth-child(12) {
            transform: rotate(-330deg) translateX(5em) rotate(330deg);
            z-index: 6;
          }
        
          .pl__dot:nth-child(12), .pl__dot:nth-child(12):before, .pl__dot:nth-child(12):after {
            animation-delay: -1.8333333333s;
          }
        
          .pl__text {
            font-size: 0.75em;
            max-width: 5rem;
            position: relative;
            text-shadow: 0 0 0.1em var(--fg-t);
            transform: rotateZ(-45deg);
          }
        
          /* Animations */
          @keyframes shadow724 {
            from {
              animation-timing-function: ease-in;
              box-shadow: 0.1em 0.1em 0 0.1em black, 0.3em 0 0.3em rgba(0, 0, 0, 0.3);
            }
        
            25% {
              animation-timing-function: ease-out;
              box-shadow: 0.1em 0.1em 0 0.1em black, 0.8em 0 0.8em rgba(0, 0, 0, 0.5);
            }
        
            50%, to {
              box-shadow: 0.1em 0.1em 0 0.1em black, 0.3em 0 0.3em rgba(0, 0, 0, 0.3);
            }
          }
        
          @keyframes pushInOut1724 {
            from {
              animation-timing-function: ease-in;
              background-color: var(--bg);
              transform: translate(0, 0);
            }
        
            25% {
              animation-timing-function: ease-out;
              background-color: var(--primary2);
              transform: translate(-71%, -71%);
            }
        
            50%, to {
              background-color: var(--bg);
              transform: translate(0, 0);
            }
          }
        
          @keyframes pushInOut2724 {
            from {
              animation-timing-function: ease-in;
              background-color: var(--bg);
              clip-path: polygon(0 75%, 100% 75%, 100% 100%, 0 100%);
            }
        
            25% {
              animation-timing-function: ease-out;
              background-color: var(--primary1);
              clip-path: polygon(0 25%, 100% 25%, 100% 100%, 0 100%);
            }
        
            50%, to {
              background-color: var(--bg);
              clip-path: polygon(0 75%, 100% 75%, 100% 100%, 0 100%);
            }
          }`;        