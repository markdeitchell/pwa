import { FC } from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'

interface IStackHead {
  withBack?: boolean,
  title: string,
  subtxt?: string
}

const StackHead: FC<IStackHead> = (props) => {
  const {
    withBack,
    title,
    subtxt
  } = props

  const navigate = useNavigate()

  const handleBack = () => navigate(-1)

  return (
    <div className={style['ui_stackhead']}>
      {withBack &&
        <div className={style['ui_stackhead-back']} onClick={handleBack}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.1213 3.29289C16.7608 2.93241 16.1936 2.90468 15.8013 3.2097L15.7071 3.29289L7 12L15.7071 20.7071C16.0976 21.0976 16.7308 21.0976 17.1213 20.7071C17.4818 20.3466 17.5095 19.7794 17.2045 19.3871L17.1213 19.2929L9.82922 12L17.1213 4.70711C17.4818 4.34662 17.5095 3.77939 17.2045 3.3871L17.1213 3.29289Z" />
          </svg>
        </div>
      }
      <div className={style['ui_stackhead-title']}>{title}</div>
      {subtxt &&
        <div className={style['ui_stackhead-subtxt']}>{subtxt}</div>
      }
    </div>
  )
}

export default StackHead
