import React from 'react'
import Button from './Button'
import ArrowRight from './icons/ArrowRight'

export default function SectionTitle({ title, href, isButton, isVisible, buttonTitle }) {
  const boldTitle = String(title).split(' ')[0]
  const plainTitle = String(title).slice(boldTitle.length)
  let content = ''
  if (isVisible && !isButton)
    content = (
      <Button isPlain type={'link'} href={href}>
        <ArrowRight />
      </Button>
    )

  if (isVisible && isButton && buttonTitle)
    content = (
      <Button isPrimary hasShadow>
        {buttonTitle}
      </Button>
    )

  return (
    <header className='flex justify-between items-center'>
      <h1 className='font-semibold text-xs sm:text-sm md:text-lg'>
        {boldTitle} <span className='font-normal'>{plainTitle}</span>
      </h1>

      {content}

      {/* {isVisible && isButton ? (
        <Button isPrimary hasShadow>
          {buttonTitle}
        </Button>
      ) : (
        <Button isPlain type={'link'} href={href}>
          <ArrowRight />
        </Button>
      )} */}
    </header>
  )
}
