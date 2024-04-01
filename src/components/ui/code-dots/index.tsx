import { FC, useState } from 'react'
import style from './style.module.css'
import clsx from 'clsx'

interface ICodedots {
  length?: number,
  error?: boolean,
  success?: boolean,
  value: string
}

const Codedots: FC<ICodedots> = (props) => {
  const {
    length = 4,
    // error,
    success,
    value
  } = props

  const [error, setError] = useState(false)

  return (
    <>
      <button onClick={() => setError(!error)}>Toggle</button>
      <div className={style['ui_codedots']}>
        {Array.from({ length }).map((_, i) => (
          <div className={clsx(
            style['ui_codedots-dot'],
            value.length >= i + 1 && style['ui_codedots-dot--filled'],
            error && style['ui_codedots-dot--error'],
            success && style['ui_codedots-dot--success']
          )} />
        ))}
      </div>
    </>
  )
}

export default Codedots
