import React from 'react'
import Part from './Part'
import { ContentProps } from '../types'

const Content: React.FC<ContentProps> = ({courseParts}) =>
    <div>
      {courseParts.map((part, i) =>
        <Part key={i} part={part} />
      )}
    </div>

export default Content;