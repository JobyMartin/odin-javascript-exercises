const fibonacci = function(count) {
  count = parseInt(count)
  if (count < 0) return "OOPS"
  if (count === 0) return 0
  if (count === 1) return 1

  let a = 0
  let b = 1
  for (let i = 2; i <= count; i++) {
    let temp = a + b
    a = b
    b = temp
  }
  return b
}

// Do not edit below this line
module.exports = fibonacci;
