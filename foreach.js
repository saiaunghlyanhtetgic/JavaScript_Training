let message = "it is really hard to have an expertise of how to handle data in the field of data science";

let data = message.split(" ");

let allData = [];
data.map(d => d.length > 2 ? allData.push(d) : "" );
allData.forEach(d => console.log(d));

console.log("----------------");
for(x in allData) {
    console.log(allData[x]);
}