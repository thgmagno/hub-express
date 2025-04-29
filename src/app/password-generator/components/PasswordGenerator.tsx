'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Display } from '@/components/Display'
import CopyButton from '@/components/CopyButton'
import { generatePassword } from '../services/passwordService'

export function PasswordGenerator() {
  const [length, setLength] = useState(12)
  const [password, setPassword] = useState('')

  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    specialSymbols: true,
  })

  const handleGenerate = () => {
    setPassword(generatePassword({ length, ...options }))
  }

  const handleOptionChange =
    (key: keyof typeof options) => (checked: boolean) => {
      setOptions((prev) => ({ ...prev, [key]: checked }))
    }

  const handleSliderChange = (value: number) => {
    setLength(value)
  }

  return (
    <div className="mx-auto flex max-w-md flex-col gap-4">
      <div className="flex flex-col gap-4">
        <Label>Opções de caracteres:</Label>
        <div className="flex flex-col gap-2 pl-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="uppercase"
              checked={options.uppercase}
              onCheckedChange={(checked) =>
                handleOptionChange('uppercase')(!!checked)
              }
            />
            <Label htmlFor="uppercase">Letras maiúsculas (A-Z)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="lowercase"
              checked={options.lowercase}
              onCheckedChange={(checked) =>
                handleOptionChange('lowercase')(!!checked)
              }
            />
            <Label htmlFor="lowercase">Letras minúsculas (a-z)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="numbers"
              checked={options.numbers}
              onCheckedChange={(checked) =>
                handleOptionChange('numbers')(!!checked)
              }
            />
            <Label htmlFor="numbers">Números (0-9)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="symbols"
              checked={options.specialSymbols}
              onCheckedChange={(checked) =>
                handleOptionChange('specialSymbols')(!!checked)
              }
            />
            <Label htmlFor="symbols">Símbolos (!@#$%)</Label>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2.5">
        <Label>Comprimento da senha: {length}</Label>
        <Slider
          defaultValue={[length]}
          max={30}
          min={4}
          step={1}
          onValueChange={([value]) => handleSliderChange(value)}
        />
      </div>

      <Button onClick={handleGenerate}>Gerar senha</Button>

      {password && (
        <div className="flex items-center gap-2">
          <Display value={password} />
          <CopyButton text={password} />
        </div>
      )}
    </div>
  )
}
