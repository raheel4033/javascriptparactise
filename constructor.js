function user(firstname,lastname,age,salary)
{
    this.firstname =firstname;
    this.lastname = lastname;
    this.age= age;
    this.salary = salary;
}

var user1 =new user('John','Smith',24,10000);
console.log(user1);

