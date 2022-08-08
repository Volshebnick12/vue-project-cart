export default (count) => {
  const countString = count.toString()
  const lastNumber = parseInt(countString[countString.length - 1])
  if (count > 20 || count < 10) {
    if (lastNumber === 1) {
      return 'товар'
    } else if (1 < lastNumber && lastNumber < 5) {
      return 'товара'
    }
  }
  return 'товаров'
}
