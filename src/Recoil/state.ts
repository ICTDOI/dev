import { selector, atom } from "recoil";

export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text: string = get(textState);

    return text.length;
  },
});

export const textState = atom({
  key: "textState",
  default: "",
});
