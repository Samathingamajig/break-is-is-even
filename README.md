# Break `is-is-even`

A simple demonstration of a bug in [`is-is-even`](https://www.npmjs.com/package/is-is-even) due to it using a loose equality operator (`==`) instead of a strict equality operator (`===`) for testing if [`is-even`](https://www.npmjs.com/package/is-even) is, in fact, `is-even`, due to the automatic type coercion in the [ECMA-262 specification](https://262.ecma-international.org/13.0/#sec-islooselyequal).
