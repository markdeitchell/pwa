import clsx from 'clsx'
import { ChangeEvent, FC, ReactNode } from 'react'
import style from './style.module.css'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

interface IProps {
  id: string,
  value?: boolean,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>,
  children: ReactNode
}

const Checkbox: FC<IProps> = (props) => {
  const {
    id,
    value,
    onChange,
    error,
    children
  } = props

  let customHandlers = {}
  if (onChange) customHandlers = { ...customHandlers, onChange }

  return (
    <div className={clsx(
      style['ui-check'],
      error && style['ui-check--error']
    )}>
      <input
        id={id}
        checked={Boolean(value)}
        type='checkbox'
        {...customHandlers}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}

export default Checkbox
