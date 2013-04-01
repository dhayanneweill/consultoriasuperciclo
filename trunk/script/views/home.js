var wb = window.wb || {};

wb.home = {
	init: function(){
		wb.home.render();
		wb.home.bind();
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
