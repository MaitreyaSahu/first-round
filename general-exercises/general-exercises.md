# General Exercises
## 1. Assess your knowledge level on the following languages *(1 = none; 5 = expert)*:

> - Vanilla JS - **3.5**
> - jQuery - **3.5**
> - HTML/HTML5 - **3.5**
> - CSS/CSS3 - **3**
> - Ajax - **2.5**
> - AngularJS - **3**
> - Bootstrap - **3.5**
> - Node JS - **2.5**

## 2. What is the width of a container with 100px of width and 5px of padding?

> - It depends on elemets css **box-sizing** property.
> - If box-sizing property is not set the default value is **content-box**. which means the width value will be applied only to the content and the padding and border width will be added on top of that which will make the element width is equal to width of the content + padding width + border width.
> - In this case if the box-sizing property is not set of set to content box then the final width of the element will be 100 + 5 + 5 = 110px
> - if it is set to border-box, then the final wuidth of the element will be eqal to the 100px.

## 3. How to apply a click event to all paragraphs except for the last?
> fds
> 
## 4. Why does the alert show "Jack" first and then undefined?
```javascript
function identity() {
  var name = "Jack";
  alert(name);
  return;
  name;
}
var who = identity();
alert(who);
```
## 5. Are display: none; and visibility: hidden; are different? Explain.