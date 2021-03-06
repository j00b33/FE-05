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
import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { checkFileValidation } from "../../../../commons/libraries/utils";

interface FormValues {
  name?: string;
  remarks?: string;
  price?: number;
  contents?: string;
  images?: string;
  useditemAddress?: {
    address?: string;
    addressDetail?: string;
    lat?: number;
    lng?: number;
  };
}

const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      remarks
      price
      useditemAddress {
        address
        addressDetail
        lat
        lng
      }
      contents
      images
    }
  }
`;

const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;

const schema = yup.object().shape({
  name: yup.string().required("Enter the name of product"),
  remarks: yup.string().required("Enter a short description of the product"),
  contents: yup
    .string()
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

  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  // console.log(image);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const { moveTo } = useMove();
  const { register, handleSubmit, setValue, trigger, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("name", props.data?.fetchUseditem.name);
    setValue("remarks", props.data?.fetchUseditem.remarks);
    setValue("contents", props.data?.fetchUseditem.contents);
    setValue("price", props.data?.fetchUseditem.price);
    setValue("images", props.data?.fetchUseditem.images[0]);
  }, [props.data]);

  const handleChange = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  //Add Image File
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

  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };

  const router = useRouter();

  //Address
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    //ok ????????? ?????? ?????????
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    //cancle ????????? ??? ?????????
  };

  const onCompleteDaumPostCode = (data: any) => {
    console.log(data);
    console.log(address);
    setAddress(data.address);
    setIsModalVisible(false);
  };

  console.log("====address===");
  console.log(address);

  //Product Upload
  const onClickSubmit = async (data: FormValues) => {
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          price: data.price,
          contents: data.contents,
          images: image,
          useditemAddress: {
            address: address,
            addressDetail: addressDetail,
            lat: lat,
            lng: lng,
          },
        },
      },
    });
    Modal.success({ content: "Product is uploaded successfully" });

    router.push(`/01-01-market/${result.data.createUseditem._id}`);
  };
  console.log(lat, lng);
  //Product Edit
  const onClickUpdate = async (data) => {
    try {
      await updateUseditem({
        variables: {
          useditemId: router.query.productDetail,
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            price: Number(data.price),
            contents: data.contents,
            images: image,
            useditemAddress: {
              address: address,
              addressDetail: addressDetail,
              lat: lat,
              lng: lng,
            },
          },
        },
      });
      Modal.success({ content: "Product has updated successfully" });
      router.push(`/01-01-market/${router.query.productDetail}`);
    } catch (error) {
      Modal.error({ content: "Error" });
    }
  };

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
      handleChange={handleChange}
      onClickUpdate={onClickUpdate}
      //address
      showModal={showModal}
      onCompleteDaumPostCode={onCompleteDaumPostCode}
      isModalVisible={isModalVisible}
      handleOk={handleOk}
      handleCancel={handleCancel}
      address={address}
      onChangeAddressDetail={onChangeAddressDetail}
      addressDetail={addressDetail}
      setLat={setLat}
      setLng={setLng}
      lat={lat}
      lng={lng}
    />
  );
};

export default withAuth(CreateProductContainer);
