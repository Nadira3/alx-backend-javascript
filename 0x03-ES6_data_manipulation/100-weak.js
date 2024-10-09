// Create and export a WeakMap instance
export const weakMap = new WeakMap();

// Define and export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  const count = weakMap.get(endpoint) || 0;

  // Increment the count for the endpoint
  if (count >= 4) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, count + 1);
  }
}
