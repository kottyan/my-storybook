import { ComponentProps, forwardRef, PropsWithChildren } from 'react'
import * as styles from './checkbox.css'
import { checkIconRecipe } from './checkbox.css'

export type Size = 'sm' | 'md' | 'lg'

type InputProps = Pick<
  ComponentProps<'input'>,
  | 'id'
  | 'aria-label'
  | 'checked'
  | 'defaultChecked'
  | 'disabled'
  | 'name'
  | 'onChange'
  | 'onClick'
  | 'required'
  | 'value'
>

type Props = PropsWithChildren<
  InputProps & {
    size?: Size
  }
>

const Input = ({ id, checked, disabled, ...rest }: InputProps) => {
  return (
    <input
      id={id}
      type="checkbox"
      disabled={disabled}
      className={styles.input}
      {...rest}
    />
  )
}
const CheckIcon = ({
  size,
  checked,
  disabled,
}: Pick<Props, 'size' | 'checked' | 'disabled'>) => {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={checkIconRecipe({
        size: size,
        checked: checked && !disabled,
      })}
    >
      {checked && !disabled ? (
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          fill="currentColor"
        ></path>
      ) : (
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          fill="currentColor"
        ></path>
      )}
    </svg>
  )
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(function Checkbox(
  { id, checked, children, disabled, size = 'md', ...rest },
  ref
) {
  if (!children) {
    return (
      <span className={styles.wrapper}>
        <Input id={id} checked={checked} disabled={disabled} {...rest} />
        <CheckIcon size={size} checked={checked} disabled={disabled} />
      </span>
    )
  }

  return (
    <label htmlFor={id} className={styles.labelWrapper}>
      <Input id={id} checked={checked} disabled={disabled} {...rest} />
      <CheckIcon size={size} checked={checked} disabled={disabled} />
      {children && (
        <span
          className={styles.labelRecipe({
            size: size,
          })}
        >
          {children}
        </span>
      )}
    </label>
  )
})
