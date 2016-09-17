var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root', 
    password: '',
    database: 'Bamazon'
})





// Create a new Node application called BamazonManager.js. Running this application will:
// List a set of menu options:
// View Products for Sale
// View Low Inventory
// Add to Inventory
// Add New Product
// If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.
connection.query('SELECT * FROM Products', function(err, res) {
    if (err) throw err;
    console.log(res);
});
// If a manager selects View Low Inventory, then it should list all items with a inventory count lower than five.
// If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store.
// If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.
