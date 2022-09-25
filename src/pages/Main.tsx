import { useRecoilValue, useRecoilState } from "recoil";
import ButtonBox from "../components/Button";
import InputBox from "../components/Input";
import { charCountState, textState } from "../Recoil/state";
import { IEventProps } from "../types/type";
import "antd/dist/antd.css";

function Main() {
  const count = useRecoilValue(charCountState);
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: IEventProps): void => {
    setText(event.target.value);
  };

  const addTodoHandler = (): void => {
    setText("");
  };

  return (
    <>
      <InputBox text={text} onChange={onChange} />
      <ButtonBox onClick={addTodoHandler} />
      <p>{count}</p>
    </>
  );
}

export default Main;
