import React from 'react';
import styled from 'styled-components';

export const TooltipOne = () => {
    return (
        <StyledOne>
            <div className="tooltip-container">
                <div className="tooltip">
                    <div className="profile">
                        <div className="user">
                            <div className="img">Ui</div>
                            <div className="details">
                                <div className="name">Bimadev</div>
                                <div className="username">@biimaa_jo</div>
                            </div>
                        </div>
                        <div className="about">1k+ Followers</div>
                    </div>
                </div>
                <div className="text">
                    <a className="icon" href="#">
                        <div className="layer">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span className="instagramSVG">
                                <svg fill="white" className="svgIcon" viewBox="0 0 448 512" height="1.5em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </span>
                        </div>
                        <div className="text">Instagram</div>
                    </a>
                </div>
            </div>
        </StyledOne>
    );
}
const StyledOne = styled.div`
  .tooltip-container {
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 17px;
    border-radius: 10px;
  }

  .tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 15px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  }

  .profile {
    background: #2a2b2f;
    border-radius: 10px 15px;
    padding: 10px;
    border: 1px solid #52382f;
  }

  .tooltip-container:hover .tooltip {
    top: -150px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .icon {
    text-decoration: none;
    color: #fff;
    display: block;
    position: relative;
  }
  .layer {
    width: 55px;
    height: 55px;
    transition: transform 0.3s;
  }
  .icon:hover .layer {
    transform: rotate(-35deg) skew(20deg);
  }
  .layer span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #fff;
    border-radius: 15px;
    transition: all 0.3s;
  }

  .layer span,
  .text {
    color: #e6683c;
    border-color: #e6683c;
  }

  .icon:hover.layer span {
    box-shadow: -1px 1px 3px #e6683c;
  }
  .icon .text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    font-weight: 500;
    transform: translateX(-50%);
    transition: bottom 0.3s ease, opacity 0.3s ease;
  }
  .icon:hover .text {
    bottom: -35px;
    opacity: 1;
  }

  .icon:hover .layer span:nth-child(1) {
    opacity: 0.2;
  }
  .icon:hover .layer span:nth-child(2) {
    opacity: 0.4;
    transform: translate(5px, -5px);
  }
  .icon:hover .layer span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }
  .icon:hover .layer span:nth-child(4) {
    opacity: 0.8;
    transform: translate(15px, -15px);
  }
  .icon:hover .layer span:nth-child(5) {
    opacity: 1;
    transform: translate(20px, -20px);
  }

  .instagramSVG {
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }
  .user {
    display: flex;
    gap: 10px;
  }
  .img {
    width: 50px;
    height: 50px;
    font-size: 25px;
    font-weight: 700;
    border: 1px solid #e6683c;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }
  .name {
    font-size: 17px;
    font-weight: 700;
    color: #e6683c;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 0;
    color: #fff;
  }
  .about {
    color: #ccc;
    padding-top: 5px;
  }`;
