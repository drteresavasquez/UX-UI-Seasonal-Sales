"use strict";
console.log("ssales");

let getStuff = (json) => {
	return new Promise(function(resolve, reject) {
		let getItems = new XMLHttpRequest();
		getItems.open('GET', json);
		getItems.send();
		getItems.addEventListener("load", (event) => {
			let items = JSON.parse(event.target.responseText);
			resolve(items);
		});
	});
};

let getData = (results) =>{
    let keys = Object.keys(results);
    let data = results[keys];
    return data;
};

getStuff('categories.json')
.then((results)=>{
     return getData(results);
}).then((data)=>{
    data.forEach((item)=>{
        console.log(item.id);
        console.log(item.name);
        console.log(item.season_discount);
        console.log(item.discount);
    });
});

