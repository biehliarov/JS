import * as VARIABLES from './script.js';

export class User{
	constructor(data){
		this.createUser(data);
		this.renderUser();
	}

	createUser(data){
		for(let key in data){
			this[key] = data[key];
		}
	}

	getRating(value){
		for(let key in VARIABLES.MARKS){
			if(value>VARIABLES.MARKS[key][0] && value<=VARIABLES.MARKS[key][1]){
				return key;
			}
		}
	}

	renderUser(){
		VARIABLES.usersBlock.innerHTML += `<div class="user">
            <div class="user__info">
                <div class="user__info--data">
                    <img src="${this.img}" alt="${this.name}" height="50">
                    <div class="user__naming">
                        <p>Name: <b>${this.name}</b></p>
                        <p>Age: <b>${this.age}</b></p>
                    </div>
                </div>
                <div class="user__info--role ${this.role}">
                    <img src="${this.roleImg}" alt="${this.role}" height="25">
                    <p>${this.role}</p>
                </div>
            </div>
            ${this.courses && this.courses.length>0 ? this.renderCourses() : ``}
        </div>`;
	}

	renderCourses(){
		let courses = this.courses
			.map(course => {
				return `<p class="user__courses--course ${this.role}">
		                    ${course.title} <span class="${this.getRating(course.mark)}">${this.getRating(course.mark)}</span>
		                </p>`;
			})
			.join('');

		return `<div class="user__courses">${courses}</div>`;
	}
}