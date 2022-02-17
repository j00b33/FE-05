import styled from "@emotion/styled";

interface IMyButtonProps {
  isValid: boolean;
}

const CreateButton = styled.button`
  width: 179px;
  height: 52px;
  font-size: 20px;

  border-radius: 15px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "#b81a39" : ""};

  color: ${(props: IMyButtonProps) => (props.isValid ? "white" : "black")};
`;

export default function Button(props) {
  return (
    <CreateButton type={props.type} isValid={props.isValid}>
      {props.name}
    </CreateButton>
  );
}
