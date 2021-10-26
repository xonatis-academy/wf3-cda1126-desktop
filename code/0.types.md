# Les types

### 1. Quel est le type de 3 ?

```js
console.log(typeof 3); // prints number
```

### 2. Quel est le type de 'Bonjour' ?

```js
console.log(typeof 'Bonjour'); // prints string
```

### 3. Quel est le type de {a: 1, b: 2} ?

```js
console.log(typeof {a: 1, b: 2}); // prints object
```

### 4. Quel est le type de [1, 4, 3] ?

```js
console.log(typeof [1, 4, 3]); // prints object
```

### 5. Quel est le type de NaN ?

```js
console.log(typeof NaN); // prints number
```

### 6. Quel est le type de undefined ?

```js
console.log(typeof undefined); // prints undefined
```

### 7. Quel est le type de null ?

```js
console.log(typeof null); // prints object
```

### 8. Qu'affichera ce programme ?

```js
undefined = 2;
console.log(typeof undefined === undefined);
```

```js
undefined = 2;
console.log(typeof undefined === undefined); // prints false
```

### 9. Qu'affichera ce programme ?

```js
'use strict';
undefined = 2;
console.log(typeof undefined === undefined);
```

```js
'use strict';
undefined = 2;
console.log(typeof undefined === undefined); // TypeError thrown
```