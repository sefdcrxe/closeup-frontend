import { styled } from 'styled-components';

export const Button = styled.button`
  color: #fff;
  font-size: 20px;
  margin-top: 10px;
  line-height: 20px;
  cursor: pointer;
  padding: 8px 16px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RaffleTitle = styled.b`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  margin-top: 30px;
`;

export const SubTitle1 = styled(Button)`
  color: #fff;
  font-size: 20px;
  margin-top: 10px;
  line-height: 20px;
`;

export const SubTitle2 = styled(Button)`
  color: #fff;
  font-size: 20px;
  margin-top: 10px;
  line-height: 20px;
`;

export const RaffleMenu = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
  gap: 120px;
`;

export const RaffleView = styled.div`
  display: flex;
  margin-right: 70px;
`;

export const RaffleViewTitle = styled.b`
  color: #fff;
  font-size: 20px;
  margin-top: 10px;
  line-height: 20px;
`;
