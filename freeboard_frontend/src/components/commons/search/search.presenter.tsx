import styled from "@emotion/styled";
import LayoutBanner from "../../../commons/layout/banner";

const SearchBox = styled.input`
  width: 500px;
  height: 40px;
  font-size: 20px;
  border-radius: 18px;
`;

const Searchtitle = styled.div`
  font-size: 20px;
  margin-right: 15px;
`;
const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default function ListSearchUIPage(props) {
  return (
    <div>
      <Wrapper>
        <Searchtitle>Search 🔍</Searchtitle>
        <SearchBox
          type="text"
          placeholder="Enter your searching subject"
          onChange={props.onChangeSearch}
        />
      </Wrapper>
    </div>
  );
}
