import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { CreateProductContainer } from "../../../../src/components/market/units/upload/upload.container";
import { useState } from "react";

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
        address
        addressDetail
        zipcode
        lat
        lng
      }
    }
  }
`;

export default function FreeBoardEdit() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productDetail) },
  });

  console.log("============originaldata");
  console.log(data);

  return <CreateProductContainer isEdit={true} data={data} />;
}
