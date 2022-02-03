import {gql, useQuery} from '@apollo/client'
import InfiniteScroll from 'react-infinite-scroller';


const FETCH_BOARDS = gql`
    query fetchBoards($page: Int){
        fetchBoards (page: $page){
            _id
            writer
            title
        }
    }
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
    <div>
        <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore} //스크롤 내릴시 실행되는 함수
            hasMore={true}>
            
        {data?.fetchBoards?.map((el) =>(  
                        <div key={el.id}>
                                <span>
                                    {el.title} {el.writer}
                                </span>
                    </div>
                    ))}
        </InfiniteScroll>

        {/* <div style="height:700px;overflow:auto;">
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true || false}
            loader={<div className="loader" key={0}>Loading ...</div>}
            useWindow={false}
        >
            {items}
        </InfiniteScroll>
        </div> */}
    </div>
    )
}