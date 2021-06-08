const product = new Object({
    name:'The War Of Art'
})

Object.prototype.hasOwnProperty = () => 'This is the new function'
// hasOwnProperty
console.log(product.hasOwnProperty('hasOwnProperty'))
console.log(product)