const add = (a, b, callback) => {
	setTimeout(() => {
		// const data = {
		// 	lontitude: 0,
		// 	latitude: 0,
		// };
		callback(a + b);
	}, 2000);
};

add(1, 4, (sum) => {
	console.log(sum);
});
