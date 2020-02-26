//Define an object called recipes
var recipes = {};

//objects can push, pop, shift, unshift,

//Return an object with the original key value pairs and the new key value pair
function updateObjectWithKeyAndValue(object, key, value){
  object.push({[key]:value});
  return object;
}
