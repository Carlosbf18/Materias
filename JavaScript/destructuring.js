var cameronDiaz = {
	name: 'cameron diaz',
	address: {
		country: {
			name: 'USA'
		},
		zip: '1234',
		street: 'ABC123'
	},
	phones: [
		{
			extension: 123,
			number: 789466541,
			provider: {
				name: 'AT&T',
				code: 1
			}
		},
		{
			extension: 987,
			number: 45678912,
			provider: {
				name: 'Verizon',
				code: 2
			}
		}
	]
}




var { name, address:{country:{name:countryName}} , phones:[{provider:{name:provider1}},{provider:{name:provider2}}]} = cameronDiaz


