'use client'

import {useState, useEffect} from 'react'
import {Textarea} from '@/components/ui/textarea'
import {Button} from '@/components/ui/button'
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription} from '@/components/ui/dialog'

export default function Home() {
  const [myCode, setMyCode] = useState('')
  const [popup, showPopup] = useState(false)
  const [loading, showLoading] = useState(false)
  const [reviewResult, showResult] = useState('')

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        showResult(
          'What the fuck is this? YOU SUCK'
        )
        showLoading(false)
      }, 50000)
      return () => clearTimeout(timer);
    }
  }, [loading])

  const whileReview = () => {
    showLoading(true)
    showResult('')
    showPopup(true)
  }

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
        onClick={whileReview} disabled={!myCode.trim()}
      >
        Review Code
      </Button>

      <Dialog open={popup} onOpenChange={showPopup}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Submitted Code</DialogTitle>
            <DialogDescription>Here&apos;s the code submitted - an AI will be ready to review it next.</DialogDescription>
          </DialogHeader>

          {loading ? (
            <div className='flex flex-col items-center justify-center py-10 gap-4'>
              <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900'></div>
              <p className='text-gray-500'>Analyzing your code...</p>
            </div>
          ) : (
            
            <>

          <div>
            <h2 className="font-semibold mb-2">Your Code</h2>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">{myCode}</pre>
          </div>

          <div>
            <h2 className="font-semibold mb-2">AI Feedback</h2>
            <pre className="bg-green-50 p-4 rounded-md overflow-x-auto text=sm">{reviewResult}</pre>
          </div>
          </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  )
}
