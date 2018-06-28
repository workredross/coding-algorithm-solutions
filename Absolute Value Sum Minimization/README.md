##

## Kanishk Srivastava

Given a sorted array of integers a, find an integer x from a such that the value of

```javascript
abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
```

is the smallest possible (here abs denotes the absolute value). If there are several possible answers, output the smallest one.

**Examples**

For a = [2, 4, 7], the output should be getAbsoluteValueSumMinimization(a) = 4.

For a = [2, 4, 7, 6], the output should be getAbsoluteValueSumMinimization(a) = 4.

For a = [2, 4, 7, 6, 6], the output should be getAbsoluteValueSumMinimization(a) = 7.

For a = [2, 4, 7, 6, 6, 8], the output should be getAbsoluteValueSumMinimization(a) = 7.
