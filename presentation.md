# Javascript 中的函数式编程

# ( Functional Programming In Javascript )

###### 时间:2018/09/26 & 主讲人: 李振宇

---

# 什么是函数式编程

-   1. 一种声明式的编程范式(programming paradiam)
-   2. 表达式(expression/declaration) 而不是 语句(statement)
-   3. 例如. 放在右侧赋值/作为函数的参数, for,while,if else,

---

# 为什么使用函数式编程

-   1. 在 JS 中使用 OO 很奇怪
-   2. First class citizen
-   3. es6

---

### 纯函数(pure function)

-   给定一个参数返回固定的返回值
-   可预测，方便测试，性能

---

### 副作用(side effects)

-   改变引用类型的参数,全局变量/ajax/window/document/console.log

---

### 不可变性(immutability)

-   不改变对象的状态
-   const (`const obj = { name: 'foo' }`)

---

# **_ 结论:依赖作为参数、避免副作用、永远使用 const _**

---

# 高阶函数

-   函数的函数
-   map / filter / reduce

```javascript
var result = [1, 2, 3].map(x => x + 1).filter(x => x > 2) // [3, 4]
```

-   curry
-   compose / pipe

---

# Talk is **cheap**. Show me the **code**.

-- Linux 的创始人 Linus Torvalds

---

# 还有更多...

-   functor (Maybe, Either)
-   monad
-   applicative

---

# 相关 JS 库

-   Ramda
-   Sanctuary
-   Folktale
-   Daggy

---

# PPT 相关

-   [源码 Github](https://github.com/li-zhenyu/js-fp-presentation.git)
-   [Ramda 中文网](http://ramda.cn/)
