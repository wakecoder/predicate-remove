# predicate-remove
A small, unit-tested function that removes one or more items (optional) based upon a predicate function.

### Intro
Removing an item from an array is a very common task. While JavaScript natively supports Array.splice it is easily misused and doesn't allow removing via a predicate function.
There are several utility libraries that provide a remove function. But, if all you need is the remove function, it's a little ridiculous to include a 23kb file for an 8-line function.

So, here it is: predicate-remove. It will remove the first item that matches your predicate function. Or, it can remove all items matching your predicate if you wish.

You can monkey patch array with it if you like, or simply use the remove method without monkey patching.

### Installation

```
npm install predicate-remove
```

### Usage

Without monkey patching:
```javascript
const remove = require ('predicate-remove').remove;
const array = [{id: 1} ,{id: 2}, {id: 3}];
//Remove item with id==1
remove (array,e=>e.id==1);

//Remove all items with id==2
remove (array,e=>e.id=2,true);
```

With monkey patching:
```javascript
require ('predicate-remove').monkeyPatch();
const array = [{id: 1} ,{id: 2}, {id: 3}];
//Remove item with id==1
array.remove (e=>e.id==1);

//Remove all items with id==2
array.remove (e=>e.id=2,true);
```
