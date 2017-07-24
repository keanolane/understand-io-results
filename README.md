# understand-io-results
Script to load more results on understand.io

## Requirements
**This only supports Chrome (because some extensions are needed for now).**

Make sure to install the following Chrome extensions first:
 * **CJS (Custom Javascript for Web)**: https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija

## How does it work?
CJS script is getting the "Load More" button, and will click it as many times as required in order to load the expected total results.

## CJS configuration

**1.** Access https://app.understand.io (and Log in)

**2.** Click on CJS chrome extension icon

**3.** Make sure the dropdown at the top left is displaying `https://app.understand.io`

**4.** Check "*Enable cjs for this host*"

**5.** Just below, in the "*You can inject your own external scripts or predefined one" drop-down pick `---- nothing ----`

**6.** Now copy and paste the file content of `/cjs/cjs.js` into the textarea below

**7.** Hit "*Save*" button

## How to use it?

Open your browser's console, and type the command below to load more results.
For instance, in order to load 150 additional results, type:

```javascript
fetchResults(150);
```

you will see something like this in your console:
```text
fetchResults(100);
loading results from 51 to 100 (out of 200)
-> still loading, retrying in a bit...
loading results from 101 to 150 (out of 200)
loading results from 151 to 200 (out of 200)
Finished
```
