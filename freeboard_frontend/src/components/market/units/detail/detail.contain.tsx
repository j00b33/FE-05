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

  console.log("======detailData=====");
  console.log(data);

  const onClickMoveToEdit = () => {
    router.push(`/01-01-market/${router.query.productDetail}/edit`);
  };

  const onClickDelete = async () => {
    await deleteUseditem({
      variables: { useditemId: router.query.productDetail },
    });
    Modal.success({ content: "Your Product is deleted" });
    router.push("/01-01-market/home");
  };

  return (
    <ProductDetailUIPage
      data={data}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDelete={onClickDelete}
    />
  );
}
