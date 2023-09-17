// myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  // myMap
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, (item) => {
      result.push(callback(item));
    });
    return result;
  }
  
  // myReduce
function myReduce(collection, callback, acc) {
    let index = 0;
    let keys = Object.keys(collection);
  
    if (acc === undefined) {
      acc = collection[keys[0]];
      index = 1;
    }
  
    for (let i = index; i < keys.length; i++) {
      const key = keys[i];
      acc = callback(acc, collection[key], key);
    }
  
    return acc;
  }
  
  
  // myFind
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
    return undefined;
  }
  
  // myFilter
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (item) => {
      if (predicate(item)) {
        result.push(item);
      }
    });
    return result;
  }
  
  // mySize
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // myFirst
  function myFirst(array, n = 1) {
    if (n === 1) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  // myLast
  function myLast(array, n = 1) {
    if (n === 1) {
      return array[array.length - 1];
    } else if (n >= array.length) {
      return array;
    } else {
      return array.slice(array.length - n);
    }
  }
  
  // myKeys
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // myValues
  function myValues(object) {
    return myMap(myKeys(object), (key) => object[key]);
  }
  
  // Export the functions if needed
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues,
  };
  