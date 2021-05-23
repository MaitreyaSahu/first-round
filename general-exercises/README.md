

| [General Exercises](https://github.com/MaitreyaSahu/first-round/tree/master/general-exercises#general-exercises) | [Coding Exercises](https://github.com/MaitreyaSahu/first-round/tree/master/coding-exercises#coding-exercises) |
| ----------- | ----------- |
------
# General Exercises
## 1. Assess your knowledge level on the following languages *(1 = none; 5 = expert)*:

| Skill | Rating |
| ----------- | ----------- |
| Vanilla JS | **3.5** |
| jQuery | **3.5** |
| HTML/HTML5 | **3.5** |
| CSS/CSS3 | **3** |
| Ajax | **2.5** |
| AngularJS | **3** |
| Bootstrap | **3.5** |
| Node JS | **2.5** |
<!-- 
> - Vanilla JS - **3.5**
> - jQuery - **3.5**
> - HTML/HTML5 - **3.5**
> - CSS/CSS3 - **3**
> - Ajax - **2.5**
> - AngularJS - **3**
> - Bootstrap - **3.5**
> - Node JS - **2.5** -->

## 2. What is the width of a container with 100px of width and 5px of padding?

> - It depends on elemets css **box-sizing** property.
> - If box-sizing property is not set the default value is **content-box**. which means the width value will be applied only to the content and the padding and border width will be added on top of that which will make the element width is equal to width of the content + padding width + border width.
> - In this case if the box-sizing property is not set of set to content box then the final width of the element will be 100 + 5 + 5 = 110px
> - if it is set to **border-box**, then the final wuidth of the element will be eqal to the 100px.

## 3. How to apply a click event to all paragraphs except for the last?
```javascript
document
  .querySelectorAll("p:not(:last-child)")
  .forEach((elem) => elem.addEventListener("click", () => alert("clicked")));
```
 
## 4. Why does the alert show "Jack" first and then undefined?
```javascript
function identity() {
  var name = "Jack";
  alert(name);
  return
  name
}
var who = identity();
alert(who);
```
>- Javascript compiler automatically adds semicolon after all the statements.
>- Javascript considers return keyword as a statement and it adds a semicon after that.
>- To avoid this issue either we can keep the return expression at the same line next to return keyword followed by a space character.
>- Or we can wrap our return expression in a parenthesis. provided the opening parenthesis must be in the same line with the retun key word.

## 5. Are display: none; and visibility: hidden; are different? Explain.
>- Both will hide the element with a subtle difference.
>- But the differnce is display: none will hides the element and and it will not even take any space in the the browser window as if the element is not present at all.
>- Where as for visibility: hidden, it will just hide the visibiity of the element by keeping the space taken by the element untouched. 