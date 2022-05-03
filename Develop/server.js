const inquirer = require('inquirer')
const cTable = require('console.table');
const mysql = require('mysql2');
const Choice = require('inquirer/lib/objects/choice');
const Choices = require('inquirer/lib/objects/choices');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'the_office'
    });

    connection.connect (function (err){
        if (err) throw err;
        initialPrompt();
    
    })
const initialPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'options' ,
            message: 'Please select an option',
            choices: [
                'View all Employees', 'View All Departments','View All Roles',
                'Add Role', 'Add Department','Add Employee',
                'Update Employee Role' 
            ]
        }
    ]).then(userChoice =>{
        switch (userChoice.options){
            case 'View all Employees':
                viewAllEmp();
                break
            case 'View All Roles':
                viewAllRol();   
                break
            case 'View All Departments':
                    viewAllDep();  
                    break
            case 'Add Role':
                addRole();
                break
            case 'Add Department':
                    addDepartment()   
                    break       
            case 'Add Employee':
                addEmployee();
                break  
            case 'Update Employee Role':
                updateEmployee();
                break     
            default:
                initialPrompt();
        }

    })
}

function viewAllEmp() {
    connection.query("SELECT employee.first_name AS First, employee.last_name AS Last, role.title AS Title, role.salary AS Salary, department.name AS Department, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;",
    function(err, result){
        if (err) throw err
        console.table(result);
        
        initialPrompt()
    })
    
}

function viewAllRol(){
    connection.query("SELECT employee.first_name AS First, employee.last_name AS Last, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;",
    function(err, result){
        if (err) throw err
        console.table(result);
        
        initialPrompt()
    })
}

function addEmployee() {
    connection.query("SELECT * FROM ROLE", function(err, result){
        if (err) throw err;
    
        inquirer.prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'Please enter the employee First name'
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Please enter the employee Last Name'
            },
            {
                type: 'rawlist',
                message:'Please enter the employee Role',
                name: 'role',
                choices: function(){
                    let choiceArr = [];
                    for(i=0; i< result.length; i++){
                        choiceArr.push(result[i].title)
                    } return choiceArr;
                }
            },
            
        ])
        .then(function(userChoice){
            connection.query("INSERT INTO employee SET ?",
            {
                first_name: userChoice.firstName,
                last_name: userChoice.lastName,
                role_id: userChoice.role, 
                
            }
            )
            initialPrompt()
        });
    });
}
