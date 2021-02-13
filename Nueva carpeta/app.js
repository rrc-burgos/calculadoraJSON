const express = require ("express");
const app = express ();
const url = require('url');
const path = require ('path');
const port = 3000;


app.get('/calculadora',(req, res) => {
    let numero1 = parseFloat(req.query.numero1);
    let numero2 = parseFloat(req.query.numero2);
    let operacion = req.query.operacion.toLowerCase(); 
    const calculadora = {
        get laRespuestaEs(){ 
            switch(operacion){
                case "suma":
                var result = parseInt(numero1) + parseInt(numero2);
                return(result);
                break;
                case "resta":
                    var result = parseInt(numero1) - parseInt(numero2);
                return(result);
                break;
                case "multiplicacion":
                    var result = parseInt(numero1) * parseInt(numero2);
                return(result)
                case "division":
                        if(numero2 == 0){
                            return 'no se puede dividir 0';
                        } else{
                            return result = parseInt(numero1) / parseInt(numero2);
                    
                        }
            }

        }
    }

    res.json(calculadora);

})


app.listen(port, ()=> {
    console.log(`Escucha de el puerto 3000 ${port}!`)
}
)
