# express

### send

- 1. 参数String时，Content－Type默认值为"text/html"

- 2. 参数Array或Object时，Express会返回一个Json

- 3. 不能使用数字作为参数，如果要返回码要用 res.sendStatus方法