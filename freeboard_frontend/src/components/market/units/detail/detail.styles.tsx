import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { VscLocation } from "react-icons/vsc";
import { FaMoneyCheck, FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine, RiFileList3Line } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiBottledShadow } from "react-icons/gi";

export const Wrapper = styled.div`
  width: 1100px;

  margin-top: 100px;
  margin-left: 170px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: none;
`;

export const MainDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1100px;
`;

export const LeftDetail = styled.div`
  width: 500px;

  display: flex;
  flex-direction: row;
  align-items: space-evenly;

  padding-top: 50px;
  padding-bottom: 30px;
`;

export const MainPic = styled.img``;

export const RightDetail = styled.div`
  width: 500px;
  height: 700px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`;

export const SecondInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 130px;
`;

export const LocationWrapper = styled.div``;

export const AddressTool = styled(VscLocation)`
  color: #9900ff;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const DivisionL = styled.div`
  width: 500px;
  border: 1px solid #9900ff;
`;

export const Product = styled.div`
  font-size: 36px;
  font-weight: 700;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Price = styled.div`
  font-size: 28px;
  font-weight: 600;
`;

export const Date = styled.div`
  font-weight: normal;
  font-size: 17px;
`;

//Seller, Remarks, Contents

export const ContentWrapper = styled.div`
  width: 1100px;
  height: 1070px;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  padding-top: 50px;
`;

export const Seller = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  padding-bottom: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Remarks = styled.div`
  font-size: 20px;
  padding-bottom: 40px;
`;

export const MyContents = styled.div`
  font-size: 23px;
  width: 100%;
  max-width: 500px;
  table-layout: fixed;
  word-wrap: break-word;
`;

export const Update = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-right: 80px;

  width: 240px;
`;

export const PickCount = styled.div`
  font-size: 15px;

  margin-top: 7px;
  margin-right: 185px;
  color: #a0a0a0;

  font-family: "CodaCaption";
`;

export const Pin = styled(GiBottledShadow)`
  cursor: pointer;
  :hover {
    color: #09ff00;
  }
  width: 30px;
  height: 30px;
`;

export const Pay = styled(FaMoneyCheck)`
  cursor: pointer;
  color: grey;
  :hover {
    color: #09ff00;
  }
  width: 30px;
  height: 30px;
`;

export const List = styled(RiFileList3Line)`
  cursor: pointer;
  color: grey;
  :hover {
    color: #09ff00;
  }
  width: 30px;
  height: 30px;
`;

export const Edit = styled(FaRegEdit)`
  cursor: pointer;
  color: grey;
  :hover {
    color: #09ff00;
  }
  width: 30px;
  height: 30px;
`;

export const Delete = styled(RiDeleteBinLine)`
  cursor: pointer;
  color: grey;
  :hover {
    color: #09ff00;
  }
  width: 30px;
  height: 30px;
`;

//third 지도랑 설정 아이콘들
export const ThirdWrapper = styled.div`
  width: 100%;
  max-width: 1100px;

  margin-left: 100px;
  margin-top: 50px;
  margin-bottom: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ThirdLeft = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ThirdRight = styled.div``;

export const Map = styled.div``;

export const CommentDivision = styled.div`
  border: 1px solid grey;
  width: 1100px;
`;
