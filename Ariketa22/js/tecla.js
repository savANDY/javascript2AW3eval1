function TeclaPulsada(e) {
	var keychar;
	var teclanum;

	teclanum = e.which;
	keychar = String.fromCharCode(teclanum);

	//alert(keychar);
	alert(teclanum);

	if (teclanum == 13) {
		alert("has tecleado ENTER");
		
		focusable = form.find('input,a,select,button,textarea').filter(':visible');
        next = focusable.eq(focusable.index(this)+1);
        if (next.length) {
            next.focus();
        } else {
            form.submit();
        }
        return false;
		
//		teclanum = 9; 
//		return teclanum;
       //  return false;
	}
	
	
	if (keychar < "0" || keychar > "9") {
		return false;
	} else {
		return true;
	}
}

function comprobarArroba(e) {

	var caracterTecla;
	var codigoTecla;

	if (window.event) { // compatibilidad con el explorer
		codigoTecla = e.keyCode;
	} else if (e.which) {
		codigoTecla = e.which;
	}
	caracterTecla = String.fromCharCode(codigoTecla);
	if (caracterTecla == "@") {
		if (document.encuesta.correo.value.indexOf('@') >= 0) {
			return false;
		}
	}

}