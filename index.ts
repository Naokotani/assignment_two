import getHome from './src/home';
import getStatic from './src/static';
import getQuestion from './src/question';

console.log(`Listening on localhost at port ${process.env.PORT}`);
Bun.serve({
	port: process.env.PORT,
  async fetch(req: Request): Promise<Response> {
    const url = new URL(req.url);
		try {
			if (/\.(css|png|svg|js)$/.test(req.url)) return await getStatic(req.url);
			if (url.pathname === "/") return await getHome();
			if (/\/question\/\d+.*/.test(req.url)) return getQuestion(req.url);
			return new Response("404!");
		} catch (e) {
			console.error('Error:', e);
			return new Response("500 - Internal Server Error");
		}
  },
});
