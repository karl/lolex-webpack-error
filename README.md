# Lolex Webpack Error

When bundling the master branch of Lolex (commit 27bca973b9ffb4ddb840dad9734ca542c26b0ad8)
with Webpack and running it in a browser, it fails with the error:

```
Uncaught TypeError: Cannot read property 'hrtime' of undefined
```

## To recreate

Clone this repo and run the following:

```
npm install
npm run build
npm run start
```

Load http://127.0.0.1:8080/ in a browser and open the console.

You should see the error:

```
Uncaught TypeError: Cannot read property 'hrtime' of undefined
```
