import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import JestUnitTestPage from "../../pages/07Week/34-02-jest-unit-test";

it("내가 원하는대로 그려지는지 테스트하기", () => {
  render(<JestUnitTestPage />);

  const myText = screen.getByText("철수는 13살 입니다.");
  expect(myText).toBeInTheDocument();

  const myText2 = screen.getByText("철수의 취미 입력하기:");
  expect(myText2).toBeInTheDocument();
});
