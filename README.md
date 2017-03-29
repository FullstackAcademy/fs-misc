# fs-misc

Small utility functions, binaries, and snippets which tend to be reused across multiple Fullstack Academy projects but don't quite merit their own repository.

## `pg-init`

Create a Postgres database if it does not exist. Exits with 0 status regardless of whether the db existed already or not.

### As binary usable in npm scripts:

```sh
yarn add fs-misc
```

```json
"scripts": {
    "db-init": "pg-init name_of_db"
}
```

```sh
yarn run db-init
```

### As a programmatic tool in modules:

```js
const fsMisc = require('fs-misc')

fsMisc.pgInit('name_of_db')
.then(result => {
    console.log(result.raw) // raw stdout
    console.log(result.pretty) // prettified / formatted stdout
})
.catch(console.error.bind(console))
```
