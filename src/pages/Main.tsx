import { selector, useRecoilValue } from "recoil";
import InputBox, { textState } from "../components/Input";

const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text: string = get(textState);

    return text.length;
  },
});

function Main() {
  const count = useRecoilValue(charCountState);
  return (
    <>
      <InputBox />
      <p>{count}</p>
    </>
  );
}

export default Main;
