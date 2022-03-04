import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;

  margin: 50px;
  height: 200px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;

  width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ProductWrapper = styled.div`
  margin-top: 20px;
  width: 1000px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Box = styled.div`
  width: 120px;
  height: 120px;
  background-color: #f2edf5;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 70px;
  height: 70px;

  object-fit: cover;
  margin-top: 5px;
`;

export const Product = styled.div`
  font-size: 15px;
  cursor: pointer;

  :hover {
    color: #9900ff;
  }
`;

export const DivisionLine = styled.div`
  border: 1px solid grey;
  width: 900px;
`;
