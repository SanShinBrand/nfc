import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <div className="w-64 h-64 relative">
          <Image src="../logo-white-svg.svg" alt="Logo" fill className="  object-contain " priority />
         </div>
         <h1 className="text-6xl font-bold text-center tracking-widest" >SanShin</h1>
      </div>
      

      <footer className="w-full max-w-3xl mx-auto py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Keep in Touch With Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-4 ">
          <SocialLink href="https://facebook.com" icon={<Facebook className="h-6 w-6 " />} name="Facebook" />
          <SocialLink href="https://instagram.com" icon={<Instagram className="h-6 w-6" />} name="Instagram" />
          <SocialLink href="https://tiktok.com" icon={<TikTokIcon className="h-6 w-6" />} name="TikTok" />
        </div>
      </footer>
    </main>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  name: string
}

function SocialLink({ href, icon, name }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors"
    >
      {icon}
      <span>{name}</span>
    </Link>
  )
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      <path d="M12 16a4 4 0 0 1-4 4" />
    </svg>
  )
}
