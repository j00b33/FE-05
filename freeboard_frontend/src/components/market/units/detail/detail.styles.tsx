import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { VscLocation } from "react-icons/vsc";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaMoneyCheck, FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine, RiFileList3Line } from "react-icons/ri";
import { GiSafetyPin } from "react-icons/gi";

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
  height: 500px;

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
  color: #b81a39;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const DivisionL = styled.div`
  width: 500px;
  border: 1px solid #b81a39;
`;

export const Product = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

export const Price = styled.div`
  font-size: 28px;
  font-weight: 600;
`;

export const Date = styled.div`
  font-weight: normal;
  font-size: 20px;
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
  font-family: Cochin;
`;

export const Remarks = styled.div`
  font-size: 20px;
  padding-bottom: 40px;
`;

export const MyContents = styled.div`
  font-size: 23px;
`;

export const Update = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 240px;

  margin-top: 20px;
  margin-bottom: 50px;
  margin-right: 600px;
`;

export const Pin = styled(GiSafetyPin)`
  cursor: pointer;
  color: grey;
  :hover {
    color: #b81a39;
  }
  width: 30px;
  height: 30px;
`;

export const Pay = styled(FaMoneyCheck)`
  cursor: pointer;
  color: grey;
  :hover {
    color: #b81a39;
  }
  width: 30px;
  height: 30px;
`;

export const List = styled(RiFileList3Line)`
  cursor: pointer;
  color: grey;
  :hover {
    color: #b81a39;
  }
  width: 30px;
  height: 30px;
`;

export const Edit = styled(FaRegEdit)`
  cursor: pointer;
  color: grey;
  :hover {
    color: #b81a39;
  }
  width: 30px;
  height: 30px;
`;

export const Delete = styled(RiDeleteBinLine)`
  cursor: pointer;
  color: grey;
  :hover {
    color: #b81a39;
  }
  width: 30px;
  height: 30px;
`;

export const CommentDivision = styled.div`
  border: 1px solid grey;
  width: 1100px;
`;
