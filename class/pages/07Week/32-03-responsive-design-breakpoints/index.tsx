import styled from "@emotion/styled";
import { breakPoints } from "../../../src/commons/styles/media";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;

  background-color: #91bebc;

  @media ${breakPoints.tablet} {
    width: 500px;
    height: 500px;
    background-color: #eef09f;
  }

  @media ${breakPoints.mobile} {
    width: 6.25rem;
    height: 100px;
    background-color: #e7b5b5;

    /* em */
    /* rem: 반응형 사이즈 --> width 100px ==> 6.25rem */
  }
`;

export default function ResponsiveDesignPage() {
  return <Wrapper>상자</Wrapper>;
}
