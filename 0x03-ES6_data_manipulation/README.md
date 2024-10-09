# 0x03. ES6 Data Manipulation

This repository contains multiple JavaScript files that demonstrate data manipulation using ES6 features. Each file focuses on different tasks involving ES6 constructs like `WeakMap`, `Set`, `Map`, and advanced array manipulation techniques.

## Table of Contents
- [Project Overview](#project-overview)
- [Files](#files)
- [Installation](#installation)
- [Examples](#examples)
- [License](#license)

## Project Overview

This project explores various ES6 data manipulation techniques using JavaScript. The key topics include:

- **Array Manipulation**: Working with array methods like `map()`, `filter()`, `reduce()`, and more.
- **WeakMap and WeakSet**: Understanding how `WeakMap` and `WeakSet` work and when to use them for memory-efficient object tracking.
- **Map and Set**: Demonstrating the use of `Map` and `Set` for handling collections of data, including unique value storage and key-value pairs.
- **Typed Arrays**: Handling binary data and creating typed arrays for better performance in specific use cases.

Each task showcases a different concept or challenge that emphasizes using ES6+ features to manipulate data efficiently and effectively.

## Files

Below is a list of all the JavaScript files in the directory along with their descriptions:

- **0-get_list_students.js**: Returns a list of student objects.
- **1-get_list_student_ids.js**: Extracts the student IDs from a list of students.
- **2-get_students_by_loc.js**: Returns students by location from a list of students.
- **3-get_ids_sum.js**: Calculates the sum of student IDs.
- **4-update_grade_by_city.js**: Updates students’ grades by city.
- **5-typed_arrays.js**: Creates a new `Uint8Array` with specific values.
- **6-set.js**: Returns a set from an array.
- **7-has_array_values.js**: Returns whether an array contains specific values.
- **8-clean_set.js**: Cleans up and converts a set of strings into a single string.
- **9-groceries_list.js**: Creates a groceries list using the `Map` data structure.
- **10-update_uniq_items.js**: Updates unique grocery items and changes their quantity in the map.
- **100-weak.js**: Implements a `WeakMap` to track the number of queries made to an API endpoint. It throws an error when the number of queries reaches 5.

## Installation

To run any of the JavaScript files, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/alx-backend-javascript
   ```

2. Navigate to the project directory:

    ```bash
    cd alx-backend-javascript/0x03-ES6_data_manipulation
    ```

3. Run the code using Node.js:

    ```bash
    node 100-main.js
    ```


Examples

Below is an example of how the tracker works:
```
import { queryAPI, weakMap } from './100-weak.js';

const endpoint = { protocol: 'http', name: 'getUsers' };

queryAPI(endpoint); // First query
console.log(weakMap.get(endpoint)); // Output: 1

queryAPI(endpoint); // Second query
console.log(weakMap.get(endpoint)); // Output: 2

queryAPI(endpoint); // Third query
queryAPI(endpoint); // Fourth query
queryAPI(endpoint); // Fifth query - Error will be thrown here
```
When the number of queries exceeds 5, the error "Endpoint load is high" will be thrown.
