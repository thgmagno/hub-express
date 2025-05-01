interface Props {
  length: number
  uppercase: boolean
  lowercase: boolean
  numbers: boolean
  specialSymbols: boolean
}

export function generatePassword({
  length,
  uppercase,
  lowercase,
  numbers,
  specialSymbols,
}: Props): string {
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz'
  const numberChars = '0123456789'
  const symbolChars = '!?$&@#%*+-'

  let allChars = ''
  const requiredChars: string[] = []

  if (uppercase) {
    allChars += upperChars
    requiredChars.push(randomChar(upperChars))
  }
  if (lowercase) {
    allChars += lowerChars
    requiredChars.push(randomChar(lowerChars))
  }
  if (numbers) {
    allChars += numberChars
    requiredChars.push(randomChar(numberChars))
  }
  if (specialSymbols) {
    allChars += symbolChars
    requiredChars.push(randomChar(symbolChars))
  }

  const remainingLength = length - requiredChars.length
  const passwordChars = [...requiredChars]

  for (let i = 0; i < remainingLength; i++) {
    passwordChars.push(randomChar(allChars))
  }

  return shuffle(passwordChars).join('')
}

function randomChar(chars: string): string {
  return chars.charAt(Math.floor(Math.random() * chars.length))
}

function shuffle(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
