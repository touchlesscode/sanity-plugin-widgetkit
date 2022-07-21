# sanity-plugin-widgetkit

## Installation

```
npm install --save sanity-plugin-widgetkit
```

or

```
yarn add sanity-plugin-widgetkit
```

## Usage
Add it as a plugin in sanity.config.ts (or .js):

```
 import {createConfig} from 'sanity'
 import {myPlugin} from 'sanity-plugin-widgetkit'

 export const createConfig({
     /...
     plugins: [
         myPlugin({})
     ]
 })
```
## License

MIT © Kevin
See LICENSE