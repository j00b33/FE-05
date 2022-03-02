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

const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
      price
    }
  }
`;

export default function ProductDetailContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productDetail) },
  });
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

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

  const onClickPay = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.productDetail,
        },
      });
      Modal.success({ content: "Purchase done successfully" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <ProductDetailUIPage
      data={data}
      onClickPay={onClickPay}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDelete={onClickDelete}
      onClickList={onClickList}
    />
  );
}
