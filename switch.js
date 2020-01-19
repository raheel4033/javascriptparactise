function caseinswitch(val)
{
    var answer = "";
    switch(val)
    {
        case 1:
            return "Wow";
            break;
        case 2:
            return "alpha";
            break;
        case 3:
            return "gamma";
            break;
        case 4:
            return "beta";
            break;
        default:
            return "none";
    }

}

console.log(caseinswitch(3));
console.log(caseinswitch(2));
console.log(caseinswitch(1));