import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS_OF_MINE = gql`
  query fetchBoardsOfMine($boardId: ID!) {
    fetchBoardsOfMine(boardId: $boardId) {
      _id
      title
      images
      createdAt
      user {
        _id
      }
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        _id
        amount
      }
    }
  }
`;

export default function WrittenPostsPage() {
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

  const { data } = useQuery(FETCH_BOARDS_OF_MINE, {
    variables: {
      boardId: String(userData?.fetchUserLoggedIn.email),
    },
  });

  console.log("MyBoards:", data);
  return (
    <div>
      <div>My Posts</div>
      {data?.fetchBoardsOfMine.map((el) => (
        <div key={el.id}>
          <div>{el?.title}</div>
          <div>{el?.images}</div>
          <div>{el.createAt}</div>
        </div>
      ))}
    </div>
  );
}
