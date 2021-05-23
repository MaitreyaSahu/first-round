
| [General Exercises](https://github.com/MaitreyaSahu/first-round/tree/master/general-exercises#readme) | [Coding Exercises](https://github.com/MaitreyaSahu/first-round/tree/master/coding-exercises#readme) | [My Portfolio](https://maitreyasahu.github.io/resume/) |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
------
# General Exercises
## 1. Assess your knowledge level on the following languages *(1 = none; 5 = expert)*:

| Skill      | Rating  |
| ---------- | ------- |
| Vanilla JS | **3.5** |
| jQuery     | **3.5** |
| HTML/HTML5 | **3.5** |
| CSS/CSS3   | **3**   |
| Ajax       | **2.5** |
| AngularJS  | **3**   |
| Bootstrap  | **3.5** |
| Node JS    | **2.5** |
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

> - It depends on the element's CSS "box-sizing" property.
> - If the box-sizing property is not set, the default value is "content-box". Then the width property value doesn't take padding and border into account.
> - This means the width value will be applied only to the content and the padding and border width will be added separately.
> - Which will make the final width of the element is equal to the width of the content + padding width (left + right) + border width (left + right).
>
>   - *In this case, if the box-sizing property is not set or if it is set as content box then the final width of the element will be 100 (content width) + 5 (left padding) + 5 (right padding) = 110px*
> 
> - If it is set as "border-box", then the width property of the element takes both padding and margin into account.
>   - *In this case, the actual width of the element will be equal to 100px. Because the padding and border will not take any extra space, the content width will be auto-adjusted.*

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
> - Javascript compiler automatically adds semicolons after each statement.
>
> - If no expression is present after the “return keyword” in the same line, It is considered as an empty return statement and a semicolon gets added after that.
> - And an empty return statement always returns undefined. 
> - So, If we run the function identity, It will return undefined.
> 
>   - in line no 7, we are invoking the function "identity" and storing its return value in the variable "who". 
>    - That is why first it will execute the function, and then it will store the returned value to the declared variable.
> 
>    - Inside the function, as we are assigning a value "Jack" to name and using that name in the function alert, so it will alert the name "Jack".
> 
>   - After that since we have an empty return statement, the function will return "undefined", which is going to be stored in the variable "who"
>   - And in the last line, as we are using that variable "who" in the function alert, it is going to alert "undefined"
<!-- > - To avoid this issue, either we can keep the “return expression” on the same line next to the “return keyword” followed by a space character.
> - Or we can wrap our return expression in parenthesis. provided the opening parenthesis must be in the same line with the return keyword. -->


## 5. Are display: none; and visibility: hidden; are different? Explain.
> - Both will hide the element with a subtle difference.
>
> - But the difference is the display: none property, hides the element and it doesn't even take any space in the browser window as if the element is not present at all.
> - Whereas the visibility: hidden property, just hides the visibility of the element and keeps the space taken by the element untouched. 
> - It means the element will occupy the space in the browser window but the content will not be visible.
