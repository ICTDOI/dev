import { Input } from "antd";
import { atom, useRecoilState } from "recoil";

export const textState = atom({
  key: "textState",
  default: "",
});

function InputBox() {
  type IProps = React.ChangeEvent<HTMLInputElement>;

  const [text, setText] = useRecoilState(textState);

  const onChange = (event: IProps): void => {
    setText(event.target.value);
  };

  console.log(text);
  return (
    <>
      <Input placeholder="오늘의 할일을 입력해주세요" onChange={onChange} />
    </>
  );
}

export default InputBox;
