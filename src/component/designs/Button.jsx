import { memo } from "react";

const Button = ({ className, onClick, children, color, blue }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 cursor-pointer transition-colors  border border-color-6 rounded-md px-7 text-n-1  lg:hover:bg-transparent active:bg-transparent ${
    color
      ? "text-n-1 lg:hover:bg-color-6 active:bg-color-6 bg-transparent "
      : ""
  } ${className && ""} ${blue ? "bg-color-1" : "bg-color-6"}`;

  const spanClasses = `relative z-10 flex gap-4 items-center`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  return renderButton();
};

export default Button;
