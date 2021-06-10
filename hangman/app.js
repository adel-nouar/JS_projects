// Primitive values: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Functions myFunc ==> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// String: myNumber --> Number.prototype --> Object.prototype --> null
// String: myBoolean --> Boolean.prototype --> Object.prototype --> null

const product = 'Product'
console.log(product)

const otherProduct = new String('Phone')
console.log(otherProduct)
