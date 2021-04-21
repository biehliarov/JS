export class XHR{
	constructor(file){
		this.getFile(file);
	}

	static async getFile(file){
		let request = await fetch(file),
			response = await request.json();

		return response;
	}
}