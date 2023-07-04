export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!endpoint || typeof endpoint !== 'object') {
    throw TypeError('Invalid endpoint');
  }

  const endpointKey = JSON.stringify(endpoint);

  if (!weakMap.has(endpointKey)) {
    weakMap.set(endpointKey, 1);
  } else {
    const count = weakMap.get(endpointKey) + 1;
    weakMap.set(endpointKey, count);

    if (count >= 5) {
      throw Error('Endpoint load is high');
    }
  }
}
