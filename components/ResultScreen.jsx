import React, {useState} from 'react';
import styled from "@emotion/styled";

const ResultScreenWrap = styled.div`
    background-image: ${({bg}) => `url(${bg})`};
    background-size: cover;
    background-position: center;
    .bg_shade{
        background: rgba(0,0,0,0.5);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const ResultMessageContainer = styled.div`
    background: rgba(255,255,255,0.80);
    max-width: 800px;
    padding: 5vh 3.5vw;
    max-height: 75vh;
    border-radius: 10px;
    h1 {
      font-size: 34px;
      text-align: center;
      color: #0d274d;
      span {
        display: inline-block;
        padding-left: 10px;
      }
    }
    img {
        max-height: 20vh;
    }
`;

const ScoreWrap = styled.div`
    font-size: 40px;
    font-weight: 300;
    padding: 0.5rem 0;
`

export default ({ user, score }) => {

    return  <ResultScreenWrap bg={require('../img/background.jpg')}>
        <div className="bg_shade">
            <div>
                <ResultMessageContainer>
                    <h1>
                        Thank you for playing
                        <span>HACK ME SecCon 2020</span>
                        <span>Cyber Awareness Game</span>
                    </h1>
                    <div className="py-2 text-center">
                        <img draggable="false" src={require('../img/you_button.png')} alt="You are our best defence" />
                    </div>
                    <div className="d-flex justify-content-center mt-2 text-center">
                        <div>
                            <h4>Great Job {user.name}</h4>
                            <div>Here’s your HACK ME defense score:</div>
                            <ScoreWrap>{score}/10</ScoreWrap>
                        </div>
                    </div>
                </ResultMessageContainer>
            </div>
        </div>
    </ResultScreenWrap>
};
