## React Project to show Forex Trading information using json-server

## Logic
Rendering the initial information from currencies.json file.
Rates are shown to the 4th position after the decimal point.
Rising the rates with 0.0001 for the first minute every 5 seconds, then lowering with the same amount for the next minute and so on.
When the rate is rising the background changes to green.
When the rate is lowering the background changes to red.
The rate stops lowering if it hits 1.0001 or lower value.
The updating stops at the 5th minute.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## `npm run server`

Runs app json-server on [http://localhost:5000]

