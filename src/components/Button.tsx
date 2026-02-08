import Link from 'next/link'

interface ButtonProps {
    children: React.ReactNode
    href?: string
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    className?: string
    onClick?: () => void
    type?: 'button' | 'submit'
    disabled?: boolean
}

const variants = {
    primary: 'bg-brand-orange hover:bg-brand-orange-light text-white shadow-soft',
    secondary: 'bg-white hover:bg-neutral-50 text-brand-charcoal border border-neutral-200',
    outline: 'bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50',
    ghost: 'bg-transparent hover:bg-neutral-100 text-neutral-700',
}

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
}

export default function Button({
    children,
    href,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    type = 'button',
    disabled = false,
}: ButtonProps) {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2'
    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        )
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classes}
        >
            {children}
        </button>
    )
}
