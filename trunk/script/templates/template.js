var template = window.template || {};
template = {
	'componentFooter' : 	'<li class="{LINK01}">'+
				    '<a href="#">'+
				      'A Empresa'+
				    '</a>'+
				  '</li>'+
				  '<li class="{LINK02}">'+
				    '<a href="#">'+
				      'Serviços'+
				    '</a>'+
				  '</li>'+
				  '<li class="{LINK03}">'+
				    '<a href="#">'+
				      'Diferencial'+
				    '</a>'+
				  '</li>'+
				  '<li class="{LINK04}">'+
				    '<a href="index.php?page=contato">'+
				      'Contato'+
				    '</a>'+
				  '</li>',
	'componentIndex' :   '<div class="row">'+
				'<div class="span4">'+
				  '<img src="style/img/mainImage.jpg" >'+
				'</div>'+
				'<div class="span8">'+
				  '<div>'+
				    '<h1>'+
				      '<strong>'+
					'{MAINLABELTITLE}'+
				      '</strong>'+
				    '</h1>'+
				    '<p>'+
				      '<span style="font-size: 13.333333969116211px;">'+
					'{MAINTEXT}'+
				      '</span>'+
				      '<br>'+
				      '<br>'+
				      '&nbsp;'+
				    '</p>'+
				  '</div>'+
				  '<a class="btn btn-info" href="#">'+
				    '{SEEMOREBTN}'+
				  '</a>'+
				'</div>'+
			      '</div>'+
			      '<hr>'+
			      '<div>'+
				'{FOOTER}'+
			      '</div>',
	'contactForm' : '<div class="hero-unit">'+
			  '<h3>'+
			    'Entre em Contato Conosco'+
			  '</h3>'+
			  '<div class="img-contact" >'+
			    '<img src="style/img/contato.jpeg" />'+
			      '<p>Rua Saldanha Marinho, 567 <br/>'+
			      '69010-040 - Manaus -AM<br/>'+
			      'Telefone: (92) 3213-5987 </p>'+
			  '</div>'+
			  '<form>'+
			    '<div class="control-group">'+
			      '<label for="textinput4">'+
				'Nome'+
			      '</label>'+
			      '<input name="textinput4" type="">'+
			    '</div>'+
			    '<div class="control-group">'+
			      '<label for="textinput5">'+
				'E-mail'+
			      '</label>'+
			      '<input name="textinput5" type="email">'+
			    '</div>'+
			    '<div class="control-group">'+
			      '<label for="textarea1" >'+
				'Mensagem'+
			      '</label>'+
			    '</div>'+
			    '<textarea name="textarea1" cols="5" rows="5"></textarea>'+
			    '<br/>'+
			    '<div class="Enviar" id="enviar">'+
			      '<a class="btn btn-large" href="#">'+
				'Enviar'+
			      '</a>'+
			   '</form>'+
			   '<div class="control-group">'+
			   '</div>'+
			  '</div>'+
			  '<div class="row">'+
			  '</div>'+
			  '<hr>'+
			  '<div>'+
			    '©ConsultoriaSuperCiclo 2013'+
			  '</div>',

	'componentLoading' : '<div class="component-loading">'+
									'<img src=style/img/3.gif>'+
								'</div>'
};	
window.template = template;
