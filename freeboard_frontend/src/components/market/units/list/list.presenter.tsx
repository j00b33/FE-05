import * as L from "./list.styles";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";

export default function ListUIPage(props) {
  return (
    <L.Wrapper>
      <L.Header>
        <L.HeaderTitle>Market</L.HeaderTitle>
        <L.HeaderSubtitle>View new albums!</L.HeaderSubtitle>
        <L.HeaderRouter onClick={props.onClickMoveToUpload}>
          Click here to upload your album
        </L.HeaderRouter>
      </L.Header>

      <L.SearchWrapper>
        <L.Searchtitle>Search 🔍</L.Searchtitle>
        <L.SearchBox
          type="text"
          placeholder="Enter your searching subject"
          onChange={props.onChangeSearch}
        />
      </L.SearchWrapper>

      <L.BoxWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
        >
          {props.data?.fetchUseditems.map((el) => (
            <L.Box id={el._id} key={el._id}>
              <L.LeftSection>
                <L.Date>{el.createdAt.slice(0, 10)}</L.Date>

                <L.Seller>Seller: {el.seller.name}</L.Seller>

                <L.Product
                  id={el._id}
                  onClick={props.onClickProductsDetail(el)}
                >
                  Product:{" "}
                  {el.name
                    .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                    .split("#$%")
                    .map((el) => (
                      <L.Word key={uuidv4()} isMatched={el === props.keyword}>
                        {el}
                      </L.Word>
                    ))}
                </L.Product>

                <L.Remarks>{el.remarks}</L.Remarks>

                <L.Price>{el.price}₩</L.Price>
              </L.LeftSection>
              <L.RightSection>
                <L.Image
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                  height="200px"
                  onError={(e) => (e.currentTarget.src = "/empty.png")}
                ></L.Image>
              </L.RightSection>
            </L.Box>
          ))}
        </InfiniteScroll>
      </L.BoxWrapper>
    </L.Wrapper>
  );
}
