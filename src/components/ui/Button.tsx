import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-sam-yellow focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary:
        'bg-sam-yellow text-sam-black hover:bg-[#f5e84a] active:scale-[0.98] border border-sam-yellow',
      secondary:
        'bg-transparent text-sam-black border border-sam-black hover:bg-sam-black hover:text-white active:scale-[0.98]',
      ghost:
        'bg-transparent text-sam-black hover:text-sam-black/70 border border-transparent',
    }

    const sizes = {
      sm: 'px-4 py-1.5 text-sm',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    }

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
