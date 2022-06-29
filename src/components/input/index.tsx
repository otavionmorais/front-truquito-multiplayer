import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import "./styles.css";

interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  setValue: (value: string) => void;
}

export default function Input({
  value,
  setValue,
  label,
  autoFocus = false,
  ...rest
}: IProps) {
  return (
    <div className="input-container">
      <h2 className="input-label">{label}</h2>
      <input
        {...rest}
        autoFocus={autoFocus}
        className="input-style"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
