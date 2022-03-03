import { gql, useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import * as P from "./styled";

const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String, $page: Int) {
    fetchPointTransactionsOfBuying(search: $search, page: $page) {
      _id
      useditem {
        name
      }
      amount
      balance
      updatedAt
      # seller {
      #   name
      # }
    }
  }
`;

export default function PurchaseHistory() {
  const { data, fetchMore } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING);

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchPointTransactionsOfBuying.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchPointTransactionsOfBuying) {
          return {
            fetchPointTransactionsOfSelling: [
              ...prev.fetchPointTransactionsOfBuying,
            ],
          };
        }
        return {
          fetchPointTransactionsOfBuying: [
            ...prev.fetchPointTransactionsOfBuying,
            ...fetchMoreResult.fetchPointTransactionsOfBuying,
          ],
        };
      },
    });
  };

  return (
    <P.Wrapper>
      <P.Header>Purchase History</P.Header>

      <P.HeaderSubject>
        <P.Title>Date</P.Title>
        <P.Title>Product</P.Title>
        {/* <P.Title>Seller</P.Title> */}
        <P.Title>Paid</P.Title>
        <P.Title>Current Amount</P.Title>
      </P.HeaderSubject>

      <P.DivisionLine />

      <P.TableWrapper>
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
          {data?.fetchPointTransactionsOfBuying.map((el) => (
            <P.Row key={el._id}>
              <P.Content>
                {el.updatedAt.slice(0, 10)} | {el.updatedAt.slice(12, 16)}
              </P.Content>
              <P.Content>
                {el?.useditem?.name.length > 10
                  ? `${el?.useditem?.name.slice(0, 11)}...`
                  : el?.useditem?.name}
              </P.Content>
              {/* <P.Content>{el.seller.name}</P.Content> */}
              <P.Gain>{el.amount}₩</P.Gain>
              <P.Content>{el.balance}₩</P.Content>
            </P.Row>
          ))}
        </InfiniteScroll>
      </P.TableWrapper>
    </P.Wrapper>
  );
}
