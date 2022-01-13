
wenn ich das erste index.test.js file starten möchte, erhalte ich folgenden Fehler
npx mocha "src/**/*.test.js" --recursive
(node:36193) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)

/home/swissbib/environment/code/learning/javascript/javascript/testing/testing.guenter.first.steps/src/index.test.js:3
import {expect} from "chai";
^^^^^^

SyntaxError: Cannot use import statement outside a module



Der Grund: 
passiert weil mocha nicht weiss, wie es mit modernerer JS Syntax umgehen soll
(import / exort Syntax, welche wir benutzen)
npm install --save-dev @babel/register
