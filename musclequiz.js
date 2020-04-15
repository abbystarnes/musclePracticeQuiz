

const answerKey = {
1: "Orbicularis Oculi",
2: "Zygomaticus Major",
3: "Orbicularis Oris",
4: "Buccinator",
5: "Masseter",
6: "Temporalis",
7: "Sternocleidomastoid",
8: "External Intercostals",
9: "Internal Intercostals",
10: "Diaphragm",
11: "External Oblique",
12: "Internal Oblique",
13: "Transversus Abdominis",
14: "Rectus Abdominis",
15: "Trapezius",
16: "Serratus Anterior",
17: "Pectoralis Major",
18: "Latissimus Dorsi",
19: "Deltoid",
20: "Biceps Brachii",
21: "Triceps Brachii",
22: "Brachialis",
23: "Brachioradialis",
24: "Iliopsoas",
25: "Gluteus Maximus",
26: "Gluteus Medius",
27: "Gluteus Minimus",
28: "Trensor Fascia Lata",
29: "Pectineus",
30: "Adductor Longus",
31: "Gracilis",
32: "Rectus Femoris",
33: "Vastus Lateralis",
34: "Vastus Medialis",
35: "Vastus Intermedius",
36: "Sartorius",
37: "Biceps Femoris",
38: "Semitendinosus",
39: "Semimembranosus",
40: "Tibialis Anterior",
41: "Gastrocnemius",
42: "Soleus"
}

const inputContainer = document.getElementById('inputContainer');
const submit = document.getElementById('submit');
const form = document.getElementsByTagName('form')[0];
const fields = document.getElementsByClassName('muscleInput');
form.addEventListener("submit", checkAnswers);

function checkAnswers (e) {
	e.preventDefault();
	const answers = [];
	for (let x = 0; x < fields.length; x++){
		answers.push({x : fields[x].value});
		if (answerKey[x + 1] === fields[x].value) {
			console.log("correct");
		} else {
			console.log(fields[x + 1].value, answerKey[x]);
		}
	}

	console.log(answers, 'form data');
}

function generateInputs () {
	for(let [key, value] of Object.entries(answerKey)) {
		const label = document.createElement('label');
		const input = document.createElement('input');
		label.setAttribute('for', key);
		input.setAttribute('class', 'muscleInput');
		label.innerHTML = key;
		input.setAttribute('id', key);
		inputContainer.appendChild(label);
		inputContainer.appendChild(input);
	};
}



generateInputs();

