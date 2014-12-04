# express-get-to-req

Middleware takes array from available get params and add they to req.

## Usage

###app.js

```javascript
var app = require('express')();
app.use(require('express-get-to-req')(array|string));
```

###example

```javascript
var app = express();

app.use(require(''express-get-to-req'')([ 'name', 'login' ]));

app.get('/', function (req, res) {
    res.send('Hello ' + req.name + '. Your Login:' + req.login)
});
```