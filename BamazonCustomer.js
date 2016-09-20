var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root', 
    password: '',
    database: 'Bamazon'
})
var next = false;
var id;
var units;
var stockQuantity;


inquirer.prompt([
	{
		type: "input",
		message: "\n Product ID?",
		name: "ProductID"
	},
	
]).then(function (answer) {
	console.log(answer.ProductID);
	id = answer.ProductID;
	if(id){
		productByID();
		next = true;
	}
	if(next === true){
	howManyUnits();	
	}
});


var howManyUnits = function(){
inquirer.prompt([	
		{
		type: "input",
		message: "How many units?",
		name: "Units"
		} 	
]).then(function(answer){
	units = parseInt(answer.Units);
	stockChecker();
});
}

// SHOWS ITEM AND QUANTITY BY ID
var productByID = function(){
connection.query('SELECT*FROM Products WHERE ItemID=?',id, function(err,res){
		console.log('ProductName: '+res[0].ProductName +' '+' Quantity: '+res[0].StockQuantity);
		stockQuantity = res[0].StockQuantity;
	})
};

// UPDATES STOCK
function stockChecker(){
	if(units>stockQuantity){
		console.log('Not enough stock!!!');
	}else{
		stockQuantity-=units;
		connection.query("UPDATE products SET ? WHERE ?", [{
    	StockQuantity: stockQuantity
		}, {
    	ItemID: id
	}], function(err, res) {
		console.log('You bought ' + units + ' unit/s');
		console.log(stockQuantity + ' units left')
	});		
	}
};
