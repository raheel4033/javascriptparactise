function operations(op)
{

    if(op >= 15 &&  op <= 25 )
    {
     
        return "true";
    }
    else if(op==50 || op == 72)
    {
        return "Insane Guess";
    }
    else
    {
        return "false";
    }
    

}

console.log(operations(17));
