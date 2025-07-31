import type { ReactNode } from "react";
import { motion as Motion } from "motion/react";
import type { MotionButtonProps } from "@/types/motion-props";

type ButtonProps = MotionButtonProps & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  children?: ReactNode;
  motion?: "none" | "hover" | "click" | "inView";
  onClick?: () => void;
};

const Button = ({
  variant = "primary",
  size = "md",
  icon,
  children = "버튼",
  motion = "inView",
  onClick,
  ...props
}: ButtonProps) => {
  const basicClasses = "border rounded-md p-2 outline-none";

  const variantStyles = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
  };

  const sizeStyles = {
    sm: "p-2 text-sm",
    md: "p-2 text-base",
    lg: "p-2 text-lg",
  };

  const combinedClasses = `
    ${basicClasses} 
    ${variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${props.disabled ? "opacity-50" : ""} 
    ${props.className || ""}
  `.trim();

  return (
    <Motion.button
      initial={
        motion === "none"
          ? undefined
          : motion === "inView"
            ? { scale: 0.7 }
            : { scale: 1 }
      }
      whileHover={
        motion === "hover" || motion === "inView" ? { scale: 1.1 } : undefined
      }
      whileTap={
        motion === "click" || motion === "inView" ? { scale: 1.1 } : undefined
      }
      whileInView={motion === "inView" ? { scale: 1 } : undefined}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {icon}
      {children}
    </Motion.button>
  );
};

export default Button;
