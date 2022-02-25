import styled from "@emotion/styled";

//Search
export const SearchBox = styled.input`
  width: 500px;
  height: 40px;
  font-size: 20px;
  font-family: "Roboto";
`;

export const Searchtitle = styled.div`
  font-size: 20px;
  margin-right: 15px;
  font-family: "Roboto";
`;
export const SearchWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

interface IProps {
  isMatched: boolean;
}

export const Word = styled.span`
  color: ${(props: IProps) => props.isMatched && "#9900FF"};
`;

//List
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;

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
  color: #313131;
  font-size: 23px;
`;

export const HeaderRouter = styled.div`
  font-size: 17px;
  color: #8d8d8d;
  cursor: pointer;
  :hover {
    color: #9900ff;
  }
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 70px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 10px;
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
    color: #9900ff;
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

export const Image = styled.img`
  margin-right: 80px;
`;
