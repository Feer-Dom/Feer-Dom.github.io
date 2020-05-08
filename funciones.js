function Validar()
{
    var todo_correcto = true;
    if(document.getElementById('txt1').value.length < 1 )
    {
        todo_correcto = false;
    }
    if(document.getElementById('txt2').value.length < 1 )
    {
        todo_correcto = false;
    }
    if(document.getElementById('txt3').value.length < 1 )
    {
        todo_correcto = false;
    }
    if(!todo_correcto)
    {
        alert('Algunos campos no están correctos, vuelva a revisarlos');
    }    
    return todo_correcto;
}