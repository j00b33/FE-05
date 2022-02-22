import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 100px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  font-size: 56px;
  font-weight: 700;
`;

export const HeaderSubtitle = styled.div`
  color: grey;
  font-size: 20px;
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 1200px;
  margin-top: 50px;
`;

export const Box = styled.div`
  //박스 하나
  width: 1200px;
  height: 300px;
  border: 4px solid grey;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 70px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 60px;
  margin-left: 60px;
`;

export const Text = styled.div`
  font-size: 20px;
  color: #3b3b3b;
`;
export const Date = styled.div`
  font-size: 20px;
`;

export const Seller = styled.div`
  font-size: 25px;
`;
export const Product = styled.div`
  font-size: 25px;
  cursor: pointer;
  :hover {
    color: #b81a39;
  }
`;

export const Remarks = styled.div`
  font-size: 20px;
  color: #444444;
`;

export const Price = styled.div`
  font-size: 18px;
`;

export const RightSection = styled.div``;

export const Image = styled.image``;
