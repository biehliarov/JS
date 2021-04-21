export const usersBlock = document.querySelector('.users');

import {Student} from './student.js';
import {Admin} from './admin.js';
import {Lector} from './lector.js';

export const ROLES = {
	student: data => new Student(data),
	admin: data => new Admin(data),
	lector: data => new Lector(data)
}

export const RANGE = ['satisfactory','good','very-good','excellent'];
export let MARKS = {};

import {Users} from './users.js';
let users = new Users('./json/data.json');