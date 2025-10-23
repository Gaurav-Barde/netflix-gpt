import { createElement } from "react";
import type { ButtonHTMLAttributes } from "react";
import type { IconType } from "react-icons";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: IconType;
  className?: string;
}

const Button = ({ title, icon, className = "" }: ButtonProps) => {
  const baseStyles = "rounded-sm px-6 py-2 text-lg";

  return (
    <button className={`${baseStyles} ${className ?? ""}`}>
      {icon ? createElement(icon, { className: "inline-block mr-2" }) : ""}
      {title}
    </button>
  );
};

export default Button;
