import Button from "../../../commons/createProduct/button";
import * as C from "./upload.styles";
import LargeInput from "../../../commons/createProduct/input/01";
import MidInput from "../../../commons/createProduct/input/03";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function CreateProductUIPage(props) {
  return (
    <C.Wrapper>
      <form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClickUpdate)
            : props.handleSubmit(props.onClickSubmit)
        }
      >
        <C.Header>
          {props.isEdit ? "Edit Your Product" : "Upload Your Product"}
        </C.Header>

        <C.SectionWrapper>
          <C.Label>Product</C.Label>
          <MidInput
            type="text"
            register={props.register("name")}
            defaultValue={props.data?.fetchUseditem.name}
          />
          <C.Error>{props.formState.errors.name?.message}</C.Error>
        </C.SectionWrapper>

        <C.SectionWrapper>
          <C.Label>Short Description</C.Label>
          <MidInput
            type="text"
            register={props.register("remarks")}
            defaultValue={props.data?.fetchUseditem.remarks}
          />
          <C.Error>{props.formState.errors.remarks?.message}</C.Error>
        </C.SectionWrapper>

        <C.LargeSectionWrapper>
          <C.Label>Description</C.Label>
          <ReactQuill
            onChange={props.handleChange}
            defaultValue={props.data?.fetchUseditem.contents}
            style={{ height: "180px", width: "996px" }}
          />
          <C.Error>{props.formState.errors.contents?.message}</C.Error>
        </C.LargeSectionWrapper>

        <C.SectionWrapper>
          <C.Label>Price</C.Label>
          <MidInput
            type="text"
            register={props.register("price")}
            defaultValue={props.data?.fetchUseditem.price}
          />
          <C.Error>{props.formState.errors.price?.message}</C.Error>
        </C.SectionWrapper>

        <C.ImageWrapper>
          <C.Label>Add Photo</C.Label>
          <C.AddImage onClick={props.onClickImage}>
            <C.BoxWord>+</C.BoxWord>
            <C.SmallImage
              src={`https://storage.googleapis.com/${props.image}`}
              defaultValue={props.data?.fetchUseditem.images}
            />
          </C.AddImage>
          <input
            style={{ display: "none" }}
            type="file"
            ref={props.fileRef}
            onChange={props.onChangeFile}
            //화면에만 안보이는거
          />
        </C.ImageWrapper>

        <C.DivisionLine />

        <C.Footer>
          <Button
            onClick={props.onClickSubmit}
            isValid={props.formState.isValid}
            name="Submit"
            data={props.data}
          />
        </C.Footer>
      </form>
    </C.Wrapper>
  );
}
