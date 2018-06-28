var recipes = new Object();

function updateObjectWithKeyAndValue(obj, key, value) {
  newobject = Object.assign({}, obj, { [key]: value })
  return newobject
}
