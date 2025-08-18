'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { DemoVideoModal } from '@/components/DemoVideoModal'

export default function DemoVideoPage() {
  const router = useRouter()
  const [open, setOpen] = useState(true)

  return (
    <main className="min-h-screen bg-black">
      <DemoVideoModal
        isOpen={open}
        onClose={() => {
          setOpen(false)
          router.back()
        }}
      />
    </main>
  )
}


