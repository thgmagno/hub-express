'use client'

import { actions } from '@/actions'
import { InputReadOnly } from '@/components/InputReadOnly'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { useState, useActionState } from 'react'

export function PasswordGeneratorForm() {
  const [formState, action, isPending] = useActionState(
    actions.passwordGenerator.generate,
    { errors: {} },
  )

  const [passwordLength, setPasswordLength] = useState(16)

  const handleSliderChange = (value: number) => {
    setPasswordLength(value)
  }

  return (
    <form action={action} className="mx-auto my-5 max-w-lg space-y-5">
      <div className="flex flex-col space-y-2.5">
        <Label>Comprimento da senha: {passwordLength}</Label>
        <Slider
          defaultValue={[passwordLength]}
          max={32}
          min={4}
          step={1}
          onValueChange={([value]) => handleSliderChange(value)}
        />
      </div>

      <input type="hidden" name="passwordLength" value={passwordLength} />

      <InputReadOnly value={formState.data?.password ?? ''} />
      <Button size="sm" type="submit" className="w-full" variant="secondary">
        {isPending ? 'Aguarde...' : 'Gerar senha'}
      </Button>
    </form>
  )
}
