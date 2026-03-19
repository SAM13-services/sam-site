import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'yellow' | 'outline' | 'gray'
  className?: string
}

export default function Badge({ children, variant = 'outline', className = '' }: BadgeProps) {
  const variants = {
    yellow: 'bg-sam-yellow text-sam-black border border-sam-yellow',
    outline: 'bg-transparent text-sam-black border border-sam-black',
    gray: 'bg-sam-gray-light text-sam-black border border-sam-gray',
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
