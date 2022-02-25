import { Divider } from "antd";
import { useRouter } from "next/router";
import { GiChemicalTank, GiRoundBottomFlask } from "react-icons/gi";
import { useMove } from "../../../src/components/commons/hoc/customhooks/moveTo";
import * as P from "./styles";

export default function MarketHome() {
  const { moveTo } = useMove();

  return (
    <P.Wrapper>
      <P.HeaderWrapper>
        <P.TitleWrapper>
          <P.HeaderTitle>GO MAD</P.HeaderTitle>
          <P.Space> </P.Space>
          <P.HeaderTitle2>MARKET PAGE</P.HeaderTitle2>
        </P.TitleWrapper>
      </P.HeaderWrapper>

      <P.HeaderLine></P.HeaderLine>
      <P.BodyWrapper>
        <P.InnerBodyWrapper onClick={moveTo("/01-01-market/create")}>
          <P.MainPic1>
            <GiRoundBottomFlask />
          </P.MainPic1>
          <P.Select>Upload Product</P.Select>
        </P.InnerBodyWrapper>

        <P.InnerBodyWrapper2 onClick={moveTo("/01-01-market/list")}>
          <P.MainPic2>
            <GiChemicalTank />
          </P.MainPic2>
          <P.Select>View Products</P.Select>
        </P.InnerBodyWrapper2>
      </P.BodyWrapper>
      <P.HeaderLine></P.HeaderLine>
    </P.Wrapper>
  );
}
