# Fitts-Law-Calculator

##Function
A calculator for calculating the time taken for a user to perform a given movement and reach the target object of that movement, such as moving the mouse to a button. This is a personal project using HTML, CSS, and JavaScript to create a calculator for three of the versions of Fitts' Law. The user selects which formula to use and then enters the values for each variable, the result displays below the input boxes. This project uses MathJax API to display the formulas using Latex.

##Contents
- main.css defines the CSS for the page
- index.html defines the HTML elements
- calc.js retrieves and parses the values in the input boxes, checks that they are valid numbers and then uses a switch statement to pass the parameters to the correct function for the chosen formula (plusOne(), plain() or multiplyByTwo()). The answer is received and is displayed. The formula is determined using a global variable, which is set using chooseFormula() which takes in a number indicating which formula has been selected and alters the global variable, it also alters the style of the formula elements to add an orange border to the selected formula.

##Video Link - https://youtu.be/yBVqaiZD8cI

<iframe width="560" height="315" src="https://www.youtube.com/embed/yBVqaiZD8cI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
