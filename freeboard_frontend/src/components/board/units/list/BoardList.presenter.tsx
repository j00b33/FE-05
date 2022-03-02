import styled from "@emotion/styled";
import * as D from "./BoardList.Styles";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  isMatched: boolean;
}

const Word = styled.span`
  color: ${(props: IProps) => props.isMatched && "#09ff00"};
`;

export default function BoardListUIPage(props) {
  return (
    <D.Wrapper>
      <D.ListWrapper>
        <D.InnerWrapper>
          <D.HeadType>Number</D.HeadType>
          <D.DivisionLine />
          {props.data?.fetchBoards?.map((el, index) => (
            <D.Row id={el._id} key={el._id}>
              <D.MyNumber>{index + 1}</D.MyNumber>
            </D.Row>
          ))}
        </D.InnerWrapper>

        <D.InnerWrapper>
          <D.HeadType>Title</D.HeadType>
          <D.DivisionLine />
          {props.data?.fetchBoards?.map((el, index) => (
            <D.Row id={el._id} key={index}>
              <D.MyTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
                {el.title
                  .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                  .split("#$%")
                  .map((el) => (
                    <Word key={uuidv4()} isMatched={el === props.keyword}>
                      {el}
                    </Word>
                  ))}
              </D.MyTitle>
            </D.Row>
          ))}
        </D.InnerWrapper>

        <D.InnerWrapper>
          <D.HeadType>Writer</D.HeadType>
          <D.DivisionLine />
          {props.data?.fetchBoards?.map((el) => (
            <D.Row id={el._id} key={el._id}>
              <D.MyWriter>{el.writer}</D.MyWriter>
            </D.Row>
          ))}
        </D.InnerWrapper>

        <D.InnerWrapper>
          <D.HeadType>Date</D.HeadType>
          <D.DivisionLine />
          {props.data?.fetchBoards?.map((el) => (
            <D.Row id={el._id} key={el._id}>
              <D.MyDate> {el.createdAt.slice(0, 10)}</D.MyDate>
            </D.Row>
          ))}
        </D.InnerWrapper>
      </D.ListWrapper>
    </D.Wrapper>
  );
}
