(() => {
	let getButtons = document.querySelectorAll('.getButton');
	deleteButton = document.querySelector('.deleteButton');

	function fetchData() {
		let url = "/api/" + this.id;

		fetch(url)
		.then((resp) => resp.json())
		.then ((data) => {
			console.log(data);
		})
		.catch(function(error) {
			console.log(error);
		});
	}

	getButtons.forEach(button => button.addEventListener('click', fetchData));
	deleteButton.addEventListener('click', deleteRecord);

})();