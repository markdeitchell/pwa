import { FC, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Input from '@/components/ui/input'
import Checkbox from '@/components/ui/checkbox'
import Loader from '@/components/ui/loader'
import Numbpad from '@/components/ui/numbpad'
import Cells from '@/components/ui/cells'
import Codedots from '@/components/ui/code-dots'

const defaultValues = {
  email: 'test@test.test',
  name: 'name name',
  password: 'test@test.test',
  required: '123'
}

const RouteMain: FC<{}> = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<any>({ defaultValues })

  const onSubmit = async (formData: any) => {
    console.log(formData)
  }

  const [numbpad, setNumbpad] = useState<string>('')
  const [code, setCode] = useState<string>()
  
  return (
    <div style={{ padding: 17, height: '100vh' }}>
      <br />
      <Loader title='Title' />
      <br />
      {code}
      <Cells onChange={setCode} />
      <br />
      <Codedots value={numbpad} />
      <br />
      <Numbpad value={numbpad} onChange={setNumbpad} />
      <br />
      <form className={'popup-form'} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name={'email'}
          render={({ field: { onChange, value } }) => (
            <Input
              onChange={onChange}
              value={value}
              label={'Label'}
              placeholder={'Input'}
            />
          )}
        />
        <br />
        <Controller
          control={control}
          name={'name'}
          render={({ field: { onChange, value } }) => (
            <Input
              onChange={onChange}
              value={value}
              label={'Label'}
              placeholder={'Input'}
              disabled
            />
          )}
        />
        <br />
        <Controller
          control={control}
          name={'password'}
          render={({ field: { onChange, value } }) => (
            <Input
              onChange={onChange}
              value={value}
              label={'Label'}
              placeholder={'Input'}
              type='password'
            />
          )}
        />
        <br />
        <Controller
          control={control}
          name={'required'}
          rules={{ required: { value: true, message: 'Support text' } }}
          render={({ field: { onChange, value } }) => (
            <Input
              onChange={onChange}
              value={value}
              error={errors?.required}
              label={'Label'}
              placeholder={'Input'}
              type='password'
            />
          )}
        />
        <br />
        <Controller
          control={control}
          name={'checkbox'}
          rules={{ required: { value: true, message: 'Support text' } }}
          render={({ field: { onChange, value } }) => (
            <Checkbox id='checkbox' onChange={onChange} value={value}>
              Я согласен на <a href="#">обработку персональных данных</a>
            </Checkbox>
          )}
        />
        <br />
        <Controller
          control={control}
          name={'date'}
          rules={{ required: { value: true, message: 'Support text' } }}
          render={({ field: { onChange, value } }) => (
            <Input
              onChange={onChange}
              value={value}
              error={errors?.date}
              label={'Label'}
              placeholder={'Input'}
              type='date'
            />
          )}
        />
        <br />
        <Controller
          control={control}
          name={'phone'}
          rules={{ validate: (value: string) => (value && !value.includes('_')) || 'Invalid phone' }}
          render={({ field: { onChange, value } }) => (
            <Input
              onChange={onChange}
              value={value}
              error={errors?.phone}
              label={'Label'}
              placeholder={'Input'}
              type='phone'
            />
          )}
        />
        <br />
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  )
}

export default RouteMain
