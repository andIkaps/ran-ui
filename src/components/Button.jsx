import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ type, href, isExternal, target, onClick, isPrimary, hasShadow, isDanger, isDark, isPlain, children, ClassName }) {
  const className = [
    'text-lite xs:text-xs md:text-sm 2xl:text-lg inline-flex justify-center items-center rounded-md font-semibold tracking-wider transition-colors',
    ClassName,
  ]

  if (isPrimary && hasShadow) className.push('bg-primary shadow-lg shadow-primary/20 focus:ring-primary/20 hover:bg-primary/90 focus:ring-4')
  if (isDanger && hasShadow) className.push('bg-red-600 shadow-lg shadow-red-600/20 focus:ring-red-600/20 hover:bg-red-600/90 focus:ring-4')
  if (isDark && hasShadow) className.push('bg-dark-100 shadow-lg shadow-dark-100/20 focus:ring-dark-100/20 hover:bg-dark-100/90 focus:ring-4')
  if (isPlain) {
    className.push('text-dark-200')
  } else {
    className.push('text-white px-4 py-2.5')
  }

  if (type === 'link') {
    return isExternal ? (
      <a
        href={href}
        className={className.join(' ')}
        target={target === '_blank' ? '_blank' : undefined}
        rel={target === '_blank' ? 'noopener noreferer' : undefined}
      >
        {children}
      </a>
    ) : (
      <Link to={href} className={className.join(' ')} onClick={onclick}>
        {children}
      </Link>
    )
  }

  return (
    <button className={className.join(' ')} onClick={onClick}>
      {children}
    </button>
  )
}
