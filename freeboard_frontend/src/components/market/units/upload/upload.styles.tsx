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

export const SmallInputWrapper = styled.div`
  display: flex;
  flex: row;
  justify-content: space-between;
  width: 100%;
`;

export const Header = styled.div`
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 30px;
`;

export const Label = styled.div`
  font-weight: 700;
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
  background-color: #d6d6d6;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 12px;

  width: 70px;
  height: 70px;

  cursor: pointer;

  :hover {
    color: #757575;
    border: 2px dotted #757575;
  }
`;

export const ReactQuill = styled.div`
  margin-bottom: 20px;
`;

export const BoxWord = styled.div`
  font-family: Cochin;
  font-size: 15px;
`;

export const SmallImage = styled.img`
  width: 30px;
  height: 30px;
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

//Address
export const AddressBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 500px;
  height: 52px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
export const AddressWrapper = styled.div`
  width: 100%;
  max-width: 996px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 20px;
`;

export const AddressMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
`;

export const AddressPage = styled.div``;

export const AddressRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 300px;
  width: 500px;
`;

export const GPS = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const GPSInput = styled.input`
  width: 230px;
  height: 52px;
  font-size: 15px;
`;

export const AddressInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 130px;
`;

export const AddressInput = styled.input`
  width: 500px;
  height: 52px;
`;
