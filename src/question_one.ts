export default async function questionOne() {
	return new Response(`
<h1 id="update-me">foo</h1>
<button onclick="(() => {
    if (document.getElementById('update-me').innerHTML === 'foo') {
        document.getElementById('update-me').innerHTML = 'bar';
    } else {
        document.getElementById('update-me').innerHTML = 'foo';
    }
})()">Change header</button>
`)
}

