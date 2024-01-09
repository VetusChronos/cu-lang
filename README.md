# Cu Programming Language

Cu is a simple, quirky "programming language" created when I had some free time. It's written within HTML files and interpreted by a JavaScript script called `cu.js`.

## How to Use

To use the Cu language, you need to include the `cu.js` script in your HTML file and write your code within specific HTML tags. All Cu code must be within a `<main>` tag.

## Syntax

### Functions

To define a function, you should use the `<function>` tag with the `name` attribute for the function's name. Function arguments are represented by additional attributes in the `<function>` tag. The function's body is written between the `<function>` and `</function>` tags.

Example:
```html
<function name="myFunction" arg1 arg2>
  <!-- Function code here -->
</function>
```

### Conditionals

To create a conditional statement, use the `<if>` tag with the `condition` attribute for the condition. The conditional statement's body is written between the `<if>` and `</if>` tags.

Example:
```html
<if condition="arg1 > arg2">
  <!-- Code to execute if the condition is true -->
</if>
```

### Return

To return a value from a function, use the `<return>` tag with the `value` attribute for the value to be returned.

Example:
```html
<return value="arg1 + arg2" />
```

### Printing

To print something to the console, use the `<print>` tag with the `value` attribute for the value to be printed.

Example:
```html
<print value="Hello, world!" />
```

## Code Example

Here's an example of a Cu program that calculates the nth number in the Fibonacci sequence:

```html
<script src="cu.js"></script>
<main>
    <function name="fib" n>
        <if condition="n < 2">
            <return value="n" />
        </if>

        <return value="fib(n - 1) + fib(n - 2)" />
    </function>
    
    <print value="fib(20)" />
</main>
```

> This program defines a `fib` function that calculates the nth number in the Fibonacci sequence and then prints the 20th number in the sequence.

