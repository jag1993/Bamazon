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

ALTER TABLE Products
ADD TotalSales DECIMAL(50,2) NOT NULL DEFAULT 0.00;


SELECT * FROM Products;



CREATE TABLE Departments(
  DepartmentID INT NOT NULL AUTO_INCREMENT,
  DepartmentName VARCHAR(45) NULL,
  OverHeadCosts DECIMAL(10,2) NULL,
  TotalSales INT(100) NOT NULL DEFAULT 0,
  PRIMARY KEY (`DepartmentID`)
);

INSERT INTO Departments (DepartmentName,OverHeadCosts,TotalSales) VALUES ('Appliances',50000,0.00);
INSERT INTO Departments (DepartmentName,OverHeadCosts,TotalSales) VALUES ('Food/Beverage',50000,0.00);
INSERT INTO Departments (DepartmentName,OverHeadCosts,TotalSales) VALUES ('Furniture',50000,0.00);
INSERT INTO Departments (DepartmentName,OverHeadCosts,TotalSales) VALUES ('Mobile',50000,0.00);

SELECT * FROM Departments;
