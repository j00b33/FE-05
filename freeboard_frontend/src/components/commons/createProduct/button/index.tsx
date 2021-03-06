import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useMove } from "../../hoc/customhooks/moveTo";

interface IMyButtonProps {
  isValid: boolean;
}

const CreateButton = styled.button`
  width: 179px;
  height: 52px;
  font-size: 20px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "black" : "white"};

  color: ${(props: IMyButtonProps) => (props.isValid ? "#00eeff" : "black")};

  border: ${(props: IMyButtonProps) =>
    props.isValid ? "2px solid #00eeff" : "2px solid black"};
`;

export default function Button(props) {
  const router = useRouter();
  return <CreateButton isValid={props.isValid}>{props.name}</CreateButton>;
}
