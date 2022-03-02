import { gql, useQuery } from "@apollo/client";
import * as H from "./styled";

const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      impUid
      amount
      updatedAt
      status
    }
  }
`;

export default function PaymentHistory() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING);

  return (
    <H.Wrapper>
      <H.Header>Payment History</H.Header>

      <H.HistoryTableWrapper>
        <H.Column>
          {data?.fetchPointTransactionsOfLoading.map((el) => (
            <H.Row key={el._id}>
              <H.Content>
                {el.updatedAt.slice(0, 10)} {el.updatedAt.slice(12, 16)}
              </H.Content>
            </H.Row>
          ))}
        </H.Column>

        <H.Column>
          {data?.fetchPointTransactionsOfLoading.map((el) => (
            <H.Row key={el._id}>
              <H.Content>{el.impUid}</H.Content>
            </H.Row>
          ))}
        </H.Column>

        <H.Column>
          {data?.fetchPointTransactionsOfLoading.map((el) => (
            <H.Row key={el._id}>
              <H.Content>{el.status}</H.Content>
            </H.Row>
          ))}
        </H.Column>

        <H.Column>
          {data?.fetchPointTransactionsOfLoading.map((el) => (
            <H.Row key={el._id}>
              <H.Content>${el.amount}</H.Content>
            </H.Row>
          ))}
        </H.Column>
      </H.HistoryTableWrapper>
    </H.Wrapper>
  );
}
