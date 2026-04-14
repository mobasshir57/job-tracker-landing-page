Answers to Questions

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: Here is the difference:
-> getElementById - gets one element by id
-> getElementsByClassName - gets multiple elements (HTMLCollection)
-> querySelector - gets first matching element (any CSS selector)
-> querySelectorAll - gets all matching elements (NodeList)

2. How do you create and insert a new element into the DOM?

Ans: Here is how I create and insert a new element into the DOM:
1- Create - document.createElement()
2- Add content - innerText / innerHTML
3- Insert - appendChild() or append()

3. What is Event Bubbling? And how does it work?

Ans: Event bubbling means when an event happens on an element, it first runs on that element, then moves upward to its parent, then grandparent, and so on.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event delegation means adding one event listener to a parent instead of many child elements, and handling events using bubbling.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: Difference between preventDefault() and stopPropagation():
1- preventDefault() - stops default behavior
(like link reload, form submit)
2- stopPropagation() - stops event bubbling
