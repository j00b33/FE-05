import styled from "@emotion/styled";

export let Your__Error = styled.span`
  color: red;
  font-size: 12px;
`;

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
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
  padding-bottom: 40px;
`;

export const AccountSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 996px;
  padding-bottom: 30px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 486px; */
  padding-top: 40px;
`;

export const Label = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: black;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
`;
export const Longbox = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  /* box-sizing: border-box; */
  font-size: 16px;
`;
export const AddressDetail = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  /* box-sizing: border-box; */
  font-size: 16px;
`;

export const Contents = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 996px;
  height: 400px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
`;

export const ZipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 40px;
  height: 242px;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 230px;
  height: 52px;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  font-size: 16px;

  border: 1px solid #bdbdbd;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AddressBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 124px;
  height: 52px;

  background-color: black;
  color: white;
  font-size: 16px;

  cursor: pointer;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  /* box-sizing: border-box; */
  font-size: 16px;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  height: 118px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 30px;
`;

export const AddImage = styled.div`
  background-color: #afafaf;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #000000;
  font-size: 12px;

  width: 70px;
  height: 70px;

  cursor: pointer;

  :hover {
    background-color: #c4fbff;
  }

  transition: 0.4s;
`;

export const BoxWord = styled.div`
  font-size: 15px;
`;

export const SmallImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: flex-start;
  margin-top: 30px;

  font-size: 16px;

  width: 996px;
  height: 64px;

  font-weight: 500;
`;
export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 24px;
  width: 159px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  /* width: 100%;
  /* height: 52px; */

  display: flex;
  flex-direction: row;
  justify-content: center;

  padding-top: 90px;
  padding-bottom: 30px;
`;

interface IProps {
  isActive: boolean;
}

export const MyBtn = styled.button`
  width: 179px;
  height: 52px;
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background-color: ${(props: IProps) =>
    props.isActive === true ? "black" : "white"};

  color: ${(props: IProps) => (props.isActive === true ? "#00eeff" : "black")};

  border: ${(props: IProps) =>
    props.isActive === true ? "2px solid #00eeff" : "2px solid black"};
`;
