import {gql, useQuery} from '@apollo/client'
import InfiniteScroll from 'react-infinite-scroller';
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int){
        fetchBoards (page: $page){
            _id
            writer
            title
        }
    }
`

const ScrollerWrapper = styled.div`
    height: 500px;
    overflow: auto;
    //box 넘어가면 스크롤 내리면서 볼 수 있게 해줌
`

export default function PageNationPage(){
    const {data, fetchMore} = useQuery(FETCH_BOARDS,{ variables: {page : 1} })
    const onLoadMore = () => {
        if (!data) return;
        fetchMore({
            variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
            updateQuery: ( prev, {fetchMoreResult}) => {
                if(!fetchMoreResult.fetchBoards){
                    return { fetchBoard: [...prev.fetchBoards] } }
                return {
                    fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards]
                }
            }
        })
    }

    return(
    <ScrollerWrapper>

        <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore} //스크롤 내릴시 실행되는 함수
            hasMore={true}
            useWindow={false}
        >
    <table>
        {data?.fetchBoards?.map((el) =>(  
            <tr key={el.id}>
                <td>
                    {el.title}
                </td>
                <td>
                    {el.writer}
                </td>
            </tr>
            ))}
    </table>
        </InfiniteScroll>

    </ScrollerWrapper>
    )
}