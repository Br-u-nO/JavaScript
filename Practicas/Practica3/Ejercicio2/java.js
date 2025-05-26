 var jsonStr = '['
    + '{"name":"Alice","dob": "2001-07-02T00:00:00.000Z","trips": 20},'
    + '{"name":"Robert","dob": "1997-06-31T00:00:00.000Z","trips": 5},'
    + '{"name":"Charles","dob": "1978-01-15T00:00:00.000Z","trips": 12},'
    + '{"name":"Lucía","dob": "1955-02-07T00:00:00.000Z","trips": 30},'
    + '{"name":"Peter","dob": "1988-03-09T00:00:00.000Z","trips": 8},'
    + '{"name":"Lucas","dob": "1910-02-04T00:00:00.000Z","trips": 2}]'

function frequentTravelers(people){
    return people
    .filter(p => p.trips > 10)
    .map(p => p.name)
    .reduce((n1, n2) => n1 + ", " + n2)
}

function nextBirthday(people){
    const hoy = new Date();
    let menor =
    {   
        persona:undefined,
        cumpleaños:undefined

    } 

    people.forEach(n2 => {
        const dob = new Date(n2.dob);
        const actualCumpleaños= new Date(hoy.getFullYear(),dob.getMonth(),dob.getDate());
        
        if(actualCumpleaños>hoy){
                actualCumpleaños.setFullYear(actualCumpleaños.getFullYear()+1);
                actualCumpleaños.setTime(actualCumpleaños.getTime()-hoy.getTime())
            }
        actualCumpleaños.setTime(hoy.getTime()-actualCumpleaños.getTime())
        if(menor.persona==undefined){
            menor.persona=n2;
            menor.cumpleaños=actualCumpleaños;
        }else{
            if(actualCumpleaños<menor.cumpleaños){
                menor.persona=n2;
                menor.cumpleaños=actualCumpleaños;
            
            }
        }
        
    });
        console.log(menor.cumpleaños)
        console.log("La próxima persona en cumplir años es:", menor.persona);
}



console.log(frequentTravelers(JSON.parse(jsonStr)))
console.log(nextBirthday(JSON.parse(jsonStr)))