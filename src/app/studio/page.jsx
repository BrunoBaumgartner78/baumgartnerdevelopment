'use client'

import dynamic from 'next/dynamic'

const Studio = dynamic(() => import('@/sanity/studio'), { ssr: false })

export default function StudioPage() {
  return <Studio />
}

