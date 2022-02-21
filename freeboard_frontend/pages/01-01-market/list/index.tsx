import { gql, useQuery } from "@apollo/client";
import * as L from "./styles";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      images
      price
      seller
      createdAt
    }
  }
`;

export default function productListPage() {
  const { data } = useQuery(FETCH_USED_ITEMS);
  return (
    <L.Wrapper>
      <L.Header>
        <L.HeaderTitle>Products</L.HeaderTitle>
        <L.HeaderSubtitle>View other's products!</L.HeaderSubtitle>
      </L.Header>

      <L.BoxWrapper>
        <L.BoxRow>
          {data?.fetchUseditem?.map((el, index) => (
            <L.Box id={el._id} key={el._id}>
              <L.Number>{index + 1}</L.Number>
              <L.Id>{el._id}</L.Id>
              <L.Product>{el.name}</L.Product>
            </L.Box>
          ))}
        </L.BoxRow>
      </L.BoxWrapper>
    </L.Wrapper>
  );
}
