import React, { Children } from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'

export default function Card({title, content, children}) {
  return (
    <div>
        <Heading title={title}></Heading>
        <Paragraph content={content}></Paragraph>
        {children}
    </div>
  )
}
