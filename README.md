# Technical Stack
Webpack + Babel + Typescript + VueJS

## Dev & Build & Test

```
npm run dev
```

```
npm run build
```

## ADM Supported
```javascript
const SecondWorld = () => import(/* webpackChunkName: "secondworld" */ '../components/SecondWorld')
```
## Deployment

### Update Assets Path
1/ Update **output.publicPath** at file `webpack.config.js` if you want to change assets path. 

2/ If you want to set asset path on runtime, just add global variables before loading file **assetPath**
```html
<script>
window.assetUrl  = 'http://localhost/vue-starter/dist/';
</script>
```

### Remove data on local

```js
delete localStorage.TroCuaTui__MotelInfo 
delete sessionStorage.__trocuatui__isLogin
indexedDB.deleteDatabase('TroCuaTui')
```

## References

[browsers list config](https://github.com/browserslist/browserslist#config-file)