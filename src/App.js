import React, { useState } from "react";
import styled from "styled-components";
import { BsEyeSlash, BsEye } from "react-icons/bs";

function App() {
  const [passwordData, setPasswordData] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    setPasswordData(e.target.value);
  };

  const handleShowPassowrd = () => {
    setShowPassword(!showPassword);
  };

  return (
    <AppContainer>
      <InputWrapper>
        <Header>Password</Header>
        <SearchWrapper>
          <SearchInput placeholder="Enter your password" value={passwordData} onChange={handleInput} type={showPassword ? "text" : "password"} />
          <IconWrapper>{
            showPassword ? <BsEyeSlash onClick={handleShowPassowrd} /> : <BsEye onClick={handleShowPassowrd} />
          }</IconWrapper>
        </SearchWrapper>
      </InputWrapper>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color:#F5F3F1;   
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
 `;

const Header = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  color:#383634;
  user-select: none;
  font-family: "Archia-Regular";
`;

const SearchWrapper = styled.div`
  height:44px;
  width: 350px;
  position: relative;

`;

const SearchInput = styled.input`
  width: 100%;
  height: inherit;
  padding-left: 20px;
  padding-right: 50px;
  box-sizing: border-box;
  border-radius: 10px;
   
  
  color: #1e1e2f;
  border: 1px solid #EDEAE7;;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 46px 50px;
  font-size: 14px;
  transition: all 0.4s ease;

  ::placeholder {
    font-family: "Archia-Regular";
    opacity: 0.5;
    user-select: none;
  }

  :focus {
    border: 1px solid #3B4859;
    transition: all 0.4s ease;
  }
`;

const IconWrapper = styled.div`
  width: 2rem;
  height: 100%;
  position: absolute;
  right:10px;
  top: 0;
  cursor: pointer;
 
  display: flex;
  align-items: center;
  justify-content: center;
  color: #383634;;

  svg{
    width: 65%;
    height: 100%;
  }
`
