import { createElement } from "react";
import type { ButtonHTMLAttributes } from "react";
import type { IconType } from "react-icons";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: IconType;
  className?: string;
}

const Button = ({ title, icon, className = "", ...rest }: ButtonProps) => {
  const baseStyles =
    "rounded-sm px-6 py-2 text-lg font-medium flex items-center";

  return (
    <button className={`${baseStyles} ${className ?? ""}`} {...rest}>
      {icon
        ? createElement(icon, { className: "inline-block mr-2 text-2xl" })
        : ""}
      {title}
    </button>
  );
};

export default Button;
