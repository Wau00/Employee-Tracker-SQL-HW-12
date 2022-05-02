INSERT INTO department (name)
VALUES
    ("Sales"),
    ("Engineering"),
    ("Engineering"),
    ("Finance"),
    ("Finance"),
    ("Legal"),
    ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES
    ("Salesperson", 80000, 1),
    ("Lead Engineer", 150000, 2),
    ("Software Engineer", 120000, 3),
    ("Account Manager", 160000, 4),
    ("Accountant", 125000, 5),
    ("Legal Team Lead", 250000, 6),
    ("Lawyer", 190000, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Mike", "Chan", 1, 321),
    ("Ashley", "Rodriguez", 2, 654),
    ("Walter", "Underwood", 3, 098),
    ("Kunal", "Sing", 4, 876),
    ("Malia", "Brown", 5, 543),
    ("Tom", "Allen", 6, 765),
    ("Kevin", "Tupik",7, 432);

