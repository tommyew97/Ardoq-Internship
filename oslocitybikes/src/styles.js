import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  .header-text {
    color: #212121;
    font-size: 30px;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .card {
    width: 200px;
    height: 200px;
    padding: 20px;
  }
`;
