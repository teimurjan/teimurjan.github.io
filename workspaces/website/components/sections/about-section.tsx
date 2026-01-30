import type { AboutData, ContactData } from '@/lib/sections'
import { FileDown, Mail } from 'lucide-react'
import Image from 'next/image'
import LiquidEther from '../ui/liquid-ether'
import githubIcon from '../icons/github.svg'
import linkedinIcon from '../icons/linkedin.png'
import toptalIcon from '../icons/toptal.png'

interface AboutSectionProps {
  data: AboutData & ContactData
}

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">About</h1>

      <div className="relative border border-glass-border rounded-xl h-64 w-full">
        <LiquidEther className="!absolute inset-0 z-0" />
        <Image
          src="/logo3d.png"
          alt="Logo"
          width={256}
          height={256}
          className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <p className="text-muted-foreground leading-relaxed">{data.about}</p>

      <div className="flex flex-wrap gap-4">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground bg-glass-highlight border border-glass-border rounded-xl shadow-glass-pill backdrop-blur-sm hover:bg-secondary/50 hover:border-primary/30 transition-all duration-200"
        >
          <FileDown className="w-4 h-4" />
          Get Resume
        </a>
      </div>

      <p className="text-muted-foreground mb-0">
        I'm always interested in hearing about new projects and opportunities.
      </p>

      <p className="text-muted-foreground">Feel free to reach out to me via:</p>

      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${data.email}`}
          className="inline-flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors text-sm"
        >
          <Mail className="w-4 h-4" />
          Email
        </a>
        <a
          href="https://github.com/teimurjan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors text-sm"
        >
          <img src={githubIcon.src} alt="GitHub" className="w-5 h-5" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/teimur-gasanov"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors text-sm"
        >
          <img src={linkedinIcon.src} alt="LinkedIn" className="w-auto h-3.5" />
          LinkedIn
        </a>
        <a
          href="https://www.toptal.com/resume/teimur-gasanov"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors text-sm"
        >
          <img src={toptalIcon.src} alt="Toptal" className="w-4 h-auto" />
          Toptal
        </a>
      </div>
    </div>
  )
}
