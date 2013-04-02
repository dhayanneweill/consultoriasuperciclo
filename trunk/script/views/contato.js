var wb = window.wb || {};

wb.contato = {
	init: function(){
		document.getElementById('menuactive').innerHTML = template.componentFooter.replace("{LINK01}","").replace("{LINK02}", " ").replace("{LINK03}", " ").replace("{LINK04}", "active");
		wb.contato.bind();
		wb.contato.render();		
	},
	bind: function(){
	},
	render: function(data){

	  document.getElementById('contato').innerHTML = template.contactForm;
	  
	},
	destroy: function(){
	}
};
window.wb = wb;
