import { curry } from './fp.js'

// arr filter
// export const filter = predicate => xs => xs.filter(x => predicate(x)) // 函数把本身的参数传给另一个函数,可以简写
export const filter = predicate => xs => xs.filter(predicate) // point free! 没有中间参数

// object property
export const prop = propName => obj => obj[propName]

export const equals = curry((a, b) => a === b)
