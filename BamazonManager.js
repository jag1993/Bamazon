var mysql = require('mysql');
var inquirer = require('inquirer');
var consoletable = require('console.table');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root', 
    password: '',
    database: 'Bamazon'
})
var choice;
var idAdd;
var amount;
var addMoreSwitch = false;
var stockQuantity;
var amountToAdd;
var deptArray = [];

inquirer.prompt([
	{
		type: "list",
		name: "choice",
		message: "Hello! What would you like to do?",
		choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory","Add New Product" ] 
	}
	]).then(function(answer){
		choice = answer.choice;

		if(choice == 'View Products for Sale'){
			showProducts();
		}
		else if(choice == 'View Low Inventory'){
			console.log('View Low Inventory');
			viewLowInventory();
		}
		else if(choice == 'Add to Inventory'){
			addMoreIDPrompt();
		}
		else if(choice == 'Add New Product'){
			addNewProduct();
		}
	});

var showProducts = function(){
connection.query('SELECT * FROM Products', function(err, res) {
    if (err) throw err;
  console.table(res);
});
}

var viewLowInventory = function(){
connection.query('SELECT ItemID,ProductName,StockQuantity FROM Products WHERE StockQuantity <= 5', function(err,res){
	console.table(res);
});
}

var addMoreIDPrompt = function(){
	inquirer.prompt([
	{
		type: "input",
		message: "Product ID? \n",
		name: "ProductID"
	},	
]).then(function(answer){
	idAdd = parseInt(answer.ProductID);
	productByID();
	addMoreSwitch = true;
	if(addMoreSwitch === true){
		addMoreQuantityPrompt();
	}
});
}

var productByID = function(){
connection.query('SELECT*FROM Products WHERE ItemID=?',idAdd, function(err,res){
		console.log('ProductName: '+res[0].ProductName +'  '+'Quantity: '+res[0].StockQuantity + '\n');
		stockQuantity = res[0].StockQuantity;
	})
};


var addMoreQuantityPrompt = function(){
	inquirer.prompt([
	{
		type: "input",
		message: "How many units would you like to add? \n",
		name: "Amount"
	},	
]).then(function (answer) {
	amountToAdd = parseInt(answer.Amount);
	stockQuantity += amountToAdd;
	connection.query("UPDATE products SET ? WHERE ?", [{
    	StockQuantity: stockQuantity
		}, {
    	ItemID: idAdd
	}], function(err, res) {
		console.log(amountToAdd + ' added')
	});		

});

}


var addNewProduct = function(){

	inquirer.prompt([
	{
		type: "input",
		message: "Product Name? \n",
		name: "productName"
	},
	{
		type: "list",
		message: "Department Name? \n",
		name: "departmentName",
		choices: deptArray
	},
	{
		type: "input",
		message: "Price? \n",
		name: "price"
	},
	{
		type: "input",
		message: "Stock Quantity? \n",
		name: "stockQuantity"
	}
 ]).then(function (answer) {

	 connection.query("INSERT INTO Products SET ?", {
            ProductName: answer.productName,
            DepartmentName: answer.departmentName,
            Price: parseInt(answer.price),
            StockQuantity: parseInt(answer.stockQuantity)
        }, function(err, res) {
            console.log("You have added item");
        });
})
}

var departmentArrays = function(){
 connection.query('SELECT DepartmentName FROM Products GROUP BY DepartmentName HAVING count(*) >= 1' , function(err, res) {
           for(i=0;i<res.length;i++){
          
           var departments = res[i].DepartmentName;
        	 deptArray.push(departments); 
        
            }
        });
};
departmentArrays();


