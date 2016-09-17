var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root', 
    password: '',
    database: 'Bamazon'
})
var id;
var units;
var stockQuantity;

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})


inquirer.prompt([
	{
		type: "input",
		message: "Product ID?",
		name: "ProductID"
	},
	{
		type: "input",
		message: "How many units?",
		name: "Units"
	} 
]).then(function (answer) {
	console.log(answer.ProductID);
	console.log(answer.Units);

	id = answer.ProductID;
	units = parseInt(answer.Units);
	if(id){
		productByID();
	}
	if(units&&stockQuantity){
		stockChecker();
	}
});


function productByID(){
connection.query('SELECT*FROM Products WHERE ItemID=?',id, function(err,res){
		console.log('ProductName: '+res[0].ProductName);
		console.log('Quantity: '+res[0].StockQuantity);
		stockQuantity = res[0].StockQuantity;
	})
};
function stockChecker(){
	if(units>stockQuantity){
		console.log('Not enough stock!!!');
	}else{
		console.log('UPDATE TABLE');
	}
};
