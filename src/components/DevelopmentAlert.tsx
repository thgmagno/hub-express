import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Code } from 'lucide-react'

export function DevelopmentAlert() {
  return (
    <Alert>
      <Code className="h-4 w-4" />
      <AlertTitle className="text-amber-400">Em desenvolvimento</AlertTitle>
      <AlertDescription>
        Estamos trabalhando nesta página. Em breve novidades por aqui!
      </AlertDescription>
    </Alert>
  )
}
