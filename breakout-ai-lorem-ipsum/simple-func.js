const simpleFunc = (name, timeOfDay) => {
  if (timeOfDay < 12) {
    return `good morning ${name}`;
  }

  return `good afternoon ${name}`;
};

module.exports = simpleFunc;
