import clsx from 'clsx'
import { FC, MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'

interface IProps {
  txt: string,
  isHollow?: boolean,
  isLink?: boolean,
  isDisabled?: boolean,
  isSubmit?: boolean,
  isTimer?: boolean,
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement | HTMLInputElement>,
  link?: string
}

const Btn: FC<IProps> = (props) => {
  const {
    txt,
    isHollow,
    isDisabled,
    isLink,
    isSubmit,
    isTimer,
    onClick,
    link
  } = props

  return (
    <div className={clsx(
      style['ui_btn'],
      isHollow && style['ui_btn--hollow'],
      isDisabled && style['ui_btn--disabled'],
      isTimer && style['ui_btn--timer']
    )}>
      {(isLink && link) &&
        <>
          {!isDisabled &&
            <Link to={link} className={style['ui_btn-link']} >
              <span className={style['ui_btn-txt']}>{txt}</span>
            </Link>
          }
          {isDisabled &&
            <div className={style['ui_btn-link']}>
              <span className={style['ui_btn-txt']}>{txt}</span>
            </div>
          }
        </>
      }
      {!isLink &&
        <button type={isSubmit ? 'submit' : 'button'} className={style['ui_btn-button']} onClick={onClick} {...isDisabled && { disabled: true }}>
          <span className={style['ui_btn-txt']}>{txt}</span>
        </button>
      }
    </div>
  )
}

export default Btn
