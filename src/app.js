/* import { curry, compose } from './fp.js'
import { filter, prop, equals } from './utils.js' */
import { compose, filter, equals, prop, propEq } from 'ramda'

// 1. 命令式
/* export const booksInYear = (books, year) => {
    let matches = []
    for (let i = 0; i < books.length; i++) {
        if (books[i].year === year) {
            matches.push(books[i])
        }
    }
    return matches
} */

// 2. 使用 Array.filter
export const booksInYear = (books, year) => books.filter(book => book.year === year)

// 3. 使用 currying 其他年份的书籍 booksInYear(books, year2) ?
export const curriedBooksInYear = books => year => books.filter(book => book.year === year)
// export const curriedBooksInYear = curry(booksInYear)

// 4. !! transform function first & data last ? like map
export const curriedBooksInYearReversedArgs = year => books => books.filter(book => book.year === year)

// 5. 重构我们的函数，使它更 functional
// export const whereYear = year => books => filter(book => book.year === year)(books) // filter
// export const whereYear = year => filter(item => item.year === year) // filter 简写
// export const whereYear = year => filter(item => equals(year)(item.year)) // filter + equals
// export const whereYear = year => filter(item => equals(year)(prop('year')(item))) // filter + equals + prop
/* export const whereYear = year => filter(item => compose(
    equals(year),
    prop('year')
)(item)) // filter + equals + prop + compose */
export const whereYear = year =>
    filter(
        compose(
            equals(year), // return bool
            prop('year') // return year<number>
        )
    ) // filter + equals + prop + compose + 简写 -> 全都是函数

/* const yearEq = year =>
    compose(
        equals(year),
        prop('year')
    )
const whereEqProp = year => filter(yearEq(year)) // 非常的声明式 */

// 6. 通用化
// const propEq = propName => value =>
//     compose(
//         equals(value),
//         prop(propName)
//     )

// const whereEqYear = year => filter(propEq('year')(year)) // 通用化后
export const whereEqYear = compose(
    filter,
    propEq('year') // value = propEq('year')(value) -> obj['year'] === value
) // 通用化后 + 简化

// 7. Ramda

// 8. 小练习: 找出所有 J.K. Rowling 写的书
