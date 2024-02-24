export default async function questionTwo(url: string) {

	let res;
	if (/\/question\/\d+\/store-email/.test(url)) {
		const regex = /title=([^&]+)/;
		const match = url.match(regex);
		if (match) {
			const titleValue = match[1];
			const emailRegex = /^[^\s%40]+%40[^\s%40]+\.[^\s%40]+$/;
			if (emailRegex.test(titleValue)) {
				res="<p>Nice email!</p>"
			} else {
				res="<p>Shareer email!</p>"
			}
		} else {
			res="Title parameter not found";
		}
		
	} else {
		res = 
`<form hx-get="http://localhost:7979/question/2/store-email">
    <input id="title" name="title" type="text">
    <button type="submit">Submit</button>
</form>`
		
	}
	
	return new Response(res);
}
