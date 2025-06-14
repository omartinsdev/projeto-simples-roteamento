import { useId } from "react";

import "./input.css";

type InputNames = "title" | "description";

interface InputProps {
  name: InputNames;
  text: string;
  labelMsg: string;
}

export const Input = ({ name, text, labelMsg }: InputProps) => {
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
        className="input"
      />
    </div>
  );
};
