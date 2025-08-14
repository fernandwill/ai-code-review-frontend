'use client'

import {useState} from 'react'
import {Textarea} from '@/components/ui/textarea'
import {Button} from '@/components/ui/button'
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription} from '@/components/ui/dialog'

export default function Home() {
  const [myCode, setMyCode] = useState('')
  const [popup, showPopup] = useState(false)

  return (
    <main className='flex flex-col items-center justify-center p-8 max-w-3xl mx-auto gap-4'>
      <h1 className='text-3xl font-bold'>Re-Vue</h1>

      <Textarea
        placeholder='Paste your code...'
        className='min-h-[200px]'
        value={myCode}
        onChange={(e) =>  setMyCode(e.target.value)}
      />

      <Button
        onClick={() => showPopup(true)} disabled={!myCode.trim()}
      >
        Review Code
      </Button>

      <Dialog open={popup} onOpenChange={showPopup}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Submitted Code</DialogTitle>
            <DialogDescription>Here&apos;s the code submitted - an AI will be ready to review it next.</DialogDescription>
          </DialogHeader>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">{myCode}</pre>
        </DialogContent>
      </Dialog>
    </main>
  )
}
