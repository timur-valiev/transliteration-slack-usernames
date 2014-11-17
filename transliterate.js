function translit(name){
var text = name.toLowerCase();
     
var space=''
var transl = {
	'"':'@', '/':'/', '@':'@', '\\':'/','_':'_',
'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh', 
'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space, 'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ia'
}
                
var result = '';
var curent_sim = '';
                
for(i=0; i < text.length; i++) {
    if(transl[text[i]] != undefined) {
         if(curent_sim != transl[text[i]] || curent_sim != space){
             result += transl[text[i]];
             curent_sim = transl[text[i]];
          }                                                                            
    }
    else {
        return null;
    }                              
}          
                
return result;
}

$('#message-input').keydown( function(e) {
    if (e.keyCode == 9 && !e.shiftKey) {
	var str = $('#message-input').val();
	var lastIndex = str.lastIndexOf(" ")

	var old = str.substring(0, lastIndex+1);
	var toproc = str.substring(lastIndex+1,str.length);
	var processed = translit(toproc);
	if(processed!=null)
		$('#message-input').val(old+processed);
    }
  }
);
