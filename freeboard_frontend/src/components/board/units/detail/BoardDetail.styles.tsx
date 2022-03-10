import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { VscLocation } from "react-icons/vsc";
import { BiLike, BiDislike } from "react-icons/bi";

export const Wrapper = styled.div`
  width: 1100px;

  margin-top: 100px;
  margin-left: 135px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1100px;

  margin-bottom: 60px;
`;
export const RightSection = styled.div`
  width: 500px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MainPic = styled.img`
  width: 450px;
`;

export const LeftSection = styled.div`
  width: 500px;

  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LeftHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`;

export const MyTitle = styled.div`
  font-size: 30px;
  font-weight: 700;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SubHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MyDate = styled.div`
  font-size: 17px;
  color: #828282;
`;

export const AddressTool = styled(VscLocation)`
  color: #9900ff;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const LeftBody = styled.div`
  width: 500px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 20px;

  height: 400px;
`;

export const MyWriter = styled.div`
  font-weight: 500;
  font-size: 20px;
  padding-bottom: 10px;
  font-weight: 700;
`;

export const MyContents = styled.div`
  font-size: 20px;
  width: 100%;
  max-width: 500px;
  table-layout: fixed;
  word-wrap: break-word;
`;

export const DivisionL = styled.div`
  width: 500px;
  border: 1px solid #9900ff;
`;

//Youtube Section
export const MyYoutube = styled(ReactPlayer)`
  margin: auto;
`;

export const PicWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 500px;
  height: 500px;
`;

//likes
export const LikeWrapper = styled.div`
  width: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 60px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

export const Like = styled(BiLike)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  :hover {
    color: #09ff00;
  }
`;

export const Dislike = styled(BiDislike)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  :hover {
    color: #09ff00;
  }
`;

export const LikeCount = styled.div`
  color: grey;
  font-size: 14px;
`;

export const DislikeCount = styled.div`
  color: grey;
  font-size: 14px;
`;

//footer
export const PageBottom = styled.div`
  width: 700px;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin-top: 60px;
`;

export const MyBtn = styled.button`
  font-family: "CodaCaption";

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 180px;
  height: 45px;

  background: white;
  color: black;
  border: 1px solid #262626;
  box-sizing: border-box;

  cursor: pointer;

  :hover {
    background-color: #09ff00;
    border-color: #262626;
  }
`;
