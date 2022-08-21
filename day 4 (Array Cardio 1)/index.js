const inventors = [
    {first:"Albert" , last:"Einstein", year:1879, passed:1955},
    {first:"Issac", last:"Newton", year:1694, passed:1727},
    {first:"Chandrasekhara", last:"Raman", year:1888, passed:1970},
    {first:"Avul Pakir Jainulabdeen Abdul", last:"Kalam", year:1931, passed:2015},
    {first:"Homi", last:"Bhabha", year:1909, passed:1966},
    {first:"Srinivasa", last:"Ramanujan", year:1887, passed:1920},
    {first:"Satyendra", last:"Bose", year:1894, passed:1974},
] 

const people=['Sachin, Tendulkar', 'Mahendrasingh, Dhoni', 'Kapil, Dev', 'Sourav, Ganguly', 'VVS, Laxman', 'Ajit, Agarkar', 
'Sunil, Gavaskar', 'Virendra, Sehwag','Virat, Kohli', 'Rohit, Sharma', 'Yuvraj, Singh','Suresh, Raina' , 'Gautam, Gambhir', 'AB, De Villiers', 
'Chris, Gayle','Kane, Williamson', 'Brandon, Mcculum','Bhuvaneshwar, Kumar', 'Jasprit, Bumrah', 'Yujavendra, Chahal']


// filter method -> to filter the array
const fifteen = inventors.filter(inventor =>(inventor.year>=1800 && inventor.year<1900));
console.log(fifteen);

// map method -> map quantities 
const firstLast = inventors.map(inventor => inventor.first +'   '+ inventor.last);
console.table(firstLast);

// sort method -> to sort the array
// Asscending Sorting 
// Using function
const passYear = inventors.sort(function(x, y){
    if(x.passed > y.passed)
        return 1;
    return -1;
});
console.log(passYear);

// Using ternory opertator
const birthYear = inventors.sort((x,y) => (x.year)>(y.year) ? 1:-1);
console.table(birthYear);

// Descending Sorting
const birthYear1 = inventors.sort((x,y) => (x.year)<(y.year) ? 1: -1);
console.table(birthYear1);

// reduce method -> return from the function last time 
const totalYear = inventors.reduce((total, inventor) =>{
    return total+(inventor.passed- inventor.year);
},0);

console.log(totalYear);

// sort inventors by how much they lived
const lived = inventors.sort(function(a,b){
    const present = a.passed-a.year;
    const next = b.passed - b.year;
    return (present>next) ? 1: -1;
});
console.table(lived);

//  QuerySelector Map Function
// const category = document.querySelector('.bodyContent');
// const links = Array.from(category.querySelectorAll('a'));

// const de = links
//                 .map(link=> link.textContent)
//                 .filter(langName => langName.includes('block'));

// Sort Exercise 
const alpha = people.sort((a, b) => {
    const [afirst , alast] = a.split(', ');
    const [bfirst ,blast] = b.split(', ');

    return afirst > bfirst ? 1: -1;
} );

console.log(alpha);


// Reduce Exercise 

const data = ['car', 'truck', 'truck', 'car', 'bus', 'car', 'bus', 'bus', 'bike', 'truck', 'bike', 'rickshaw'];

const transport = data.reduce(function(obj, item){
    if(!obj[item]){
        obj[item] = 0; 
    }
    obj[item]++;
    // console.log(obj);
    return obj;
}, {} );

console.log(transport);