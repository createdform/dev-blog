import { load } from 'js-yaml'
import { visit } from 'unist-util-visit'

/* eslint-disable @typescript-eslint/ban-types */
// @ts-ignore
import type { Parent } from 'unist'
import type { VFile } from 'vfile'

export default function extractFrontmatter() {
  return (tree: Parent, file: VFile) => {
    visit(tree, 'yaml', (node: Parent) => {
      //@ts-ignore
      file.data.frontmatter = load(node.value)
    })
  }
}
