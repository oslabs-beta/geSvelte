/**
 * @param {any[]} validators
 */
function buildValidator(validators) {
	return function validate(/** @type {any} */ value, /** @type {any} */ dirty) {
		if (!validators || validators.length === 0) {
			return { dirty, valid: true };
		}

		const failing = validators.find((v) => v(value) !== true);

		return {
			dirty,
			valid: !failing,
			message: failing && failing(value)
		};
	};
}

export { buildValidator };
