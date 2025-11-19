import React from 'react'

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`rounded-lg border border-border bg-card text-card-foreground p-4 ${className}`} {...props}>
    {children}
  </div>
)

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`mb-2 ${className}`} {...props}>{children}</div>
)

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, className = '', ...props }) => (
  <h3 className={`font-semibold ${className}`} {...props}>{children}</h3>
)

export const CardDescription: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`text-sm text-muted-foreground ${className}`} {...props}>{children}</div>
)

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`${className}`} {...props}>{children}</div>
)

export default Card
