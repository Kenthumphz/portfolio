import React from 'react'

type Props = React.HTMLAttributes<HTMLSpanElement> & { variant?: 'default' | 'secondary' | 'outline' }

export const Badge: React.FC<Props> = ({ children, className = '', variant = 'default', ...props }) => {
  const base = 'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium'
  const variantClass = variant === 'secondary' ? 'bg-secondary text-secondary-foreground' : variant === 'outline' ? 'border border-border text-muted-foreground bg-transparent' : 'bg-primary text-primary-foreground'
  return (
    <span className={`${base} ${variantClass} ${className}`} {...props}>
      {children}
    </span>
  )
}

export default Badge
