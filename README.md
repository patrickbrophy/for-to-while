# for to while babel transform

credits to [char](https://github.com/char) for the babel environment setup.

# getting started

install dependencies

```bash
npm install
```

edit the `test/test.js` file with the javascript that you want transform

```js
// test/test.js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

run `npm run start` to run the babel transforms
