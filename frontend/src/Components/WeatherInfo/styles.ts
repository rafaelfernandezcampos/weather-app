import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  border-radius: 10px;
  border: 2px solid;
  padding: 16px;
  width: 100%;
  background: #ccc;
  height: 500px;
  width: 600px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  button {
    cursor: pointer;
    background-color: #80bdff;
    color: black;
    font-weight: bold;
    margin-top: 8px;
    border-radius: 10px;
    border: 2px;
    padding: 16px;
    width: 100%;
  }
`;
