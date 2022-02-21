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
  //박스 래퍼 전체
`;
export const BoxRow = styled.div`
  //여기가 박스들 한 줄
`;

export const Box = styled.div`
  //박스 하나
`;
//map으로 5개씩 10줄 무한스크롤 구현 목표
