import { useAuth } from "../../../src/components/commons/hocs/hooks/useAuth";

export default function CustomHooksUseAutPage() {
  const { isLoading } = useAuth();
  //isLoading이 true라면 로그인 채크가 진행되고있는 중이라는것
  if (isLoading) return <></>;
  return (
    <div>
      <div>커스텀 훅 연습 페이지 - 권한분기</div>
      <div>로그인 체크 완료. 환영합니다</div>
    </div>
  );
}
