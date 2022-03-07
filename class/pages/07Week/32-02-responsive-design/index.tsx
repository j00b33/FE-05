import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;

  background-color: #91bebc;

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: #e4b6b6;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 500px;
    height: 500px;
    background-color: #eef09f;
  }
`;

export default function ResponsiveDesignPage() {
  return <Wrapper>상자</Wrapper>;
}
