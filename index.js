const inquirer = require('inquirer');
const express = require('express');
const app = express();
const db = require('./server.js');
const mysql = require('mysql2');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Add
const addDepartment = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'department',
      message: 'Add a department name.'
    }
  ])
    .then((answer) => {
      const sql = `INSERT INTO department (name)
      VALUES (?)`;
      const params = [answer.department];

      db.query(sql, params, (err, res) => {
        if (err) {
          console.log(err)
        }
        console.table(res)
        init();
      });

    })

};

const addRole = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Add a new title for the role.'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Add a salary for the role.'
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'Add a department ID for the role.'
    }
  ])
    .then((answer) => {
      const sql = `INSERT INTO role (title, salary, department_id)
      VALUES (?, ?, ?)`;
      console.log("yes");
      const params = [answer.title, answer.salary, answer.department_id];

      db.query(sql, params, (err, res) => {
        if (err) {
          console.log(err)
        }
        console.table(res)
        init();
      });

    })

};

const addEmployee = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Add employee first name.'
    },

    {
      type: 'input',
      name: 'last_name',
      message: 'Add employee last name.'
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Add new employee ID.'
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'Add a manager ID.'
    },

  ])
    .then((answer) => {
      const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES (?, ?, ?, ?) `;
      const params = [answer.first_name, answer.last_name, answer.role_id, answer.manager_id];

      db.query(sql, params, (err, res) => {
        if (err) {
          console.log(err)
        }
        console.table(res)
        init();
      });

    })

};

// New
const newDepartment = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'nameDepartment',
      message: 'add new name of department.'
    }
  ])
    .then((answer) => {
      const sql = `INSERT INTO (name) department
      VALUES (?)`;
      const params = [answer.nameDepartment];

      db.query(sql, params, (err, res) => {
        if (err) {
          console.log(err)
        }
        console.table(res)
        init();
      });

    })

};

const newRole = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'add a new title for a role.'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'add a new salary for the role.'
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'add a new department ID.'
    }
  ])
    .then((answer) => {
      const sql = `INSERT INTO role (title, salary, department_id)
      VALUES (?, ?, ?)`;
      console.log("yes");
      const params = [answer.title, answer.salary, answer.department_id];

      db.query(sql, params, (err, res) => {
        if (err) {
          console.log(err)
        }
        console.table(res)
        init();
      });

    })

};

const newEmployee = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Add first name of new employee.'
    },

    {
      type: 'input',
      name: 'last_name',
      message: 'Add last name of new employee.'
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Add new employee ID.'
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'Add a new manager id of employee.'
    },

  ])
    .then((answer) => {
      const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES (?, ?, ?, ?) `;
      const params = [answer.first_name, answer.last_name, answer.role_id, answer.manager_id];

      db.query(sql, params, (err, res) => {
        if (err) {
          console.log(err)
        }
        console.table(res)
        init();
      });

    })

};

//View
const viewDepartment = () => {
  db.query('SELECT * FROM department', (err, res) => {
    console.table(res)
  })
  init();
};
const viewRole = () => {
  db.query('SELECT * FROM role', (err, res) => {
    console.table(res)
  })
  init();
};

const viewAEmployees = () => {
  db.query('SELECT * FROM employee', (err, res) => {
    console.table(res)
  })
  init();
};

const viewManagers = () => {
  db.query('SELECT manager FROM employee', (err, res) => {
    console.table(res)
  })
  init();
};

// Update
const updateEmployee = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'employee_id',
      message: 'Update employee ID.'
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Update employee role.'
    }
  ])
    .then((answer) => {
      const sql = `UPDATE employee SET role = ? WHERE id = ?`;
      const params = [answer.employee_id, answer.role_id];
      db.query(sql, params, (err, res) => {
        if (err) {
          console.log(err)
        }
        console.table(res)
        init();
      });
    })
}

const updateEmployeeManager = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'employee_id',
      message: 'Update employee ID.'
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'Update manager ID.'
    }
  ])
    .then((answer) => {
      const sql = `UPDATE employee SET manager = ? WHERE id = ?`;
      const params = [answer.employee, answer.manager_id];
      db.query(sql, params, (err, res) => {
        if (err) {
          console.log(err)
        }
        console.table(res)
        init();
      })
    })
}





const init = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: 'Pick an option.',
      choices: [ 'Add department', 'Add role', 'Add employee','New department', 'New role', 'New employee', 'View departments', 'View roles', 'View employees','View managers', 'Update employee manager','Update  employee role']
    }
  ])
    .then((answer) => {
      console.log(answer)

      // Add
      if (answer.option === 'Add a department') {

        addDepartment();
      }
      else if (answer.option === 'Add a role') {

        addRole();
      }
      else if (answer.option === 'Add a employee') {

        addEmployee();
       
      //New
      }
      else if (answer.option === 'Add a new department') {

        newDepartment();
      }
      else if (answer.option === 'Add a new role') {

        newRole();
      }
      else if (answer.option === 'Add a new employee') {

        newEmployee();
      }
       // View
      else if (answer.option === 'View departments') {
        viewDepartment();

      }
      else if (answer.option === 'View roles') {
        viewRole();
      }
      else if (answer.option === 'View employees') {

        viewEmployees();
      }
      else if (answer.option === 'View managers') {
        viewManagers();
      }
      //Update
      else if (answer.option === 'Update an employee manager') {
        updateEmployeeManager();
      }
    
      else if (answer.option === 'View managers') {
        viewManagers();
      }
      else {
        updateEmployee();
      }

    })

};


init();
