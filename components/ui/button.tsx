import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline'
}

export function Button({ children, className = '', size = 'md', variant = 'solid', ...props }: ButtonProps) {
  const sizeClass = size === 'lg' ? 'px-6 py-3 text-lg' : size === 'sm' ? 'px-3 py-1.5 text-sm' : 'px-4 py-2'
  const base = 'inline-flex items-center rounded-md font-medium shadow-sm focus:outline-none'
  const variantClass = variant === 'outline' ? 'border border-primary/40 bg-transparent text-primary' : 'bg-primary text-primary-foreground'
  return (
    <button {...props} className={`${base} ${sizeClass} ${variantClass} ${className}`}>
      {children}
    </button>
  )
}

export default Button
