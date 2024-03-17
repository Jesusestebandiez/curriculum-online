'use strict'

import { EDUCATION } from './models/education.js';
import { EXPERIENCE } from './models/experience.js';
import { HABILITIES } from './models/habilities.js';

function insertEducation()
{
	EDUCATION.forEach(({title, subtitle, duration}) => {
		let container = document.getElementsByClassName("education-container")[0];
		let firstDiv = document.createElement("div");
		let secondDiv = document.createElement("div");
		let h3 = document.createElement("h3");
		let subheading = document.createElement("div");
		let durationDiv = document.createElement("div");
		let durationSpan = document.createElement("span");

		firstDiv.setAttribute("class","d-flex flex-column");
		secondDiv.setAttribute("class","d-flex-grow-1");
		h3.setAttribute("class","mb-0");
		subheading.setAttribute("class","subheading mb-3");
		durationDiv.setAttribute("class","flex-shrink-0");
		durationSpan.setAttribute("class","text-primary");
		
		h3.innerHTML = title;
		subheading.innerHTML = subtitle;
		durationSpan.innerHTML = duration;
		
		durationDiv.appendChild(durationSpan);
		secondDiv.appendChild(h3);
		secondDiv.appendChild(subheading);
		firstDiv.appendChild(secondDiv);
		firstDiv.appendChild(durationDiv);
		container.appendChild(firstDiv);
	});
}

function insertExperience()
{
	EXPERIENCE.forEach(({title, subtitle, duration, desc}) => {
		let container = document.getElementById("experience-content");
		let content = document.createElement("div");
		let firstChild = document.createElement("div");
		let h3 = document.createElement("h3");
		let subheading = document.createElement("div");
		let description = document.createElement("p");
		let durationDiv = document.createElement("div");
		let durationSpan = document.createElement("span");

		content.setAttribute("class","d-flex flex-column flex-md-row justify-content-between mb-5");
		firstChild.setAttribute("class","d-flex-grow-1");
		h3.setAttribute("class","mb-0");
		subheading.setAttribute("class","subheading mb-3");
		durationDiv.setAttribute("class","flex-shrink-0");
		durationSpan.setAttribute("class","text-primary");
		
		h3.innerHTML = title;
		subheading.innerHTML = subtitle;
		description.innerHTML = desc;
		durationSpan.innerHTML = duration;
		
		firstChild.appendChild(h3);
		firstChild.appendChild(subheading);
		firstChild.appendChild(description);
		durationDiv.appendChild(durationSpan);
		content.appendChild(firstChild);
		content.appendChild(durationDiv);
		container.appendChild(content);
	});
}

function insertHabilities()
{
	HABILITIES.forEach((hability) => {
		let container = document.getElementById("hablities-list");
		let content = document.createElement("li");
		let span = document.createElement("span");
		let i = document.createElement("i");

		span.setAttribute("class","fa-li");
		i.setAttribute("class","fas fa-check");
		span.appendChild(i);
		content.appendChild(span);
		content.append(hability);
		
		container.appendChild(content);
	});
}

//main
insertEducation();
insertExperience();
insertHabilities();