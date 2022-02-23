import * as D from "./detail.styles";
import { Tooltip } from "antd";
import { VscLocation } from "react-icons/vsc";
import { FaMoneyCheck, FaRegEdit } from "react-icons/fa";
import { GiSafetyPin } from "react-icons/gi";
import { RiDeleteBinLine, RiFileList3Line } from "react-icons/ri";
import Dompurify from "dompurify";
import Head from "next/head";

export default function ProductDetailUIPage(props) {
  return (
    <D.Wrapper>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>

      <D.MainDetail>
        <D.LeftDetail>
          <D.MainPic
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images?.[0]}`}
            onError={(e) => (e.currentTarget.src = "/empty.png")}
            width="500px"
          />
        </D.LeftDetail>

        <D.RightDetail>
          <D.Product>{props.data?.fetchUseditem?.name}</D.Product>
          <D.SecondRow>
            <D.Price>${props.data?.fetchUseditem?.price}</D.Price>
            <D.SecondInner>
              <D.Date>
                {props.data?.fetchUseditem?.createdAt.slice(0, 10)}
              </D.Date>
              <D.LocationWrapper>
                <Tooltip
                  color="#b81a39"
                  font-size="16px"
                  font-family="Cochin"
                  title={`${props.data?.fetchUseditem.useditemAddress?.address} 
                      ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
                >
                  <D.AddressTool>
                    <VscLocation />
                  </D.AddressTool>
                </Tooltip>
              </D.LocationWrapper>
            </D.SecondInner>
          </D.SecondRow>

          <D.DivisionL />

          <D.ContentWrapper>
            <D.Seller>
              Seller: {props.data?.fetchUseditem?.seller.name}
            </D.Seller>
            <D.Remarks>{props.data?.fetchUseditem?.remarks}</D.Remarks>
            {process.browser && (
              <D.MyContents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    String(props.data?.fetchUseditem.contents)
                  ),
                }}
              />
            )}
          </D.ContentWrapper>

          <D.DivisionL />
        </D.RightDetail>
      </D.MainDetail>

      <D.Update>
        <D.Pay onClick={props.onClickPay}>{FaMoneyCheck}</D.Pay>
        <D.Pin>{GiSafetyPin}</D.Pin>
        <D.List onClick={props.onClickList}>{RiFileList3Line}</D.List>

        <D.Edit onClick={props.onClickMoveToEdit}>{FaRegEdit}</D.Edit>
        <D.Delete onClick={props.onClickDelete}>{RiDeleteBinLine}</D.Delete>
      </D.Update>

      <D.CommentDivision />
    </D.Wrapper>
  );
}
