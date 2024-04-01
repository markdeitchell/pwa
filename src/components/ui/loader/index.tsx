import { FC } from 'react'
import style from './style.module.css'

interface ILoader {
  title?: string,
  txt?: string
}

const Loader: FC<ILoader> = (props) => {
  const {
    title,
    txt = 'Подождите, проверяем ваши данные',
  } = props

  return (
    <div className={style['ui_loader']}>
      <div className={style['ui_loader-ico']}>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width={33} height={33} style={{ shapeRendering: 'auto', display: 'block', background: 'transparent' }}>
          <g>
            <circle cx={50} cy={50} fill="none" strokeWidth={8} r={45} strokeDasharray="212.05750411731105 72.68583470577035">
              <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
            </circle>
            <g />
          </g>
        </svg>
      </div>
      {title &&
        <div className={style['ui_loader-title']}>{title}</div>
      }
      <div className={style['ui_loader-txt']}>{txt}</div>
    </div>
  )
}

export default Loader
