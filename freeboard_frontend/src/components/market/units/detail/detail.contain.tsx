import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import ProductDetailUIPage from "./detail.presenter";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      price
      contents
      remarks
      createdAt
      images
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
      }
      seller {
        name
      }
    }
  }
`;

const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export default function ProductDetailContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productDetail) },
  });
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  const onClickMoveToEdit = () => {
    router.push(`/01-01-market/${router.query.productDetail}/edit`);
  };

  const onClickDelete = async () => {
    await deleteUseditem({
      variables: { useditemId: router.query.productDetail },
    });
    Modal.success({ content: "Your Product is deleted" });
    router.push("/01-01-market/list");
  };

  const onClickList = () => {
    router.push("/01-01-market/list");
  };

  const onClickPay = () => {
    router.push("/01-01-market/pay");
  };

  const onClickToggle = (data) => () => {
    console.log("======data======");
    console.log(data);

    //기존 방식
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    // const temp = baskets.filter((basketEl) => basketEl._id === data._id);
    // if (temp.length === 1) {
    //   Modal.warn({ content: "You've already toggled" });
    //   return;
    // }

    const { __typename, ...newEl } = data;
    baskets.push(newEl);
    localStorage.setItem("basket", JSON.stringify(baskets));
    Modal.success({ content: "Successfully Toggled" });
  };

  return (
    <ProductDetailUIPage
      data={data}
      onClickPay={onClickPay}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDelete={onClickDelete}
      onClickList={onClickList}
      onClickToggle={onClickToggle}
    />
  );
}
