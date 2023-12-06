USE company_db;

INSERT INTO department (name)
	VALUES ("Human Resources"),
           ("Sales"),
           ("Marketing"),
           ("Engineering"),
           ("Management"),
           ("Operations Management"),
           ("Resarch and Development"),
           ("Special Operations"),
           ("Product Management")
           
INSERT INTO role(title, salary, department_id)
	VALUES ("Top agent", 85000, 4),
		   ("Agent Manager", 70000, 11),
           ("Marketing Manager", 80000, 2),
           ("Human Resources Manager", 80000, 1),
           ("Marketing Specialist", 65000, 4),
           ("Operations Analyst", 67000, 10),
           ("Human Resource Personnel", 60000, 1),
           ("Customer Service Represent", 45000, 14);
           
INSERT INTO employee(first_name, last_name, role_id, manager_id)
	VALUE ("Bruce", "Lee", 1, null),
		  ("James", "Bond", 2, null),
          ("Zach", "Snyder", 3, null),
          ("Casey", "Thompson", 4, null),
          ("Tucker", "Armstrong", 5, 1),
          ("James", "Lehn", 6, null),
          ("Anakin", "Skywalker", 7, 4),
          ("Lisa", "Ashpole", 8, 3),
          ("Dick", "Holder", 9, 2),
          ("Kora", "Moon", 4, null),
          ("Gerid", "Deason", 1, null),
          ("Tim", "Drake", 5, 1),
          ("Gary", "Almes", 6, 3);