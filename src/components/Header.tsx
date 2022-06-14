import React from 'react'

interface IProps{
  title: string
}

export default function Header({title} : IProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {title}</span></span>
    </header>
  )
}
