import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GiBottledShadow } from "react-icons/gi";
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

  const router = useRouter();
  const onClickMoveToDetail = (el) => (event) => {
    router.push(`/01-01-market/${event.currentTarget.id}`);
  };
  return (
    <P.Wrapper>
      <P.Title>
        <GiBottledShadow />
        Pinned Products
      </P.Title>

      <P.PinWrapper>
        {data?.fetchUseditemsIPicked.map((el) => (
          <P.SinglePin key={el?._id}>
            <P.Image
              onClick={onClickMoveToDetail}
              src={`https://storage.googleapis.com/${el.images[0]}`}
              height="200px"
              onError={(e) => (e.currentTarget.src = "/empty.png")}
            />
            <div>{el?.name}</div>
            <div>{el?.price}₩</div>
          </P.SinglePin>
        ))}
      </P.PinWrapper>
    </P.Wrapper>
  );
}
