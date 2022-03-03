import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import JestUnitTestSnapshotPage from "../../pages/34-03-jest-unit-test-snapshot";

it("내가 원하는대로 그려지는지 테스트하기", () => {
  const result = render(<JestUnitTestSnapshotPage />);
  expect(result.container).toMatchSnapshot();
  //없으면 스냅샷 찍고 있으면 기존 스냅샷과 비교
});
