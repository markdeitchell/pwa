import { FC, useState } from 'react'
import style from './style.module.css'
import clsx from 'clsx'

interface INumbpad {
  value: string,
  onChange: (value: string) => void
}

type TNumbpadkey = number | 'exit' | 'delete'

type TStructure = (TNumbpadkey[])[]

const Numbpad: FC<INumbpad> = (props) => {
  const {
    value,
    onChange
  } = props

  //записываем элемент, который нажат, чтобы показать серую подложку под кнопкой
  const [touchedId, setTouchedId] = useState<TNumbpadkey | null>(null)

  //обработчик, записывающий нажатый элемент
  const handleTouch = (type: 'on' | 'off', key?: TNumbpadkey) => {
    if (type === 'on' && (key || key === 0)) setTouchedId(key)
    if (type === 'off') setTouchedId(null)
  }

  const handleClick = (key: number | 'exit' | 'delete') => {
    switch (key) {
      case 'exit':
        break
      case 'delete':
        if (value.length > 0) onChange(value.substring(0, value.length - 1))
        break
      default:
        onChange(value + String(key))
        break
    }
  }

  const structure: TStructure = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['exit', 0, 'delete']
  ]

  return (
    <div className={style['ui_numbpad']}>
      {structure.map((el, i) => (
        <div className={style['ui_numbpad-row']} key={'row' + i}>
          {el.map((subEl, subI) => (
            <div
              key={'clm' + subI}
              className={clsx(
                style['ui_numbpad-clm'],
                subEl === 'exit' && style['ui_numbpad-clm--exit'],
                subEl === touchedId && style['ui_numbpad-clm--touched']
              )}
              onClick={() => handleClick(subEl)}
              onMouseDown={() => handleTouch('on', subEl)}
              onMouseUp={() => handleTouch('off')}
              onMouseLeave={() => handleTouch('off')}
            >
              {typeof subEl === 'number' &&
                <span className={style['ui_numbpad-number']}>{String(subEl)}</span>}
              {subEl === 'exit' &&
                <span className={style['ui_numbpad-exit']}>{'Выйти'}</span>}
              {subEl === 'delete' &&
                <span className={style['ui_numbpad-delete']}><Delete /></span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

const Delete = () => (
  <svg width={30} height={21} viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5391 5.7565L23.497 15.7144C23.7888 16.0058 24.2618 16.0058 24.5532 15.7144C24.8449 15.4227 24.8449 14.9496 24.5532 14.6579L14.5953 4.69998C14.3039 4.4086 13.8309 4.4086 13.5391 4.69998C13.2474 4.99171 13.2474 5.46475 13.5391 5.7565Z" />
    <path d="M23.497 4.69998L13.5391 14.6579C13.2474 14.9496 13.2474 15.4227 13.5391 15.7144C13.8308 16.0058 14.3039 16.0058 14.5953 15.7144L24.5532 5.7565C24.8449 5.46477 24.8449 4.99173 24.5532 4.69998C24.2618 4.4086 23.7888 4.4086 23.497 4.69998Z" />
    <path d="M9.05707 2.33246L1.71231 9.67723C1.42092 9.96861 1.42058 10.4448 1.71231 10.7365L9.05707 18.0813C9.49988 18.5241 10.4539 18.92 11.0791 18.92H27.0144C27.4232 18.92 27.76 18.5838 27.76 18.1743V2.23901C27.76 1.83023 27.4239 1.49335 27.0144 1.49335H11.0791C10.456 1.49335 9.49984 1.88962 9.05707 2.33209V2.33246ZM8.00091 1.2763C8.72365 0.553562 10.0601 0 11.0791 0H27.0144C28.2498 0 29.2538 1.00646 29.2538 2.23946V18.1748C29.2538 19.4102 28.2474 20.4143 27.0144 20.4143H11.0791C10.0573 20.4143 8.7233 19.8603 8.00091 19.138L0.656145 11.7932C-0.219066 10.918 -0.218364 9.49576 0.656145 8.6216L8.00091 1.2763Z" />
  </svg>
)

export default Numbpad
