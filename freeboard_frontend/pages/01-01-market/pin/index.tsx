import { gql, useQuery } from "@apollo/client";
import * as P from "./styled";

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

export default function PinPage() {
  const { data } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: { search: "" },
  });
  return (
    <P.Wrapper>
      <P.Title>Pin Page</P.Title>

      <P.PinWrapper>
        {data?.fetchUseditemsIPicked.map((el) => (
          <P.SinglePin key={el?._id}>
            <P.Image
              src={`https://storage.googleapis.com/${el.images[0]}`}
              height="200px"
              onError={(e) => (e.currentTarget.src = "/empty.png")}
            />
            <div>{el?.name}</div>
            <div>{el?.price}</div>
          </P.SinglePin>
        ))}
      </P.PinWrapper>
    </P.Wrapper>
  );
}
