export default async function questionFive() {
  return new Response(
    `<h1 id="check-console">Click the button get some Json!</h1>
		<button onclick="handleFive()">Get some json</button>`,
  );
}
