import React, { useState } from 'react';
import PopUp from "./PopUp";

const questions = require('../data/questions.json');

export default ({ }) => {

    const [device, setDevice] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [currQues, setCurrQues] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [answeredDevices, setAnsweredDevices] = useState([]);

    const getQuestionByDevice = (device) => {
        const qs = questions.filter((i) => i.device === device);
        if(qs.length > 0)
            return qs[0];
        return null;
    };

    const handleClick = (device) => {
        setDevice(device);
        setCurrQues(getQuestionByDevice(device));
        setShowPopup(true);
    };

    const handleAnswer = (option) => {
        setAnsweredDevices([...answeredDevices, currQues.device]);
        const ans = [...answers, {
            "device": currQues.device,
            "question": currQues,
            "answer": option,
        }];
        setAnswers(ans);
        setShowPopup(false);
        setCurrQues(null);
    };

    const isDeviceAnswered = (device) => {
        return answeredDevices.some((i) => i===device);
    }

    console.log(answers);

    return <div className="d-flex align-items-center justify-content-center min-vh-100 bg-dark">
        <div id="popup-wrap">
            {showPopup && <PopUp isOpen={showPopup}>
                <div
                    className="card bg-warning d-flex align-items-center justify-content-center p-3"
                    style={{ width: '100%', minWidth: '500px', minHeight: '50vh' }}
                >
                    <div className="row mx-0">
                        <div className="col-md-12 px-0">
                            <h3>You clicked on {device}</h3>
                            <hr />
                        </div>
                        <div className="col-md-8 px-1">
                            <div className="w-100">
                                {currQues && <div>
                                    <div className="py-2 mb-2 font-weight-bold">{currQues.question}</div>
                                    {(currQues && currQues.options.length > 0) && currQues.options.map((o) =>
                                        <button
                                            onClick={() => handleAnswer(o)}
                                            className="btn w-100 my-1 shadow-sm text-left font-weight-bold btn-light p-2"
                                        >
                                            {o.label}
                                        </button>
                                    )}
                                </div>}
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-center px-2">
                            <img alt={device} style={{ width: '220px', maxWidth: '100%' }} src={require(`../img/icon/${device}.png`)} />
                        </div>
                        <div className="col-12 px-2">
                            <hr />
                            <button
                                className="btn btn-danger font-weight-bold w-100 px-2"
                                onClick={() => setShowPopup(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </PopUp>}
        </div>
        <div style={{ maxWidth: '90vw', maxHeight: '85vh', overflow: 'auto'}}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="1920" height="1080"
                viewBox="0 0 1920 1080"
            >
                <defs>
                    <style dangerouslySetInnerHTML={{ __html: `.a{clip - path:url(#c);}.b{fill:url(#a);}.c{fill:#fff;}`}} />
                    <pattern id="a" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1600 901">
                        <image width="1600" height="901" xlinkHref="https://i.imgur.com/wf4OxUy.jpg"/>
                    </pattern>
                    <clipPath id="c">
                        <rect width="1920" height="1080"/>
                    </clipPath>
                    <image id="d" width="50" height="50" xlinkHref="https://i.imgur.com/j97q0aM.png"/>
                </defs>
                <g id="b" className="a">
                    <rect className="c" width="1920" height="1080"/>
                    <rect className="b" width="1920" height="1080.5" transform="translate(0 0)"/>
                    {!isDeviceAnswered('pc') && <use transform="translate(1683 490)" onClick={() => handleClick('pc')} xlinkHref="#d"/>}
                    {!isDeviceAnswered('id') && <use transform="translate(1747 481)" onClick={() => handleClick('id')} xlinkHref="#d"/>}
                    {!isDeviceAnswered('smart_speaker') && <use transform="translate(1031 720)" onClick={() => handleClick('smart_speaker')} xlinkHref="#d"/>}
                    {!isDeviceAnswered('tv') && <use transform="translate(1177 490)" onClick={() => handleClick('tv')} xlinkHref="#d"/>}
                    {!isDeviceAnswered('cctv') && <use transform="translate(943 310)"  onClick={() => handleClick('cctv')} xlinkHref="#d"/>}
                    {!isDeviceAnswered('watch') && <use transform="translate(107 633)"  onClick={() => handleClick('watch')} xlinkHref="#d"/>}
                    {!isDeviceAnswered('router') && <use transform="translate(1073 619)" onClick={() => handleClick('router')} xlinkHref="#d"/>}
                    {!isDeviceAnswered('phone') && <use transform="translate(10 644)"   onClick={() => handleClick('phone')} xlinkHref="#d"/>}
                    {!isDeviceAnswered('laptop') && <use transform="translate(1790 540)" onClick={() => handleClick('laptop')} xlinkHref="#d"/>}
                </g>
            </svg>
        </div>
    </div>;

}
