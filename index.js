const servidor = require("./src/models/server");



servidor.listen(3000,()=> {
    console.log('use port 3000');
})