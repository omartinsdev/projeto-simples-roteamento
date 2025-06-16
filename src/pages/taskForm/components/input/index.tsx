import { useId, type ChangeEventHandler } from "react";

import "./input.css";

type InputNames = "title" | "description";

interface InputProps {
  name: InputNames;
  text: string;
  labelMsg: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export const Input = ({
  name,
  text,
  labelMsg,
  onChange,
  value,
}: InputProps) => {
  const inputId = useId();

  return (
    <div>
      <label htmlFor={inputId} className="input-label">
        {labelMsg}
      </label>
      <input
        type="text"
        name={name}
        id={inputId}
        placeholder={text}
        onChange={onChange}
        value={value}
        className="input"
      />
    </div>
  );
};
