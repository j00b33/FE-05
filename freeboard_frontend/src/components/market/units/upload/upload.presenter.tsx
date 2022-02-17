import Input from "../../../commons/createProduct/input";
import Button from "../../../commons/createProduct/button";
import * as C from "./upload.styles";

export default function CreateProductUIPage(props) {
  return (
    <C.Wrapper>
      <C.Header>Upload Your Product</C.Header>
      <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <C.SectionWrapper>
          <C.Label>Product</C.Label>
          <Input type="text" register={props.register("product")} />
          <C.Error>{props.formState.errors.product?.message}</C.Error>
        </C.SectionWrapper>

        <C.SectionWrapper>
          <C.Label>Description</C.Label>
          <Input type="text" register={props.register("contents")} />
          <C.Error>{props.formState.errors.contents?.message}</C.Error>
        </C.SectionWrapper>

        <C.SectionWrapper>
          <C.Label>Price</C.Label>
          <Input type="text" register={props.register("price")} />
          <C.Error>{props.formState.errors.price?.message}</C.Error>
        </C.SectionWrapper>

        <C.Footer>
          <Button isValid={props.formState.isValid} name="Submit" />
        </C.Footer>
      </form>
    </C.Wrapper>
  );
}
