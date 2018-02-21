module.exports = {
	method: 'GET',
	path: '/login',
	config: {
		//auth: 'simple',
		handler: async (request, reply)=> {
            reply('hello, ');
            //+ request.auth.credentials.name
		}
	}
};