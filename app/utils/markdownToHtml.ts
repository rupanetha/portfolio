import Markdoc from '@markdoc/markdoc'
import React from 'react'

import { components, config } from '../components/portfolio/markdoc'

export default function markdownToHtml(markdown: string) {
  const ast = Markdoc.parse(markdown)
  const content = Markdoc.transform(ast, config)

  const component = Markdoc.renderers.react(content, React, { components })

  return component
}
