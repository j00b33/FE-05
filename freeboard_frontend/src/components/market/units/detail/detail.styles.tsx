import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { VscLocation } from "react-icons/vsc";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine, RiFileList3Line } from "react-icons/ri";

export const MyWrapper = styled.div`
  width: 1200px;

  margin: 100px;

  padding-top: 80px;
  padding-bottom: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 4px 20px grey;
  border: 1px solid black;
  border: none;
`;

export const LeftHeader = styled.div`
  width: 996px;

  display: flex;
  flex-direction: row;
  align-items: space-evenly;

  padding-top: 50px;
  padding-bottom: 30px;
`;

export const MyHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 990px;
`;

export const HeaderLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  height: 50px;
`;

export const LocationWrapper = styled.div``;

export const AddressTool = styled(VscLocation)`
  color: #b81a39;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const MyWriter = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  padding-bottom: 10px;
  font-family: Cochin;
`;

export const MyDate = styled.div`
  font-weight: normal;
  font-size: 16px;
  color: #828282;
  font-family: Cochin;
`;

export const Update = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 90px;
`;

export const List = styled(RiFileList3Line)`
  cursor: pointer;
  color: grey;
  :hover {
    color: #b81a39;
  }
  width: 20px;
  height: 20px;
`;

export const Edit = styled(FaRegEdit)`
  cursor: pointer;
  color: grey;
  :hover {
    color: #b81a39;
  }
  width: 20px;
  height: 20px;
`;

export const Delete = styled(RiDeleteBinLine)`
  cursor: pointer;
  color: grey;
  :hover {
    color: #b81a39;
  }
  width: 20px;
  height: 20px;
`;

export const DivisionL = styled.div`
  width: 996px;
  border: 1px solid #b81a39;
`;

export const MyBody = styled.div`
  width: 996px;
  height: 1070px;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  padding-top: 50px;
`;
export const MyTitle = styled.div`
  font-family: Cochin;
  font-weight: 700;
  font-size: 36px;
  padding-bottom: 40px;
`;

export const Price = styled.div`
  font-size: 20px;
`;

export const MyContents = styled.div`
  font-family: Cochin;
  font-size: 20px;
`;

export const MyYoutube = styled(ReactPlayer)`
  margin: auto;
`;
export const PicWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const MainPic = styled.img`
  padding-bottom: 50px;
`;

export const MainVid = styled.div``;
//likes
export const LikeWrapper = styled.div`
  width: 100px;
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
`;

//footer
export const PageBottom = styled.div`
  width: 400px;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MyBtn = styled.button`
  font-family: Cochin;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 179px;
  height: 45px;

  background: white;
  color: black;
  border: 1px solid #262626;
  box-sizing: border-box;

  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: #b81a39;
    border-color: #262626;
    color: white;
  }
`;
