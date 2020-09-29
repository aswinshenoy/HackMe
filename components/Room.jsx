import React, {useEffect, useState} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import styled from "@emotion/styled";
import PopUp from "./PopUp";

import ScenarioPopUp from "./ScenarioPopUp";
import devices from "./devicesData";
import ExploitPopUp from "./ExploitPopUp";
import CountDownBar from "./CountDownBar";

const RoomWrapper = styled.div`
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const InstructionText = styled.div`
  position: absolute;
  bottom: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #AAA;
  font-weight: 300;
  user-select: none;
  div {
    max-width: 600px;
  }
`;

const SubmissionButton = styled.button`
   position: absolute;
   right: 5vw;
   bottom: 3.5vh;
   padding: 1rem 2.5rem;
   border-radius: 10px;
   font-weight: 600;
   font-size: 18px;
   text-transform: uppercase;
   border: none!important;
   background: #e2231a;
   color: white;
   &:focus, &:hover {
      outline: none!important;
      background: white;
      color: #e2231a;
   }
`;

export default ({ onFinish, }) => {

    const [showPopup, setShowPopup] = useState(false);
    const [currQues, setCurrQues] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [answeredDevices, setAnsweredDevices] = useState([]);
    const [sound, setSound] = useState('');
    const [startTime, setStartTime] = useState(new Date());
    const [isHacked, setHacked] = useState(false);

    useEffect(() => {
        setSound("./bgm.mp3");
    }, [])

    const getQuestionByDevice = (device) => {
        const qs = devices.filter((i) => i.id === device);
        if(qs.length > 0)
            return qs[0];
        return null;
    };

    const handleClick = (device) => {
        setCurrQues(getQuestionByDevice(device));
        setShowPopup(true);
    };

    const handleAnswer = (option) => {
        setAnsweredDevices([...answeredDevices, currQues.id]);
        const ans = [...answers, {
            "id": currQues.id,
            "device": currQues.device,
            "question": currQues,
            "answer": option,
        }];
        setAnswers(ans);
        setShowPopup(false);
        setCurrQues(null);
    };

    const isDeviceAnswered = (device) => answeredDevices.some((i) => i===device);

    const hasSecuredDevice = (device) => {
        const ans = answers.find((i) => i.id === device);
        return !!(ans && ans['answer'] && ans['answer']['correct']);
    }

    const isDeviceExploited = (device) => {
        if(!isDeviceAnswered(device))
            return true;
        return !hasSecuredDevice(device);
    };

    const calculateScore = () => {
        let score = 0;
        answers.forEach((a) =>{ if(a.answer.correct) score ++; })
        return score;
    };

    const getExpiryTime = () => new Date(startTime.getTime() + 5*60000);

    const handleOnHack = () => { setSound(''); setHacked(true) };

    return <RoomWrapper>
        <AudioPlayer
            src={sound} autoPlayAfterSrcChange loop
            customControlsSection={[<div />]}  showJumpControls={false}
            onEnded={() => setSound(null)} customProgressBarSection={[<div />]}
            customVolumeControls={[<div />]} customAdditionalControls={[<div />]}
        />
        <div id="popup-wrap">
            {showPopup && <PopUp isOpen={showPopup}>
                {!isHacked ?
                    <ScenarioPopUp {...currQues} onAnswer={handleAnswer} onClose={() => setShowPopup(false)}/> :
                    <ExploitPopUp {...currQues} onClose={() => setShowPopup(false)} />
                }
            </PopUp>}
        </div>
        {!isHacked && <CountDownBar timestamp={getExpiryTime()} total={60*5} onEnd={handleOnHack} />}
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100vw" height="100vh"
                viewBox="0 0 1920 1080"
            >
                <defs>
                    <style dangerouslySetInnerHTML={{ __html: `.a{clip - path:url(#c);}.b{fill:url(#a);}.c{fill:#fff;}`}} />
                    <pattern  id="a" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1600 901">
                        <image width="1600" height="901" xlinkHref={require('../img/background.jpg')} />
                    </pattern>
                    <clipPath id="c">
                        <rect width="1920" height="1080"/>
                    </clipPath>
                    <image id="blue_circle" width="30" height="30" xlinkHref="https://img.icons8.com/emoji/2x/blue-circle-emoji.png"/>
                    <image id="red_circle" width="30" height="30" xlinkHref="https://img.icons8.com/emoji/2x/red-circle-emoji.png" />
                </defs>
                <g id="b" className="a">
                    <rect className="c" width="1920" height="1080"/>
                    <rect className="b" width="1920" height="1080.5" transform="translate(0 0)"/>
                    {!isHacked ? <React.Fragment>
                        {!isDeviceAnswered(7) && <use transform="translate(1683 490)" onClick={() => handleClick(7)} xlinkHref="#blue_circle"/>}
                        {!isDeviceAnswered(4) && <rect onClick={() => handleClick(4)} id="hidden_1" data-name="hidden_1" width="47" height="70" transform="matrix(1, -0.017, 0.017, 1, 1725.99, 479.878)" fill="#fff" opacity="0.02"/>}
                        {!isDeviceAnswered(8) && <use transform="translate(1031 720)" onClick={() => handleClick(8)} xlinkHref="#blue_circle"/>}
                        {!isDeviceAnswered(9) && <rect id="hidden_2" data-name="hidden_2" width="187" height="139" transform="matrix(1, -0.017, 0.017, 1, 1032.799, 401.389)" fill="#fff" opacity="0.02" onClick={() => handleClick(9)} />}
                        {!isDeviceAnswered(10) && <use transform="translate(943 310)"  onClick={() => handleClick(10)} xlinkHref="#blue_circle"/>}
                        {!isDeviceAnswered(6) && <use transform="translate(107 633)"  onClick={() => handleClick(6)} xlinkHref="#blue_circle"/>}
                        {!isDeviceAnswered(1) && <use transform="translate(1073 619)" onClick={() => handleClick(1)} xlinkHref="#blue_circle"/>}
                        {!isDeviceAnswered(3) && <use transform="translate(25 644)"   onClick={() => handleClick(3)} xlinkHref="#blue_circle"/>}
                        {!isDeviceAnswered(2) && <use transform="translate(1790 540)" onClick={() => handleClick(2)} xlinkHref="#blue_circle"/>}
                        {!isDeviceAnswered(5) && <use transform="translate(367 317)" onClick={() => handleClick(5)} xlinkHref="#blue_circle"/>}
                    </React.Fragment> :
                    <React.Fragment>
                        {isDeviceExploited(7) && <use transform="translate(1683 490)" onClick={() => handleClick(7)} xlinkHref="#red_circle"/>}
                        {isDeviceExploited(4) && <use transform="translate(1747 481)" onClick={() => handleClick(4)} xlinkHref="#red_circle"/>}
                        {isDeviceExploited(8) && <use transform="translate(1031 720)" onClick={() => handleClick(8)} xlinkHref="#red_circle"/>}
                        {isDeviceExploited(9) && <use transform="translate(1177 490)" onClick={() => handleClick(9)} xlinkHref="#red_circle"/>}
                        {isDeviceExploited(10) && <use transform="translate(943 310)"  onClick={() => handleClick(10)} xlinkHref="#red_circle"/>}
                        {isDeviceExploited(6) && <use transform="translate(107 633)"  onClick={() => handleClick(6)} xlinkHref="#red_circle"/>}
                        {isDeviceExploited(1) && <use transform="translate(1073 619)" onClick={() => handleClick(1)} xlinkHref="#red_circle"/>}
                        {isDeviceExploited(3) && <use transform="translate(25 644)"   onClick={() => handleClick(3)} xlinkHref="#red_circle"/>}
                        {isDeviceExploited(2) && <use transform="translate(1790 540)" onClick={() => handleClick(2)} xlinkHref="#red_circle"/>}
                        {isDeviceExploited(5) && <use transform="translate(367 317)" onClick={() => handleClick(5)} xlinkHref="#red_circle"/>}
                    </React.Fragment>}
                </g>
            </svg>
        </div>
        <InstructionText>
            <div>{!isHacked ?
                'Click on the Blue dots to setup your devices, YOU are our best defense.' :
                'Click on the Red dots to learn how the hacker exploited the devices.'
            }</div>
        </InstructionText>
        {!isHacked ?
            answeredDevices.length > 5 ? <SubmissionButton onClick={handleOnHack}>
                Hack Me
            </SubmissionButton> : null :
            <SubmissionButton onClick={() => onFinish(calculateScore())}>End Game</SubmissionButton>
        }
    </RoomWrapper>;

}