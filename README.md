# fogbg_vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# GraveyardWebsiteInVue Development cycle
- Pull remote
- update packages
- npm run serve
- make changes
- npm run build
- swap to gh-pages branch
- delete assets folder
- copy (git-ignored) dist folder contents to root
- commit and push to remote
- review gh page after it has built
- update https://github.com/GullifordGraveyard/GullifordGraveyard.github.io with contents of dist
