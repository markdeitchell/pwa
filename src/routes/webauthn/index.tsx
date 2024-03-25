import { api_webauthnAuth, api_webauthnAuthOptions, api_webauthnRegister, api_webauthnRegisterOptions } from '@/api/webauthn'
import { preformatGetAssertReq, preformatMakeCredReq, publicKeyCredentialToJSON } from '@/utils/webauthnFuncs'
import { useForm } from 'react-hook-form'
import { startAuthentication } from '@simplewebauthn/browser'

const PageWebauthn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<any>()

  const onSubmit = async (formData: { email: string }) => {

    const authOptionsRes = await api_webauthnAuthOptions(formData)
    const registerOptionsRes = await api_webauthnRegisterOptions(formData)

    // const optionsRes = await api_webauthnAuthOptions(formData)
    // if (optionsRes.status === 200) {
    //   const { challenge, rpId, timeout, userVerification } = optionsRes.data.publicKey
    //   const publicKeyCredentialRequestOptions = {
    //     // Преобразование challenge (предоставленного сервером) в Uint8Array. 
    //     // Это необходимо, так как WebAuthn требует, чтобы challenge был в бинарном формате.
    //     challenge: Uint8Array.from(challenge, (c) => c.charCodeAt(0)),
  
    //     // Пустой массив, указывающий, что любые зарегистрированные учетные данные могут быть использованы.
    //     // Можно указать конкретные учетные данные, если требуется ограничить доступ.
    //     allowCredentials: [],
  
    //     // Идентификатор надежной стороны (Relying Party ID), обычно домен, с которым ассоциирован запрос.
    //     rpId: 'pwa.dterra.ru',
  
    //     // Время ожидания в миллисекундах для завершения процесса аутентификации.
    //     timeout,
  
    //     // Уровень проверки пользователя. В данном случае требуется подтверждение ('required').
    //     // Другие варианты могут включать 'preferred' или 'discouraged'.
    //     userVerification,
    //   };
  
    //   // Вызов метода get() объекта navigator.credentials с переданными параметрами.
    //   // Этот вызов инициирует процесс получения ассерции аутентификации от пользователя.
    //   const credential = await navigator.credentials.get({
    //     publicKey: publicKeyCredentialRequestOptions,
    //   })
    //   if (credential) {
    //     const authRes = await api_webauthnAuth(credential)
    //   }
    // }

    // const publicKeyCredentialCreationOptions: PublicKeyCredentialCreationOptions = {
    //   challenge: Uint8Array.from(optionsRes.data.publicKey.challenge, c => c.charCodeAt(0)),
    //   rp: {
    //     name: "Dterra PWA",
    //     id: "pwa.dterra.ru",
    //   },
    //   user: {
    //     id: Uint8Array.from("UZSL85T9AFC", c => c.charCodeAt(0)),
    //     name: "test@autoro.ru",
    //     displayName: "test autoro",
    //   },
    //   pubKeyCredParams: [{ alg: -7, type: "public-key" }],
    //   authenticatorSelection: {
    //     authenticatorAttachment: "cross-platform",
    //     userVerification: optionsRes.data.publicKey.userVerification
    //   },
    //   timeout: optionsRes.data.publicKey.timeout,
    //   attestation: "direct"
    // };
    // const credential = await navigator.credentials.create({
    //   publicKey: publicKeyCredentialCreationOptions
    // })
    // const credentialExtented = credential as PublicKeyCredential
    // if (credential) {
    //   const credentialData = {
    //     id: credential.id,
    //     rawId: credentialExtented.rawId,
    //     type: credentialExtented.type,

    //   }
    //   const authRes = await api_webauthnAuth(credential)
    // }
  }

  return (
    <div className='container'>
      <br />
      <div className='row'>
        <div className='col text-center'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input {...register('email')} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <br />
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PageWebauthn
