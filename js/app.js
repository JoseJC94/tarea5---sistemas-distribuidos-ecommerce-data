function getAll() {
  fetch('/template/list.html')
    .then((response) => response.text())
    .then((template) => {
		console.log('template content');
		console.log(template);
		console.log(data);
      var rendered = Mustache.render(template, data);
      document.getElementById('content').innerHTML = rendered;    
   });
}

function checkId(item) {
	return item._id==this
}

function getById(query) {
  fetch('/template/detail.html')
    .then((response) => response.text())
    .then((template) => {
	  var params = new URLSearchParams(query);
	  var elem = data.find(checkId,params.get('id'));
      var rendered = Mustache.render(template, elem);
		console.log('template content');
		console.log(template);
		console.log(elem);
      document.getElementById('content').innerHTML = rendered;    
   });
}

function init() {
	router = new Navigo(null, false, '#!');
	router.on({
	  '/get': function(_,query) {
		 getById(query);
	  }
	});
	router.on(() => getAll());
	router.resolve();
}
