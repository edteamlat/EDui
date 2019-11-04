function partialRight(fn, ...laterArguments) {
	return function partialliedRigthFunction(...prevArguments) {
		return fn(...prevArguments, ...laterArguments);
	};
}

export { partialRight };
