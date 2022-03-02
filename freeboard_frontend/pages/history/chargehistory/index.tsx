import { gql, useQuery } from "@apollo/client";
import * as H from "./styled";

const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      impUid
      amount
      updatedAt
      balance
    }
  }
`;

export default function ChargeHistory() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING);

  return (
    <H.Wrapper>
      <H.Header>Charge History</H.Header>

      <H.HeaderSubject>
        <H.Title>Date</H.Title>
        <H.Title>PayID</H.Title>
        <H.Title>Paid</H.Title>
        <H.Title>Current Amount</H.Title>
      </H.HeaderSubject>

      <H.DivisionLine />

      {data?.fetchPointTransactionsOfLoading.map((el) => (
        <H.Row key={el._id}>
          <H.Content>
            {el.updatedAt.slice(0, 10)} | {el.updatedAt.slice(12, 16)}
          </H.Content>
          <H.Content>{el.impUid.slice(5, 16)}</H.Content>
          <H.Charged>+ {el.amount}₩</H.Charged>
          <H.Content>{el.balance}₩</H.Content>
        </H.Row>
      ))}
    </H.Wrapper>
  );
}
