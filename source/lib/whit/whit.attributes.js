export default function attributes(newAttributeValues) {
  if (newAttributeValues) {
    for (let attributeName in newAttributeValues) {
      const attributeValue = newAttributeValues[attributeName];
      this.attribute(attributeName, attributeValue);
    }
    return this;
  } else {
    const attributeValues = {};
    const attributesArray = Array.prototype.slice.call(this.element.attributes);
    attributesArray.forEach(attribute => {
      attributeValues[attribute.name] = attribute.value;
    });
    return attributeValues;
  }
}
