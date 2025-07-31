import { motion as Motion } from "motion/react";
import type { MotionInputProps } from "@/types/motion-props";

type InputProps = MotionInputProps & {
  variant?: "primary" | "secondary";
  fontSize?: "sm" | "md" | "lg";
  motion?: "none" | "inView";
  onChange?: (value: string | number) => void;
};

const Input = ({
  variant = "primary",
  fontSize = "md",
  motion = "none",
  onChange,
  ...props
}: InputProps) => {
  const basicClasses = "border rounded-md p-2 outline-none";

  const variantClasses = {
    primary: "border-blue-500",
    secondary: "border-gray-500",
  };

  const fontSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const combinedClasses = `
    ${basicClasses} 
    ${variantClasses[variant]} 
    ${fontSizeClasses[fontSize]} 
    ${props.disabled ? "opacity-50" : ""} 
    ${props.className || ""}
  `.trim();

  return (
    <Motion.input
      initial={motion === "inView" ? { opacity: 0, y: 10 } : {}}
      animate={motion === "inView" ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3 }}
      className={combinedClasses}
      onChange={(e) => onChange?.(e.target.value)}
      {...props}
    />
  );
};

export default Input;
