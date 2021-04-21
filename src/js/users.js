import {XHR} from './xhr.js';
import * as VARIABLES from './script.js';

export class Users{
	constructor(file){
		this.setData(file);
	}

	async setData(file){
		let data = await XHR.getFile(file);
		this.setMarks(data);
		this.createUsers(data);
	}

	setMarks(data){
		data.gradation.forEach((value,index)=>VARIABLES.MARKS[VARIABLES.RANGE[index]]=value);
	}

	createUsers(data){
		let usersWithClass = data.users
			.map(user => {
				user['roleImg'] = data.roles[user.role] ? data.roles[user.role] : ``;
				return user;
			})
			.map(user => VARIABLES.ROLES[user.role] ? VARIABLES.ROLES[user.role](user) : new User(user) )
		console.log(usersWithClass);
	}
}