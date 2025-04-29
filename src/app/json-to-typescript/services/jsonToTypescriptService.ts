/* eslint-disable @typescript-eslint/no-explicit-any */
interface Options {
  rootInterfaceName?: string
}

export function jsonToTypescript(json: any, options?: Options): string {
  const lines: string[] = []
  const visited = new Map<object, string>()
  const rootName = options?.rootInterfaceName || 'Root'

  function resolve(value: any, keyName = rootName): string {
    if (value === null) return 'null'
    if (Array.isArray(value)) {
      if (value.length === 0) return 'any[]'
      return `${resolve(value[0], keyName)}[]`
    }
    if (typeof value === 'object') {
      if (visited.has(value)) return visited.get(value)!
      const interfaceName = toPascalCase(keyName)
      visited.set(value, interfaceName)
      const fields = Object.entries(value).map(
        ([k, v]) => `  ${k}: ${resolve(v, k)};`,
      )
      lines.push(`interface ${interfaceName} {\n${fields.join('\n')}\n}`)
      return interfaceName
    }
    return typeof value
  }

  resolve(json, rootName)
  return lines.join('\n\n')
}

function toPascalCase(str: string): string {
  return str.replace(/(^\w|[-_]\w)/g, (s) =>
    s.replace(/[-_]/, '').toUpperCase(),
  )
}
