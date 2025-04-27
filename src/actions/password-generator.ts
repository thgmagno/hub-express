'use server'

import { PasswordGeneratorFormState } from '@/lib/states/password-generator'
import { incrementMetric } from './metrics'
import { revalidatePath } from 'next/cache'

export async function generate(
  formState: PasswordGeneratorFormState,
  formData: FormData,
): Promise<PasswordGeneratorFormState> {
  const passwordLength = Number(formData.get('passwordLength')) || 16

  const createPassword = (length: number) => {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?'
    let password = ''
    for (let i = 0; i < length; i++) {
      password += chars[Math.floor(Math.random() * chars.length)]
    }
    return password
  }

  await incrementMetric('password-generator')

  try {
    const password = createPassword(passwordLength)

    revalidatePath('/')
    return { data: { password }, errors: {} }
  } catch {
    return { errors: { _form: 'Ocorreu um erro ao gerar a senha' } }
  }
}
