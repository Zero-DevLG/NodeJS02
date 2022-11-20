require('colors');

const showMenu = () =>
{

    return new Promise(( resolve )=>{
        console.clear();
        console.log('=========================='.green);
        console.log('Seleccione una opción');
        console.log('==========================\n'.green);
    
        console.log(`${'1.'.yellow} Crear tarea`);
        console.log(`${'2.'.yellow} Listar tareas`);
        console.log(`${'3.'.yellow} Listar  tareas completadas`);
        console.log(`${'4.'.yellow} Listar tareas pendientes `);
        console.log(`${'5.'.yellow} Completar tarea(s)`);
        console.log(`${'6.'.yellow} Borrar tarea`);
        console.log(`${'0.'.red} Salir\n`);
    
        const readLine = require('readline').createInterface({
            input:  process.stdin,
            output: process.stdout
        });
    
        readLine.question('Seleccione una opción: ',(opt)=>{
            readLine.close();
            resolve(opt);
        });
    
    });
}

const stop = ()=>{

    return new Promise(( resolve ) =>{
        const readLine = require('readline').createInterface({
            input:  process.stdin,
            output: process.stdout
        });
    
        readLine.question(`Presione ${'ENTER'.blue} para continuar`,()=>{ 
            readLine.close();
            resolve();
        });
    });

    
}



module.exports = {
    showMenu,
    stop
}