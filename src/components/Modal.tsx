'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ContributeModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (amount: number) => void
  isSubmitting: boolean
  link?: string
}

export function ContributeModal({
  isOpen,
  onClose,
  onSubmit,
  isSubmitting,
  link,
}: ContributeModalProps) {
  const [amount, setAmount] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const numAmount = parseFloat(amount)
    if (!isNaN(numAmount) && numAmount > 0) {
      onSubmit(numAmount)
    }
  }

  if (link) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Make a Contribution</DialogTitle>
            <DialogDescription>
              Sign the transaction with Xaman to contribute to the XRPL Ledger
              Device Audit.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                window.open(link, '_blank')
                onClose()
              }}
              disabled={isSubmitting}
            >
              Sign With Xaman
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make a Contribution</DialogTitle>
          <DialogDescription>
            Enter the amount of XRP you'd like to contribute to the XRPL Ledger
            Device Audit.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (XRP)</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
              step="0.000001"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : 'Contribute'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
