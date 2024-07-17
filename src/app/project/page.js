import FreeQuote from '@/components/FreeQuote'
import Hero from '@/components/hero/others/Hero'
import OurProjects from '@/components/OurProjects'
import React from 'react'

export default function ProjectPage() {
  return (
    <div>
      <Hero title="Projects"/>
        <OurProjects />
        <FreeQuote />
    </div>
  )
}
