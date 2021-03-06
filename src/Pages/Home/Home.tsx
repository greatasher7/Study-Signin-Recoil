import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { signInfoAtom } from '../../Store/Atoms';
import { InputID, InputPW } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const signInfo = useRecoilValue(signInfoAtom);
  const setSignInfo = useSetRecoilState(signInfoAtom);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const doSignin = () => {
    setSignInfo({
      ...signInfo,
      userID: id,
      userPW: password,
    });
  };

  const completeSignin = () => {
    setSignInfo({
      ...signInfo,
      isSign: true,
    });
  };

  useEffect(() => {
    console.log(signInfo);
  }, []);

  return (
    <Container>
      <div className="input_container">
        <InputID
          setState={(value) => {
            setId(value);
          }}
        />
        <InputPW
          setState={(value) => {
            setPassword(value);
          }}
        />
        <BtnContainer>
          <Button
            onClick={() => {
              doSignin();
              completeSignin();
            }}
            label="Log in"
          />
          <Button
            onClick={() => {
              navigate('/signup');
            }}
            label="Sign up"
          />
        </BtnContainer>
      </div>
      <SigninIngoBox>
        <h4>UserID : {signInfo.userID}</h4>
        <h4>UserPW : {signInfo.userPW}</h4>
      </SigninIngoBox>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  .input_container {
    width: 50%;
    height: 500px;
    border: 1px solid #97d0f1;
    border-radius: 20px;
    display: grid;
    align-content: start;
    padding: 50px 80px;
    grid-gap: 50px;
  }
`;

const BtnContainer = styled.div`
  margin-top: 100px;
  display: grid;
  grid-gap: 20px;
`;

const SigninIngoBox = styled.div``;
