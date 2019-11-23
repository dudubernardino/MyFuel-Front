import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 15px;

  h2 {
    color: #fff;
    font-weight: bold;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 15px 0 20px;
    font-size: 30px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 25px;
  border-radius: 4px;
  margin: 10px 0 20px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 0px 1rem #fff;
  color: #038ccf;
  font-weight: bold;

  .content {
    display: flex;
    margin: 0 0 10px;

    span {
      font-size: 18px;
      margin-left: 8px;
    }
  }
`;

export const Fuel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #eee;
`;
