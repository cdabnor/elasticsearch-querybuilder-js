# elasticsearch-querybuilder-js

A Javascript (Typescript) implementation of the [Elasticsearch Java Query DSL](https://www.elastic.co/guide/en/elasticsearch/client/java-api/current/java-query-dsl.html), providing a set of query builders to help with the generation of Elasticsearch queries in JSON format that can be used with the Elasticsearch API.

## Compiling

The project uses Typescript that must be compiled into Javascript.

The Typescript compiler should be installed globally using npm:

```
npm install -g typescript
```

Project dependencies should also be installed using npm:
```
npm install
```

Once installed, the Typescript compiler can be run using the following:

```
tsc
```

Note: Project specific Typescript Config from the tsconfig.json file will be used by the compiler.

Or alternatively it can be run with an npm script:
```
npm run compile
```


## Testing

The project uses Mocha to run unit tests.

Mocha should be installed globally using npm:
```
npm install -g mocha
```

Once installed, Mocha can be run using the following:

```
mocha
```

Note: Project specific Mocha Config from the test/mocha.opts file will be used by Mocha.

Or alternatively it can be run with an npm script:
```
npm test
```
