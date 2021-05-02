export default (from: number, to: number, step = 1) => {
  const pages = []

  for (let i = from; i <= to; i += step) {
    pages.push(i)
  }

  return new Set(pages)
}
