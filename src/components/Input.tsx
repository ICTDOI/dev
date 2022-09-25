import { Input } from "antd";
import { IOnChangeProps } from "../types/type";

function InputBox({ onChange, text }: IOnChangeProps) {
  return (
    <>
      <Input
        placeholder="오늘의 할일을 입력해주세요"
        onChange={onChange}
        value={text}
      />
    </>
  );
}

export default InputBox;
