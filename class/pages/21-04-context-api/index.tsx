import { createContext } from "react";
import BoardWriteContext from "../../src/components/units/21-context-api/BoardWrite.container";

export const ExampleContext = createContext(null);

export default function ContextAPIPage() {
  // context 만들고 활용해줘야함
  // createContext 하고 useContext로 꺼내쓰는 형식

  return (
    <ExampleContext.Provider value={{ isEdit: true }}>
      <BoardWriteContext />
      {/* 여기에 딸려있는 component는 isEdit 접근 가능함 */}
    </ExampleContext.Provider>
  );
}
