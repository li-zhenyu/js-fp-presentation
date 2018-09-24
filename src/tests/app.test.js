import { booksInYear, curriedBooksInYear, curriedBooksInYearReversedArgs, whereYear, whereEqYear, where } from '../app.js'
import { compose, filter, propEq } from 'ramda'

const books = [
    {
        title: 'To Kill A Mockingbird',
        author: 'Harper Lee',
        year: 1960
    },
    {
        title: 'The Secret History',
        author: 'Donna Tartt',
        year: 1992
    },
    {
        title: 'Infinite Jest',
        author: 'David Foster Wallace',
        year: 1996
    },
    {
        title: 'Fight Club',
        author: 'Chuck Palahniuk',
        year: 1996
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K. Rowling',
        year: 1997
    },
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
        year: 1998
    }
]

test('booksInYear filters an array of books by year', () => {
    const actual = booksInYear(books, 1996)
    const expected = [{ title: 'Infinite Jest', author: 'David Foster Wallace', year: 1996 }, { title: 'Fight Club', author: 'Chuck Palahniuk', year: 1996 }]
    expect(actual).toEqual(expected)
})

test('curriedBooksInYear filters an array of books by year', () => {
    const booksIn = curriedBooksInYear(books)
    const actual = booksIn(1996)
    const expected = [{ title: 'Infinite Jest', author: 'David Foster Wallace', year: 1996 }, { title: 'Fight Club', author: 'Chuck Palahniuk', year: 1996 }]
    expect(actual).toEqual(expected)
})

test('curriedBooksInYear2 filters an array of books by year', () => {
    const in96 = curriedBooksInYearReversedArgs(1996)
    const actual = in96(books)
    const expected = [{ title: 'Infinite Jest', author: 'David Foster Wallace', year: 1996 }, { title: 'Fight Club', author: 'Chuck Palahniuk', year: 1996 }]
    expect(actual).toEqual(expected)
})

test('whereYear filters an array of books by year', () => {
    const in96 = whereYear(1996)
    const actual = in96(books)
    const expected = [{ title: 'Infinite Jest', author: 'David Foster Wallace', year: 1996 }, { title: 'Fight Club', author: 'Chuck Palahniuk', year: 1996 }]
    expect(actual).toEqual(expected)
})

test('whereEqYear filters an array of books by year', () => {
    const in96 = whereEqYear(1996)
    const actual = in96(books)
    const expected = [{ title: 'Infinite Jest', author: 'David Foster Wallace', year: 1996 }, { title: 'Fight Club', author: 'Chuck Palahniuk', year: 1996 }]
    expect(actual).toEqual(expected)
})

// J.K. Rowling 写的书
test("J.K. Rowling's books", () => {
    const author = 'J.K. Rowling'
    const actual = compose(
        filter,
        propEq('author')
    )(author)(books)

    console.log(actual)

    const expected = [
        {
            title: "Harry Potter and the Sorcerer's Stone",
            author: 'J.K. Rowling',
            year: 1997
        },
        {
            title: 'Harry Potter and the Chamber of Secrets',
            author: 'J.K. Rowling',
            year: 1998
        }
    ]
    expect(actual).toEqual(expected)
})
