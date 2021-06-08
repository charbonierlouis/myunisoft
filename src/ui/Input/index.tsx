import React from "react";

interface InputProps {
  type?: string;
  label: string;
  containerStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  passwordIconStyle?: React.CSSProperties;
  onChange: (e: string) => void;
}

const Input = ({
  type = "text",
  label,
  containerStyle = {},
  inputStyle = {},
  labelStyle = {},
  passwordIconStyle = {},
  onChange,
}: InputProps) => {
  const [value, setValue] = React.useState("");
  const [isLabelActive, setIsLabelActive] = React.useState(true);
  const [changedType, setChangedType] = React.useState(type);
  const textInput = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setIsLabelActive(
      document.activeElement === textInput.current || value === ""
    );
  }, []);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    onChange(e.currentTarget.value);
  };

  const handleFocusChange = () => {
    setIsLabelActive(
      document.activeElement === textInput.current || value === ""
    );
  };

  const togglePasswordView = () => {
    setChangedType(changedType === "password" ? "text" : "password");
  };

  return (
    <div className="input-container" style={containerStyle}>
      <input
        type={changedType}
        className="input"
        onChange={handleChange}
        onFocus={handleFocusChange}
        onBlur={handleFocusChange}
        ref={textInput}
        style={inputStyle}
      />
      <label className={isLabelActive ? "" : "input-label"} style={labelStyle}>
        {label}
      </label>
      {type === "password" && (
        <button className="input-icon hover" style={passwordIconStyle}>
          <i className={`far fa-eye`} onClick={togglePasswordView}></i>
        </button>
      )}
    </div>
  );
};

export default Input;
