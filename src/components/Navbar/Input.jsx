import * as React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";

const InputField = styled.div`
  display: flex;
  outline: none;
  &:focus {
    outline: none;
  }
  margin-right: 10px;
  @media (max-width: 772px) {
    & {
      display: none;
    }
  }
`;

const InputForm=styled.form`
  display:flex;
  align-items: flex-end;

`;

const InputArea = styled.input`
  width: 600px;
  height: 4vh;
  margin-top: 0.375vh;
  border-radius: 0;
  padding: 0;
  border: 0.2px solid grey;
  @media (max-width: 1200px) and (min-width: 992px) {
    & {
      width: 450px;
      height: 3vh;
    }
  }
`;

const Icon = styled.button`
  height: 4.25vh;
  background-color: #d6d6d6;
  @media (max-width: 1200px) and (min-width: 992px) {
    & {
      height: 3.15vh;
    }
  }
  border:none;
`;

export default function Input() {
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${input}`)
  }
  const [input,setInput] = React.useState(' ')
  return (
    <InputField>
      <InputForm action="" onSubmit={handleSubmit} >
        <InputArea placeholder="Search..." value={input} onChange={e => setInput(e.target.value)} />
        <Icon>
          <SearchIcon sx={{ padding: "8px 10px" }} />
        </Icon>
      </InputForm>
    </InputField>
  );
}
