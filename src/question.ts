import questionOne from './question_one'
import questionTwo from './question_two'
import questionThree from './question_three'
import questionFour from './question_four'
import questionFive from './question_five'
import questionSix from './question_six'
import questionSeven from './question_seven'

export default async function getHome(url: string) {
	const regex = /\/question\/(\d+)/;
	const match = url.match(regex);

	if (match){
		switch (match[1]) {
				case "1":
					return questionOne();
				case "2":
					return questionTwo(url);
				case "3":
					return questionThree();
				case "4":
					return questionFour();
				case "5":
					return questionFive();
				case "6":
					return questionSix();
				case "7":
					return questionSeven();
				default:
					return new Response("<p>404: File not found</p>")
		}
	} else {
		return new Response("<p>404: File not found</p>")
	}
}
