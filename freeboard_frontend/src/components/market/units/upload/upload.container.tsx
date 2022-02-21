import { useForm } from "react-hook-form";
import withAuth from "../../../commons/hoc/withAuth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CreateProductUIPage from "./upload.presenter";
import { gql, useMutation } from "@apollo/client";
import { useMove } from "../../../commons/hoc/customhooks/moveTo";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { UPLOAD_FILE } from "../../../board/units/write/BoardWrite.queries";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { checkFileValidation } from "../../../../commons/libraries/utils";

interface FormValues {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  images?: string;
}

const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      remarks
      price
      contents
      images
    }
  }
`;

const schema = yup.object().shape({
  name: yup.string().required("Enter the name of product"),
  remarks: yup.string().required("Enter a short description of the product"),
  contents: yup
    .string()
    .min(10, "Description should be longer than 10 characters")
    .max(300, "Description cannot be longer than 300 characters")
    .required("Enter descriptions about your product"),
  price: yup.number().required("Enter the price of the product"),
});

export const CreateProductContainer = (props) => {
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const fileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState([]);

  // console.log(image);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const { moveTo } = useMove();
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  //이미지 추가
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) {
      return;
    }

    try {
      const result = await uploadFile({ variables: { file } });
      // console.log(result.data?.uploadFile.url);
      setImage(result.data?.uploadFile.url || "");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const router = useRouter();

  const onClickSubmit = async (data: FormValues) => {
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          price: data.price,
          contents: data.contents,
          images: image,
        },
      },
    });
    console.log("========Data Check========");
    // console.log(result);
    console.log(props.data);

    Modal.success({ content: "Product is uploaded successfully" });

    router.push(`/01-01-market/${result.data.createUseditem._id}`);
  };

  // const onClickUpdate = async () => {
  //   if (!price && !remarks && !contents) {
  //     Modal.error({ content: "하나는 수정해야합니다" });
  //   }
  //   if (!myPassword) {
  //     Modal.error({ content: "비밀번호를 입력해주세요" });
  //   }

  //   interface IFetchUseditem {
  //     name?: string;
  //       remarks?: string;
  //     contents?: string;
  //     price?: string
  //     images?: string
  //     };
  //   }

  //   const myUpdateBoardInput: IMyUpdateBoardInput = {};
  //   if (myTitle) myUpdateBoardInput.title = myTitle;
  //   if (myContents) myUpdateBoardInput.contents = myContents;
  //   if (youtubeUrl) myUpdateBoardInput.youtubeUrl = youtubeUrl;
  //   if (zipcode || address || addressDetail) {
  //     //셋중에 하나라도 변경사항이 생기면 아래 괄호 안의 코드가 실행이 됨
  //     myUpdateBoardInput.boardAddress = {};
  //     if (zipcode) myUpdateBoardInput.boardAddress.zipcode = zipcode;
  //     if (address) myUpdateBoardInput.boardAddress.address = address;
  //     if (addressDetail)
  //       myUpdateBoardInput.boardAddress.addressDetail = addressDetail;
  //   }

  //   try {
  //     await updateBoard({
  //       variables: {
  //         boardId: router.query.boardDetail,
  //         password: myPassword,
  //         updateBoardInput: myUpdateBoardInput,
  //       },
  //     });
  //     Modal.success({ content: "수정이 완료되었습니다" });
  //     router.push(`/01-01-board/${router.query.boardDetail}`);
  //   } catch (error) {
  //     Modal.error({ content: "수정에 오류가 생겼습니다" });
  //   }
  // };

  return (
    <CreateProductUIPage
      onClickSubmit={onClickSubmit}
      isEdit={props.isEdit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      moveTo={moveTo}
      //image
      onClickImage={onClickImage}
      image={image}
      data={props.data}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
    />
  );
};

export default withAuth(CreateProductContainer);
