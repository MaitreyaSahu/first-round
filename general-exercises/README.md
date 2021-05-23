
| [General Exercises](https://github.com/MaitreyaSahu/first-round/tree/master/general-exercises#readme) | [Coding Exercises](https://github.com/MaitreyaSahu/first-round/tree/master/coding-exercises#readme) | [My Portfolio](https://maitreyasahu.github.io/resume/) |
| ----------- | ----------- | ----------- |
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

> - It depends on the element's css **box-sizing** property.
> - If box-sizing property is not set, the default value is **content-box**. and the width property value doesn't take padding and border in account.
> - Which means the width value will be applied only to the content and the padding and border width will be added separately.
> - Which will make the final width of the element is equal to the width of the content + padding width (left + right) + border width (left + right).
>
>   - *In this case, if the box-sizing property is not set or if it is set as content box then the final width of the element will be 100 (content width) + 5 (left padding) + 5 (right padding) = 110px*
> 
> - If it is set as **border-box**, then the width propery of the element takes both padding and margin into account.
>   - *In this case, the actual width of the element will be eqal to 100px. Because the padding and border will not take any extra space, the content width will be auto adjusted.*

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
> - Javascript compiler automatically adds semicolon after each statement.
>
> - If nothing is there after return keyword in the same line, It is considered as an empty return statement and a semicolon will gets added after that.
> - And an empty return statement allways returns undefined. 
> - So, If we run the function identity, It will return undefined.
> 
>   - in line no 7, we are invoking the function "identity" and storing its return value in the variable "who". 
>    - That is why first it will execute the function, and then it will store the returned value to the declared variable.
> 
>    - Inside the function, as we are assigning a value "Jack" to name and using that name in the function alert, so it will alert the name "Jack".
> 
>   - After that since we have an empty return statement, the function will return "undefined", which is going to be stored in the variable "who"
>   - And in the last line, as we are using that variable "who" in the function alert, it is going to alert "undefined"
<!-- > - To avoid this issue either we can keep the return expression at the same line next to return keyword followed by a space character.
> - Or we can wrap our return expression in a parenthesis. provided the opening parenthesis must be in the same line with the retun keyword. -->


## 5. Are display: none; and visibility: hidden; are different? Explain.
> - Both will hide the element with a subtle difference.
>
> - But the differnce is the display: none property, hides the element and and it doesn't even take any space in the the browser window as if the element is not present at all.
> - Where as the visibility: hidden property, just hides the visibiity of the element and keeps the space taken by the element untouched. 
> - It means the element will occupy the space in the browser window but the content will not be visible.