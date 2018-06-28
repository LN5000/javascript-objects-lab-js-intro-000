var recipes = new Object();

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, { [key]: value })
}

function deleteFromObjectByKey(obj, key, value) {
  newobj = Object.assign({},obj, { [key]: value })
  delete newobj.key
  return newobj
}
