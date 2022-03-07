import { add } from "../../pages/07Week/34-01-jest/index";

it("내가 하고싶은 작은 테스트 - 1", () => {
  const result = add(3, 5);

  expect(result).toBe(8);
});

// describe("내가 하고 싶은 테스트!!!", () => {
//     it("내가 하고싶은 작은 테스트 - 1", () => {

//     })

//     it("내가 하고싶은 작은 테스트 - 2", () => {

//     })

//     it("내가 하고싶은 작은 테스트 - 3", () => {

//     })
// })
