import React, { useState } from 'react';
import styled from '@emotion/styled'

const LoginPageWrap = styled.section`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(-135deg, #c850c0, #4158d0);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const LoginCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  width: 100vw;
  max-width: 800px;
  .col-md-6 {
    min-height: 65vh;
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    margin-bottom: 5vh;
  }
`

const TextInputWrap = styled.div`
   background: #EEEEEE;
   border-radius: 2rem;
   padding: 0.5rem 2rem;
   margin: 1rem 0;
   input {
      border: none!important;
      background: transparent!important;
      &:hover, &:focus {
        outline: none!important;
      }
      width: 80%;
   }
`;

const SubmitButton = styled.button`
    text-transform: uppercase;
    background: #57b846;
    border: none!important;
    padding: 0.75rem 1rem;
    border-radius: 2rem;
    font-weight: 600;
    color: white;
    width: 100%;
    &:hover {
      background: #333;
      color: white;
      outline: none!important;
    }
`

export default ({ onComplete }) => {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = () => {
        onComplete({ name, gender });
    }

    return <LoginPageWrap>
        <LoginCard>
            <div className="row h-100 mx-0">
                <div className="col-md-6 px-1">

                </div>
                <div className="col-md-6 px-4 h-100 d-flex align-items-center justify-content-center">
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                        <h1>SECURE YOUR SMART DEVICES or GET HACKED</h1>
                        <form onSubmit={handleSubmit}>
                            <TextInputWrap>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => { setName(e.currentTarget.value)}}
                                />
                            </TextInputWrap>
                            <TextInputWrap>
                                <input
                                    type="text"
                                    name="gender"
                                    placeholder="Gender"
                                    value={gender}
                                    onChange={(e) => { setGender(e.currentTarget.value)}}
                                />
                            </TextInputWrap>
                            <SubmitButton
                                type="submit"
                            >
                                Start Game
                            </SubmitButton>
                        </form>
                    </div>
                </div>
            </div>
        </LoginCard>
    </LoginPageWrap>
}