import { curry, compose, pipe } from '../fp.js'

describe('curry', () => {
    const add = (a, b) => a + b

    it('apply parts of parameters', () => {
        expect(typeof curry(add)(1)).toBe('function')
    })
    it('apply all of parameters', () => {
        expect(curry(add)(1)(2)).toBe(3)
    })
})

test('compose', () => {
    const toLower = str => str.toLowerCase()
    const contain = strLonger => strShorter => strLonger.indexOf(strShorter) !== -1

    const strLonger = 'js means javascript'
    const strShorter = 'JAVASCRIPT'
    expect(
        compose(
            contain(strLonger),
            toLower
        )(strShorter)
    ).toBeTruthy()
})

test('pipe', () => {
    const toLower = str => str.toLowerCase()
    const contain = strLonger => strShorter => strLonger.indexOf(strShorter) !== -1

    const strLonger = 'js means javascript'
    const strShorter = 'JAVASCRIPT'
    expect(
        pipe(
            toLower,
            contain(strLonger)
        )(strShorter)
    ).toBeTruthy()
})
