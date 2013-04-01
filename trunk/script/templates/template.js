var template = window.template || {};
template = {
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

	'componentLoading' : '<div class="component-loading">'+
									'<img src=style/img/3.gif>'+
								'</div>'
};	
window.template = template;
