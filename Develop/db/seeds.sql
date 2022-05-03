INSERT INTO department (name)
VALUES
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");
   

INSERT INTO role (title, salary, department_id)
VALUES
    ("Lead Engineer", 150000, 2),
    ("Legal Team Lead", 250000, 4),
    ("Accountant", 125000, 3),
    ('Sales Lead', 100000, 1),
    ("Salesperson", 80000, 1),
    ("Software Engineer", 120000, 2),
    ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Mike", "Chan", 1, null),
    ("Ashley", "Rodriguez", 2, null),
    ("Walter", "Underwood", 3,null ),
    ("Kunal", "Sing", 4, 1),
    ("Malia", "Brown", 5, 4),
    ("Tom", "Allen", 6, 1),
    ("Kevin", "Tupik",7, 2);

