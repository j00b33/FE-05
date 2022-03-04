import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
      pickedCount
    }
  }
`;

const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String!, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      price
      images
    }
  }
`;

const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
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
  const { data: IPickedData } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: { search: "" },
  });
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productDetail) },
  });
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

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

  const [isPicked, setIsPicked] = useState(false);

  const onClickPin = async () => {
    //상품 찜하기
    const toggled = await toggleUseditemPick({
      variables: {
        useditemId: router.query.productDetail,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: {
            useditemId: router.query.productDetail,
          },
        },
      ],
    });
    setIsPicked((prev) => !prev);
    console.log("Toggle Success Console");
    console.log(toggled);
  };

  useEffect(() => {
    if (
      IPickedData?.fetchUseditemsIPicked.filter(
        (el) => el._id === data?.fetchUseditem._id
      ).length === 1
    ) {
      setIsPicked(true);
    } else {
      setIsPicked(false);
    }
  }, [IPickedData]);

  return (
    <ProductDetailUIPage
      data={data}
      onClickPay={onClickPay}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDelete={onClickDelete}
      onClickList={onClickList}
      onClickPin={onClickPin}
      isPicked={isPicked}
    />
  );
}