export const TooltipTwo = () => {
    return (
        <StyledTwo>
            <div className="tooltip-container">
                <span className="text">
                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} className="bi bi-send-fill" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                    </svg>
                </span>
                <span className="tooltip1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                    </svg>
                </span>
                <span className="tooltip2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                </span>
                <span className="tooltip3">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                </span>
                <span className="tooltip4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className="bi bi-discord" viewBox="0 0 16 16">
                        <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                    </svg>
                </span>
                <span className="tooltip5">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className="bi bi-pinterest" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
                    </svg>
                </span>
                <span className="tooltip6">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z" />
                    </svg>
                </span>
                <span className="tooltip7">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                </span>
                <span className="tooltip8">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className="bi bi-reddit" viewBox="0 0 16 16">
                        <path d="M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z" />
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165" />
                    </svg>
                </span>
                <span className="tooltip9"> </span>
            </div>
        </StyledTwo>
    );
}
const StyledTwo = styled.div`
    /* This is an example, feel free to delete this code */
    .tooltip-container {
      background: rgb(3, 169, 244);
      background: linear-gradient(
        138deg,
        rgba(3, 169, 244, 1) 15%,
        rgba(63, 180, 233, 1) 65%
      );
      position: relative;
      cursor: pointer;
      font-size: 17px;
      padding: 0.7em 0.7em;
      border-radius: 50px;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    }
    .tooltip-container:hover {
      background: #fff;
      transition: all 0.6s;
    }
    .tooltip-container .text {
      display: flex;
      align-items: center;
      justify-content: center;
      fill: #fff;
      transition: all 0.2s;
    }
    .tooltip-container:hover .text {
      fill: rgb(3, 169, 244);
      transition: all 0.6s;
    }
  
    /* Inicio do tooltip twitter */
    .tooltip1 {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      visibility: hidden;
      background: #fff;
      fill: #03a9f4;
      padding: 10px;
      border-radius: 50px;
      transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
      z-index: 1;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  
    .tooltip-container:hover .tooltip1 {
      top: 150%;
      opacity: 1;
      visibility: visible;
      background: #fff;
      border-radius: 50px;
      transform: translate(-50%, -5px);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .tooltip-container:hover .tooltip1:hover {
      background: #03a9f4;
      fill: #fff;
    }
    /* Fim do tooltip twitter */
  
    /* Inicio do tooltip facebook */
    .tooltip2 {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      visibility: hidden;
      background: #fff;
      fill: #0462df;
      padding: 10px;
      border-radius: 50px;
      transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
      z-index: 1;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  
    .tooltip-container:hover .tooltip2 {
      top: -120%;
      opacity: 1;
      visibility: visible;
      background: #fff;
      transform: translate(-50%, -5px);
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .tooltip-container:hover .tooltip2:hover {
      background: #0462df;
      fill: #fff;
    }
    /* Fim do tooltip facebook */
  
    /* Inicio do tooltip whatsApp */
    .tooltip3 {
      position: absolute;
      top: 100%;
      left: 60%;
      transform: translateX(80%);
      opacity: 0;
      visibility: hidden;
      background: #fff;
      fill: #1db954;
      padding: 10px;
      border-radius: 50px;
      transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
      z-index: 1;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  
    .tooltip-container:hover .tooltip3 {
      top: 10%;
      opacity: 1;
      visibility: visible;
      background: #fff;
      transform: translate(85%, -5px);
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .tooltip-container:hover .tooltip3:hover {
      background: #1db954;
      fill: #fff;
    }
    /* Fim do tooltip whatsApp */
  
    /* Inicio do tooltip Discord */
    .tooltip4 {
      position: absolute;
      top: 100%;
      left: -190%;
      transform: translateX(70%);
      opacity: 0;
      visibility: hidden;
      background: #fff;
      fill: #8c9eff;
      padding: 10px;
      border-radius: 50px;
      transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
      z-index: 1;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  
    .tooltip-container:hover .tooltip4 {
      top: 10%;
      opacity: 1;
      visibility: visible;
      background: #fff;
      transform: translate(70%, -5px);
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .tooltip-container:hover .tooltip4:hover {
      background: #8c9eff;
      fill: #fff;
    }
    /* Fim do tooltip Discord */
  
    /* Inicio do tooltip pinterest */
    .tooltip5 {
      position: absolute;
      top: 100%;
      left: -145%;
      transform: translateX(70%);
      opacity: 0;
      visibility: hidden;
      background: #fff;
      fill: #bd081c;
      padding: 10px;
      border-radius: 50px;
      transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
      z-index: 1;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  
    .tooltip-container:hover .tooltip5 {
      top: -78%;
      opacity: 1;
      visibility: visible;
      background: #fff;
      transform: translate(70%, -5px);
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .tooltip-container:hover .tooltip5:hover {
      background: #bd081c;
      fill: #fff;
    }
    /* Fim do tooltip pinterest */
  
    /* Inicio do tooltip dribbble */
    .tooltip6 {
      position: absolute;
      top: 100%;
      left: 35%;
      transform: translateX(70%);
      opacity: 0;
      visibility: hidden;
      background: #fff;
      fill: #ea4c89;
      padding: 10px;
      border-radius: 50px;
      transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
      z-index: 1;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  
    .tooltip-container:hover .tooltip6 {
      top: -79%;
      opacity: 1;
      visibility: visible;
      background: #fff;
      transform: translate(70%, -5px);
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .tooltip-container:hover .tooltip6:hover {
      background: #ea4c89;
      fill: #fff;
    }
    /* Fim do tooltip dribbble */
  
    /* Inicio do tooltip github */
    .tooltip7 {
      position: absolute;
      top: 100%;
      left: 39%;
      transform: translateX(70%);
      opacity: 0;
      visibility: hidden;
      background: #fff;
      fill: #000;
      padding: 10px;
      border-radius: 50px;
      transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
      z-index: 1;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  
    .tooltip-container:hover .tooltip7 {
      top: 104%;
      opacity: 1;
      visibility: visible;
      background: #fff;
      transform: translate(70%, -5px);
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .tooltip-container:hover .tooltip7:hover {
      background: #000;
      fill: #fff;
    }
    /* Fim do tooltip github */
  
    /* Inicio do tooltip reddit */
    .tooltip8 {
      position: absolute;
      top: 100%;
      left: -150%;
      transform: translateX(70%);
      opacity: 0;
      visibility: hidden;
      background: #fff;
      fill: #ff4500;
      padding: 10px;
      border-radius: 50px;
      transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
      z-index: 1;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  
    .tooltip-container:hover .tooltip8 {
      top: 101%;
      opacity: 1;
      visibility: visible;
      background: #fff;
      transform: translate(70%, -5px);
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .tooltip-container:hover .tooltip8:hover {
      background: #ff4500;
      fill: #fff;
    }
    /* Fim do tooltip reddit */
  
    /* Inicio do tooltip fixo */
    .tooltip9 {
      position: absolute;
      top: 0;
      left: -115%;
      opacity: 0;
      visibility: hidden;
      width: 150px;
      height: 150px;
      z-index: -1;
    }
  
    .tooltip-container:hover .tooltip9 {
      top: -110%;
      opacity: 1;
      visibility: visible;
      border-radius: 50%;
      z-index: -1;
    }
    /* Fim do tooltip fixo */
    /* Por meio desse ultimo tooltip todos os outros podem
    ficar fixos quando houver no principal, para vê-lo dê um
    background black acima*/`;
