async function handleThree() {
	const res = await fetch("https://reqres.in/api/users?page=2").catch((e) => console.log(e));

	if (res.ok) {
		const data = await res.json().catch((e) => console.log(e));
		document.getElementById("check-console").innerHTML = "Check console!";
		console.log(data.data[0].first_name);
		console.log(data.data[0].email);
	} else {
		throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
	}
}
