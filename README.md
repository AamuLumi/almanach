# almanach

[WIP 0.0.1] Minimal Independant Typescript Patterns Library for faster development

---

After a lot of projects with Typescript and Javascript, I saw I implemented the same patterns on all projects.
This library regroups all the code I'm always using without any dependency.

## Structure

### Mixins 

Mixins are designed to add features on a class.  
You can add any number of mixins to a class.

JS and TS doesn't provide any technique to do multiple inheritance, so mixin are a way to achieve this.

#### Available

- AddObservable [more](./src/mixins/Observable.ts) : add [Observable](https://en.wikipedia.org/wiki/Observer_pattern) methods to a class.

## Development

```
npm i
npm run test
```

### Tests

almanach is using two types of test : 
- standard unit tests (backward compatibility) with jest
- type tests (error detection through Typescript) with tsd

## Why almanach ?

I remembered second `Back to the future` movie, and, in French, the book containing all the sports results was an `almanach`. 
The word is cool, so why not using it ?

## License

MIT
