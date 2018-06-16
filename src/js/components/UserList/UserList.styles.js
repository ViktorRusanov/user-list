import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

const Wrapper = styled.div`
  width: 600px;
  ul {
    display: flex;
    list-style: none;
  }
  li {
   margin: 10px;
   border: 1px solid black;
   padding: 10px;
  }
  li.active {
    background: lightgrey;
   }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  td {
     border: 1px solid black;
     padding: 4px;
    }
  td:first-child {
    width: 30px;
  }
    td:last-child {
    width: 30px;
  }
`;

export {
  Container,
  Wrapper,
  Table
}