import {User} from './user.js';

export class Lector extends User{
	constructor(data){
		super(data);
	}

	renderCourses(){
		let courses = this.courses
			.map(course => {
				return `<div class="user__courses--course ${this.role}">
		                    <p>Title: <b>${course.title}</b></p>
		                    <p>Lector's score: <span class="${this.getRating(course.score)}">${this.getRating(course.score)}</span></p>
		                    <p>Average student's score: <span class="${this.getRating(course.studentsScore)}">${this.getRating(course.studentsScore)}</span></p>
		                </div>`;
			})
			.join('');

		return `<div class="user__courses admin--info">${courses}</div>`;
	}
}