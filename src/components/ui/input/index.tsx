import clsx from 'clsx'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
import InputMask, { ReactInputMask } from 'react-input-mask'
import style from './style.module.css'

interface IInput {
  label: string,
  placeholder: string,
  type?: 'text' | 'password' | 'email' | 'date' | 'phone',
  disabled?: boolean,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  value: string,
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>,
  mask?: string
}

const Input: FC<IInput> = (props) => {
  const {
    label,
    placeholder,
    type = 'text',
    disabled,
    onChange,
    value,
    error,
    mask = '+7 (999) 999 99 99'
  } = props

  //статус поля, когда виден label, а значение сдвинуто вниз
  //активируется, если поле не пустое
  const [active, setActive] = useState<boolean>(Boolean(value))
  //показать значение поля, если type === password
  const [visible, setVisible] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement | ReactInputMask | null>(null)

  //обработчик кастомной иконки календаря
  //стандартная иконка скрыта ввиду отсутствия возможности стилизации
  const handleCalendar = () => {
    if (type === 'date' && inputRef?.current) {
      (inputRef.current as HTMLInputElement).showPicker()
    }
  }

  // если в пикере выбираем значение, выставить активный статус
  // т.к. onBlur при выборе в пикере не срабатывает
  // второе условие - если нет фокуса на самом инпуте
  useEffect(() => {
    if (type === 'date' && document.activeElement !== inputRef.current && value) {
      setActive(true)
    }
  }, [value])

  return (
    <div
      className={clsx(
        style['ui_input'],
        active && style['ui_input--active'],
        disabled && style['ui_input--disabled'],
        error && style['ui_input--error']
      )}
    >
      {type !== 'phone' &&
        <input
          onChange={onChange}
          value={value ?? ''}
          type={type !== 'password' ? type : visible ? 'text' : type}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setActive(true)}
          onBlur={(e) => setActive(Boolean(e.target.value))}
          ref={e => inputRef.current = e}
        />
      }
      {type === 'phone' &&
        <InputMask
          onChange={onChange}
          value={value ?? ''}
          type={'type'}
          placeholder={placeholder}
          disabled={disabled}
          mask={mask}
          onFocus={() => setActive(true)}
          onBlur={(e) => setActive(Boolean(e.target.value && !e.target.value.includes('_')))}
          ref={e => inputRef.current = e}
        />
      }
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
      {type === 'date' &&
        <div className={style['ui_input-calendar']}>
          <div className={style['ui_input-calendar_icon']} onClick={handleCalendar}>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M15.8333 9.16669H4.16667V5.83335C4.16667 5.37419 4.54083 5.00002 5 5.00002H5.83333V5.83335C5.83333 6.29169 6.20833 6.66669 6.66667 6.66669C7.125 6.66669 7.5 6.29169 7.5 5.83335V5.00002H12.5V5.83335C12.5 6.29169 12.875 6.66669 13.3333 6.66669C13.7917 6.66669 14.1667 6.29169 14.1667 5.83335V5.00002H15C15.4592 5.00002 15.8333 5.37419 15.8333 5.83335V9.16669ZM13.3333 14.1667H10C9.54167 14.1667 9.16667 13.7917 9.16667 13.3334C9.16667 12.875 9.54167 12.5 10 12.5H13.3333C13.7917 12.5 14.1667 12.875 14.1667 13.3334C14.1667 13.7917 13.7917 14.1667 13.3333 14.1667ZM6.66667 14.1667C6.20833 14.1667 5.83333 13.7917 5.83333 13.3334C5.83333 12.875 6.20833 12.5 6.66667 12.5C7.125 12.5 7.5 12.875 7.5 13.3334C7.5 13.7917 7.125 14.1667 6.66667 14.1667ZM15 3.33335H14.1667V2.50002C14.1667 2.04169 13.7917 1.66669 13.3333 1.66669C12.875 1.66669 12.5 2.04169 12.5 2.50002V3.33335H7.5V2.50002C7.5 2.04169 7.125 1.66669 6.66667 1.66669C6.20833 1.66669 5.83333 2.04169 5.83333 2.50002V3.33335H5C3.62167 3.33335 2.5 4.45502 2.5 5.83335V15.8334C2.5 17.2117 3.62167 18.3334 5 18.3334H15C16.3783 18.3334 17.5 17.2117 17.5 15.8334V5.83335C17.5 4.45502 16.3783 3.33335 15 3.33335Z" fill="#2A2A2F" />
            </svg>
          </div>
        </div>
      }
    </div>
  )
}

export default Input
