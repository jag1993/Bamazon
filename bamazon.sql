CREATE DATABASE Bamazon;

USE Bamazon;


CREATE TABLE Products(
  ItemID INT NOT NULL AUTO_INCREMENT,
  ProductName VARCHAR(45) NULL,
  DepartmentName VARCHAR(45) NULL,
  Price DECIMAL(10,2) NULL,
  StockQuantity INT NULL,
  PRIMARY KEY (`ItemID`)
);






INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('Blue Couch','Furniture',1000,15);
INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('Lamp','Furniture',200,8);
INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('Wooden Chair','Furniture',350,17);
INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('Iphone 7','Mobile',600,20);
INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('Samsung Galaxy S7','Mobile',550,15);
INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('Iphone 7s Plus','Mobile',700,15);
INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('Blender','Appliances',150,15);
INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('Oven','Appliances',1150,20);
INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('Hand Blender','Appliances',80,3);
INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES ('Stereo','Appliances',750,35);

SELECT * FROM Products;