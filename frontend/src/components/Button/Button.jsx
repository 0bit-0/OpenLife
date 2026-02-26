import { Link } from 'react-router-dom'

const styles = {
  base: 'hover-grid inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300',
  primary:
    'bg-gradient-to-r from-emerald-300 to-indigo-400 text-slate-950 shadow-[0_12px_30px_rgba(105,255,226,0.35)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(105,255,226,0.45)]',
  secondary:
    'bg-white/10 text-white border border-white/20 hover:border-emerald-200/70 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(105,255,226,0.18)]',
  outline:
    'border border-white/30 text-white hover:border-emerald-200/70 hover:text-emerald-100 hover:-translate-y-0.5',
}

export default function Button({ children, variant = 'primary', to, className = '', ...props }) {
  const classes = `${styles.base} ${styles[variant] ?? styles.primary} ${className}`
  const isExternal = typeof to === 'string' && to.startsWith('http')

  if (to) {
    if (isExternal) {
      return (
        <a className={classes} href={to} rel="noreferrer" target="_blank" {...props}>
          {children}
        </a>
      )
    }
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  )
}
