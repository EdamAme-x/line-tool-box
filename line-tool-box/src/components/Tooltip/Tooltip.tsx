import css from "./Tooltip.module.css";

export function Tooltip({ children, ...attrs }: Props) {
  return (
    <div className={css.tooltip}>
      <div {...attrs}>{children}</div>
    </div>
  );
}
