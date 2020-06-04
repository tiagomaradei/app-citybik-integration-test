import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  div {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 100px;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin-top: 20px;
  background: #fff;

  th {
    padding: 15px;
  }

  td {
    padding: 15px;

    button {
      padding: 5px;
      width: 30px;
      height: 30px;

      svg {
        color: #337ab7;
      }
    }
  }

  td + td {
    width: 20px;
    text-align: center;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  input {
    display: flex;
    width: 80%;
    height: 30px;
    padding: 5px;
  }
`;
