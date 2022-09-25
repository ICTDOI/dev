import { Button } from "antd";
import { IOnClickProps } from "../types/type";

function ButtonBox({ onClick }: IOnClickProps) {
  return (
    <>
      <Button type="primary" onClick={onClick}>
        Add!
      </Button>
    </>
  );
}
export default ButtonBox;
