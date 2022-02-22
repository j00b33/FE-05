import BoardCommentPage from "../../../src/components/board/units/comments/BoardComment.container";
import MarketCommentPage from "../../../src/components/market/units/comment/comment.container";
import ProductDetailContainer from "../../../src/components/market/units/detail/detail.contain";

export default function BoardDetailUIPage() {
  return (
    <div>
      <ProductDetailContainer />
      <MarketCommentPage />
    </div>
  );
}
