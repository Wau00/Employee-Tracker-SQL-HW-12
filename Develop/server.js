const inquirer = require('inquirer')
const cTable = require('console.table');
const mysql = require('mysql2');
const Choice = require('inquirer/lib/objects/choice');
const Choices = require('inquirer/lib/objects/choices');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'the_office;'
    });

const initialPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'options' ,
            message: 'Please select an option',
            choices: [
                'View all Employees', 'Add Employee',
                'Update Employee Role', 'View All Roles',
                'Add Role', 'View All Departments',
                'Add Department'
            ]
        }
    ]).then(userChoice =>{
        switch (userChoice.options){
            case 'View all Employees':
                viewAllEmp();
                break
            case 'Add Employee':
                addEmployee();
                break  
            case 'Update Employee Role':
                updateEmployee();
                break
            case 'View All Roles':
                viewAllRol();   
                break
            case 'Add Role':
                addRole();
                break
            case 'View All Departments':
                viewAllDep();  
                break
            case 'Add Department':
                addDepartment()   
                break              
            default:
                initialPrompt();
        }

    })
}

