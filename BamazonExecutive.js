var mysql = require('mysql');
var inquirer = require('inquirer');
var consoletable = require('console.table');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root', 
    password: '',
    database: 'Bamazon'
});



inquirer.prompt([
	{
		type: "list",
		name: "choice",
		message: "Hello! What would you like to do?",
		choices: ["Add New Department", "View Total Profit" ] 
	}
	]).then(function(answer){
		if(answer.choice === "Add New Department"){
			addNewDepartment();
		}else if(answer.choice === "View Total Profit"){
			tableJoin();
			showProducts();
		}	
	});






var addNewDepartment = function(){

	inquirer.prompt([
	{
		type: "input",
		message: "Product Name? \n",
		name: "productName"
	},
	{
		type: "input",
		message: "New Department Name? \n",
		name: "newDepartmentName",
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
	},
	{
		type: "input",
		message: "Over Head Costs? \n",
		name: "overHeadCosts"
	}
 ]).then(function (answer) {

	 connection.query("INSERT INTO Products SET ?", {
            ProductName: answer.productName,
            DepartmentName: answer.newDepartmentName,
            Price: parseInt(answer.price),
            StockQuantity: parseInt(answer.stockQuantity)
        }, function(err, res) {
            console.log("You have added Department in Product Table");
        });
	 connection.query("INSERT INTO Departments SET ?", {
			DepartmentName: answer.newDepartmentName,
			OverHeadCosts: parseInt(answer.overHeadCosts)*-1,
			TotalSales: 0
	 }, function(err, res) {
            console.log("You have added Department in Department Table");
        });
})
}






var showProducts = function(){
connection.query('SELECT*, OverHeadCosts + TotalSales AS Profit FROM Departments', function(err, res) {
    if (err) throw err;
    console.table(res);
});
}
var tableJoin = function(){
 connection.query('UPDATE Departments d INNER JOIN(SELECT DepartmentName, SUM(TotalSales) as total FROM Products GROUP BY DepartmentName) x ON d.DepartmentName = x.DepartmentName SET d.TotalSales = x.total WHERE d.DepartmentName = x.DepartmentName', function(err, res) {
        });}
