import { FC, KeyboardEvent, createRef, useEffect, useState } from 'react'
import style from './style.module.css'
import clsx from 'clsx'

interface ICells {
  onChange: (value: string) => void
}

const Cells: FC<ICells> = (props) => {
  const {
    onChange
  } = props

  const [values, setValues] = useState(Array(4).fill(''))

  useEffect(() => {
    onChange(values.join(''))
  }, [values])


  const inputs = Array.from({ length: 4 }, () => createRef<HTMLInputElement>())
  const keys = [...Array.from({ length: 10 }, (_, i) => String(i)), 'Backspace', 'ArrowLeft', 'ArrowRight']

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>, i: number) => {
    const { key } = e

    if (keys.includes(key)) {
      switch (key) {
        case 'Backspace':
          setValues((prev) => {
            const new_val = [...prev]
            new_val[i] = ''
            return new_val
          })
          if (i > 0) {
            inputs[i - 1]?.current?.focus()
          }
          break
        case 'ArrowLeft':
          if (i > 0) {
            inputs[i - 1]?.current?.focus()
          }
          break
        case 'ArrowRight':
          if (i !== 3) {
            inputs[i + 1]?.current?.focus()
          }
          break
        default:
          setValues((prev) => {
            const new_val = [...prev]
            new_val[i] = key
            return new_val
          })
          if (inputs && i < 3) {
            inputs[i + 1]?.current?.focus()
          }
          if (i === 3) {
            inputs[i]?.current?.blur()
          }
          break
      }
    } else return e.preventDefault()
  }

  return (
    <div className={style['ui_cells']}>
      {values.map((_, i) => (
        <input
          key={i}
          value={values[i]}
          ref={inputs[i]}
          maxLength={1}
          type='number'
          onKeyDown={(e) => handleKeyPress(e, i)}
          onChange={(e) => e.preventDefault()}
          className={clsx(style['ui_cells-input'])}
        />
      ))}

    </div>
  )
}

export default Cells
