const bindClassesDynamically = (dynamicClasses, defaultClass = "") => {
  return Object.entries(dynamicClasses)
    .filter((entry) => entry[1])
    .map((entry) => entry[0])
    .join(" ")
    .concat(" ")
    .concat(defaultClass);
}

export default bindClassesDynamically;
