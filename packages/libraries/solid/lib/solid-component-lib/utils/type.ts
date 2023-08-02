export const isArray = (value: unknown): value is any[] => Array.isArray(value);

export const isString = (value: unknown): value is string =>
	typeof value === "string";

export const isObject = (value: unknown): value is object =>
	value !== null && typeof value === "object";

export const isFunction = (value: unknown): value is (...args: any[]) => any =>
	typeof value === "function";
