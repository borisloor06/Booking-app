import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  selected?: boolean;
  type?: "button" | "submit" | "reset";
  hidden?: boolean;
  className?: string;
}

const Button = ({
  children,
  onClick,
  disabled = false,
  selected = false,
  type = "button",
  hidden = false,
  className,
}: ButtonProps) => {
  //"px-4 py-2 rounded-md transition-colors duration-300",
  const buttonClasses = disabled
    ? "bg-gray-400 text-gray-700 cursor-not-allowed p-1 px-3 rounded"
    : selected
    ? "bg-slate-700 text-white hover:bg-slate-800 p-1 px-3 rounded"
    : "bg-slate-500 text-white hover:bg-slate-600 p-1 px-3 rounded";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      hidden={hidden}
      className={buttonClasses + " " + className}
    >
      {children}
    </button>
  );
};

export default Button;
