module.exports = {
  checkDocument: (req, res, next) => {
    let { document } = req.body.student;
    let result = validateDocument(document);
    if (result) return next();
    else return res.send({success: false, error: "CPF não válido"})
  },
    
}
  function validateDocument(document) {	
    document = document.replace(/[^\d]+/g,'');	
    if(document == '') return false;	
    // Elimina documents invalidos conhecidos	
    if (document.length != 11 || 
      document == "00000000000" || 
      document == "11111111111" || 
      document == "22222222222" || 
      document == "33333333333" || 
      document == "44444444444" || 
      document == "55555555555" || 
      document == "66666666666" || 
      document == "77777777777" || 
      document == "88888888888" || 
      document == "99999999999")
        return false;		
    // Valida 1o digito	
    add = 0;	
    for (i=0; i < 9; i ++)		
      add += parseInt(document.charAt(i)) * (10 - i);	
      rev = 11 - (add % 11);	
      if (rev == 10 || rev == 11)		
        rev = 0;	
      if (rev != parseInt(document.charAt(9)))		
        return false;		
    // Valida 2o digito	
    add = 0;	
    for (i = 0; i < 10; i ++)		
      add += parseInt(document.charAt(i)) * (11 - i);	
    rev = 11 - (add % 11);	
    if (rev == 10 || rev == 11)	
      rev = 0;	
    if (rev != parseInt(document.charAt(10)))
      return false;		
    return true;   
  }