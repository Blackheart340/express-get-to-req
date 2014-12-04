# express-get-to-req

## Usage

###app.js

```javascript
var app = require('express')();
app.use(require('express-get-to-req')(config));
```

###config

```javascript
var config = {
    availableParams: [ params ]
};
```