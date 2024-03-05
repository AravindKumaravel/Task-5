let json = [{
    
        "name": "Aravind k",
        "email": "aravindkumaravel200023@gmail.com",
        "phone": 8610787616,
        "degree": "B.Tech",
        "branch":"ECE",

    
}];


// for loop

for(let i = 0;i<json.length;i++)
{
    var obj = json[i];

    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.phone);
    console.log(obj.degree);
    console.log(obj.branch);
}



// for Each
console.log("-----------------forEach--------------------")
json.forEach(json=>
    {
        console.log(obj.name);
        console.log(obj.email);
        console.log(obj.phone);
        console.log(obj.degree);
        console.log(obj.branch);
    }
)


// for Of
console.log("-----------------forOf----------------------")

for(values of json)
{
    console.log(obj.name);
        console.log(obj.email);
        console.log(obj.phone);
        console.log(obj.degree);
        console.log(obj.branch);
}


//for in

console.log("-----------------forin----------------------")
for(values in json)
{
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.phone);
    console.log(obj.degree);
    console.log(obj.branch); 
}


