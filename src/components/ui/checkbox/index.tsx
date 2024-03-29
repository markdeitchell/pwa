import clsx from 'clsx'
import { ChangeEvent, FC } from 'react'
import { UseFormReturn } from 'react-hook-form'
import style from './style.module.css'

interface IProps {
  id: string,
  // form variant
  isForm?: boolean,
  value?: string,
  register?: UseFormReturn['register'],
  validation?: object,
  error?: boolean,
  // controlled variant
  checked?: boolean | null,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  // #####
  defaultChecked?: boolean,
  name?: string,
  txt: string,
  _style?: string
}

const Checkbox: FC<IProps> = (props) => {
  const {
    id,
    register = () => { },
    checked,
    onChange,
    validation,
    error,
    defaultChecked,
    name,
    isForm,
    value,
    txt,
    _style,
  } = props

  let customHandlers = {}
  if (onChange) customHandlers = { ...customHandlers, onChange }

  return (
    <div className={clsx(
      style['ui-check'],
      _style && _style,
      error && style['ui-check--error']
    )}>
      {isForm
        ? <input
          {...register(String(id), validation)}
          defaultChecked={defaultChecked}
          id={id}
          type='checkbox'
          value={value}
          {...customHandlers}
        />
        : <input
          checked={Boolean(checked)}
          defaultChecked={defaultChecked}
          id={id}
          type='checkbox'
          name={name}
          value={value}
          {...customHandlers}
        />
      }
      <label htmlFor={id}>{txt}</label>
    </div>
  )
}

export default Checkbox
