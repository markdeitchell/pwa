import clsx from 'clsx'
import { ChangeEvent, FC, useState } from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
import style from './style.module.css'

interface IInput {
  label: string,
  placeholder: string,
  type?: 'text' | 'password' | 'email',
  disabled?: boolean,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  value: string,
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
}

const Input: FC<IInput> = (props) => {
  const {
    label,
    placeholder,
    type = 'text',
    disabled,
    onChange,
    value,
    error
  } = props

  const [active, setActive] = useState<boolean>(Boolean(value))
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <div
      className={clsx(
        style['ui_input'],
        active && style['ui_input--active'],
        disabled && style['ui_input--disabled'],
        error && style['ui_input--error']
      )}
    >
      <input
        onChange={onChange}
        value={value ?? ''}
        type={type !== 'password' ? type : visible ? 'text' : type}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => setActive(true)}
        onBlur={(e) => setActive(Boolean(e.target.value))}
      />
      <div className={style['ui_input-label']}>{label}</div>
      {type === 'password' &&
        <div className={style['ui_input-visibility']} {...!disabled && { onClick: () => setVisible(!visible) }}>
          <svg width={20} height={21} viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path fillRule='evenodd' clipRule='evenodd' d='M16.1725 15.4942L17.2558 16.5775C17.5816 16.9034 17.5816 17.43 17.2558 17.7559C17.0933 17.9184 16.88 18 16.6666 18C16.4533 18 16.24 17.9184 16.0775 17.7559L13.8216 15.5L13.3333 15.0117L12.2125 13.8909L12.155 13.8334L10.0697 11.7481C10.0466 11.7494 10.0234 11.75 9.99996 11.75C9.31079 11.75 8.74996 11.1892 8.74996 10.5C8.74996 10.4766 8.75061 10.4534 8.75188 10.4303L6.06913 7.74753L4.60996 6.28836L2.74413 4.42253C2.41829 4.09669 2.41829 3.57003 2.74413 3.24419C3.06996 2.91836 3.59663 2.91836 3.92246 3.24419L5.34996 4.67169L6.57079 5.89253L9.93022 9.25195C9.95331 9.25067 9.97656 9.25003 9.99996 9.25003C10.6891 9.25003 11.25 9.81086 11.25 10.5C11.25 10.5234 11.2493 10.5467 11.248 10.5698L14.5116 13.8334L16.1725 15.4942ZM7.16063 5.30353L9.49146 7.63436C9.65729 7.60519 9.82563 7.58353 9.99979 7.58353C11.6081 7.58353 12.9165 8.89186 12.9165 10.5002C12.9165 10.6744 12.8948 10.8427 12.8656 11.0085L15.1006 13.2444L15.7956 13.9394C17.064 12.7827 17.8773 11.5169 18.2231 10.9144C18.3698 10.6577 18.3698 10.3419 18.2231 10.0852C17.6915 9.15853 14.7548 4.51353 9.77479 4.66936C8.78813 4.69519 7.89479 4.90769 7.08479 5.22853L7.16063 5.30353ZM11.6233 14.4809L12.7441 15.6009L12.915 15.7718C12.105 16.0926 11.2125 16.3051 10.2258 16.3301C10.1575 16.3326 10.0883 16.3334 10.0208 16.3334C5.13496 16.3334 2.30163 11.8293 1.77663 10.9143C1.62996 10.6576 1.62996 10.3418 1.77663 10.0851C2.12246 9.48344 2.93579 8.21761 4.20413 7.06094L5.47996 8.33761L7.13496 9.99178C7.10496 10.1576 7.08329 10.3259 7.08329 10.5001C7.08329 12.1084 8.39163 13.4168 9.99996 13.4168C10.1741 13.4168 10.3425 13.3951 10.5083 13.3651L11.5658 14.4226L11.6233 14.4809Z' fill='#2A2A2F' />
          </svg>
        </div>
      }
      {error?.message &&
        <div className={style['ui_input-error']}>{String(error.message)}</div>
      }
    </div>
  )
}

export default Input
