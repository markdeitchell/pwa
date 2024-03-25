import { IRootData } from "./_RootData"

interface IPublicKey {
  challenge: string,
  rpId: string,
  timeout: number,
  userVerification: UserVerificationRequirement
}

export type TWebauthnOptions = { publicKey: IPublicKey }
