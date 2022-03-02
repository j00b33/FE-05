import { gql, useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import * as S from "./styled";

const FETCH_POINTTRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($search: String, $page: Int) {
    fetchPointTransactionsOfSelling(search: $search, page: $page) {
      _id
      useditem {
        name
      }
      amount
      balance
      updatedAt
    }
  }
`;

export default function SaleHistory() {
  const { data, fetchMore } = useQuery(FETCH_POINTTRANSACTIONS_OF_SELLING);

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchPointTransactionsOfSelling.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchPointTransactionsOfSelling) {
          return {
            fetchPointTransactionsOfSelling: [
              ...prev.fetchPointTransactionsOfSelling,
            ],
          };
        }
        return {
          fetchPointTransactionsOfSelling: [
            ...prev.fetchPointTransactionsOfSelling,
            ...fetchMoreResult.fetchPointTransactionsOfSelling,
          ],
        };
      },
    });
  };

  return (
    <S.Wrapper>
      <S.Header>Sale History</S.Header>

      <S.HeaderSubject>
        <S.Title>Date</S.Title>
        <S.Title>Product</S.Title>
        <S.Title>Gain</S.Title>
        <S.Title>Current Amount</S.Title>
      </S.HeaderSubject>

      <S.DivisionLine />

      <S.TableWrapper>
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
          {data?.fetchPointTransactionsOfSelling.map((el) => (
            <S.Row key={el._id}>
              <S.Content>
                {el.updatedAt.slice(0, 10)} | {el.updatedAt.slice(12, 16)}
              </S.Content>
              <S.Content>{el.useditem.name}</S.Content>
              <S.Gain>+ {el.amount}₩</S.Gain>
              <S.Content>{el.balance}₩</S.Content>
            </S.Row>
          ))}
        </InfiniteScroll>
      </S.TableWrapper>
    </S.Wrapper>
  );
}
