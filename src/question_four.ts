const Mustache = require("mustache");

interface apiData {hourly: {time: string[], temperature_2m: string[]}}

export default async function questionFour () {
	const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=44.6464&longitude=-63.5729&hourly=temperature_2m&timezone=America%2FSao_Paulo");

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }

	const data  = await res.json().catch((e) => console.log(e)) as apiData;

	let temps = [];
	for (let i = 0; i < data.hourly.time.length; i++) {
		temps.push({time: data.hourly.time[i], temp: data.hourly.temperature_2m[i]})
	}
	
	const view = {
		temps: temps,
	}

	const template = `
	<h1>Upcoming Weather</h1>
  <ul>
    {{#temps}}
      <li>{{time}}: {{temp}}</li>
    {{/temps}}
  </ul>`;

	const html = Mustache.render(template, view);

	return new Response(html)
		
}
	
