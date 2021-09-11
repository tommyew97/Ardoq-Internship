import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  .header-text {
    color: #212121;
    font-size: 80px;
    font-family: "Roboto", sans-serif;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 300px;
    height: 320px;
    padding: 20px;
    margin: 40px;
    border-style: solid;
    border-width: 3px;
    border-radius: 10px;
    border-color: #303030;
    font-size: 22px;
    background-color: #fafafa;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 10px 20px,
      rgba(0, 0, 0, 0.45) 0px 6px 6px;
    word-wrap: break;
  }
  .text {
    font-family: "Roboto", sans-serif;
  }
`;
