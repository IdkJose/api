let tareas = [];

exports.getTarear=(req,res) =>{
    console.log('El numero de tareas es ${tareas.length}');
    res.json(tareas);
}