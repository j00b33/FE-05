import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 100px;
  margin-right: 230px;

  padding-top: 80px;
  padding-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;

  margin-bottom: 30px;
`;

export const LargeSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 250px;
  margin-bottom: 30px;
`;

export const Header = styled.div`
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 30px;
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

//이미지
export const ImageWrapper = styled.div`
  width: 996px;
  height: 118px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 30px;
`;

export const AddImage = styled.div`
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 50px;

  color: white;
  font-size: 12px;

  width: 70px;
  height: 70px;

  cursor: pointer;

  :hover {
    background-color: #9e6161;
  }
`;

export const BoxWord = styled.div`
  font-family: Cochin;
  font-size: 15px;
`;

export const SmallImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;
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

export const DivisionLine = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  width: 996px;
  border: 1px solid #dadadaec;
`;
