import { HTMLMotionProps } from "motion/react";
import {
  HTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  AnchorHTMLAttributes,
  ImgHTMLAttributes,
} from "react";

type CommonMotionConfilcts =
  | "onDrag"
  | "onChange"
  | "onFocus"
  | "onBlur"
  | "onKeyDown"
  | "onKeyUp"
  | "onKeyPress"
  | "onPointerDown"
  | "onPointerMove"
  | "onPointerUp"
  | "onPointerCancel"
  | "onPointerEnter"
  | "onPointerLeave"
  | "onPointerOver"
  | "onPointerOut";

export type MotionDivProps = HTMLMotionProps<"div"> &
  Omit<HTMLAttributes<HTMLDivElement>, CommonMotionConfilcts>;

export type MotionButtonProps = HTMLMotionProps<"button"> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, CommonMotionConfilcts>;

export type MotionInputProps = HTMLMotionProps<"input"> &
  Omit<InputHTMLAttributes<HTMLInputElement>, CommonMotionConfilcts>;

export type MotionAnchorProps = HTMLMotionProps<"a"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, CommonMotionConfilcts>;

export type MotionImgProps = HTMLMotionProps<"img"> &
  Omit<ImgHTMLAttributes<HTMLImageElement>, CommonMotionConfilcts>;
