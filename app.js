require('colors');

const { showMenu,stop } = require('./helpers/output');

const main = async()=>
{
    let opt = '';
    do 
    {
       opt = await showMenu();
       if(opt !== '0') await stop();
    }while(opt !== '0');
}

main();