export const TooltipThree = () => {
    return (
        <StyledThree>
            <div className="item-hints">
                <div className="hint" data-position={4}>
                    <span className="hint-radius" />
                    <span className="hint-dot">Tip</span>
                    <div className="hint-content do--split-children">
                        <p>Use Navbar to navigate the website quickly and easily.</p>
                    </div>
                </div>
            </div>
        </StyledThree>
    );
}
const StyledThree = styled.div`
      .item-hints {
        --purple: #720c8f;
        cursor: pointer;
        display: flex;
        justify-content: flex-start;
        padding-right: 170px;
      }
      .item-hints .hint {
        margin: 150px auto;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .item-hints .hint-dot {
        z-index: 3;
        border: 1px solid #ffe4e4;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        -webkit-transform: translate(-0%, -0%) scale(0.95);
        transform: translate(-0%, -0%) scale(0.95);
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      .item-hints .hint-radius {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -125px 0 0 -125px;
        opacity: 0;
        visibility: hidden;
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      .item-hints .hint[data-position="1"] .hint-content {
        top: 85px;
        left: 50%;
        margin-left: 56px;
      }
      .item-hints .hint-content {
        width: 300px;
        position: absolute;
        z-index: 5;
        padding: 35px 0;
        opacity: 0;
        transition: opacity 0.7s ease, visibility 0.7s ease;
        color: #fff;
        visibility: hidden;
        pointer-events: none;
      }
      .item-hints .hint:hover .hint-content {
        position: absolute;
        z-index: 5;
        padding: 35px 0;
        opacity: 1;
        -webkit-transition: opacity 0.7s ease, visibility 0.7s ease;
        transition: opacity 0.7s ease, visibility 0.7s ease;
        color: #fff;
        visibility: visible;
        pointer-events: none;
      }
      .item-hints .hint-content::before {
        width: 0px;
        bottom: 29px;
        left: 0;
        content: "";
        background-color: #fff;
        height: 1px;
        position: absolute;
        transition: width 0.4s;
      }
      .item-hints .hint:hover .hint-content::before {
        width: 180px;
        transition: width 0.4s;
      }
      .item-hints .hint-content::after {
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%;
        -webkit-transform: rotate(-225deg);
        transform: rotate(-225deg);
        bottom: 29px;
        left: 0;
        width: 80px;
        content: "";
        background-color: #fff;
        height: 1px;
        position: absolute;
        opacity: 1;
        -webkit-transition: opacity 0.5s ease;
        transition: opacity 0.5s ease;
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
      }
      .item-hints .hint:hover .hint-content::after {
        opacity: 1;
        visibility: visible;
      }
      .item-hints .hint[data-position="4"] .hint-content {
        bottom: 85px;
        left: 50%;
        margin-left: 56px;
}`;
export const TooltipFour = () => {
  return (
    <div className="relative group inline-block">
      <div className="bg-white py-2 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center gap-4 transition-transform duration-300 ease-out transform group-hover:-translate-y-1">
        <svg className="transition-colors duration-200 group-hover:text-yellow-500" width={25} height={25} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.2 1.75H8.1L6.3 0H1.8C0.81 0 0 0.7875 0 1.75V12.25C0 13.2125 0.81 14 1.8 14H15.165L18 9.1875V3.5C18 2.5375 17.19 1.75 16.2 1.75Z" fill="#FFA000" />
          <path d="M16.2 2H1.8C0.81 2 0 2.77143 0 3.71429V12.2857C0 13.2286 0.81 14 1.8 14H16.2C17.19 14 18 13.2286 18 12.2857V3.71429C18 2.77143 17.19 2 16.2 2Z" fill="#FFCA28" />
        </svg>
        <p className="font-medium text-gray-700 transition-colors duration-200 group-hover:text-yellow-600">
          Project Structure
        </p>
      </div>
      <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-300 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 ease-out z-10">
        <ul className="p-4 space-y-1 text-gray-600 font-light">
          <li className="flex items-center gap-2">
            <span>📁</span> <span className="ml-1">src</span>
          </li>
          <li className="flex items-center gap-2 pl-4">
            <span>📁</span> <span className="ml-1">app</span>
          </li>
          <li className="flex items-center gap-2 pl-8">
            <span>📄</span> <span className="ml-1">layout.js</span>
          </li>
          <li className="flex items-center gap-2 pl-8">
            <span>📄</span> <span className="ml-1">page.js</span>
          </li>
          <li className="flex items-center gap-2 pl-4">
            <span>📁</span> <span className="ml-1">components</span>
          </li>
          <li className="flex items-center gap-2 pl-8">
            <span>📄</span> <span className="ml-1">header.js</span>
          </li>
          <li className="flex items-center gap-2 pl-8">
            <span>📄</span> <span className="ml-1">footer.js</span>
          </li>
          <li className="flex items-center gap-2 pl-4">
            <span>📁</span> <span className="ml-1">styles</span>
          </li>
          <li className="flex items-center gap-2 pl-8">
            <span>📄</span> <span className="ml-1">globals.css</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

