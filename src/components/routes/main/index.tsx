import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Input from '@/components/ui/input'

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
  
  return (
    <div style={{ padding: 17, height: '100vh', background: '#d0d0d0' }}>
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
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  )
}

export default RouteMain
