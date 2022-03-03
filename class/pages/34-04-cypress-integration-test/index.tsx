import { useRouter } from "next/router";

export default function CypressIntegrationTestPage() {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/34-05-cypress-integration-test2");
  };
  return (
    <div>
      <button onClick={onClickButton}>철수랑 놀러가기</button>
    </div>
  );
}
