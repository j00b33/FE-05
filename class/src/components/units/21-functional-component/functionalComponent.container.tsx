import FunctionalComponentUI from "./functionalComponent.presenter";

export default function FunctionalComponent() {
  //   return <div>{FunctionalComponentUI({count:100})}</div>;
  //count:100이 인자가 되고 props로 UIPage에서 받아온게 매개변수가 되는거임
  return <FunctionalComponentUI count={2000} />;
}
