import * as D from "./detail.styles";
import { Tooltip } from "antd";
import { VscLocation } from "react-icons/vsc";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine, RiFileList3Line } from "react-icons/ri";
import Dompurify from "dompurify";

export default function ProductDetailUIPage(props) {
  return (
    <D.MyWrapper>
      <D.MyHeader>
        <D.LeftHeader>
          <D.HeaderLine>
            <D.MyWriter>{props.data?.fetchUseditem?.seller}</D.MyWriter>
            <D.MyDate>
              {props.data?.fetchUseditem?.createdAt.slice(0, 10)}
            </D.MyDate>
          </D.HeaderLine>

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
        </D.LeftHeader>

        {/* 수정 삭제 */}
        <D.Update>
          <D.List onClick={props.onClickList}>{RiFileList3Line}</D.List>
          <D.Edit onClick={props.onClickMoveToEdit}>{FaRegEdit}</D.Edit>
          <D.Delete onClick={props.onClickDelete}>{RiDeleteBinLine}</D.Delete>
        </D.Update>
      </D.MyHeader>

      <D.DivisionL />

      <D.MyBody>
        <D.MyTitle>{props.data?.fetchUseditem?.name}</D.MyTitle>
        <D.Price>${props.data?.fetchUseditem?.price}</D.Price>

        <D.PicWrapper>
          <D.MainPic
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images?.[0]}`}
            width="450px"
          />
        </D.PicWrapper>

        {process.browser && (
          <D.MyContents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(
                String(props.data?.fetchUseditem.contents)
              ),
            }}
          />
        )}
      </D.MyBody>

      <D.PageBottom></D.PageBottom>
    </D.MyWrapper>
  );
}
