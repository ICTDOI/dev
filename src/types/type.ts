export type IEventProps = React.ChangeEvent<HTMLInputElement>;
export interface IOnChangeProps {
  onChange: (event: IEventProps) => void;
  text: string;
}
export interface IOnClickProps {
  onClick: () => void;
}
