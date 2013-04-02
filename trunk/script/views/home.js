var wb = window.wb || {};

wb.home = {
	init: function(){
		document.getElementById('menuactive').innerHTML = template.componentFooter.replace("{LINK01}","").replace("{LINK02}", " ").replace("{LINK03}", " ").replace("{LINK04}", " ");
		
		wb.home.bind();
		wb.home.render();		
	},
	bind: function(){
	},
	render: function(data){    
	  document.getElementById('home').innerHTML = template.componentIndex.replace("{MAINLABELTITLE}","Titulo TITULO" )
		  .replace("{MAINTEXT}","Texto Principal Texto Principal Texto Principal pTexto Principal")
		  .replace("{SEEMOREBTN}","Veja mais")
		  .replace("{FOOTER}","@ConsultoriaSuperCiclo 2013");
	},
	destroy: function(){
	}
};
window.wb = wb;
