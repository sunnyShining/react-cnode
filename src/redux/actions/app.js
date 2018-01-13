const RE_NAME = 'RE_NAME';

export default{
	changeName(name) {
		return ({
			type: RE_NAME,
			name
		});
	}
}
