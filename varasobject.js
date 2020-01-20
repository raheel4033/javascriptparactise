
function apnalookup(val)
{
var result = "";
var nameobj
=
{
    12:"Name",
    13:"Roll No.",
    14:"University"
}
result = nameobj[val];
return result;
}
console.log(apnalookup(13));