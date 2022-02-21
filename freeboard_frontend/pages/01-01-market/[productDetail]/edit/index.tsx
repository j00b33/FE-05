import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { CreateProductContainer } from "../../../../src/components/market/units/upload/upload.container";

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

export default function FreeBoardEdit() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productDetail) },
  });

  return <CreateProductContainer isEdit={true} data={data} />;
}
