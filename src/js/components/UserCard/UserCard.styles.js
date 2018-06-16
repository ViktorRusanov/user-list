import styled from 'styled-components';

const Wrapper = styled.div`
  width: 400px;
  border: 1px solid black;
  button {
    margin: 10px;
  }
`;
const WrapperRow = styled.div`
   display: flex;
   justify-content: space-between;
    margin: 10px;
    line-height: 28px;
    input {
      width: 300px;
    }
    input.error {
      border-color: red;
    }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  align-items: center;
  padding-top: 100px;
`;

export {
  Container,
  Wrapper,
  WrapperRow
}