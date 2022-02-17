import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
  margin-right: 230px;

  padding-top: 80px;
  padding-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 20px grey;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 200px;

  margin: 30px;
`;

export const Header = styled.div`
  font-weight: bold;
  font-size: 36px;
  padding-bottom: 40px;
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Error = styled.div`
  font-size: 15px;
  color: red;
`;
