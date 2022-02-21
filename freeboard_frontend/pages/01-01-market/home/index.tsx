import { Divider } from "antd";
import { useRouter } from "next/router";
import { useMove } from "../../../src/components/commons/hoc/customhooks/moveTo";
import * as P from "./styles";

export default function MarketHome() {
  const { moveTo } = useMove();

  return (
    <P.Wrapper>
      <P.HeaderWrapper>
        <P.HeaderLine></P.HeaderLine>
        <P.TitleWrapper>
          <P.HeaderTitle>Welcome to </P.HeaderTitle>
          <P.Space> </P.Space>
          <P.HeaderTitle2> Pierce Peers' Market</P.HeaderTitle2>
        </P.TitleWrapper>
        <P.HeaderLine></P.HeaderLine>
      </P.HeaderWrapper>

      <P.BodyWrapper>
        <P.InnerBodyWrapper>
          <P.MainPic1 src="/product/createProduct.png" />
          <P.Select onClick={moveTo("/01-01-market/create")}>
            Upload Product
          </P.Select>
        </P.InnerBodyWrapper>

        <P.InnerBodyWrapper>
          <P.Select onClick={moveTo("/01-01-market/list")}>
            View Products
          </P.Select>
          <P.MainPic2 src="/product/viewProduct.png" />
        </P.InnerBodyWrapper>
      </P.BodyWrapper>
    </P.Wrapper>
  );
}
