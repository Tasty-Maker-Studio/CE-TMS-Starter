import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export function TestComponent() {
  return (
    <div className={cn('p-4', 'bg-slate-100')}>
      <Button variant="default">
        Test Component with Absolute Imports
      </Button>
    </div>
  )
}