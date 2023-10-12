import css from "./Tooltip.module.css";

export function Tooltip({ children }: Props) {
  return <div className={css.tooltip}><div>{children}</div></div>;
}