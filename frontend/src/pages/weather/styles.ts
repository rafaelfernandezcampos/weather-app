import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  display: flex;
  justify-content: center;

  form {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Card = styled.div`
  border-radius: 10px;
  border: 2px solid;
  padding: 16px;
  width: 100%;
  background: #ccc;
  height: 300px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    margin-top: 80px;
  }

  button {
    cursor: pointer;
    background-color: #81c784;
    color: black;
    font-weight: bold;
    margin-top: 8px;
    border-radius: 10px;
    border: 2px;
    padding: 16px;
    width: 100%;
  }
`;
