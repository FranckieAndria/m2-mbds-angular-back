const assignmentsData = [{
        "titre": "Budget/Accounting Analyst IV",
        "etudiant": 17,
        "professeur": 4,
        "dateDeCreation": "03/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Quisque porta volutpat erat.",
        "rendu": false
    },
    {
        "titre": "Biostatistician I",
        "etudiant": 19,
        "professeur": 2,
        "dateDeCreation": "27/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
        "rendu": false
    },
    {
        "titre": "Staff Scientist",
        "etudiant": 9,
        "professeur": 5,
        "dateDeCreation": "07/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus tortor.",
        "rendu": false
    },
    {
        "titre": "Cost Accountant",
        "etudiant": 6,
        "professeur": 1,
        "dateDeCreation": "06/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In congue.",
        "rendu": false
    },
    {
        "titre": "Geologist IV",
        "etudiant": 20,
        "professeur": 2,
        "dateDeCreation": "07/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aenean fermentum.",
        "rendu": false
    },
    {
        "titre": "Compensation Analyst",
        "etudiant": 20,
        "professeur": 2,
        "dateDeCreation": "22/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam erat volutpat.",
        "rendu": false
    },
    {
        "titre": "Chief Design Engineer",
        "etudiant": 2,
        "professeur": 4,
        "dateDeCreation": "06/06/2023",
        "dateDeRendu": "24/05/2023",
        "note": 9,
        "remarque": "Suspendisse potenti.",
        "rendu": true
    },
    {
        "titre": "Accounting Assistant IV",
        "etudiant": 8,
        "professeur": 3,
        "dateDeCreation": "09/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nunc purus.",
        "rendu": false
    },
    {
        "titre": "Marketing Assistant",
        "etudiant": 9,
        "professeur": 3,
        "dateDeCreation": "01/03/2023",
        "dateDeRendu": "20/02/2024",
        "note": 19,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "Registered Nurse",
        "etudiant": 6,
        "professeur": 2,
        "dateDeCreation": "25/03/2023",
        "dateDeRendu": "17/07/2023",
        "note": 10,
        "remarque": "Nulla tempus.",
        "rendu": false
    },
    {
        "titre": "VP Quality Control",
        "etudiant": 8,
        "professeur": 3,
        "dateDeCreation": "15/01/2024",
        "dateDeRendu": "31/03/2024",
        "note": 14,
        "remarque": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "rendu": true
    },
    {
        "titre": "Administrative Assistant IV",
        "etudiant": 13,
        "professeur": 3,
        "dateDeCreation": "28/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": false
    },
    {
        "titre": "GIS Technical Architect",
        "etudiant": 3,
        "professeur": 1,
        "dateDeCreation": "08/09/2023",
        "dateDeRendu": "03/04/2024",
        "note": 12,
        "remarque": "Sed vel enim sit amet nunc viverra dapibus.",
        "rendu": true
    },
    {
        "titre": "Director of Sales",
        "etudiant": 14,
        "professeur": 3,
        "dateDeCreation": "09/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
        "rendu": false
    },
    {
        "titre": "Senior Quality Engineer",
        "etudiant": 12,
        "professeur": 5,
        "dateDeCreation": "16/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nunc nisl.",
        "rendu": false
    },
    {
        "titre": "Paralegal",
        "etudiant": 1,
        "professeur": 3,
        "dateDeCreation": "14/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Sed sagittis.",
        "rendu": false
    },
    {
        "titre": "Data Coordinator",
        "etudiant": 3,
        "professeur": 5,
        "dateDeCreation": "14/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
        "rendu": false
    },
    {
        "titre": "Desktop Support Technician",
        "etudiant": 12,
        "professeur": 3,
        "dateDeCreation": "25/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Proin risus.",
        "rendu": false
    },
    {
        "titre": "Product Engineer",
        "etudiant": 2,
        "professeur": 2,
        "dateDeCreation": "31/03/2023",
        "dateDeRendu": "23/12/2023",
        "note": 10,
        "remarque": "Vivamus in felis eu sapien cursus vestibulum.",
        "rendu": false
    },
    {
        "titre": "Graphic Designer",
        "etudiant": 8,
        "professeur": 2,
        "dateDeCreation": "16/11/2023",
        "dateDeRendu": "07/10/2023",
        "note": 9,
        "remarque": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "rendu": false
    },
    {
        "titre": "Assistant Media Planner",
        "etudiant": 2,
        "professeur": 5,
        "dateDeCreation": "15/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Mauris lacinia sapien quis libero.",
        "rendu": false
    },
    {
        "titre": "Human Resources Manager",
        "etudiant": 13,
        "professeur": 2,
        "dateDeCreation": "13/03/2023",
        "dateDeRendu": "11/02/2024",
        "note": 20,
        "remarque": "Sed ante.",
        "rendu": true
    },
    {
        "titre": "Senior Cost Accountant",
        "etudiant": 13,
        "professeur": 1,
        "dateDeCreation": "22/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum rutrum rutrum neque.",
        "rendu": false
    },
    {
        "titre": "Financial Analyst",
        "etudiant": 7,
        "professeur": 4,
        "dateDeCreation": "19/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Pellentesque ultrices mattis odio.",
        "rendu": false
    },
    {
        "titre": "Associate Professor",
        "etudiant": 5,
        "professeur": 2,
        "dateDeCreation": "01/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "rendu": false
    },
    {
        "titre": "Biostatistician IV",
        "etudiant": 11,
        "professeur": 1,
        "dateDeCreation": "18/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aenean fermentum.",
        "rendu": false
    },
    {
        "titre": "VP Accounting",
        "etudiant": 16,
        "professeur": 2,
        "dateDeCreation": "20/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "rendu": false
    },
    {
        "titre": "Senior Quality Engineer",
        "etudiant": 12,
        "professeur": 3,
        "dateDeCreation": "13/01/2023",
        "dateDeRendu": "05/02/2024",
        "note": 10,
        "remarque": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        "rendu": false
    },
    {
        "titre": "Structural Analysis Engineer",
        "etudiant": 9,
        "professeur": 4,
        "dateDeCreation": "29/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "rendu": false
    },
    {
        "titre": "Assistant Professor",
        "etudiant": 15,
        "professeur": 5,
        "dateDeCreation": "18/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cras non velit nec nisi vulputate nonummy.",
        "rendu": false
    },
    {
        "titre": "Business Systems Development Analyst",
        "etudiant": 18,
        "professeur": 5,
        "dateDeCreation": "22/10/2023",
        "dateDeRendu": "02/08/2023",
        "note": 14,
        "remarque": "Maecenas tincidunt lacus at velit.",
        "rendu": true
    },
    {
        "titre": "Research Associate",
        "etudiant": 6,
        "professeur": 1,
        "dateDeCreation": "22/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer ac leo.",
        "rendu": false
    },
    {
        "titre": "Assistant Manager",
        "etudiant": 8,
        "professeur": 4,
        "dateDeCreation": "03/03/2023",
        "dateDeRendu": "25/09/2023",
        "note": 10,
        "remarque": "Morbi ut odio.",
        "rendu": false
    },
    {
        "titre": "Chemical Engineer",
        "etudiant": 10,
        "professeur": 1,
        "dateDeCreation": "10/10/2023",
        "dateDeRendu": "25/04/2024",
        "note": 17,
        "remarque": "Vestibulum rutrum rutrum neque.",
        "rendu": true
    },
    {
        "titre": "Paralegal",
        "etudiant": 16,
        "professeur": 1,
        "dateDeCreation": "12/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Fusce posuere felis sed lacus.",
        "rendu": false
    },
    {
        "titre": "Senior Financial Analyst",
        "etudiant": 3,
        "professeur": 3,
        "dateDeCreation": "05/07/2023",
        "dateDeRendu": "29/07/2023",
        "note": 16,
        "remarque": "In sagittis dui vel nisl.",
        "rendu": false
    },
    {
        "titre": "Physical Therapy Assistant",
        "etudiant": 17,
        "professeur": 3,
        "dateDeCreation": "19/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Maecenas ut massa quis augue luctus tincidunt.",
        "rendu": false
    },
    {
        "titre": "Tax Accountant",
        "etudiant": 6,
        "professeur": 5,
        "dateDeCreation": "06/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi a ipsum.",
        "rendu": false
    },
    {
        "titre": "Software Consultant",
        "etudiant": 2,
        "professeur": 2,
        "dateDeCreation": "02/02/2024",
        "dateDeRendu": "28/03/2024",
        "note": 10,
        "remarque": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
        "rendu": false
    },
    {
        "titre": "Compensation Analyst",
        "etudiant": 12,
        "professeur": 3,
        "dateDeCreation": "14/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
        "rendu": false
    },
    {
        "titre": "Media Manager III",
        "etudiant": 7,
        "professeur": 2,
        "dateDeCreation": "12/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aenean auctor gravida sem.",
        "rendu": false
    },
    {
        "titre": "Health Coach I",
        "etudiant": 5,
        "professeur": 2,
        "dateDeCreation": "11/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Fusce consequat.",
        "rendu": false
    },
    {
        "titre": "Project Manager",
        "etudiant": 2,
        "professeur": 2,
        "dateDeCreation": "14/04/2023",
        "dateDeRendu": "22/08/2023",
        "note": 8,
        "remarque": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
        "rendu": true
    },
    {
        "titre": "Account Executive",
        "etudiant": 11,
        "professeur": 3,
        "dateDeCreation": "22/04/2023",
        "dateDeRendu": "10/01/2024",
        "note": 17,
        "remarque": "Praesent lectus.",
        "rendu": false
    },
    {
        "titre": "Pharmacist",
        "etudiant": 4,
        "professeur": 3,
        "dateDeCreation": "24/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Legal Assistant",
        "etudiant": 19,
        "professeur": 2,
        "dateDeCreation": "25/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "rendu": false
    },
    {
        "titre": "Senior Sales Associate",
        "etudiant": 4,
        "professeur": 1,
        "dateDeCreation": "18/04/2023",
        "dateDeRendu": "30/07/2023",
        "note": 11,
        "remarque": "Pellentesque eget nunc.",
        "rendu": true
    },
    {
        "titre": "Senior Quality Engineer",
        "etudiant": 19,
        "professeur": 4,
        "dateDeCreation": "23/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Mauris ullamcorper purus sit amet nulla.",
        "rendu": false
    },
    {
        "titre": "Help Desk Operator",
        "etudiant": 8,
        "professeur": 5,
        "dateDeCreation": "14/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec dapibus.",
        "rendu": false
    },
    {
        "titre": "Sales Associate",
        "etudiant": 12,
        "professeur": 2,
        "dateDeCreation": "16/01/2023",
        "dateDeRendu": "14/07/2023",
        "note": 19,
        "remarque": "Aenean fermentum.",
        "rendu": true
    },
    {
        "titre": "Research Assistant I",
        "etudiant": 11,
        "professeur": 5,
        "dateDeCreation": "13/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi non quam nec dui luctus rutrum.",
        "rendu": false
    },
    {
        "titre": "Human Resources Manager",
        "etudiant": 13,
        "professeur": 3,
        "dateDeCreation": "15/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
        "rendu": false
    },
    {
        "titre": "Statistician I",
        "etudiant": 16,
        "professeur": 5,
        "dateDeCreation": "11/12/2023",
        "dateDeRendu": "25/09/2023",
        "note": 19,
        "remarque": "In congue.",
        "rendu": false
    },
    {
        "titre": "Information Systems Manager",
        "etudiant": 13,
        "professeur": 4,
        "dateDeCreation": "27/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse accumsan tortor quis turpis.",
        "rendu": false
    },
    {
        "titre": "Budget/Accounting Analyst IV",
        "etudiant": 1,
        "professeur": 5,
        "dateDeCreation": "28/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Curabitur at ipsum ac tellus semper interdum.",
        "rendu": false
    },
    {
        "titre": "Geological Engineer",
        "etudiant": 16,
        "professeur": 4,
        "dateDeCreation": "20/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec ut dolor.",
        "rendu": false
    },
    {
        "titre": "Office Assistant II",
        "etudiant": 4,
        "professeur": 4,
        "dateDeCreation": "22/05/2023",
        "dateDeRendu": "05/03/2024",
        "note": 15,
        "remarque": "Sed accumsan felis.",
        "rendu": false
    },
    {
        "titre": "Chief Design Engineer",
        "etudiant": 2,
        "professeur": 4,
        "dateDeCreation": "14/06/2023",
        "dateDeRendu": "01/11/2023",
        "note": 14,
        "remarque": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
        "rendu": false
    },
    {
        "titre": "Director of Sales",
        "etudiant": 17,
        "professeur": 1,
        "dateDeCreation": "30/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Sed sagittis.",
        "rendu": false
    },
    {
        "titre": "Accounting Assistant II",
        "etudiant": 14,
        "professeur": 4,
        "dateDeCreation": "29/02/2024",
        "dateDeRendu": "10/09/2023",
        "note": 16,
        "remarque": "Integer a nibh.",
        "rendu": true
    },
    {
        "titre": "Physical Therapy Assistant",
        "etudiant": 5,
        "professeur": 3,
        "dateDeCreation": "09/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ac est lacinia nisi venenatis tristique.",
        "rendu": false
    },
    {
        "titre": "Human Resources Assistant IV",
        "etudiant": 3,
        "professeur": 3,
        "dateDeCreation": "16/07/2023",
        "dateDeRendu": "25/04/2023",
        "note": 8,
        "remarque": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "rendu": false
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 14,
        "professeur": 2,
        "dateDeCreation": "15/10/2023",
        "dateDeRendu": "28/09/2023",
        "note": 9,
        "remarque": "Nulla ut erat id mauris vulputate elementum.",
        "rendu": false
    },
    {
        "titre": "Marketing Assistant",
        "etudiant": 7,
        "professeur": 2,
        "dateDeCreation": "03/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Mauris lacinia sapien quis libero.",
        "rendu": false
    },
    {
        "titre": "Data Coordinator",
        "etudiant": 4,
        "professeur": 5,
        "dateDeCreation": "15/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam molestie nibh in lectus.",
        "rendu": false
    },
    {
        "titre": "Financial Advisor",
        "etudiant": 2,
        "professeur": 4,
        "dateDeCreation": "21/10/2023",
        "dateDeRendu": "17/05/2024",
        "note": 14,
        "remarque": "Maecenas tincidunt lacus at velit.",
        "rendu": false
    },
    {
        "titre": "VP Quality Control",
        "etudiant": 15,
        "professeur": 4,
        "dateDeCreation": "01/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam porttitor lacus at turpis.",
        "rendu": false
    },
    {
        "titre": "Director of Sales",
        "etudiant": 7,
        "professeur": 2,
        "dateDeCreation": "28/03/2023",
        "dateDeRendu": "08/05/2024",
        "note": 13,
        "remarque": "Praesent blandit lacinia erat.",
        "rendu": false
    },
    {
        "titre": "Automation Specialist II",
        "etudiant": 11,
        "professeur": 2,
        "dateDeCreation": "12/08/2023",
        "dateDeRendu": "20/01/2024",
        "note": 13,
        "remarque": "Curabitur at ipsum ac tellus semper interdum.",
        "rendu": true
    },
    {
        "titre": "Graphic Designer",
        "etudiant": 15,
        "professeur": 5,
        "dateDeCreation": "16/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "rendu": false
    },
    {
        "titre": "Human Resources Assistant I",
        "etudiant": 15,
        "professeur": 3,
        "dateDeCreation": "28/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi vel lectus in quam fringilla rhoncus.",
        "rendu": false
    },
    {
        "titre": "Compensation Analyst",
        "etudiant": 16,
        "professeur": 3,
        "dateDeCreation": "06/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Fusce consequat.",
        "rendu": false
    },
    {
        "titre": "Geologist II",
        "etudiant": 2,
        "professeur": 4,
        "dateDeCreation": "26/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "rendu": false
    },
    {
        "titre": "Cost Accountant",
        "etudiant": 13,
        "professeur": 1,
        "dateDeCreation": "17/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam quis turpis eget elit sodales scelerisque.",
        "rendu": false
    },
    {
        "titre": "Compensation Analyst",
        "etudiant": 18,
        "professeur": 5,
        "dateDeCreation": "29/08/2023",
        "dateDeRendu": "13/12/2023",
        "note": 13,
        "remarque": "Morbi ut odio.",
        "rendu": true
    },
    {
        "titre": "VP Sales",
        "etudiant": 2,
        "professeur": 1,
        "dateDeCreation": "27/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi non quam nec dui luctus rutrum.",
        "rendu": false
    },
    {
        "titre": "Assistant Manager",
        "etudiant": 20,
        "professeur": 2,
        "dateDeCreation": "13/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        "rendu": false
    },
    {
        "titre": "Geological Engineer",
        "etudiant": 6,
        "professeur": 4,
        "dateDeCreation": "20/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Etiam vel augue.",
        "rendu": false
    },
    {
        "titre": "Help Desk Operator",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "21/04/2023",
        "dateDeRendu": "18/02/2024",
        "note": 9,
        "remarque": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "rendu": false
    },
    {
        "titre": "Project Manager",
        "etudiant": 16,
        "professeur": 3,
        "dateDeCreation": "17/12/2023",
        "dateDeRendu": "21/07/2023",
        "note": 9,
        "remarque": "Morbi ut odio.",
        "rendu": true
    },
    {
        "titre": "Marketing Manager",
        "etudiant": 17,
        "professeur": 1,
        "dateDeCreation": "11/02/2024",
        "dateDeRendu": "02/04/2023",
        "note": 14,
        "remarque": "Integer tincidunt ante vel ipsum.",
        "rendu": true
    },
    {
        "titre": "Biostatistician IV",
        "etudiant": 4,
        "professeur": 5,
        "dateDeCreation": "04/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ac est lacinia nisi venenatis tristique.",
        "rendu": false
    },
    {
        "titre": "Cost Accountant",
        "etudiant": 9,
        "professeur": 3,
        "dateDeCreation": "17/10/2023",
        "dateDeRendu": "22/03/2024",
        "note": 10,
        "remarque": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "rendu": false
    },
    {
        "titre": "Payment Adjustment Coordinator",
        "etudiant": 6,
        "professeur": 1,
        "dateDeCreation": "26/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Administrative Assistant II",
        "etudiant": 16,
        "professeur": 5,
        "dateDeCreation": "04/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        "rendu": false
    },
    {
        "titre": "Graphic Designer",
        "etudiant": 6,
        "professeur": 4,
        "dateDeCreation": "27/11/2023",
        "dateDeRendu": "03/02/2024",
        "note": 15,
        "remarque": "Aenean sit amet justo.",
        "rendu": false
    },
    {
        "titre": "VP Accounting",
        "etudiant": 15,
        "professeur": 4,
        "dateDeCreation": "22/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "rendu": false
    },
    {
        "titre": "Associate Professor",
        "etudiant": 1,
        "professeur": 4,
        "dateDeCreation": "21/11/2023",
        "dateDeRendu": "16/09/2023",
        "note": 9,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "Recruiting Manager",
        "etudiant": 18,
        "professeur": 2,
        "dateDeCreation": "21/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": false
    },
    {
        "titre": "Civil Engineer",
        "etudiant": 10,
        "professeur": 4,
        "dateDeCreation": "30/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Curabitur gravida nisi at nibh.",
        "rendu": false
    },
    {
        "titre": "Mechanical Systems Engineer",
        "etudiant": 18,
        "professeur": 4,
        "dateDeCreation": "22/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec quis orci eget orci vehicula condimentum.",
        "rendu": false
    },
    {
        "titre": "Desktop Support Technician",
        "etudiant": 16,
        "professeur": 1,
        "dateDeCreation": "14/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
        "rendu": false
    },
    {
        "titre": "VP Marketing",
        "etudiant": 20,
        "professeur": 5,
        "dateDeCreation": "15/01/2024",
        "dateDeRendu": "09/04/2023",
        "note": 14,
        "remarque": "Praesent id massa id nisl venenatis lacinia.",
        "rendu": true
    },
    {
        "titre": "Office Assistant III",
        "etudiant": 14,
        "professeur": 5,
        "dateDeCreation": "23/07/2023",
        "dateDeRendu": "26/06/2023",
        "note": 10,
        "remarque": "Etiam pretium iaculis justo.",
        "rendu": true
    },
    {
        "titre": "Sales Representative",
        "etudiant": 19,
        "professeur": 1,
        "dateDeCreation": "26/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Praesent lectus.",
        "rendu": false
    },
    {
        "titre": "Pharmacist",
        "etudiant": 1,
        "professeur": 4,
        "dateDeCreation": "03/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In blandit ultrices enim.",
        "rendu": false
    },
    {
        "titre": "Geological Engineer",
        "etudiant": 17,
        "professeur": 4,
        "dateDeCreation": "27/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla justo.",
        "rendu": false
    },
    {
        "titre": "Sales Associate",
        "etudiant": 11,
        "professeur": 3,
        "dateDeCreation": "17/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi quis tortor id nulla ultrices aliquet.",
        "rendu": false
    },
    {
        "titre": "Chief Design Engineer",
        "etudiant": 20,
        "professeur": 4,
        "dateDeCreation": "09/04/2024",
        "dateDeRendu": "30/10/2023",
        "note": 13,
        "remarque": "Morbi non lectus.",
        "rendu": true
    },
    {
        "titre": "Web Designer II",
        "etudiant": 12,
        "professeur": 2,
        "dateDeCreation": "26/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Sed ante.",
        "rendu": false
    },
    {
        "titre": "Research Nurse",
        "etudiant": 16,
        "professeur": 3,
        "dateDeCreation": "17/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "rendu": false
    },
    {
        "titre": "Teacher",
        "etudiant": 12,
        "professeur": 1,
        "dateDeCreation": "07/07/2023",
        "dateDeRendu": "07/04/2024",
        "note": 16,
        "remarque": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        "rendu": true
    },
    {
        "titre": "Compensation Analyst",
        "etudiant": 9,
        "professeur": 1,
        "dateDeCreation": "09/02/2023",
        "dateDeRendu": "06/04/2024",
        "note": 14,
        "remarque": "Mauris ullamcorper purus sit amet nulla.",
        "rendu": false
    },
    {
        "titre": "Research Associate",
        "etudiant": 1,
        "professeur": 5,
        "dateDeCreation": "23/02/2023",
        "dateDeRendu": "22/03/2024",
        "note": 15,
        "remarque": "Pellentesque viverra pede ac diam.",
        "rendu": false
    },
    {
        "titre": "Chemical Engineer",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "13/09/2023",
        "dateDeRendu": "03/05/2024",
        "note": 8,
        "remarque": "Suspendisse potenti.",
        "rendu": true
    },
    {
        "titre": "Accountant III",
        "etudiant": 8,
        "professeur": 5,
        "dateDeCreation": "17/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Etiam pretium iaculis justo.",
        "rendu": false
    },
    {
        "titre": "Administrative Assistant II",
        "etudiant": 6,
        "professeur": 3,
        "dateDeCreation": "14/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
        "rendu": false
    },
    {
        "titre": "Marketing Assistant",
        "etudiant": 5,
        "professeur": 2,
        "dateDeCreation": "19/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla suscipit ligula in lacus.",
        "rendu": false
    },
    {
        "titre": "Financial Advisor",
        "etudiant": 14,
        "professeur": 5,
        "dateDeCreation": "21/03/2024",
        "dateDeRendu": "24/07/2023",
        "note": 13,
        "remarque": "Duis ac nibh.",
        "rendu": false
    },
    {
        "titre": "Software Consultant",
        "etudiant": 7,
        "professeur": 4,
        "dateDeCreation": "17/09/2023",
        "dateDeRendu": "13/12/2023",
        "note": 10,
        "remarque": "Sed sagittis.",
        "rendu": true
    },
    {
        "titre": "Research Assistant IV",
        "etudiant": 2,
        "professeur": 1,
        "dateDeCreation": "11/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "rendu": false
    },
    {
        "titre": "Assistant Manager",
        "etudiant": 2,
        "professeur": 2,
        "dateDeCreation": "29/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
        "rendu": false
    },
    {
        "titre": "Database Administrator III",
        "etudiant": 17,
        "professeur": 5,
        "dateDeCreation": "15/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer tincidunt ante vel ipsum.",
        "rendu": false
    },
    {
        "titre": "Staff Scientist",
        "etudiant": 11,
        "professeur": 2,
        "dateDeCreation": "13/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "Accountant II",
        "etudiant": 5,
        "professeur": 2,
        "dateDeCreation": "25/05/2023",
        "dateDeRendu": "23/01/2024",
        "note": 18,
        "remarque": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "rendu": false
    },
    {
        "titre": "Social Worker",
        "etudiant": 1,
        "professeur": 4,
        "dateDeCreation": "30/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
        "rendu": false
    },
    {
        "titre": "Help Desk Operator",
        "etudiant": 14,
        "professeur": 1,
        "dateDeCreation": "16/01/2023",
        "dateDeRendu": "29/05/2024",
        "note": 11,
        "remarque": "Nulla mollis molestie lorem.",
        "rendu": true
    },
    {
        "titre": "Community Outreach Specialist",
        "etudiant": 20,
        "professeur": 4,
        "dateDeCreation": "05/11/2023",
        "dateDeRendu": "27/03/2024",
        "note": 9,
        "remarque": "Cras in purus eu magna vulputate luctus.",
        "rendu": true
    },
    {
        "titre": "Registered Nurse",
        "etudiant": 11,
        "professeur": 5,
        "dateDeCreation": "02/09/2023",
        "dateDeRendu": "22/08/2023",
        "note": 19,
        "remarque": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
        "rendu": false
    },
    {
        "titre": "Programmer Analyst I",
        "etudiant": 6,
        "professeur": 4,
        "dateDeCreation": "14/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi ut odio.",
        "rendu": false
    },
    {
        "titre": "Financial Analyst",
        "etudiant": 9,
        "professeur": 3,
        "dateDeCreation": "28/02/2024",
        "dateDeRendu": "25/04/2024",
        "note": 11,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": true
    },
    {
        "titre": "Sales Representative",
        "etudiant": 14,
        "professeur": 2,
        "dateDeCreation": "14/04/2023",
        "dateDeRendu": "22/02/2024",
        "note": 18,
        "remarque": "Morbi porttitor lorem id ligula.",
        "rendu": false
    },
    {
        "titre": "Social Worker",
        "etudiant": 8,
        "professeur": 1,
        "dateDeCreation": "07/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Phasellus sit amet erat.",
        "rendu": false
    },
    {
        "titre": "Nuclear Power Engineer",
        "etudiant": 11,
        "professeur": 4,
        "dateDeCreation": "03/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cras in purus eu magna vulputate luctus.",
        "rendu": false
    },
    {
        "titre": "Compensation Analyst",
        "etudiant": 1,
        "professeur": 4,
        "dateDeCreation": "23/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Proin eu mi.",
        "rendu": false
    },
    {
        "titre": "Physical Therapy Assistant",
        "etudiant": 3,
        "professeur": 3,
        "dateDeCreation": "05/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
        "rendu": false
    },
    {
        "titre": "Occupational Therapist",
        "etudiant": 6,
        "professeur": 2,
        "dateDeCreation": "17/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec quis orci eget orci vehicula condimentum.",
        "rendu": false
    },
    {
        "titre": "Biostatistician I",
        "etudiant": 17,
        "professeur": 3,
        "dateDeCreation": "21/06/2023",
        "dateDeRendu": "03/04/2023",
        "note": 10,
        "remarque": "Duis ac nibh.",
        "rendu": false
    },
    {
        "titre": "Geological Engineer",
        "etudiant": 17,
        "professeur": 4,
        "dateDeCreation": "24/02/2024",
        "dateDeRendu": "13/04/2023",
        "note": 8,
        "remarque": "Morbi porttitor lorem id ligula.",
        "rendu": true
    },
    {
        "titre": "Associate Professor",
        "etudiant": 9,
        "professeur": 1,
        "dateDeCreation": "27/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
        "rendu": false
    },
    {
        "titre": "Account Executive",
        "etudiant": 12,
        "professeur": 3,
        "dateDeCreation": "04/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi a ipsum.",
        "rendu": false
    },
    {
        "titre": "Associate Professor",
        "etudiant": 7,
        "professeur": 4,
        "dateDeCreation": "07/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla ac enim.",
        "rendu": false
    },
    {
        "titre": "VP Accounting",
        "etudiant": 13,
        "professeur": 5,
        "dateDeCreation": "29/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "rendu": false
    },
    {
        "titre": "Office Assistant I",
        "etudiant": 7,
        "professeur": 5,
        "dateDeCreation": "21/09/2023",
        "dateDeRendu": "25/04/2024",
        "note": 14,
        "remarque": "Proin eu mi.",
        "rendu": true
    },
    {
        "titre": "Budget/Accounting Analyst II",
        "etudiant": 16,
        "professeur": 3,
        "dateDeCreation": "24/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Etiam vel augue.",
        "rendu": false
    },
    {
        "titre": "Professor",
        "etudiant": 13,
        "professeur": 2,
        "dateDeCreation": "17/09/2023",
        "dateDeRendu": "28/11/2023",
        "note": 8,
        "remarque": "Phasellus sit amet erat.",
        "rendu": true
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 3,
        "professeur": 4,
        "dateDeCreation": "13/04/2023",
        "dateDeRendu": "12/04/2024",
        "note": 11,
        "remarque": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
        "rendu": true
    },
    {
        "titre": "Analog Circuit Design manager",
        "etudiant": 20,
        "professeur": 1,
        "dateDeCreation": "27/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi a ipsum.",
        "rendu": false
    },
    {
        "titre": "Media Manager II",
        "etudiant": 10,
        "professeur": 5,
        "dateDeCreation": "11/09/2023",
        "dateDeRendu": "22/01/2024",
        "note": 17,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": false
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 7,
        "professeur": 1,
        "dateDeCreation": "30/06/2023",
        "dateDeRendu": "30/05/2023",
        "note": 19,
        "remarque": "In blandit ultrices enim.",
        "rendu": false
    },
    {
        "titre": "Marketing Manager",
        "etudiant": 5,
        "professeur": 4,
        "dateDeCreation": "07/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi a ipsum.",
        "rendu": false
    },
    {
        "titre": "Senior Financial Analyst",
        "etudiant": 14,
        "professeur": 5,
        "dateDeCreation": "18/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam tristique tortor eu pede.",
        "rendu": false
    },
    {
        "titre": "Research Nurse",
        "etudiant": 9,
        "professeur": 5,
        "dateDeCreation": "20/01/2024",
        "dateDeRendu": "19/01/2024",
        "note": 20,
        "remarque": "Nulla tellus.",
        "rendu": false
    },
    {
        "titre": "Data Coordinator",
        "etudiant": 8,
        "professeur": 2,
        "dateDeCreation": "06/08/2023",
        "dateDeRendu": "28/09/2023",
        "note": 10,
        "remarque": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "rendu": true
    },
    {
        "titre": "Administrative Assistant III",
        "etudiant": 15,
        "professeur": 3,
        "dateDeCreation": "30/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi vel lectus in quam fringilla rhoncus.",
        "rendu": false
    },
    {
        "titre": "Research Associate",
        "etudiant": 6,
        "professeur": 5,
        "dateDeCreation": "15/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Curabitur convallis.",
        "rendu": false
    },
    {
        "titre": "Assistant Professor",
        "etudiant": 14,
        "professeur": 2,
        "dateDeCreation": "22/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": false
    },
    {
        "titre": "Senior Editor",
        "etudiant": 2,
        "professeur": 5,
        "dateDeCreation": "17/07/2023",
        "dateDeRendu": "07/12/2023",
        "note": 17,
        "remarque": "Phasellus sit amet erat.",
        "rendu": false
    },
    {
        "titre": "Nurse Practicioner",
        "etudiant": 8,
        "professeur": 2,
        "dateDeCreation": "01/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus vel nulla eget eros elementum pellentesque.",
        "rendu": false
    },
    {
        "titre": "Project Manager",
        "etudiant": 13,
        "professeur": 4,
        "dateDeCreation": "07/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Ut tellus.",
        "rendu": false
    },
    {
        "titre": "Biostatistician IV",
        "etudiant": 16,
        "professeur": 1,
        "dateDeCreation": "16/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec posuere metus vitae ipsum.",
        "rendu": false
    },
    {
        "titre": "Desktop Support Technician",
        "etudiant": 1,
        "professeur": 3,
        "dateDeCreation": "01/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
        "rendu": false
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 1,
        "professeur": 2,
        "dateDeCreation": "08/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nunc purus.",
        "rendu": false
    },
    {
        "titre": "Associate Professor",
        "etudiant": 16,
        "professeur": 1,
        "dateDeCreation": "27/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
        "rendu": false
    },
    {
        "titre": "Clinical Specialist",
        "etudiant": 17,
        "professeur": 1,
        "dateDeCreation": "14/08/2023",
        "dateDeRendu": "13/05/2023",
        "note": 12,
        "remarque": "Pellentesque viverra pede ac diam.",
        "rendu": false
    },
    {
        "titre": "Health Coach III",
        "etudiant": 18,
        "professeur": 2,
        "dateDeCreation": "04/05/2023",
        "dateDeRendu": "16/01/2024",
        "note": 10,
        "remarque": "Nulla tempus.",
        "rendu": true
    },
    {
        "titre": "Staff Scientist",
        "etudiant": 13,
        "professeur": 2,
        "dateDeCreation": "27/03/2023",
        "dateDeRendu": "31/03/2023",
        "note": 9,
        "remarque": "Proin eu mi.",
        "rendu": true
    },
    {
        "titre": "Human Resources Manager",
        "etudiant": 10,
        "professeur": 5,
        "dateDeCreation": "04/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cras in purus eu magna vulputate luctus.",
        "rendu": false
    },
    {
        "titre": "Account Representative II",
        "etudiant": 15,
        "professeur": 2,
        "dateDeCreation": "20/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus in felis eu sapien cursus vestibulum.",
        "rendu": false
    },
    {
        "titre": "Staff Accountant II",
        "etudiant": 13,
        "professeur": 5,
        "dateDeCreation": "05/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam erat volutpat.",
        "rendu": false
    },
    {
        "titre": "Nuclear Power Engineer",
        "etudiant": 13,
        "professeur": 3,
        "dateDeCreation": "21/01/2023",
        "dateDeRendu": "09/07/2023",
        "note": 8,
        "remarque": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "rendu": false
    },
    {
        "titre": "Systems Administrator I",
        "etudiant": 17,
        "professeur": 5,
        "dateDeCreation": "25/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla mollis molestie lorem.",
        "rendu": false
    },
    {
        "titre": "Operator",
        "etudiant": 14,
        "professeur": 2,
        "dateDeCreation": "01/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aenean sit amet justo.",
        "rendu": false
    },
    {
        "titre": "General Manager",
        "etudiant": 18,
        "professeur": 2,
        "dateDeCreation": "21/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Sed ante.",
        "rendu": false
    },
    {
        "titre": "Clinical Specialist",
        "etudiant": 18,
        "professeur": 2,
        "dateDeCreation": "07/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi porttitor lorem id ligula.",
        "rendu": false
    },
    {
        "titre": "Quality Engineer",
        "etudiant": 14,
        "professeur": 1,
        "dateDeCreation": "31/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam dui.",
        "rendu": false
    },
    {
        "titre": "Senior Financial Analyst",
        "etudiant": 6,
        "professeur": 4,
        "dateDeCreation": "08/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "rendu": false
    },
    {
        "titre": "Legal Assistant",
        "etudiant": 14,
        "professeur": 1,
        "dateDeCreation": "10/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi vel lectus in quam fringilla rhoncus.",
        "rendu": false
    },
    {
        "titre": "Senior Quality Engineer",
        "etudiant": 2,
        "professeur": 3,
        "dateDeCreation": "15/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Electrical Engineer",
        "etudiant": 2,
        "professeur": 1,
        "dateDeCreation": "13/03/2023",
        "dateDeRendu": "23/09/2023",
        "note": 8,
        "remarque": "Nunc nisl.",
        "rendu": true
    },
    {
        "titre": "Cost Accountant",
        "etudiant": 17,
        "professeur": 1,
        "dateDeCreation": "11/06/2023",
        "dateDeRendu": "13/01/2024",
        "note": 13,
        "remarque": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
        "rendu": true
    },
    {
        "titre": "Structural Engineer",
        "etudiant": 18,
        "professeur": 2,
        "dateDeCreation": "01/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam sit amet diam in magna bibendum imperdiet.",
        "rendu": false
    },
    {
        "titre": "Statistician III",
        "etudiant": 11,
        "professeur": 3,
        "dateDeCreation": "24/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nunc nisl.",
        "rendu": false
    },
    {
        "titre": "Food Chemist",
        "etudiant": 10,
        "professeur": 4,
        "dateDeCreation": "11/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi porttitor lorem id ligula.",
        "rendu": false
    },
    {
        "titre": "Senior Editor",
        "etudiant": 10,
        "professeur": 1,
        "dateDeCreation": "16/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Quisque porta volutpat erat.",
        "rendu": false
    },
    {
        "titre": "Business Systems Development Analyst",
        "etudiant": 16,
        "professeur": 1,
        "dateDeCreation": "17/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Etiam vel augue.",
        "rendu": false
    },
    {
        "titre": "Editor",
        "etudiant": 7,
        "professeur": 2,
        "dateDeCreation": "17/11/2023",
        "dateDeRendu": "23/10/2023",
        "note": 18,
        "remarque": "Sed accumsan felis.",
        "rendu": false
    },
    {
        "titre": "Sales Representative",
        "etudiant": 16,
        "professeur": 5,
        "dateDeCreation": "07/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Phasellus in felis.",
        "rendu": false
    },
    {
        "titre": "Senior Developer",
        "etudiant": 2,
        "professeur": 4,
        "dateDeCreation": "07/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi non lectus.",
        "rendu": false
    },
    {
        "titre": "Software Test Engineer III",
        "etudiant": 16,
        "professeur": 4,
        "dateDeCreation": "11/02/2024",
        "dateDeRendu": "16/07/2023",
        "note": 16,
        "remarque": "Nam nulla.",
        "rendu": false
    },
    {
        "titre": "Account Coordinator",
        "etudiant": 19,
        "professeur": 4,
        "dateDeCreation": "12/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Praesent id massa id nisl venenatis lacinia.",
        "rendu": false
    },
    {
        "titre": "Sales Representative",
        "etudiant": 13,
        "professeur": 1,
        "dateDeCreation": "08/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus vel nulla eget eros elementum pellentesque.",
        "rendu": false
    },
    {
        "titre": "Assistant Media Planner",
        "etudiant": 1,
        "professeur": 1,
        "dateDeCreation": "09/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam nulla.",
        "rendu": false
    },
    {
        "titre": "Associate Professor",
        "etudiant": 18,
        "professeur": 5,
        "dateDeCreation": "07/01/2024",
        "dateDeRendu": "15/06/2023",
        "note": 20,
        "remarque": "Duis ac nibh.",
        "rendu": false
    },
    {
        "titre": "Community Outreach Specialist",
        "etudiant": 1,
        "professeur": 5,
        "dateDeCreation": "12/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        "rendu": false
    },
    {
        "titre": "Budget/Accounting Analyst III",
        "etudiant": 13,
        "professeur": 2,
        "dateDeCreation": "25/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis at velit eu est congue elementum.",
        "rendu": false
    },
    {
        "titre": "Assistant Professor",
        "etudiant": 19,
        "professeur": 3,
        "dateDeCreation": "22/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse ornare consequat lectus.",
        "rendu": false
    },
    {
        "titre": "Engineer IV",
        "etudiant": 6,
        "professeur": 5,
        "dateDeCreation": "26/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aenean sit amet justo.",
        "rendu": false
    },
    {
        "titre": "Analog Circuit Design manager",
        "etudiant": 1,
        "professeur": 5,
        "dateDeCreation": "01/12/2023",
        "dateDeRendu": "12/11/2023",
        "note": 9,
        "remarque": "Nunc nisl.",
        "rendu": true
    },
    {
        "titre": "Marketing Manager",
        "etudiant": 13,
        "professeur": 5,
        "dateDeCreation": "01/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Quisque id justo sit amet sapien dignissim vestibulum.",
        "rendu": false
    },
    {
        "titre": "Editor",
        "etudiant": 6,
        "professeur": 3,
        "dateDeCreation": "03/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Sed ante.",
        "rendu": false
    },
    {
        "titre": "Actuary",
        "etudiant": 5,
        "professeur": 5,
        "dateDeCreation": "02/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
        "rendu": false
    },
    {
        "titre": "Nuclear Power Engineer",
        "etudiant": 6,
        "professeur": 2,
        "dateDeCreation": "09/02/2024",
        "dateDeRendu": "23/05/2023",
        "note": 20,
        "remarque": "Suspendisse accumsan tortor quis turpis.",
        "rendu": false
    },
    {
        "titre": "Statistician III",
        "etudiant": 16,
        "professeur": 4,
        "dateDeCreation": "26/10/2023",
        "dateDeRendu": "12/08/2023",
        "note": 17,
        "remarque": "Aenean fermentum.",
        "rendu": true
    },
    {
        "titre": "Administrative Assistant III",
        "etudiant": 14,
        "professeur": 2,
        "dateDeCreation": "15/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla justo.",
        "rendu": false
    },
    {
        "titre": "Actuary",
        "etudiant": 2,
        "professeur": 2,
        "dateDeCreation": "16/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Proin risus.",
        "rendu": false
    },
    {
        "titre": "Programmer Analyst I",
        "etudiant": 16,
        "professeur": 1,
        "dateDeCreation": "30/04/2023",
        "dateDeRendu": "17/02/2024",
        "note": 19,
        "remarque": "Mauris sit amet eros.",
        "rendu": true
    },
    {
        "titre": "Recruiter",
        "etudiant": 14,
        "professeur": 1,
        "dateDeCreation": "10/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla ut erat id mauris vulputate elementum.",
        "rendu": false
    },
    {
        "titre": "Environmental Specialist",
        "etudiant": 16,
        "professeur": 1,
        "dateDeCreation": "05/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam tristique tortor eu pede.",
        "rendu": false
    },
    {
        "titre": "Research Associate",
        "etudiant": 4,
        "professeur": 1,
        "dateDeCreation": "17/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec ut dolor.",
        "rendu": false
    },
    {
        "titre": "Accountant III",
        "etudiant": 13,
        "professeur": 4,
        "dateDeCreation": "19/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
        "rendu": false
    },
    {
        "titre": "Teacher",
        "etudiant": 16,
        "professeur": 5,
        "dateDeCreation": "14/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam non mauris.",
        "rendu": false
    },
    {
        "titre": "Associate Professor",
        "etudiant": 20,
        "professeur": 1,
        "dateDeCreation": "16/11/2023",
        "dateDeRendu": "30/05/2023",
        "note": 9,
        "remarque": "Quisque porta volutpat erat.",
        "rendu": false
    },
    {
        "titre": "Analog Circuit Design manager",
        "etudiant": 5,
        "professeur": 4,
        "dateDeCreation": "02/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus in felis eu sapien cursus vestibulum.",
        "rendu": false
    },
    {
        "titre": "Project Manager",
        "etudiant": 4,
        "professeur": 5,
        "dateDeCreation": "19/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Proin at turpis a pede posuere nonummy.",
        "rendu": false
    },
    {
        "titre": "Human Resources Assistant I",
        "etudiant": 3,
        "professeur": 1,
        "dateDeCreation": "02/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam varius.",
        "rendu": false
    },
    {
        "titre": "Administrative Assistant III",
        "etudiant": 17,
        "professeur": 1,
        "dateDeCreation": "15/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Proin eu mi.",
        "rendu": false
    },
    {
        "titre": "Environmental Specialist",
        "etudiant": 11,
        "professeur": 2,
        "dateDeCreation": "08/04/2023",
        "dateDeRendu": "02/03/2024",
        "note": 12,
        "remarque": "Proin eu mi.",
        "rendu": false
    },
    {
        "titre": "Help Desk Operator",
        "etudiant": 11,
        "professeur": 3,
        "dateDeCreation": "29/04/2023",
        "dateDeRendu": "27/06/2023",
        "note": 9,
        "remarque": "Cras non velit nec nisi vulputate nonummy.",
        "rendu": true
    },
    {
        "titre": "Senior Editor",
        "etudiant": 17,
        "professeur": 2,
        "dateDeCreation": "05/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Pellentesque viverra pede ac diam.",
        "rendu": false
    },
    {
        "titre": "Registered Nurse",
        "etudiant": 7,
        "professeur": 2,
        "dateDeCreation": "19/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Maecenas pulvinar lobortis est.",
        "rendu": false
    },
    {
        "titre": "Research Assistant I",
        "etudiant": 2,
        "professeur": 2,
        "dateDeCreation": "02/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus vestibulum sagittis sapien.",
        "rendu": false
    },
    {
        "titre": "Mechanical Systems Engineer",
        "etudiant": 12,
        "professeur": 4,
        "dateDeCreation": "11/04/2023",
        "dateDeRendu": "10/02/2024",
        "note": 19,
        "remarque": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "rendu": false
    },
    {
        "titre": "Clinical Specialist",
        "etudiant": 14,
        "professeur": 4,
        "dateDeCreation": "25/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus in felis eu sapien cursus vestibulum.",
        "rendu": false
    },
    {
        "titre": "Nuclear Power Engineer",
        "etudiant": 16,
        "professeur": 5,
        "dateDeCreation": "23/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Curabitur convallis.",
        "rendu": false
    },
    {
        "titre": "Developer IV",
        "etudiant": 15,
        "professeur": 1,
        "dateDeCreation": "25/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "rendu": false
    },
    {
        "titre": "Assistant Professor",
        "etudiant": 18,
        "professeur": 2,
        "dateDeCreation": "02/04/2023",
        "dateDeRendu": "26/01/2024",
        "note": 8,
        "remarque": "Donec posuere metus vitae ipsum.",
        "rendu": true
    },
    {
        "titre": "Account Coordinator",
        "etudiant": 10,
        "professeur": 4,
        "dateDeCreation": "10/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
        "rendu": false
    },
    {
        "titre": "Nurse Practicioner",
        "etudiant": 9,
        "professeur": 4,
        "dateDeCreation": "04/08/2023",
        "dateDeRendu": "25/02/2024",
        "note": 20,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "General Manager",
        "etudiant": 16,
        "professeur": 5,
        "dateDeCreation": "09/02/2023",
        "dateDeRendu": "26/06/2023",
        "note": 11,
        "remarque": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "rendu": false
    },
    {
        "titre": "Computer Systems Analyst I",
        "etudiant": 14,
        "professeur": 5,
        "dateDeCreation": "26/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Mauris lacinia sapien quis libero.",
        "rendu": false
    },
    {
        "titre": "Social Worker",
        "etudiant": 19,
        "professeur": 4,
        "dateDeCreation": "05/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "Product Engineer",
        "etudiant": 12,
        "professeur": 1,
        "dateDeCreation": "31/05/2023",
        "dateDeRendu": "22/05/2024",
        "note": 18,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
        "rendu": true
    },
    {
        "titre": "Recruiter",
        "etudiant": 19,
        "professeur": 5,
        "dateDeCreation": "26/03/2024",
        "dateDeRendu": "25/08/2023",
        "note": 16,
        "remarque": "Pellentesque ultrices mattis odio.",
        "rendu": false
    },
    {
        "titre": "Assistant Professor",
        "etudiant": 3,
        "professeur": 2,
        "dateDeCreation": "15/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam varius.",
        "rendu": false
    },
    {
        "titre": "Actuary",
        "etudiant": 4,
        "professeur": 5,
        "dateDeCreation": "06/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Fusce posuere felis sed lacus.",
        "rendu": false
    },
    {
        "titre": "Office Assistant I",
        "etudiant": 9,
        "professeur": 4,
        "dateDeCreation": "05/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In congue.",
        "rendu": false
    },
    {
        "titre": "Software Engineer I",
        "etudiant": 17,
        "professeur": 1,
        "dateDeCreation": "22/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla ac enim.",
        "rendu": false
    },
    {
        "titre": "Engineer II",
        "etudiant": 16,
        "professeur": 3,
        "dateDeCreation": "20/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla ac enim.",
        "rendu": false
    },
    {
        "titre": "Mechanical Systems Engineer",
        "etudiant": 6,
        "professeur": 1,
        "dateDeCreation": "01/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Etiam faucibus cursus urna.",
        "rendu": false
    },
    {
        "titre": "Environmental Tech",
        "etudiant": 7,
        "professeur": 5,
        "dateDeCreation": "20/04/2024",
        "dateDeRendu": "02/04/2024",
        "note": 19,
        "remarque": "Mauris lacinia sapien quis libero.",
        "rendu": false
    },
    {
        "titre": "Database Administrator I",
        "etudiant": 10,
        "professeur": 5,
        "dateDeCreation": "19/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "rendu": false
    },
    {
        "titre": "Environmental Tech",
        "etudiant": 9,
        "professeur": 1,
        "dateDeCreation": "19/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Praesent lectus.",
        "rendu": false
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 19,
        "professeur": 4,
        "dateDeCreation": "13/02/2024",
        "dateDeRendu": "08/01/2024",
        "note": 11,
        "remarque": "Nulla ut erat id mauris vulputate elementum.",
        "rendu": true
    },
    {
        "titre": "Civil Engineer",
        "etudiant": 1,
        "professeur": 3,
        "dateDeCreation": "24/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Ut tellus.",
        "rendu": false
    },
    {
        "titre": "Software Test Engineer III",
        "etudiant": 7,
        "professeur": 2,
        "dateDeCreation": "12/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus tortor.",
        "rendu": false
    },
    {
        "titre": "Senior Developer",
        "etudiant": 11,
        "professeur": 1,
        "dateDeCreation": "11/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Curabitur convallis.",
        "rendu": false
    },
    {
        "titre": "Engineer IV",
        "etudiant": 20,
        "professeur": 5,
        "dateDeCreation": "04/06/2023",
        "dateDeRendu": "12/02/2024",
        "note": 9,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
        "rendu": false
    },
    {
        "titre": "Associate Professor",
        "etudiant": 19,
        "professeur": 4,
        "dateDeCreation": "06/02/2023",
        "dateDeRendu": "05/05/2024",
        "note": 15,
        "remarque": "Vivamus vestibulum sagittis sapien.",
        "rendu": false
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 17,
        "professeur": 2,
        "dateDeCreation": "21/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi a ipsum.",
        "rendu": false
    },
    {
        "titre": "Assistant Professor",
        "etudiant": 16,
        "professeur": 1,
        "dateDeCreation": "27/01/2023",
        "dateDeRendu": "16/12/2023",
        "note": 15,
        "remarque": "Aliquam quis turpis eget elit sodales scelerisque.",
        "rendu": true
    },
    {
        "titre": "Sales Representative",
        "etudiant": 16,
        "professeur": 4,
        "dateDeCreation": "06/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": false
    },
    {
        "titre": "Nuclear Power Engineer",
        "etudiant": 7,
        "professeur": 2,
        "dateDeCreation": "28/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Phasellus in felis.",
        "rendu": false
    },
    {
        "titre": "Health Coach I",
        "etudiant": 14,
        "professeur": 3,
        "dateDeCreation": "05/11/2023",
        "dateDeRendu": "16/11/2023",
        "note": 20,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Safety Technician III",
        "etudiant": 11,
        "professeur": 5,
        "dateDeCreation": "27/07/2023",
        "dateDeRendu": "25/06/2023",
        "note": 20,
        "remarque": "Suspendisse potenti.",
        "rendu": true
    },
    {
        "titre": "Analyst Programmer",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "04/07/2023",
        "dateDeRendu": "16/08/2023",
        "note": 10,
        "remarque": "Aenean sit amet justo.",
        "rendu": true
    },
    {
        "titre": "Director of Sales",
        "etudiant": 3,
        "professeur": 1,
        "dateDeCreation": "09/07/2023",
        "dateDeRendu": "08/12/2023",
        "note": 15,
        "remarque": "Vivamus vel nulla eget eros elementum pellentesque.",
        "rendu": true
    },
    {
        "titre": "Senior Sales Associate",
        "etudiant": 11,
        "professeur": 3,
        "dateDeCreation": "14/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer tincidunt ante vel ipsum.",
        "rendu": false
    },
    {
        "titre": "Senior Financial Analyst",
        "etudiant": 8,
        "professeur": 4,
        "dateDeCreation": "14/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Nuclear Power Engineer",
        "etudiant": 14,
        "professeur": 5,
        "dateDeCreation": "11/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec dapibus.",
        "rendu": false
    },
    {
        "titre": "Information Systems Manager",
        "etudiant": 18,
        "professeur": 1,
        "dateDeCreation": "15/02/2023",
        "dateDeRendu": "27/08/2023",
        "note": 15,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        "rendu": false
    },
    {
        "titre": "Engineer III",
        "etudiant": 2,
        "professeur": 3,
        "dateDeCreation": "07/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam varius.",
        "rendu": false
    },
    {
        "titre": "Help Desk Technician",
        "etudiant": 3,
        "professeur": 5,
        "dateDeCreation": "10/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Praesent lectus.",
        "rendu": false
    },
    {
        "titre": "Structural Analysis Engineer",
        "etudiant": 12,
        "professeur": 3,
        "dateDeCreation": "21/01/2023",
        "dateDeRendu": "21/04/2024",
        "note": 8,
        "remarque": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "rendu": false
    },
    {
        "titre": "Account Executive",
        "etudiant": 16,
        "professeur": 5,
        "dateDeCreation": "09/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus vel nulla eget eros elementum pellentesque.",
        "rendu": false
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 15,
        "professeur": 1,
        "dateDeCreation": "11/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla tellus.",
        "rendu": false
    },
    {
        "titre": "Assistant Professor",
        "etudiant": 20,
        "professeur": 5,
        "dateDeCreation": "02/02/2024",
        "dateDeRendu": "03/01/2024",
        "note": 11,
        "remarque": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
        "rendu": true
    },
    {
        "titre": "Sales Representative",
        "etudiant": 10,
        "professeur": 2,
        "dateDeCreation": "06/01/2024",
        "dateDeRendu": "28/10/2023",
        "note": 9,
        "remarque": "Fusce posuere felis sed lacus.",
        "rendu": true
    },
    {
        "titre": "Physical Therapy Assistant",
        "etudiant": 16,
        "professeur": 4,
        "dateDeCreation": "08/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis ac nibh.",
        "rendu": false
    },
    {
        "titre": "Operator",
        "etudiant": 9,
        "professeur": 1,
        "dateDeCreation": "17/01/2024",
        "dateDeRendu": "06/11/2023",
        "note": 17,
        "remarque": "Mauris ullamcorper purus sit amet nulla.",
        "rendu": true
    },
    {
        "titre": "Account Coordinator",
        "etudiant": 2,
        "professeur": 5,
        "dateDeCreation": "28/11/2023",
        "dateDeRendu": "21/06/2023",
        "note": 14,
        "remarque": "Pellentesque at nulla.",
        "rendu": true
    },
    {
        "titre": "Software Engineer IV",
        "etudiant": 18,
        "professeur": 2,
        "dateDeCreation": "13/06/2023",
        "dateDeRendu": "22/10/2023",
        "note": 17,
        "remarque": "Sed sagittis.",
        "rendu": false
    },
    {
        "titre": "Civil Engineer",
        "etudiant": 7,
        "professeur": 4,
        "dateDeCreation": "09/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer a nibh.",
        "rendu": false
    },
    {
        "titre": "Help Desk Technician",
        "etudiant": 9,
        "professeur": 5,
        "dateDeCreation": "07/04/2024",
        "dateDeRendu": "01/08/2023",
        "note": 16,
        "remarque": "Morbi vel lectus in quam fringilla rhoncus.",
        "rendu": false
    },
    {
        "titre": "Financial Analyst",
        "etudiant": 8,
        "professeur": 5,
        "dateDeCreation": "11/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ac est lacinia nisi venenatis tristique.",
        "rendu": false
    },
    {
        "titre": "Social Worker",
        "etudiant": 18,
        "professeur": 4,
        "dateDeCreation": "17/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nunc nisl.",
        "rendu": false
    },
    {
        "titre": "Junior Executive",
        "etudiant": 13,
        "professeur": 3,
        "dateDeCreation": "24/03/2024",
        "dateDeRendu": "26/09/2023",
        "note": 18,
        "remarque": "Mauris sit amet eros.",
        "rendu": true
    },
    {
        "titre": "Automation Specialist IV",
        "etudiant": 5,
        "professeur": 5,
        "dateDeCreation": "20/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Phasellus id sapien in sapien iaculis congue.",
        "rendu": false
    },
    {
        "titre": "Product Engineer",
        "etudiant": 16,
        "professeur": 1,
        "dateDeCreation": "07/05/2023",
        "dateDeRendu": "20/01/2024",
        "note": 19,
        "remarque": "Aliquam quis turpis eget elit sodales scelerisque.",
        "rendu": true
    },
    {
        "titre": "Marketing Assistant",
        "etudiant": 4,
        "professeur": 3,
        "dateDeCreation": "07/03/2024",
        "dateDeRendu": "20/12/2023",
        "note": 15,
        "remarque": "Morbi non quam nec dui luctus rutrum.",
        "rendu": true
    },
    {
        "titre": "Pharmacist",
        "etudiant": 13,
        "professeur": 3,
        "dateDeCreation": "10/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Praesent id massa id nisl venenatis lacinia.",
        "rendu": false
    },
    {
        "titre": "VP Product Management",
        "etudiant": 5,
        "professeur": 2,
        "dateDeCreation": "14/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Media Manager II",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "24/04/2024",
        "dateDeRendu": "24/02/2024",
        "note": 15,
        "remarque": "Pellentesque at nulla.",
        "rendu": false
    },
    {
        "titre": "VP Quality Control",
        "etudiant": 12,
        "professeur": 2,
        "dateDeCreation": "21/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam sit amet turpis elementum ligula vehicula consequat.",
        "rendu": false
    },
    {
        "titre": "Software Engineer I",
        "etudiant": 12,
        "professeur": 1,
        "dateDeCreation": "18/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Fusce consequat.",
        "rendu": false
    },
    {
        "titre": "Data Coordinator",
        "etudiant": 1,
        "professeur": 2,
        "dateDeCreation": "31/10/2023",
        "dateDeRendu": "22/02/2024",
        "note": 14,
        "remarque": "Nulla ac enim.",
        "rendu": false
    },
    {
        "titre": "Actuary",
        "etudiant": 16,
        "professeur": 2,
        "dateDeCreation": "01/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "rendu": false
    },
    {
        "titre": "Software Test Engineer III",
        "etudiant": 10,
        "professeur": 5,
        "dateDeCreation": "09/03/2023",
        "dateDeRendu": "02/05/2023",
        "note": 10,
        "remarque": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "rendu": true
    },
    {
        "titre": "Environmental Specialist",
        "etudiant": 14,
        "professeur": 3,
        "dateDeCreation": "17/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "Senior Editor",
        "etudiant": 2,
        "professeur": 2,
        "dateDeCreation": "14/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": false
    },
    {
        "titre": "Safety Technician II",
        "etudiant": 5,
        "professeur": 4,
        "dateDeCreation": "21/06/2023",
        "dateDeRendu": "24/09/2023",
        "note": 12,
        "remarque": "Duis bibendum.",
        "rendu": true
    },
    {
        "titre": "Actuary",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "13/03/2024",
        "dateDeRendu": "01/07/2023",
        "note": 9,
        "remarque": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "rendu": false
    },
    {
        "titre": "Paralegal",
        "etudiant": 1,
        "professeur": 4,
        "dateDeCreation": "19/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Maecenas pulvinar lobortis est.",
        "rendu": false
    },
    {
        "titre": "Assistant Media Planner",
        "etudiant": 15,
        "professeur": 4,
        "dateDeCreation": "14/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "rendu": false
    },
    {
        "titre": "Professor",
        "etudiant": 1,
        "professeur": 1,
        "dateDeCreation": "10/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In congue.",
        "rendu": false
    },
    {
        "titre": "Geologist II",
        "etudiant": 17,
        "professeur": 1,
        "dateDeCreation": "28/08/2023",
        "dateDeRendu": "17/11/2023",
        "note": 9,
        "remarque": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "rendu": true
    },
    {
        "titre": "Analog Circuit Design manager",
        "etudiant": 1,
        "professeur": 1,
        "dateDeCreation": "14/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Praesent id massa id nisl venenatis lacinia.",
        "rendu": false
    },
    {
        "titre": "Nurse",
        "etudiant": 20,
        "professeur": 3,
        "dateDeCreation": "18/03/2023",
        "dateDeRendu": "10/05/2024",
        "note": 12,
        "remarque": "Vestibulum sed magna at nunc commodo placerat.",
        "rendu": true
    },
    {
        "titre": "Help Desk Operator",
        "etudiant": 2,
        "professeur": 5,
        "dateDeCreation": "01/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis bibendum.",
        "rendu": false
    },
    {
        "titre": "VP Quality Control",
        "etudiant": 13,
        "professeur": 3,
        "dateDeCreation": "24/07/2023",
        "dateDeRendu": "19/05/2023",
        "note": 18,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": false
    },
    {
        "titre": "Developer I",
        "etudiant": 14,
        "professeur": 4,
        "dateDeCreation": "22/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Pellentesque viverra pede ac diam.",
        "rendu": false
    },
    {
        "titre": "Legal Assistant",
        "etudiant": 7,
        "professeur": 5,
        "dateDeCreation": "07/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "rendu": false
    },
    {
        "titre": "Environmental Specialist",
        "etudiant": 2,
        "professeur": 1,
        "dateDeCreation": "26/01/2023",
        "dateDeRendu": "14/09/2023",
        "note": 19,
        "remarque": "Etiam vel augue.",
        "rendu": true
    },
    {
        "titre": "Environmental Specialist",
        "etudiant": 17,
        "professeur": 2,
        "dateDeCreation": "14/11/2023",
        "dateDeRendu": "16/04/2024",
        "note": 20,
        "remarque": "Morbi porttitor lorem id ligula.",
        "rendu": false
    },
    {
        "titre": "Senior Developer",
        "etudiant": 1,
        "professeur": 1,
        "dateDeCreation": "27/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum rutrum rutrum neque.",
        "rendu": false
    },
    {
        "titre": "Business Systems Development Analyst",
        "etudiant": 20,
        "professeur": 3,
        "dateDeCreation": "01/06/2023",
        "dateDeRendu": "06/03/2024",
        "note": 9,
        "remarque": "Cras non velit nec nisi vulputate nonummy.",
        "rendu": true
    },
    {
        "titre": "Environmental Tech",
        "etudiant": 1,
        "professeur": 2,
        "dateDeCreation": "26/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "rendu": false
    },
    {
        "titre": "Help Desk Operator",
        "etudiant": 3,
        "professeur": 4,
        "dateDeCreation": "13/10/2023",
        "dateDeRendu": "07/03/2024",
        "note": 15,
        "remarque": "Proin at turpis a pede posuere nonummy.",
        "rendu": true
    },
    {
        "titre": "Civil Engineer",
        "etudiant": 5,
        "professeur": 4,
        "dateDeCreation": "22/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Pellentesque at nulla.",
        "rendu": false
    },
    {
        "titre": "Computer Systems Analyst III",
        "etudiant": 17,
        "professeur": 3,
        "dateDeCreation": "27/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi porttitor lorem id ligula.",
        "rendu": false
    },
    {
        "titre": "Assistant Manager",
        "etudiant": 6,
        "professeur": 3,
        "dateDeCreation": "21/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": false
    },
    {
        "titre": "Data Coordinator",
        "etudiant": 15,
        "professeur": 3,
        "dateDeCreation": "19/08/2023",
        "dateDeRendu": "09/01/2024",
        "note": 8,
        "remarque": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
        "rendu": false
    },
    {
        "titre": "Cost Accountant",
        "etudiant": 14,
        "professeur": 5,
        "dateDeCreation": "16/09/2023",
        "dateDeRendu": "11/06/2023",
        "note": 15,
        "remarque": "Proin interdum mauris non ligula pellentesque ultrices.",
        "rendu": false
    },
    {
        "titre": "Budget/Accounting Analyst III",
        "etudiant": 6,
        "professeur": 2,
        "dateDeCreation": "13/12/2023",
        "dateDeRendu": "07/02/2024",
        "note": 14,
        "remarque": "Morbi a ipsum.",
        "rendu": false
    },
    {
        "titre": "Assistant Manager",
        "etudiant": 16,
        "professeur": 2,
        "dateDeCreation": "07/06/2023",
        "dateDeRendu": "05/07/2023",
        "note": 19,
        "remarque": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
        "rendu": false
    },
    {
        "titre": "Database Administrator III",
        "etudiant": 18,
        "professeur": 4,
        "dateDeCreation": "13/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam sit amet diam in magna bibendum imperdiet.",
        "rendu": false
    },
    {
        "titre": "GIS Technical Architect",
        "etudiant": 2,
        "professeur": 5,
        "dateDeCreation": "21/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Pellentesque viverra pede ac diam.",
        "rendu": false
    },
    {
        "titre": "Pharmacist",
        "etudiant": 7,
        "professeur": 2,
        "dateDeCreation": "23/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Fusce consequat.",
        "rendu": false
    },
    {
        "titre": "Environmental Specialist",
        "etudiant": 20,
        "professeur": 1,
        "dateDeCreation": "21/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec vitae nisi.",
        "rendu": false
    },
    {
        "titre": "Software Test Engineer I",
        "etudiant": 18,
        "professeur": 3,
        "dateDeCreation": "04/11/2023",
        "dateDeRendu": "15/04/2024",
        "note": 14,
        "remarque": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "rendu": true
    },
    {
        "titre": "Technical Writer",
        "etudiant": 8,
        "professeur": 3,
        "dateDeCreation": "28/09/2023",
        "dateDeRendu": "26/02/2024",
        "note": 9,
        "remarque": "Etiam faucibus cursus urna.",
        "rendu": false
    },
    {
        "titre": "Environmental Specialist",
        "etudiant": 18,
        "professeur": 3,
        "dateDeCreation": "06/04/2024",
        "dateDeRendu": "14/12/2023",
        "note": 15,
        "remarque": "Duis consequat dui nec nisi volutpat eleifend.",
        "rendu": true
    },
    {
        "titre": "Help Desk Operator",
        "etudiant": 19,
        "professeur": 5,
        "dateDeCreation": "28/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Mauris lacinia sapien quis libero.",
        "rendu": false
    },
    {
        "titre": "Cost Accountant",
        "etudiant": 12,
        "professeur": 1,
        "dateDeCreation": "20/04/2023",
        "dateDeRendu": "20/02/2024",
        "note": 18,
        "remarque": "Proin at turpis a pede posuere nonummy.",
        "rendu": false
    },
    {
        "titre": "Account Executive",
        "etudiant": 13,
        "professeur": 5,
        "dateDeCreation": "16/10/2023",
        "dateDeRendu": "04/08/2023",
        "note": 18,
        "remarque": "Etiam vel augue.",
        "rendu": true
    },
    {
        "titre": "Senior Quality Engineer",
        "etudiant": 1,
        "professeur": 4,
        "dateDeCreation": "30/01/2024",
        "dateDeRendu": "13/03/2024",
        "note": 10,
        "remarque": "Phasellus id sapien in sapien iaculis congue.",
        "rendu": true
    },
    {
        "titre": "Marketing Assistant",
        "etudiant": 13,
        "professeur": 1,
        "dateDeCreation": "31/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "rendu": false
    },
    {
        "titre": "Software Test Engineer IV",
        "etudiant": 9,
        "professeur": 4,
        "dateDeCreation": "17/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer tincidunt ante vel ipsum.",
        "rendu": false
    },
    {
        "titre": "Operator",
        "etudiant": 3,
        "professeur": 5,
        "dateDeCreation": "24/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec ut dolor.",
        "rendu": false
    },
    {
        "titre": "Clinical Specialist",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "18/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis bibendum.",
        "rendu": false
    },
    {
        "titre": "Food Chemist",
        "etudiant": 2,
        "professeur": 3,
        "dateDeCreation": "14/11/2023",
        "dateDeRendu": "21/06/2023",
        "note": 18,
        "remarque": "In quis justo.",
        "rendu": true
    },
    {
        "titre": "Research Nurse",
        "etudiant": 14,
        "professeur": 4,
        "dateDeCreation": "11/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla tellus.",
        "rendu": false
    },
    {
        "titre": "Compensation Analyst",
        "etudiant": 9,
        "professeur": 3,
        "dateDeCreation": "15/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In sagittis dui vel nisl.",
        "rendu": false
    },
    {
        "titre": "Project Manager",
        "etudiant": 19,
        "professeur": 3,
        "dateDeCreation": "22/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Quisque id justo sit amet sapien dignissim vestibulum.",
        "rendu": false
    },
    {
        "titre": "Design Engineer",
        "etudiant": 18,
        "professeur": 2,
        "dateDeCreation": "24/07/2023",
        "dateDeRendu": "02/07/2023",
        "note": 12,
        "remarque": "Pellentesque eget nunc.",
        "rendu": false
    },
    {
        "titre": "Social Worker",
        "etudiant": 10,
        "professeur": 1,
        "dateDeCreation": "29/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam porttitor lacus at turpis.",
        "rendu": false
    },
    {
        "titre": "Systems Administrator I",
        "etudiant": 6,
        "professeur": 1,
        "dateDeCreation": "22/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Accounting Assistant II",
        "etudiant": 4,
        "professeur": 2,
        "dateDeCreation": "11/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
        "rendu": false
    },
    {
        "titre": "Registered Nurse",
        "etudiant": 16,
        "professeur": 4,
        "dateDeCreation": "29/07/2023",
        "dateDeRendu": "31/12/2023",
        "note": 14,
        "remarque": "Mauris sit amet eros.",
        "rendu": false
    },
    {
        "titre": "VP Accounting",
        "etudiant": 10,
        "professeur": 4,
        "dateDeCreation": "21/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
        "rendu": false
    },
    {
        "titre": "Nurse",
        "etudiant": 13,
        "professeur": 1,
        "dateDeCreation": "28/05/2023",
        "dateDeRendu": "16/04/2024",
        "note": 14,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": false
    },
    {
        "titre": "Editor",
        "etudiant": 1,
        "professeur": 1,
        "dateDeCreation": "19/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Etiam justo.",
        "rendu": false
    },
    {
        "titre": "Electrical Engineer",
        "etudiant": 18,
        "professeur": 4,
        "dateDeCreation": "15/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec dapibus.",
        "rendu": false
    },
    {
        "titre": "Research Associate",
        "etudiant": 19,
        "professeur": 1,
        "dateDeCreation": "10/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis bibendum.",
        "rendu": false
    },
    {
        "titre": "Account Representative IV",
        "etudiant": 18,
        "professeur": 2,
        "dateDeCreation": "20/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Proin at turpis a pede posuere nonummy.",
        "rendu": false
    },
    {
        "titre": "Web Designer I",
        "etudiant": 8,
        "professeur": 2,
        "dateDeCreation": "21/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "rendu": false
    },
    {
        "titre": "Administrative Assistant III",
        "etudiant": 18,
        "professeur": 1,
        "dateDeCreation": "29/03/2024",
        "dateDeRendu": "27/05/2024",
        "note": 13,
        "remarque": "Fusce consequat.",
        "rendu": true
    },
    {
        "titre": "Recruiter",
        "etudiant": 19,
        "professeur": 4,
        "dateDeCreation": "30/07/2023",
        "dateDeRendu": "05/01/2024",
        "note": 18,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Account Representative III",
        "etudiant": 4,
        "professeur": 4,
        "dateDeCreation": "02/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": false
    },
    {
        "titre": "Recruiting Manager",
        "etudiant": 15,
        "professeur": 2,
        "dateDeCreation": "06/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla suscipit ligula in lacus.",
        "rendu": false
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 16,
        "professeur": 1,
        "dateDeCreation": "17/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis at velit eu est congue elementum.",
        "rendu": false
    },
    {
        "titre": "Desktop Support Technician",
        "etudiant": 11,
        "professeur": 4,
        "dateDeCreation": "17/01/2024",
        "dateDeRendu": "15/07/2023",
        "note": 10,
        "remarque": "Cras in purus eu magna vulputate luctus.",
        "rendu": false
    },
    {
        "titre": "Compensation Analyst",
        "etudiant": 10,
        "professeur": 4,
        "dateDeCreation": "03/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "rendu": false
    },
    {
        "titre": "VP Quality Control",
        "etudiant": 19,
        "professeur": 4,
        "dateDeCreation": "07/04/2024",
        "dateDeRendu": "06/04/2024",
        "note": 20,
        "remarque": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "rendu": false
    },
    {
        "titre": "Dental Hygienist",
        "etudiant": 4,
        "professeur": 2,
        "dateDeCreation": "11/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Mauris lacinia sapien quis libero.",
        "rendu": false
    },
    {
        "titre": "Electrical Engineer",
        "etudiant": 19,
        "professeur": 1,
        "dateDeCreation": "10/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Mauris sit amet eros.",
        "rendu": false
    },
    {
        "titre": "Product Engineer",
        "etudiant": 12,
        "professeur": 1,
        "dateDeCreation": "03/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec ut mauris eget massa tempor convallis.",
        "rendu": false
    },
    {
        "titre": "Senior Quality Engineer",
        "etudiant": 10,
        "professeur": 5,
        "dateDeCreation": "28/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Quisque porta volutpat erat.",
        "rendu": false
    },
    {
        "titre": "Geological Engineer",
        "etudiant": 11,
        "professeur": 4,
        "dateDeCreation": "01/02/2023",
        "dateDeRendu": "07/02/2024",
        "note": 20,
        "remarque": "Morbi ut odio.",
        "rendu": false
    },
    {
        "titre": "Dental Hygienist",
        "etudiant": 1,
        "professeur": 1,
        "dateDeCreation": "05/03/2024",
        "dateDeRendu": "10/04/2024",
        "note": 10,
        "remarque": "Morbi non quam nec dui luctus rutrum.",
        "rendu": true
    },
    {
        "titre": "Clinical Specialist",
        "etudiant": 20,
        "professeur": 5,
        "dateDeCreation": "04/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Proin risus.",
        "rendu": false
    },
    {
        "titre": "Design Engineer",
        "etudiant": 17,
        "professeur": 4,
        "dateDeCreation": "15/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Etiam justo.",
        "rendu": false
    },
    {
        "titre": "Web Developer I",
        "etudiant": 13,
        "professeur": 1,
        "dateDeCreation": "01/05/2023",
        "dateDeRendu": "25/01/2024",
        "note": 13,
        "remarque": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "rendu": true
    },
    {
        "titre": "Recruiting Manager",
        "etudiant": 16,
        "professeur": 2,
        "dateDeCreation": "13/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
        "rendu": false
    },
    {
        "titre": "Web Designer III",
        "etudiant": 1,
        "professeur": 5,
        "dateDeCreation": "29/11/2023",
        "dateDeRendu": "23/04/2024",
        "note": 18,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
        "rendu": true
    },
    {
        "titre": "Sales Representative",
        "etudiant": 2,
        "professeur": 2,
        "dateDeCreation": "20/02/2024",
        "dateDeRendu": "02/02/2024",
        "note": 20,
        "remarque": "Vestibulum ac est lacinia nisi venenatis tristique.",
        "rendu": false
    },
    {
        "titre": "Senior Developer",
        "etudiant": 7,
        "professeur": 5,
        "dateDeCreation": "06/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "rendu": false
    },
    {
        "titre": "Sales Associate",
        "etudiant": 7,
        "professeur": 2,
        "dateDeCreation": "22/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nunc purus.",
        "rendu": false
    },
    {
        "titre": "Administrative Officer",
        "etudiant": 15,
        "professeur": 5,
        "dateDeCreation": "23/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus vestibulum sagittis sapien.",
        "rendu": false
    },
    {
        "titre": "Accountant II",
        "etudiant": 18,
        "professeur": 5,
        "dateDeCreation": "15/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec quis orci eget orci vehicula condimentum.",
        "rendu": false
    },
    {
        "titre": "Health Coach II",
        "etudiant": 6,
        "professeur": 4,
        "dateDeCreation": "14/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi ut odio.",
        "rendu": false
    },
    {
        "titre": "Legal Assistant",
        "etudiant": 1,
        "professeur": 4,
        "dateDeCreation": "15/04/2024",
        "dateDeRendu": "29/12/2023",
        "note": 13,
        "remarque": "Curabitur convallis.",
        "rendu": true
    },
    {
        "titre": "Office Assistant III",
        "etudiant": 17,
        "professeur": 2,
        "dateDeCreation": "07/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus tortor.",
        "rendu": false
    },
    {
        "titre": "Registered Nurse",
        "etudiant": 3,
        "professeur": 2,
        "dateDeCreation": "17/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi non quam nec dui luctus rutrum.",
        "rendu": false
    },
    {
        "titre": "Research Nurse",
        "etudiant": 3,
        "professeur": 3,
        "dateDeCreation": "11/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "rendu": false
    },
    {
        "titre": "Graphic Designer",
        "etudiant": 5,
        "professeur": 1,
        "dateDeCreation": "29/11/2023",
        "dateDeRendu": "21/02/2024",
        "note": 11,
        "remarque": "Aliquam erat volutpat.",
        "rendu": false
    },
    {
        "titre": "VP Accounting",
        "etudiant": 1,
        "professeur": 2,
        "dateDeCreation": "02/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cras non velit nec nisi vulputate nonummy.",
        "rendu": false
    },
    {
        "titre": "Administrative Assistant III",
        "etudiant": 11,
        "professeur": 1,
        "dateDeCreation": "08/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam porttitor lacus at turpis.",
        "rendu": false
    },
    {
        "titre": "Biostatistician IV",
        "etudiant": 5,
        "professeur": 4,
        "dateDeCreation": "28/04/2023",
        "dateDeRendu": "28/06/2023",
        "note": 10,
        "remarque": "Suspendisse accumsan tortor quis turpis.",
        "rendu": true
    },
    {
        "titre": "Software Consultant",
        "etudiant": 19,
        "professeur": 1,
        "dateDeCreation": "25/03/2023",
        "dateDeRendu": "09/12/2023",
        "note": 9,
        "remarque": "Morbi ut odio.",
        "rendu": true
    },
    {
        "titre": "Senior Cost Accountant",
        "etudiant": 15,
        "professeur": 4,
        "dateDeCreation": "05/10/2023",
        "dateDeRendu": "20/04/2024",
        "note": 19,
        "remarque": "Integer tincidunt ante vel ipsum.",
        "rendu": true
    },
    {
        "titre": "Operator",
        "etudiant": 18,
        "professeur": 3,
        "dateDeCreation": "12/12/2023",
        "dateDeRendu": "16/04/2023",
        "note": 14,
        "remarque": "Morbi non quam nec dui luctus rutrum.",
        "rendu": true
    },
    {
        "titre": "Senior Editor",
        "etudiant": 14,
        "professeur": 1,
        "dateDeCreation": "07/07/2023",
        "dateDeRendu": "09/08/2023",
        "note": 12,
        "remarque": "Aenean fermentum.",
        "rendu": true
    },
    {
        "titre": "Software Test Engineer IV",
        "etudiant": 3,
        "professeur": 1,
        "dateDeCreation": "06/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi ut odio.",
        "rendu": false
    },
    {
        "titre": "Librarian",
        "etudiant": 15,
        "professeur": 2,
        "dateDeCreation": "01/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "rendu": false
    },
    {
        "titre": "Legal Assistant",
        "etudiant": 5,
        "professeur": 5,
        "dateDeCreation": "01/11/2023",
        "dateDeRendu": "05/08/2023",
        "note": 17,
        "remarque": "Vivamus tortor.",
        "rendu": false
    },
    {
        "titre": "Recruiting Manager",
        "etudiant": 19,
        "professeur": 3,
        "dateDeCreation": "11/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Maecenas ut massa quis augue luctus tincidunt.",
        "rendu": false
    },
    {
        "titre": "GIS Technical Architect",
        "etudiant": 18,
        "professeur": 1,
        "dateDeCreation": "21/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi ut odio.",
        "rendu": false
    },
    {
        "titre": "Web Developer I",
        "etudiant": 17,
        "professeur": 1,
        "dateDeCreation": "09/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cras pellentesque volutpat dui.",
        "rendu": false
    },
    {
        "titre": "Tax Accountant",
        "etudiant": 1,
        "professeur": 3,
        "dateDeCreation": "12/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam molestie nibh in lectus.",
        "rendu": false
    },
    {
        "titre": "Administrative Assistant II",
        "etudiant": 14,
        "professeur": 2,
        "dateDeCreation": "07/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Pellentesque eget nunc.",
        "rendu": false
    },
    {
        "titre": "Junior Executive",
        "etudiant": 14,
        "professeur": 1,
        "dateDeCreation": "09/02/2023",
        "dateDeRendu": "27/11/2023",
        "note": 14,
        "remarque": "Integer non velit.",
        "rendu": false
    },
    {
        "titre": "VP Accounting",
        "etudiant": 4,
        "professeur": 3,
        "dateDeCreation": "15/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "rendu": false
    },
    {
        "titre": "Analyst Programmer",
        "etudiant": 10,
        "professeur": 4,
        "dateDeCreation": "21/07/2023",
        "dateDeRendu": "07/07/2023",
        "note": 16,
        "remarque": "Morbi a ipsum.",
        "rendu": true
    },
    {
        "titre": "Community Outreach Specialist",
        "etudiant": 16,
        "professeur": 3,
        "dateDeCreation": "30/03/2024",
        "dateDeRendu": "11/05/2023",
        "note": 11,
        "remarque": "Aenean auctor gravida sem.",
        "rendu": false
    },
    {
        "titre": "Staff Accountant II",
        "etudiant": 17,
        "professeur": 1,
        "dateDeCreation": "19/01/2024",
        "dateDeRendu": "30/10/2023",
        "note": 16,
        "remarque": "Vivamus vestibulum sagittis sapien.",
        "rendu": false
    },
    {
        "titre": "Design Engineer",
        "etudiant": 1,
        "professeur": 3,
        "dateDeCreation": "13/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        "rendu": false
    },
    {
        "titre": "Data Coordinator",
        "etudiant": 7,
        "professeur": 1,
        "dateDeCreation": "09/06/2023",
        "dateDeRendu": "17/03/2024",
        "note": 16,
        "remarque": "Morbi quis tortor id nulla ultrices aliquet.",
        "rendu": true
    },
    {
        "titre": "Senior Developer",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "17/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "rendu": false
    },
    {
        "titre": "Cost Accountant",
        "etudiant": 10,
        "professeur": 2,
        "dateDeCreation": "16/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Quisque id justo sit amet sapien dignissim vestibulum.",
        "rendu": false
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 20,
        "professeur": 2,
        "dateDeCreation": "07/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Senior Financial Analyst",
        "etudiant": 10,
        "professeur": 4,
        "dateDeCreation": "27/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nunc purus.",
        "rendu": false
    },
    {
        "titre": "VP Marketing",
        "etudiant": 2,
        "professeur": 2,
        "dateDeCreation": "25/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": false
    },
    {
        "titre": "Legal Assistant",
        "etudiant": 3,
        "professeur": 5,
        "dateDeCreation": "14/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Fusce posuere felis sed lacus.",
        "rendu": false
    },
    {
        "titre": "Research Nurse",
        "etudiant": 14,
        "professeur": 2,
        "dateDeCreation": "14/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus vel nulla eget eros elementum pellentesque.",
        "rendu": false
    },
    {
        "titre": "Administrative Officer",
        "etudiant": 3,
        "professeur": 2,
        "dateDeCreation": "11/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec ut mauris eget massa tempor convallis.",
        "rendu": false
    },
    {
        "titre": "Nurse Practicioner",
        "etudiant": 20,
        "professeur": 1,
        "dateDeCreation": "21/04/2023",
        "dateDeRendu": "02/04/2024",
        "note": 20,
        "remarque": "Aliquam erat volutpat.",
        "rendu": false
    },
    {
        "titre": "VP Accounting",
        "etudiant": 14,
        "professeur": 5,
        "dateDeCreation": "02/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Proin eu mi.",
        "rendu": false
    },
    {
        "titre": "Software Engineer III",
        "etudiant": 1,
        "professeur": 5,
        "dateDeCreation": "06/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
        "rendu": false
    },
    {
        "titre": "Operator",
        "etudiant": 18,
        "professeur": 1,
        "dateDeCreation": "08/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Sed vel enim sit amet nunc viverra dapibus.",
        "rendu": false
    },
    {
        "titre": "Programmer Analyst III",
        "etudiant": 3,
        "professeur": 4,
        "dateDeCreation": "07/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer tincidunt ante vel ipsum.",
        "rendu": false
    },
    {
        "titre": "Programmer I",
        "etudiant": 3,
        "professeur": 4,
        "dateDeCreation": "16/02/2023",
        "dateDeRendu": "25/08/2023",
        "note": 17,
        "remarque": "Duis mattis egestas metus.",
        "rendu": false
    },
    {
        "titre": "Staff Scientist",
        "etudiant": 19,
        "professeur": 5,
        "dateDeCreation": "28/08/2023",
        "dateDeRendu": "25/09/2023",
        "note": 20,
        "remarque": "Aenean sit amet justo.",
        "rendu": true
    },
    {
        "titre": "Graphic Designer",
        "etudiant": 11,
        "professeur": 4,
        "dateDeCreation": "31/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 13,
        "professeur": 1,
        "dateDeCreation": "29/12/2023",
        "dateDeRendu": "20/04/2024",
        "note": 9,
        "remarque": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "rendu": true
    },
    {
        "titre": "Sales Representative",
        "etudiant": 18,
        "professeur": 2,
        "dateDeCreation": "03/11/2023",
        "dateDeRendu": "02/11/2023",
        "note": 13,
        "remarque": "Integer non velit.",
        "rendu": true
    },
    {
        "titre": "Administrative Assistant I",
        "etudiant": 2,
        "professeur": 4,
        "dateDeCreation": "06/04/2023",
        "dateDeRendu": "07/06/2023",
        "note": 14,
        "remarque": "Morbi non lectus.",
        "rendu": true
    },
    {
        "titre": "Structural Engineer",
        "etudiant": 5,
        "professeur": 5,
        "dateDeCreation": "11/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cras in purus eu magna vulputate luctus.",
        "rendu": false
    },
    {
        "titre": "Environmental Specialist",
        "etudiant": 11,
        "professeur": 1,
        "dateDeCreation": "20/08/2023",
        "dateDeRendu": "26/08/2023",
        "note": 13,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Programmer III",
        "etudiant": 10,
        "professeur": 4,
        "dateDeCreation": "30/03/2024",
        "dateDeRendu": "05/03/2024",
        "note": 13,
        "remarque": "Vestibulum rutrum rutrum neque.",
        "rendu": true
    },
    {
        "titre": "Dental Hygienist",
        "etudiant": 12,
        "professeur": 3,
        "dateDeCreation": "22/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Mauris ullamcorper purus sit amet nulla.",
        "rendu": false
    },
    {
        "titre": "Executive Secretary",
        "etudiant": 13,
        "professeur": 2,
        "dateDeCreation": "28/01/2023",
        "dateDeRendu": "07/02/2024",
        "note": 11,
        "remarque": "Integer non velit.",
        "rendu": false
    },
    {
        "titre": "Marketing Manager",
        "etudiant": 13,
        "professeur": 2,
        "dateDeCreation": "08/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi a ipsum.",
        "rendu": false
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 3,
        "professeur": 3,
        "dateDeCreation": "12/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Quisque ut erat.",
        "rendu": false
    },
    {
        "titre": "Software Consultant",
        "etudiant": 4,
        "professeur": 4,
        "dateDeCreation": "13/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nunc purus.",
        "rendu": false
    },
    {
        "titre": "Staff Accountant IV",
        "etudiant": 18,
        "professeur": 5,
        "dateDeCreation": "29/04/2023",
        "dateDeRendu": "29/03/2024",
        "note": 13,
        "remarque": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
        "rendu": true
    },
    {
        "titre": "Executive Secretary",
        "etudiant": 8,
        "professeur": 5,
        "dateDeCreation": "02/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "rendu": false
    },
    {
        "titre": "Programmer II",
        "etudiant": 12,
        "professeur": 5,
        "dateDeCreation": "19/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nunc nisl.",
        "rendu": false
    },
    {
        "titre": "Occupational Therapist",
        "etudiant": 13,
        "professeur": 1,
        "dateDeCreation": "07/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        "rendu": false
    },
    {
        "titre": "Tax Accountant",
        "etudiant": 1,
        "professeur": 5,
        "dateDeCreation": "23/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Curabitur gravida nisi at nibh.",
        "rendu": false
    },
    {
        "titre": "Business Systems Development Analyst",
        "etudiant": 14,
        "professeur": 3,
        "dateDeCreation": "10/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec quis orci eget orci vehicula condimentum.",
        "rendu": false
    },
    {
        "titre": "Structural Analysis Engineer",
        "etudiant": 12,
        "professeur": 5,
        "dateDeCreation": "06/03/2024",
        "dateDeRendu": "30/04/2023",
        "note": 9,
        "remarque": "Etiam faucibus cursus urna.",
        "rendu": true
    },
    {
        "titre": "Chemical Engineer",
        "etudiant": 11,
        "professeur": 2,
        "dateDeCreation": "29/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi porttitor lorem id ligula.",
        "rendu": false
    },
    {
        "titre": "Director of Sales",
        "etudiant": 1,
        "professeur": 3,
        "dateDeCreation": "14/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Ut tellus.",
        "rendu": false
    },
    {
        "titre": "Nuclear Power Engineer",
        "etudiant": 20,
        "professeur": 3,
        "dateDeCreation": "01/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec ut dolor.",
        "rendu": false
    },
    {
        "titre": "Human Resources Assistant IV",
        "etudiant": 8,
        "professeur": 3,
        "dateDeCreation": "23/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi vel lectus in quam fringilla rhoncus.",
        "rendu": false
    },
    {
        "titre": "Environmental Specialist",
        "etudiant": 15,
        "professeur": 2,
        "dateDeCreation": "11/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis aliquam convallis nunc.",
        "rendu": false
    },
    {
        "titre": "Account Coordinator",
        "etudiant": 19,
        "professeur": 3,
        "dateDeCreation": "02/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Assistant Media Planner",
        "etudiant": 14,
        "professeur": 2,
        "dateDeCreation": "22/04/2023",
        "dateDeRendu": "14/10/2023",
        "note": 9,
        "remarque": "Morbi a ipsum.",
        "rendu": false
    },
    {
        "titre": "Information Systems Manager",
        "etudiant": 11,
        "professeur": 2,
        "dateDeCreation": "12/10/2023",
        "dateDeRendu": "23/01/2024",
        "note": 15,
        "remarque": "Nulla ac enim.",
        "rendu": true
    },
    {
        "titre": "Software Test Engineer IV",
        "etudiant": 7,
        "professeur": 4,
        "dateDeCreation": "03/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "rendu": false
    },
    {
        "titre": "Chief Design Engineer",
        "etudiant": 8,
        "professeur": 4,
        "dateDeCreation": "27/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Maecenas pulvinar lobortis est.",
        "rendu": false
    },
    {
        "titre": "Chemical Engineer",
        "etudiant": 2,
        "professeur": 3,
        "dateDeCreation": "01/02/2024",
        "dateDeRendu": "09/10/2023",
        "note": 15,
        "remarque": "Nam dui.",
        "rendu": true
    },
    {
        "titre": "Staff Scientist",
        "etudiant": 16,
        "professeur": 1,
        "dateDeCreation": "13/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Sed sagittis.",
        "rendu": false
    },
    {
        "titre": "Senior Cost Accountant",
        "etudiant": 4,
        "professeur": 1,
        "dateDeCreation": "31/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Praesent lectus.",
        "rendu": false
    },
    {
        "titre": "Assistant Manager",
        "etudiant": 17,
        "professeur": 2,
        "dateDeCreation": "07/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis mattis egestas metus.",
        "rendu": false
    },
    {
        "titre": "VP Product Management",
        "etudiant": 14,
        "professeur": 2,
        "dateDeCreation": "11/04/2024",
        "dateDeRendu": "18/02/2024",
        "note": 17,
        "remarque": "Nulla ac enim.",
        "rendu": false
    },
    {
        "titre": "Staff Accountant III",
        "etudiant": 20,
        "professeur": 4,
        "dateDeCreation": "09/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus in felis eu sapien cursus vestibulum.",
        "rendu": false
    },
    {
        "titre": "Teacher",
        "etudiant": 8,
        "professeur": 3,
        "dateDeCreation": "31/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi non lectus.",
        "rendu": false
    },
    {
        "titre": "GIS Technical Architect",
        "etudiant": 19,
        "professeur": 5,
        "dateDeCreation": "30/01/2023",
        "dateDeRendu": "02/05/2023",
        "note": 13,
        "remarque": "Nulla mollis molestie lorem.",
        "rendu": true
    },
    {
        "titre": "Financial Analyst",
        "etudiant": 20,
        "professeur": 2,
        "dateDeCreation": "10/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec ut mauris eget massa tempor convallis.",
        "rendu": false
    },
    {
        "titre": "Junior Executive",
        "etudiant": 6,
        "professeur": 2,
        "dateDeCreation": "07/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
        "rendu": false
    },
    {
        "titre": "Actuary",
        "etudiant": 13,
        "professeur": 1,
        "dateDeCreation": "05/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "rendu": false
    },
    {
        "titre": "Cost Accountant",
        "etudiant": 15,
        "professeur": 3,
        "dateDeCreation": "13/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Maecenas tincidunt lacus at velit.",
        "rendu": false
    },
    {
        "titre": "Geologist II",
        "etudiant": 15,
        "professeur": 1,
        "dateDeCreation": "20/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Praesent lectus.",
        "rendu": false
    },
    {
        "titre": "Tax Accountant",
        "etudiant": 9,
        "professeur": 1,
        "dateDeCreation": "05/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "rendu": false
    },
    {
        "titre": "VP Accounting",
        "etudiant": 15,
        "professeur": 2,
        "dateDeCreation": "07/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam quis turpis eget elit sodales scelerisque.",
        "rendu": false
    },
    {
        "titre": "Payment Adjustment Coordinator",
        "etudiant": 8,
        "professeur": 3,
        "dateDeCreation": "18/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "rendu": false
    },
    {
        "titre": "Paralegal",
        "etudiant": 5,
        "professeur": 1,
        "dateDeCreation": "10/04/2023",
        "dateDeRendu": "17/07/2023",
        "note": 11,
        "remarque": "Cras in purus eu magna vulputate luctus.",
        "rendu": true
    },
    {
        "titre": "Design Engineer",
        "etudiant": 9,
        "professeur": 1,
        "dateDeCreation": "05/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Pellentesque ultrices mattis odio.",
        "rendu": false
    },
    {
        "titre": "Research Assistant I",
        "etudiant": 9,
        "professeur": 1,
        "dateDeCreation": "13/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aenean auctor gravida sem.",
        "rendu": false
    },
    {
        "titre": "Marketing Assistant",
        "etudiant": 18,
        "professeur": 2,
        "dateDeCreation": "15/11/2023",
        "dateDeRendu": "17/01/2024",
        "note": 11,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Senior Sales Associate",
        "etudiant": 5,
        "professeur": 3,
        "dateDeCreation": "29/03/2023",
        "dateDeRendu": "19/10/2023",
        "note": 17,
        "remarque": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "rendu": true
    },
    {
        "titre": "Nurse",
        "etudiant": 12,
        "professeur": 4,
        "dateDeCreation": "03/04/2024",
        "dateDeRendu": "03/02/2024",
        "note": 18,
        "remarque": "Morbi a ipsum.",
        "rendu": false
    },
    {
        "titre": "Project Manager",
        "etudiant": 2,
        "professeur": 4,
        "dateDeCreation": "04/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Quisque porta volutpat erat.",
        "rendu": false
    },
    {
        "titre": "Technical Writer",
        "etudiant": 7,
        "professeur": 2,
        "dateDeCreation": "14/07/2023",
        "dateDeRendu": "25/03/2024",
        "note": 18,
        "remarque": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "rendu": true
    },
    {
        "titre": "Senior Editor",
        "etudiant": 8,
        "professeur": 5,
        "dateDeCreation": "22/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Proin interdum mauris non ligula pellentesque ultrices.",
        "rendu": false
    },
    {
        "titre": "Help Desk Operator",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "15/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam molestie nibh in lectus.",
        "rendu": false
    },
    {
        "titre": "Senior Quality Engineer",
        "etudiant": 5,
        "professeur": 2,
        "dateDeCreation": "13/03/2024",
        "dateDeRendu": "10/04/2024",
        "note": 11,
        "remarque": "Donec quis orci eget orci vehicula condimentum.",
        "rendu": true
    },
    {
        "titre": "Chief Design Engineer",
        "etudiant": 14,
        "professeur": 1,
        "dateDeCreation": "10/08/2023",
        "dateDeRendu": "06/08/2023",
        "note": 14,
        "remarque": "In eleifend quam a odio.",
        "rendu": false
    },
    {
        "titre": "Health Coach II",
        "etudiant": 15,
        "professeur": 5,
        "dateDeCreation": "04/02/2024",
        "dateDeRendu": "22/04/2024",
        "note": 20,
        "remarque": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
        "rendu": false
    },
    {
        "titre": "Senior Sales Associate",
        "etudiant": 11,
        "professeur": 1,
        "dateDeCreation": "09/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam sit amet diam in magna bibendum imperdiet.",
        "rendu": false
    },
    {
        "titre": "Analog Circuit Design manager",
        "etudiant": 15,
        "professeur": 1,
        "dateDeCreation": "28/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "rendu": false
    },
    {
        "titre": "Programmer Analyst I",
        "etudiant": 3,
        "professeur": 4,
        "dateDeCreation": "04/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla ut erat id mauris vulputate elementum.",
        "rendu": false
    },
    {
        "titre": "Automation Specialist IV",
        "etudiant": 3,
        "professeur": 1,
        "dateDeCreation": "30/01/2024",
        "dateDeRendu": "31/03/2023",
        "note": 19,
        "remarque": "Morbi non quam nec dui luctus rutrum.",
        "rendu": false
    },
    {
        "titre": "Marketing Manager",
        "etudiant": 14,
        "professeur": 1,
        "dateDeCreation": "13/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Etiam pretium iaculis justo.",
        "rendu": false
    },
    {
        "titre": "Administrative Assistant I",
        "etudiant": 8,
        "professeur": 1,
        "dateDeCreation": "24/02/2023",
        "dateDeRendu": "22/03/2024",
        "note": 17,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Junior Executive",
        "etudiant": 8,
        "professeur": 2,
        "dateDeCreation": "29/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Mauris sit amet eros.",
        "rendu": false
    },
    {
        "titre": "Media Manager III",
        "etudiant": 12,
        "professeur": 2,
        "dateDeCreation": "20/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec ut dolor.",
        "rendu": false
    },
    {
        "titre": "Registered Nurse",
        "etudiant": 14,
        "professeur": 3,
        "dateDeCreation": "23/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer non velit.",
        "rendu": false
    },
    {
        "titre": "Analyst Programmer",
        "etudiant": 12,
        "professeur": 1,
        "dateDeCreation": "15/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Etiam vel augue.",
        "rendu": false
    },
    {
        "titre": "Legal Assistant",
        "etudiant": 2,
        "professeur": 3,
        "dateDeCreation": "14/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aenean lectus.",
        "rendu": false
    },
    {
        "titre": "Nurse Practicioner",
        "etudiant": 5,
        "professeur": 3,
        "dateDeCreation": "01/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cras pellentesque volutpat dui.",
        "rendu": false
    },
    {
        "titre": "Community Outreach Specialist",
        "etudiant": 15,
        "professeur": 3,
        "dateDeCreation": "08/02/2023",
        "dateDeRendu": "17/03/2024",
        "note": 11,
        "remarque": "Aenean lectus.",
        "rendu": false
    },
    {
        "titre": "Accounting Assistant IV",
        "etudiant": 14,
        "professeur": 5,
        "dateDeCreation": "30/09/2023",
        "dateDeRendu": "04/04/2023",
        "note": 13,
        "remarque": "Mauris lacinia sapien quis libero.",
        "rendu": false
    },
    {
        "titre": "Web Developer III",
        "etudiant": 9,
        "professeur": 1,
        "dateDeCreation": "16/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Pellentesque at nulla.",
        "rendu": false
    },
    {
        "titre": "Community Outreach Specialist",
        "etudiant": 4,
        "professeur": 3,
        "dateDeCreation": "01/01/2024",
        "dateDeRendu": "24/03/2024",
        "note": 12,
        "remarque": "Maecenas ut massa quis augue luctus tincidunt.",
        "rendu": true
    },
    {
        "titre": "Compensation Analyst",
        "etudiant": 6,
        "professeur": 5,
        "dateDeCreation": "11/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aenean lectus.",
        "rendu": false
    },
    {
        "titre": "Chemical Engineer",
        "etudiant": 8,
        "professeur": 3,
        "dateDeCreation": "06/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer ac leo.",
        "rendu": false
    },
    {
        "titre": "Librarian",
        "etudiant": 17,
        "professeur": 3,
        "dateDeCreation": "10/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis ac nibh.",
        "rendu": false
    },
    {
        "titre": "Software Test Engineer II",
        "etudiant": 9,
        "professeur": 5,
        "dateDeCreation": "25/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Praesent lectus.",
        "rendu": false
    },
    {
        "titre": "Analog Circuit Design manager",
        "etudiant": 18,
        "professeur": 2,
        "dateDeCreation": "12/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla justo.",
        "rendu": false
    },
    {
        "titre": "Assistant Professor",
        "etudiant": 5,
        "professeur": 2,
        "dateDeCreation": "07/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer non velit.",
        "rendu": false
    },
    {
        "titre": "Financial Advisor",
        "etudiant": 18,
        "professeur": 4,
        "dateDeCreation": "09/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Curabitur gravida nisi at nibh.",
        "rendu": false
    },
    {
        "titre": "Graphic Designer",
        "etudiant": 3,
        "professeur": 4,
        "dateDeCreation": "06/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ac est lacinia nisi venenatis tristique.",
        "rendu": false
    },
    {
        "titre": "Financial Advisor",
        "etudiant": 6,
        "professeur": 3,
        "dateDeCreation": "05/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In blandit ultrices enim.",
        "rendu": false
    },
    {
        "titre": "Account Executive",
        "etudiant": 14,
        "professeur": 3,
        "dateDeCreation": "30/09/2023",
        "dateDeRendu": "16/10/2023",
        "note": 20,
        "remarque": "Vivamus vel nulla eget eros elementum pellentesque.",
        "rendu": false
    },
    {
        "titre": "Product Engineer",
        "etudiant": 20,
        "professeur": 5,
        "dateDeCreation": "21/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "rendu": false
    },
    {
        "titre": "Research Associate",
        "etudiant": 8,
        "professeur": 5,
        "dateDeCreation": "13/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Phasellus id sapien in sapien iaculis congue.",
        "rendu": false
    },
    {
        "titre": "Pharmacist",
        "etudiant": 15,
        "professeur": 3,
        "dateDeCreation": "02/05/2023",
        "dateDeRendu": "01/03/2024",
        "note": 9,
        "remarque": "Pellentesque viverra pede ac diam.",
        "rendu": true
    },
    {
        "titre": "Operator",
        "etudiant": 7,
        "professeur": 3,
        "dateDeCreation": "29/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aenean auctor gravida sem.",
        "rendu": false
    },
    {
        "titre": "Analog Circuit Design manager",
        "etudiant": 17,
        "professeur": 4,
        "dateDeCreation": "19/02/2024",
        "dateDeRendu": "31/12/2023",
        "note": 13,
        "remarque": "Duis aliquam convallis nunc.",
        "rendu": true
    },
    {
        "titre": "Mechanical Systems Engineer",
        "etudiant": 8,
        "professeur": 3,
        "dateDeCreation": "22/02/2023",
        "dateDeRendu": "27/04/2023",
        "note": 17,
        "remarque": "Sed accumsan felis.",
        "rendu": false
    },
    {
        "titre": "Actuary",
        "etudiant": 10,
        "professeur": 5,
        "dateDeCreation": "20/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam non mauris.",
        "rendu": false
    },
    {
        "titre": "Accounting Assistant I",
        "etudiant": 10,
        "professeur": 2,
        "dateDeCreation": "16/02/2023",
        "dateDeRendu": "13/10/2023",
        "note": 19,
        "remarque": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "rendu": true
    },
    {
        "titre": "Nurse",
        "etudiant": 9,
        "professeur": 3,
        "dateDeCreation": "31/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cras non velit nec nisi vulputate nonummy.",
        "rendu": false
    },
    {
        "titre": "Design Engineer",
        "etudiant": 15,
        "professeur": 1,
        "dateDeCreation": "11/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam molestie nibh in lectus.",
        "rendu": false
    },
    {
        "titre": "Sales Representative",
        "etudiant": 5,
        "professeur": 2,
        "dateDeCreation": "30/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Quisque ut erat.",
        "rendu": false
    },
    {
        "titre": "VP Sales",
        "etudiant": 13,
        "professeur": 5,
        "dateDeCreation": "11/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Praesent lectus.",
        "rendu": false
    },
    {
        "titre": "Structural Engineer",
        "etudiant": 17,
        "professeur": 3,
        "dateDeCreation": "03/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cras non velit nec nisi vulputate nonummy.",
        "rendu": false
    },
    {
        "titre": "Product Engineer",
        "etudiant": 4,
        "professeur": 3,
        "dateDeCreation": "19/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis ac nibh.",
        "rendu": false
    },
    {
        "titre": "Administrative Assistant IV",
        "etudiant": 17,
        "professeur": 1,
        "dateDeCreation": "02/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Pellentesque eget nunc.",
        "rendu": false
    },
    {
        "titre": "Engineer III",
        "etudiant": 3,
        "professeur": 5,
        "dateDeCreation": "28/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla ut erat id mauris vulputate elementum.",
        "rendu": false
    },
    {
        "titre": "Design Engineer",
        "etudiant": 2,
        "professeur": 1,
        "dateDeCreation": "15/10/2023",
        "dateDeRendu": "15/04/2023",
        "note": 8,
        "remarque": "Nullam sit amet turpis elementum ligula vehicula consequat.",
        "rendu": true
    },
    {
        "titre": "Product Engineer",
        "etudiant": 20,
        "professeur": 1,
        "dateDeCreation": "20/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus vel nulla eget eros elementum pellentesque.",
        "rendu": false
    },
    {
        "titre": "Statistician I",
        "etudiant": 8,
        "professeur": 3,
        "dateDeCreation": "16/05/2023",
        "dateDeRendu": "25/02/2024",
        "note": 11,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Chemical Engineer",
        "etudiant": 8,
        "professeur": 3,
        "dateDeCreation": "07/02/2024",
        "dateDeRendu": "01/05/2024",
        "note": 13,
        "remarque": "Sed accumsan felis.",
        "rendu": true
    },
    {
        "titre": "Database Administrator II",
        "etudiant": 13,
        "professeur": 2,
        "dateDeCreation": "09/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "rendu": false
    },
    {
        "titre": "Help Desk Technician",
        "etudiant": 15,
        "professeur": 4,
        "dateDeCreation": "24/11/2023",
        "dateDeRendu": "06/06/2023",
        "note": 14,
        "remarque": "Mauris lacinia sapien quis libero.",
        "rendu": true
    },
    {
        "titre": "Physical Therapy Assistant",
        "etudiant": 7,
        "professeur": 2,
        "dateDeCreation": "12/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla ac enim.",
        "rendu": false
    },
    {
        "titre": "Mechanical Systems Engineer",
        "etudiant": 6,
        "professeur": 3,
        "dateDeCreation": "30/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": false
    },
    {
        "titre": "Data Coordinator",
        "etudiant": 17,
        "professeur": 3,
        "dateDeCreation": "02/03/2024",
        "dateDeRendu": "10/02/2024",
        "note": 20,
        "remarque": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "rendu": true
    },
    {
        "titre": "Food Chemist",
        "etudiant": 20,
        "professeur": 2,
        "dateDeCreation": "29/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Etiam justo.",
        "rendu": false
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 20,
        "professeur": 2,
        "dateDeCreation": "09/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam non mauris.",
        "rendu": false
    },
    {
        "titre": "Nuclear Power Engineer",
        "etudiant": 18,
        "professeur": 2,
        "dateDeCreation": "31/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        "rendu": false
    },
    {
        "titre": "Financial Advisor",
        "etudiant": 18,
        "professeur": 1,
        "dateDeCreation": "15/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In quis justo.",
        "rendu": false
    },
    {
        "titre": "Web Designer I",
        "etudiant": 9,
        "professeur": 3,
        "dateDeCreation": "18/01/2024",
        "dateDeRendu": "23/12/2023",
        "note": 16,
        "remarque": "Proin risus.",
        "rendu": true
    },
    {
        "titre": "Marketing Manager",
        "etudiant": 17,
        "professeur": 2,
        "dateDeCreation": "22/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        "rendu": false
    },
    {
        "titre": "Account Representative III",
        "etudiant": 18,
        "professeur": 2,
        "dateDeCreation": "23/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In eleifend quam a odio.",
        "rendu": false
    },
    {
        "titre": "Executive Secretary",
        "etudiant": 20,
        "professeur": 2,
        "dateDeCreation": "24/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Sed accumsan felis.",
        "rendu": false
    },
    {
        "titre": "Administrative Assistant IV",
        "etudiant": 18,
        "professeur": 4,
        "dateDeCreation": "06/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi quis tortor id nulla ultrices aliquet.",
        "rendu": false
    },
    {
        "titre": "Recruiter",
        "etudiant": 1,
        "professeur": 5,
        "dateDeCreation": "22/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Maecenas tincidunt lacus at velit.",
        "rendu": false
    },
    {
        "titre": "Marketing Assistant",
        "etudiant": 13,
        "professeur": 4,
        "dateDeCreation": "11/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Etiam faucibus cursus urna.",
        "rendu": false
    },
    {
        "titre": "Actuary",
        "etudiant": 14,
        "professeur": 3,
        "dateDeCreation": "15/06/2023",
        "dateDeRendu": "27/12/2023",
        "note": 20,
        "remarque": "Pellentesque eget nunc.",
        "rendu": false
    },
    {
        "titre": "Nurse",
        "etudiant": 14,
        "professeur": 3,
        "dateDeCreation": "28/07/2023",
        "dateDeRendu": "15/01/2024",
        "note": 17,
        "remarque": "Maecenas ut massa quis augue luctus tincidunt.",
        "rendu": false
    },
    {
        "titre": "Analog Circuit Design manager",
        "etudiant": 3,
        "professeur": 1,
        "dateDeCreation": "09/01/2023",
        "dateDeRendu": "09/09/2023",
        "note": 15,
        "remarque": "Fusce consequat.",
        "rendu": true
    },
    {
        "titre": "Automation Specialist II",
        "etudiant": 7,
        "professeur": 5,
        "dateDeCreation": "30/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Ut at dolor quis odio consequat varius.",
        "rendu": false
    },
    {
        "titre": "Desktop Support Technician",
        "etudiant": 19,
        "professeur": 3,
        "dateDeCreation": "14/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
        "rendu": false
    },
    {
        "titre": "Office Assistant I",
        "etudiant": 2,
        "professeur": 5,
        "dateDeCreation": "28/02/2023",
        "dateDeRendu": "19/07/2023",
        "note": 15,
        "remarque": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        "rendu": true
    },
    {
        "titre": "Senior Quality Engineer",
        "etudiant": 12,
        "professeur": 4,
        "dateDeCreation": "08/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla ac enim.",
        "rendu": false
    },
    {
        "titre": "Research Nurse",
        "etudiant": 18,
        "professeur": 4,
        "dateDeCreation": "22/01/2023",
        "dateDeRendu": "26/06/2023",
        "note": 18,
        "remarque": "Nam nulla.",
        "rendu": false
    },
    {
        "titre": "Assistant Professor",
        "etudiant": 16,
        "professeur": 3,
        "dateDeCreation": "20/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aenean fermentum.",
        "rendu": false
    },
    {
        "titre": "Registered Nurse",
        "etudiant": 14,
        "professeur": 4,
        "dateDeCreation": "06/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Pellentesque at nulla.",
        "rendu": false
    },
    {
        "titre": "Computer Systems Analyst IV",
        "etudiant": 5,
        "professeur": 3,
        "dateDeCreation": "30/08/2023",
        "dateDeRendu": "15/11/2023",
        "note": 18,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": true
    },
    {
        "titre": "Office Assistant I",
        "etudiant": 1,
        "professeur": 4,
        "dateDeCreation": "24/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla tempus.",
        "rendu": false
    },
    {
        "titre": "Assistant Professor",
        "etudiant": 4,
        "professeur": 3,
        "dateDeCreation": "11/07/2023",
        "dateDeRendu": "03/08/2023",
        "note": 15,
        "remarque": "Suspendisse potenti.",
        "rendu": true
    },
    {
        "titre": "Research Assistant I",
        "etudiant": 16,
        "professeur": 5,
        "dateDeCreation": "06/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis ac nibh.",
        "rendu": false
    },
    {
        "titre": "Paralegal",
        "etudiant": 8,
        "professeur": 1,
        "dateDeCreation": "29/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aenean sit amet justo.",
        "rendu": false
    },
    {
        "titre": "Account Executive",
        "etudiant": 9,
        "professeur": 1,
        "dateDeCreation": "05/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "rendu": false
    },
    {
        "titre": "Teacher",
        "etudiant": 6,
        "professeur": 2,
        "dateDeCreation": "17/06/2023",
        "dateDeRendu": "24/05/2023",
        "note": 18,
        "remarque": "Nullam sit amet turpis elementum ligula vehicula consequat.",
        "rendu": false
    },
    {
        "titre": "Assistant Professor",
        "etudiant": 19,
        "professeur": 5,
        "dateDeCreation": "28/02/2023",
        "dateDeRendu": "21/05/2024",
        "note": 17,
        "remarque": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "rendu": true
    },
    {
        "titre": "Environmental Specialist",
        "etudiant": 8,
        "professeur": 5,
        "dateDeCreation": "31/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nunc purus.",
        "rendu": false
    },
    {
        "titre": "Senior Financial Analyst",
        "etudiant": 15,
        "professeur": 4,
        "dateDeCreation": "15/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse accumsan tortor quis turpis.",
        "rendu": false
    },
    {
        "titre": "VP Quality Control",
        "etudiant": 12,
        "professeur": 3,
        "dateDeCreation": "12/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla nisl.",
        "rendu": false
    },
    {
        "titre": "Marketing Assistant",
        "etudiant": 7,
        "professeur": 5,
        "dateDeCreation": "26/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer ac neque.",
        "rendu": false
    },
    {
        "titre": "Quality Engineer",
        "etudiant": 16,
        "professeur": 1,
        "dateDeCreation": "22/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Proin eu mi.",
        "rendu": false
    },
    {
        "titre": "Staff Scientist",
        "etudiant": 20,
        "professeur": 3,
        "dateDeCreation": "17/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Fusce posuere felis sed lacus.",
        "rendu": false
    },
    {
        "titre": "Information Systems Manager",
        "etudiant": 13,
        "professeur": 4,
        "dateDeCreation": "12/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla mollis molestie lorem.",
        "rendu": false
    },
    {
        "titre": "Web Designer I",
        "etudiant": 15,
        "professeur": 5,
        "dateDeCreation": "20/11/2023",
        "dateDeRendu": "20/08/2023",
        "note": 11,
        "remarque": "Donec posuere metus vitae ipsum.",
        "rendu": true
    },
    {
        "titre": "Technical Writer",
        "etudiant": 7,
        "professeur": 5,
        "dateDeCreation": "20/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam sit amet diam in magna bibendum imperdiet.",
        "rendu": false
    },
    {
        "titre": "Occupational Therapist",
        "etudiant": 2,
        "professeur": 1,
        "dateDeCreation": "28/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum sed magna at nunc commodo placerat.",
        "rendu": false
    },
    {
        "titre": "Safety Technician IV",
        "etudiant": 7,
        "professeur": 2,
        "dateDeCreation": "20/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "rendu": false
    },
    {
        "titre": "Account Coordinator",
        "etudiant": 4,
        "professeur": 2,
        "dateDeCreation": "17/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "Office Assistant IV",
        "etudiant": 17,
        "professeur": 5,
        "dateDeCreation": "04/10/2023",
        "dateDeRendu": "07/04/2023",
        "note": 19,
        "remarque": "Nunc purus.",
        "rendu": true
    },
    {
        "titre": "Professor",
        "etudiant": 13,
        "professeur": 5,
        "dateDeCreation": "23/07/2023",
        "dateDeRendu": "01/11/2023",
        "note": 12,
        "remarque": "Aliquam non mauris.",
        "rendu": false
    },
    {
        "titre": "Software Engineer II",
        "etudiant": 18,
        "professeur": 4,
        "dateDeCreation": "02/02/2024",
        "dateDeRendu": "09/07/2023",
        "note": 12,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": true
    },
    {
        "titre": "Senior Cost Accountant",
        "etudiant": 17,
        "professeur": 3,
        "dateDeCreation": "19/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam tristique tortor eu pede.",
        "rendu": false
    },
    {
        "titre": "Account Executive",
        "etudiant": 6,
        "professeur": 2,
        "dateDeCreation": "20/01/2023",
        "dateDeRendu": "22/04/2023",
        "note": 15,
        "remarque": "Nulla tempus.",
        "rendu": true
    },
    {
        "titre": "Help Desk Operator",
        "etudiant": 7,
        "professeur": 4,
        "dateDeCreation": "22/10/2023",
        "dateDeRendu": "03/11/2023",
        "note": 10,
        "remarque": "Morbi vel lectus in quam fringilla rhoncus.",
        "rendu": true
    },
    {
        "titre": "Geological Engineer",
        "etudiant": 2,
        "professeur": 1,
        "dateDeCreation": "25/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "rendu": false
    },
    {
        "titre": "Administrative Assistant II",
        "etudiant": 8,
        "professeur": 3,
        "dateDeCreation": "24/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla justo.",
        "rendu": false
    },
    {
        "titre": "Web Designer IV",
        "etudiant": 16,
        "professeur": 3,
        "dateDeCreation": "26/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Engineer II",
        "etudiant": 16,
        "professeur": 2,
        "dateDeCreation": "10/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam sit amet diam in magna bibendum imperdiet.",
        "rendu": false
    },
    {
        "titre": "Dental Hygienist",
        "etudiant": 1,
        "professeur": 4,
        "dateDeCreation": "11/02/2024",
        "dateDeRendu": "30/04/2023",
        "note": 12,
        "remarque": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "rendu": false
    },
    {
        "titre": "Research Associate",
        "etudiant": 12,
        "professeur": 4,
        "dateDeCreation": "25/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Mauris ullamcorper purus sit amet nulla.",
        "rendu": false
    },
    {
        "titre": "Sales Representative",
        "etudiant": 2,
        "professeur": 4,
        "dateDeCreation": "03/04/2024",
        "dateDeRendu": "23/09/2023",
        "note": 16,
        "remarque": "Phasellus sit amet erat.",
        "rendu": true
    },
    {
        "titre": "Research Assistant III",
        "etudiant": 9,
        "professeur": 4,
        "dateDeCreation": "23/07/2023",
        "dateDeRendu": "15/12/2023",
        "note": 19,
        "remarque": "Vestibulum ac est lacinia nisi venenatis tristique.",
        "rendu": false
    },
    {
        "titre": "Environmental Tech",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "28/02/2023",
        "dateDeRendu": "07/05/2024",
        "note": 13,
        "remarque": "Mauris sit amet eros.",
        "rendu": false
    },
    {
        "titre": "Nurse Practicioner",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "06/02/2024",
        "dateDeRendu": "01/08/2023",
        "note": 15,
        "remarque": "Cras pellentesque volutpat dui.",
        "rendu": false
    },
    {
        "titre": "Physical Therapy Assistant",
        "etudiant": 12,
        "professeur": 3,
        "dateDeCreation": "29/03/2023",
        "dateDeRendu": "01/02/2024",
        "note": 13,
        "remarque": "Pellentesque eget nunc.",
        "rendu": true
    },
    {
        "titre": "Software Consultant",
        "etudiant": 19,
        "professeur": 2,
        "dateDeCreation": "24/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus in felis eu sapien cursus vestibulum.",
        "rendu": false
    },
    {
        "titre": "Research Nurse",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "14/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Ut tellus.",
        "rendu": false
    },
    {
        "titre": "Quality Engineer",
        "etudiant": 15,
        "professeur": 2,
        "dateDeCreation": "07/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Ut at dolor quis odio consequat varius.",
        "rendu": false
    },
    {
        "titre": "Director of Sales",
        "etudiant": 18,
        "professeur": 5,
        "dateDeCreation": "31/05/2023",
        "dateDeRendu": "08/05/2024",
        "note": 11,
        "remarque": "Proin at turpis a pede posuere nonummy.",
        "rendu": true
    },
    {
        "titre": "Librarian",
        "etudiant": 9,
        "professeur": 5,
        "dateDeCreation": "25/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Ut at dolor quis odio consequat varius.",
        "rendu": false
    },
    {
        "titre": "VP Product Management",
        "etudiant": 19,
        "professeur": 3,
        "dateDeCreation": "12/04/2023",
        "dateDeRendu": "02/12/2023",
        "note": 19,
        "remarque": "Phasellus in felis.",
        "rendu": true
    },
    {
        "titre": "Social Worker",
        "etudiant": 1,
        "professeur": 2,
        "dateDeCreation": "21/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Praesent lectus.",
        "rendu": false
    },
    {
        "titre": "Office Assistant IV",
        "etudiant": 14,
        "professeur": 2,
        "dateDeCreation": "07/07/2023",
        "dateDeRendu": "26/05/2024",
        "note": 12,
        "remarque": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
        "rendu": false
    },
    {
        "titre": "Design Engineer",
        "etudiant": 17,
        "professeur": 1,
        "dateDeCreation": "13/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Sed vel enim sit amet nunc viverra dapibus.",
        "rendu": false
    },
    {
        "titre": "Accountant III",
        "etudiant": 4,
        "professeur": 3,
        "dateDeCreation": "06/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla suscipit ligula in lacus.",
        "rendu": false
    },
    {
        "titre": "Nurse Practicioner",
        "etudiant": 8,
        "professeur": 3,
        "dateDeCreation": "21/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In sagittis dui vel nisl.",
        "rendu": false
    },
    {
        "titre": "VP Product Management",
        "etudiant": 3,
        "professeur": 4,
        "dateDeCreation": "15/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam tristique tortor eu pede.",
        "rendu": false
    },
    {
        "titre": "Accounting Assistant III",
        "etudiant": 7,
        "professeur": 1,
        "dateDeCreation": "28/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis consequat dui nec nisi volutpat eleifend.",
        "rendu": false
    },
    {
        "titre": "Staff Accountant I",
        "etudiant": 12,
        "professeur": 3,
        "dateDeCreation": "02/12/2023",
        "dateDeRendu": "01/05/2024",
        "note": 14,
        "remarque": "In quis justo.",
        "rendu": false
    },
    {
        "titre": "Speech Pathologist",
        "etudiant": 17,
        "professeur": 1,
        "dateDeCreation": "12/10/2023",
        "dateDeRendu": "15/10/2023",
        "note": 20,
        "remarque": "Quisque ut erat.",
        "rendu": false
    },
    {
        "titre": "Database Administrator II",
        "etudiant": 13,
        "professeur": 1,
        "dateDeCreation": "11/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "rendu": false
    },
    {
        "titre": "Administrative Assistant IV",
        "etudiant": 8,
        "professeur": 4,
        "dateDeCreation": "11/04/2024",
        "dateDeRendu": "30/04/2024",
        "note": 20,
        "remarque": "Morbi non quam nec dui luctus rutrum.",
        "rendu": false
    },
    {
        "titre": "VP Quality Control",
        "etudiant": 2,
        "professeur": 2,
        "dateDeCreation": "25/12/2023",
        "dateDeRendu": "01/05/2023",
        "note": 10,
        "remarque": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
        "rendu": false
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 5,
        "professeur": 1,
        "dateDeCreation": "12/01/2024",
        "dateDeRendu": "17/08/2023",
        "note": 15,
        "remarque": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
        "rendu": true
    },
    {
        "titre": "Geological Engineer",
        "etudiant": 17,
        "professeur": 3,
        "dateDeCreation": "16/07/2023",
        "dateDeRendu": "12/11/2023",
        "note": 8,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Financial Analyst",
        "etudiant": 2,
        "professeur": 4,
        "dateDeCreation": "14/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        "rendu": false
    },
    {
        "titre": "Senior Financial Analyst",
        "etudiant": 4,
        "professeur": 3,
        "dateDeCreation": "29/03/2024",
        "dateDeRendu": "29/08/2023",
        "note": 8,
        "remarque": "Integer tincidunt ante vel ipsum.",
        "rendu": false
    },
    {
        "titre": "Chief Design Engineer",
        "etudiant": 2,
        "professeur": 4,
        "dateDeCreation": "22/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
        "rendu": false
    },
    {
        "titre": "Staff Scientist",
        "etudiant": 13,
        "professeur": 1,
        "dateDeCreation": "24/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Pellentesque at nulla.",
        "rendu": false
    },
    {
        "titre": "Marketing Assistant",
        "etudiant": 11,
        "professeur": 1,
        "dateDeCreation": "06/06/2023",
        "dateDeRendu": "29/10/2023",
        "note": 14,
        "remarque": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "rendu": true
    },
    {
        "titre": "Engineer I",
        "etudiant": 15,
        "professeur": 3,
        "dateDeCreation": "30/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cras non velit nec nisi vulputate nonummy.",
        "rendu": false
    },
    {
        "titre": "Senior Cost Accountant",
        "etudiant": 3,
        "professeur": 5,
        "dateDeCreation": "16/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus tortor.",
        "rendu": false
    },
    {
        "titre": "Sales Associate",
        "etudiant": 7,
        "professeur": 2,
        "dateDeCreation": "22/02/2023",
        "dateDeRendu": "21/02/2024",
        "note": 8,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        "rendu": true
    },
    {
        "titre": "Office Assistant I",
        "etudiant": 11,
        "professeur": 1,
        "dateDeCreation": "07/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
        "rendu": false
    },
    {
        "titre": "Database Administrator III",
        "etudiant": 6,
        "professeur": 1,
        "dateDeCreation": "02/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla suscipit ligula in lacus.",
        "rendu": false
    },
    {
        "titre": "Research Nurse",
        "etudiant": 10,
        "professeur": 3,
        "dateDeCreation": "08/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "rendu": false
    },
    {
        "titre": "Geological Engineer",
        "etudiant": 3,
        "professeur": 5,
        "dateDeCreation": "01/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Pellentesque ultrices mattis odio.",
        "rendu": false
    },
    {
        "titre": "Occupational Therapist",
        "etudiant": 18,
        "professeur": 1,
        "dateDeCreation": "25/02/2023",
        "dateDeRendu": "15/07/2023",
        "note": 18,
        "remarque": "Morbi porttitor lorem id ligula.",
        "rendu": true
    },
    {
        "titre": "Physical Therapy Assistant",
        "etudiant": 11,
        "professeur": 3,
        "dateDeCreation": "07/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam sit amet turpis elementum ligula vehicula consequat.",
        "rendu": false
    },
    {
        "titre": "Environmental Tech",
        "etudiant": 18,
        "professeur": 1,
        "dateDeCreation": "05/08/2023",
        "dateDeRendu": "01/07/2023",
        "note": 16,
        "remarque": "Duis mattis egestas metus.",
        "rendu": true
    },
    {
        "titre": "Director of Sales",
        "etudiant": 7,
        "professeur": 2,
        "dateDeCreation": "06/10/2023",
        "dateDeRendu": "16/10/2023",
        "note": 20,
        "remarque": "Maecenas rhoncus aliquam lacus.",
        "rendu": true
    },
    {
        "titre": "Statistician III",
        "etudiant": 12,
        "professeur": 2,
        "dateDeCreation": "17/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam erat volutpat.",
        "rendu": false
    },
    {
        "titre": "Executive Secretary",
        "etudiant": 18,
        "professeur": 4,
        "dateDeCreation": "14/07/2023",
        "dateDeRendu": "20/12/2023",
        "note": 19,
        "remarque": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
        "rendu": true
    },
    {
        "titre": "Nurse",
        "etudiant": 2,
        "professeur": 4,
        "dateDeCreation": "08/10/2023",
        "dateDeRendu": "24/09/2023",
        "note": 15,
        "remarque": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "rendu": false
    },
    {
        "titre": "Occupational Therapist",
        "etudiant": 5,
        "professeur": 4,
        "dateDeCreation": "11/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "rendu": false
    },
    {
        "titre": "Senior Sales Associate",
        "etudiant": 17,
        "professeur": 2,
        "dateDeCreation": "28/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Ut at dolor quis odio consequat varius.",
        "rendu": false
    },
    {
        "titre": "Registered Nurse",
        "etudiant": 10,
        "professeur": 3,
        "dateDeCreation": "08/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi porttitor lorem id ligula.",
        "rendu": false
    },
    {
        "titre": "Research Nurse",
        "etudiant": 13,
        "professeur": 3,
        "dateDeCreation": "18/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": false
    },
    {
        "titre": "Registered Nurse",
        "etudiant": 13,
        "professeur": 4,
        "dateDeCreation": "21/06/2023",
        "dateDeRendu": "01/08/2023",
        "note": 13,
        "remarque": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "rendu": false
    },
    {
        "titre": "Sales Associate",
        "etudiant": 13,
        "professeur": 2,
        "dateDeCreation": "24/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Ut tellus.",
        "rendu": false
    },
    {
        "titre": "Tax Accountant",
        "etudiant": 17,
        "professeur": 2,
        "dateDeCreation": "17/02/2023",
        "dateDeRendu": "28/10/2023",
        "note": 19,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": true
    },
    {
        "titre": "Developer IV",
        "etudiant": 9,
        "professeur": 5,
        "dateDeCreation": "31/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "Desktop Support Technician",
        "etudiant": 5,
        "professeur": 4,
        "dateDeCreation": "12/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In eleifend quam a odio.",
        "rendu": false
    },
    {
        "titre": "Paralegal",
        "etudiant": 20,
        "professeur": 1,
        "dateDeCreation": "16/07/2023",
        "dateDeRendu": "09/01/2024",
        "note": 16,
        "remarque": "Sed ante.",
        "rendu": true
    },
    {
        "titre": "Environmental Specialist",
        "etudiant": 18,
        "professeur": 3,
        "dateDeCreation": "25/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "rendu": false
    },
    {
        "titre": "Engineer I",
        "etudiant": 4,
        "professeur": 5,
        "dateDeCreation": "21/11/2023",
        "dateDeRendu": "14/03/2024",
        "note": 14,
        "remarque": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
        "rendu": true
    },
    {
        "titre": "Software Consultant",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "18/09/2023",
        "dateDeRendu": "25/02/2024",
        "note": 19,
        "remarque": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
        "rendu": true
    },
    {
        "titre": "Executive Secretary",
        "etudiant": 18,
        "professeur": 4,
        "dateDeCreation": "20/02/2024",
        "dateDeRendu": "16/01/2024",
        "note": 20,
        "remarque": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
        "rendu": true
    },
    {
        "titre": "Physical Therapy Assistant",
        "etudiant": 3,
        "professeur": 3,
        "dateDeCreation": "02/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        "rendu": false
    },
    {
        "titre": "Biostatistician II",
        "etudiant": 15,
        "professeur": 3,
        "dateDeCreation": "30/12/2023",
        "dateDeRendu": "24/05/2024",
        "note": 19,
        "remarque": "Integer ac leo.",
        "rendu": false
    },
    {
        "titre": "Product Engineer",
        "etudiant": 3,
        "professeur": 4,
        "dateDeCreation": "20/08/2023",
        "dateDeRendu": "05/09/2023",
        "note": 16,
        "remarque": "Proin at turpis a pede posuere nonummy.",
        "rendu": true
    },
    {
        "titre": "Software Test Engineer II",
        "etudiant": 15,
        "professeur": 2,
        "dateDeCreation": "02/11/2023",
        "dateDeRendu": "07/05/2023",
        "note": 20,
        "remarque": "Nunc rhoncus dui vel sem.",
        "rendu": false
    },
    {
        "titre": "Graphic Designer",
        "etudiant": 13,
        "professeur": 4,
        "dateDeCreation": "21/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nunc nisl.",
        "rendu": false
    },
    {
        "titre": "VP Sales",
        "etudiant": 15,
        "professeur": 4,
        "dateDeCreation": "19/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "rendu": false
    },
    {
        "titre": "Electrical Engineer",
        "etudiant": 17,
        "professeur": 3,
        "dateDeCreation": "17/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus vel nulla eget eros elementum pellentesque.",
        "rendu": false
    },
    {
        "titre": "Biostatistician I",
        "etudiant": 20,
        "professeur": 4,
        "dateDeCreation": "04/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": false
    },
    {
        "titre": "Budget/Accounting Analyst IV",
        "etudiant": 9,
        "professeur": 5,
        "dateDeCreation": "07/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec ut mauris eget massa tempor convallis.",
        "rendu": false
    },
    {
        "titre": "Speech Pathologist",
        "etudiant": 4,
        "professeur": 4,
        "dateDeCreation": "14/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "rendu": false
    },
    {
        "titre": "Sales Representative",
        "etudiant": 1,
        "professeur": 1,
        "dateDeCreation": "16/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Praesent blandit lacinia erat.",
        "rendu": false
    },
    {
        "titre": "Associate Professor",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "20/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aenean auctor gravida sem.",
        "rendu": false
    },
    {
        "titre": "Clinical Specialist",
        "etudiant": 8,
        "professeur": 5,
        "dateDeCreation": "11/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Phasellus in felis.",
        "rendu": false
    },
    {
        "titre": "Desktop Support Technician",
        "etudiant": 16,
        "professeur": 1,
        "dateDeCreation": "07/10/2023",
        "dateDeRendu": "05/02/2024",
        "note": 10,
        "remarque": "Nullam sit amet turpis elementum ligula vehicula consequat.",
        "rendu": true
    },
    {
        "titre": "Legal Assistant",
        "etudiant": 6,
        "professeur": 4,
        "dateDeCreation": "10/03/2023",
        "dateDeRendu": "26/04/2023",
        "note": 15,
        "remarque": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "rendu": true
    },
    {
        "titre": "Information Systems Manager",
        "etudiant": 12,
        "professeur": 4,
        "dateDeCreation": "20/03/2023",
        "dateDeRendu": "29/01/2024",
        "note": 17,
        "remarque": "Nam tristique tortor eu pede.",
        "rendu": false
    },
    {
        "titre": "Automation Specialist II",
        "etudiant": 14,
        "professeur": 5,
        "dateDeCreation": "14/08/2023",
        "dateDeRendu": "24/11/2023",
        "note": 15,
        "remarque": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        "rendu": false
    },
    {
        "titre": "General Manager",
        "etudiant": 6,
        "professeur": 2,
        "dateDeCreation": "18/01/2023",
        "dateDeRendu": "23/09/2023",
        "note": 11,
        "remarque": "Donec posuere metus vitae ipsum.",
        "rendu": true
    },
    {
        "titre": "Food Chemist",
        "etudiant": 2,
        "professeur": 3,
        "dateDeCreation": "04/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis mattis egestas metus.",
        "rendu": false
    },
    {
        "titre": "Office Assistant IV",
        "etudiant": 4,
        "professeur": 1,
        "dateDeCreation": "08/09/2023",
        "dateDeRendu": "20/06/2023",
        "note": 11,
        "remarque": "Proin risus.",
        "rendu": false
    },
    {
        "titre": "Chief Design Engineer",
        "etudiant": 5,
        "professeur": 2,
        "dateDeCreation": "10/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi quis tortor id nulla ultrices aliquet.",
        "rendu": false
    },
    {
        "titre": "Senior Developer",
        "etudiant": 20,
        "professeur": 4,
        "dateDeCreation": "12/02/2024",
        "dateDeRendu": "21/10/2023",
        "note": 16,
        "remarque": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
        "rendu": false
    },
    {
        "titre": "Librarian",
        "etudiant": 16,
        "professeur": 2,
        "dateDeCreation": "14/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Phasellus id sapien in sapien iaculis congue.",
        "rendu": false
    },
    {
        "titre": "Internal Auditor",
        "etudiant": 18,
        "professeur": 4,
        "dateDeCreation": "24/10/2023",
        "dateDeRendu": "24/11/2023",
        "note": 17,
        "remarque": "Nulla mollis molestie lorem.",
        "rendu": true
    },
    {
        "titre": "Accounting Assistant I",
        "etudiant": 17,
        "professeur": 4,
        "dateDeCreation": "12/12/2023",
        "dateDeRendu": "18/01/2024",
        "note": 15,
        "remarque": "Suspendisse accumsan tortor quis turpis.",
        "rendu": true
    },
    {
        "titre": "GIS Technical Architect",
        "etudiant": 18,
        "professeur": 5,
        "dateDeCreation": "25/04/2024",
        "dateDeRendu": "20/08/2023",
        "note": 10,
        "remarque": "Nam dui.",
        "rendu": false
    },
    {
        "titre": "Design Engineer",
        "etudiant": 17,
        "professeur": 3,
        "dateDeCreation": "15/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Proin at turpis a pede posuere nonummy.",
        "rendu": false
    },
    {
        "titre": "Analog Circuit Design manager",
        "etudiant": 12,
        "professeur": 1,
        "dateDeCreation": "22/02/2024",
        "dateDeRendu": "22/06/2023",
        "note": 15,
        "remarque": "Vivamus tortor.",
        "rendu": true
    },
    {
        "titre": "Food Chemist",
        "etudiant": 4,
        "professeur": 5,
        "dateDeCreation": "25/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cras in purus eu magna vulputate luctus.",
        "rendu": false
    },
    {
        "titre": "Teacher",
        "etudiant": 6,
        "professeur": 2,
        "dateDeCreation": "05/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Phasellus id sapien in sapien iaculis congue.",
        "rendu": false
    },
    {
        "titre": "Pharmacist",
        "etudiant": 8,
        "professeur": 4,
        "dateDeCreation": "07/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
        "rendu": false
    },
    {
        "titre": "Technical Writer",
        "etudiant": 6,
        "professeur": 2,
        "dateDeCreation": "16/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla nisl.",
        "rendu": false
    },
    {
        "titre": "Editor",
        "etudiant": 17,
        "professeur": 3,
        "dateDeCreation": "16/04/2023",
        "dateDeRendu": "16/05/2023",
        "note": 17,
        "remarque": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
        "rendu": true
    },
    {
        "titre": "Engineer III",
        "etudiant": 13,
        "professeur": 3,
        "dateDeCreation": "14/02/2024",
        "dateDeRendu": "04/03/2024",
        "note": 18,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        "rendu": false
    },
    {
        "titre": "Chief Design Engineer",
        "etudiant": 17,
        "professeur": 4,
        "dateDeCreation": "30/03/2023",
        "dateDeRendu": "02/05/2024",
        "note": 20,
        "remarque": "Morbi non quam nec dui luctus rutrum.",
        "rendu": false
    },
    {
        "titre": "Media Manager IV",
        "etudiant": 6,
        "professeur": 2,
        "dateDeCreation": "04/11/2023",
        "dateDeRendu": "19/08/2023",
        "note": 19,
        "remarque": "Vestibulum rutrum rutrum neque.",
        "rendu": false
    },
    {
        "titre": "VP Marketing",
        "etudiant": 1,
        "professeur": 2,
        "dateDeCreation": "19/01/2023",
        "dateDeRendu": "01/09/2023",
        "note": 18,
        "remarque": "Suspendisse accumsan tortor quis turpis.",
        "rendu": false
    },
    {
        "titre": "Junior Executive",
        "etudiant": 9,
        "professeur": 5,
        "dateDeCreation": "09/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer a nibh.",
        "rendu": false
    },
    {
        "titre": "Community Outreach Specialist",
        "etudiant": 5,
        "professeur": 4,
        "dateDeCreation": "16/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Curabitur at ipsum ac tellus semper interdum.",
        "rendu": false
    },
    {
        "titre": "Media Manager IV",
        "etudiant": 18,
        "professeur": 3,
        "dateDeCreation": "17/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam molestie nibh in lectus.",
        "rendu": false
    },
    {
        "titre": "Help Desk Technician",
        "etudiant": 11,
        "professeur": 4,
        "dateDeCreation": "27/01/2024",
        "dateDeRendu": "16/03/2024",
        "note": 8,
        "remarque": "Aenean lectus.",
        "rendu": false
    },
    {
        "titre": "Social Worker",
        "etudiant": 13,
        "professeur": 3,
        "dateDeCreation": "28/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi ut odio.",
        "rendu": false
    },
    {
        "titre": "Statistician I",
        "etudiant": 12,
        "professeur": 5,
        "dateDeCreation": "22/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Phasellus sit amet erat.",
        "rendu": false
    },
    {
        "titre": "Chemical Engineer",
        "etudiant": 18,
        "professeur": 3,
        "dateDeCreation": "29/10/2023",
        "dateDeRendu": "14/11/2023",
        "note": 9,
        "remarque": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "rendu": false
    },
    {
        "titre": "Account Coordinator",
        "etudiant": 7,
        "professeur": 5,
        "dateDeCreation": "10/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis consequat dui nec nisi volutpat eleifend.",
        "rendu": false
    },
    {
        "titre": "Speech Pathologist",
        "etudiant": 8,
        "professeur": 3,
        "dateDeCreation": "19/04/2023",
        "dateDeRendu": "15/12/2023",
        "note": 13,
        "remarque": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
        "rendu": true
    },
    {
        "titre": "Developer III",
        "etudiant": 4,
        "professeur": 1,
        "dateDeCreation": "07/02/2024",
        "dateDeRendu": "26/01/2024",
        "note": 15,
        "remarque": "Pellentesque at nulla.",
        "rendu": false
    },
    {
        "titre": "Chemical Engineer",
        "etudiant": 19,
        "professeur": 5,
        "dateDeCreation": "25/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer ac neque.",
        "rendu": false
    },
    {
        "titre": "Staff Accountant II",
        "etudiant": 13,
        "professeur": 3,
        "dateDeCreation": "29/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
        "rendu": false
    },
    {
        "titre": "General Manager",
        "etudiant": 20,
        "professeur": 1,
        "dateDeCreation": "14/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Proin eu mi.",
        "rendu": false
    },
    {
        "titre": "Chemical Engineer",
        "etudiant": 19,
        "professeur": 4,
        "dateDeCreation": "21/12/2023",
        "dateDeRendu": "30/01/2024",
        "note": 19,
        "remarque": "Aenean sit amet justo.",
        "rendu": false
    },
    {
        "titre": "Quality Engineer",
        "etudiant": 8,
        "professeur": 4,
        "dateDeCreation": "30/12/2023",
        "dateDeRendu": "06/05/2023",
        "note": 11,
        "remarque": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
        "rendu": false
    },
    {
        "titre": "Geologist I",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "17/03/2023",
        "dateDeRendu": "04/01/2024",
        "note": 9,
        "remarque": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "rendu": false
    },
    {
        "titre": "Statistician III",
        "etudiant": 7,
        "professeur": 1,
        "dateDeCreation": "07/08/2023",
        "dateDeRendu": "19/01/2024",
        "note": 18,
        "remarque": "Praesent blandit.",
        "rendu": true
    },
    {
        "titre": "VP Accounting",
        "etudiant": 7,
        "professeur": 2,
        "dateDeCreation": "26/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "rendu": false
    },
    {
        "titre": "Product Engineer",
        "etudiant": 16,
        "professeur": 4,
        "dateDeCreation": "19/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Fusce posuere felis sed lacus.",
        "rendu": false
    },
    {
        "titre": "VP Sales",
        "etudiant": 16,
        "professeur": 3,
        "dateDeCreation": "03/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Phasellus sit amet erat.",
        "rendu": false
    },
    {
        "titre": "Geological Engineer",
        "etudiant": 15,
        "professeur": 2,
        "dateDeCreation": "23/02/2024",
        "dateDeRendu": "04/05/2024",
        "note": 15,
        "remarque": "Pellentesque ultrices mattis odio.",
        "rendu": true
    },
    {
        "titre": "Clinical Specialist",
        "etudiant": 14,
        "professeur": 5,
        "dateDeCreation": "26/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "Senior Sales Associate",
        "etudiant": 11,
        "professeur": 2,
        "dateDeCreation": "02/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In sagittis dui vel nisl.",
        "rendu": false
    },
    {
        "titre": "Geological Engineer",
        "etudiant": 7,
        "professeur": 2,
        "dateDeCreation": "12/12/2023",
        "dateDeRendu": "23/04/2024",
        "note": 16,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Senior Developer",
        "etudiant": 11,
        "professeur": 4,
        "dateDeCreation": "13/02/2023",
        "dateDeRendu": "27/09/2023",
        "note": 12,
        "remarque": "Nulla tellus.",
        "rendu": false
    },
    {
        "titre": "Budget/Accounting Analyst IV",
        "etudiant": 15,
        "professeur": 5,
        "dateDeCreation": "17/02/2023",
        "dateDeRendu": "14/05/2023",
        "note": 10,
        "remarque": "Curabitur gravida nisi at nibh.",
        "rendu": false
    },
    {
        "titre": "GIS Technical Architect",
        "etudiant": 16,
        "professeur": 2,
        "dateDeCreation": "23/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam tristique tortor eu pede.",
        "rendu": false
    },
    {
        "titre": "Associate Professor",
        "etudiant": 17,
        "professeur": 1,
        "dateDeCreation": "12/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec vitae nisi.",
        "rendu": false
    },
    {
        "titre": "GIS Technical Architect",
        "etudiant": 16,
        "professeur": 3,
        "dateDeCreation": "08/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Curabitur at ipsum ac tellus semper interdum.",
        "rendu": false
    },
    {
        "titre": "Health Coach IV",
        "etudiant": 14,
        "professeur": 3,
        "dateDeCreation": "06/04/2023",
        "dateDeRendu": "18/05/2023",
        "note": 10,
        "remarque": "Nullam molestie nibh in lectus.",
        "rendu": true
    },
    {
        "titre": "GIS Technical Architect",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "17/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla suscipit ligula in lacus.",
        "rendu": false
    },
    {
        "titre": "Electrical Engineer",
        "etudiant": 7,
        "professeur": 3,
        "dateDeCreation": "02/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
        "rendu": false
    },
    {
        "titre": "Director of Sales",
        "etudiant": 12,
        "professeur": 5,
        "dateDeCreation": "12/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam erat volutpat.",
        "rendu": false
    },
    {
        "titre": "VP Accounting",
        "etudiant": 18,
        "professeur": 4,
        "dateDeCreation": "14/02/2024",
        "dateDeRendu": "13/07/2023",
        "note": 8,
        "remarque": "Morbi porttitor lorem id ligula.",
        "rendu": false
    },
    {
        "titre": "Operator",
        "etudiant": 14,
        "professeur": 5,
        "dateDeCreation": "03/04/2024",
        "dateDeRendu": "05/03/2024",
        "note": 9,
        "remarque": "Donec ut dolor.",
        "rendu": false
    },
    {
        "titre": "Database Administrator III",
        "etudiant": 19,
        "professeur": 3,
        "dateDeCreation": "04/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "Recruiting Manager",
        "etudiant": 17,
        "professeur": 4,
        "dateDeCreation": "18/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nunc rhoncus dui vel sem.",
        "rendu": false
    },
    {
        "titre": "Human Resources Assistant III",
        "etudiant": 15,
        "professeur": 1,
        "dateDeCreation": "23/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "Systems Administrator III",
        "etudiant": 20,
        "professeur": 4,
        "dateDeCreation": "22/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec posuere metus vitae ipsum.",
        "rendu": false
    },
    {
        "titre": "Financial Advisor",
        "etudiant": 18,
        "professeur": 2,
        "dateDeCreation": "18/09/2023",
        "dateDeRendu": "20/03/2024",
        "note": 13,
        "remarque": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "rendu": true
    },
    {
        "titre": "Programmer Analyst IV",
        "etudiant": 16,
        "professeur": 4,
        "dateDeCreation": "23/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "rendu": false
    },
    {
        "titre": "Help Desk Operator",
        "etudiant": 10,
        "professeur": 2,
        "dateDeCreation": "08/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "rendu": false
    },
    {
        "titre": "Senior Cost Accountant",
        "etudiant": 5,
        "professeur": 5,
        "dateDeCreation": "12/02/2024",
        "dateDeRendu": "19/05/2024",
        "note": 10,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
        "rendu": true
    },
    {
        "titre": "Junior Executive",
        "etudiant": 2,
        "professeur": 1,
        "dateDeCreation": "28/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Phasellus sit amet erat.",
        "rendu": false
    },
    {
        "titre": "Engineer I",
        "etudiant": 1,
        "professeur": 4,
        "dateDeCreation": "30/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis consequat dui nec nisi volutpat eleifend.",
        "rendu": false
    },
    {
        "titre": "Associate Professor",
        "etudiant": 11,
        "professeur": 2,
        "dateDeCreation": "22/02/2024",
        "dateDeRendu": "11/05/2024",
        "note": 14,
        "remarque": "Duis mattis egestas metus.",
        "rendu": false
    },
    {
        "titre": "Executive Secretary",
        "etudiant": 5,
        "professeur": 4,
        "dateDeCreation": "28/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Mauris lacinia sapien quis libero.",
        "rendu": false
    },
    {
        "titre": "Research Nurse",
        "etudiant": 11,
        "professeur": 3,
        "dateDeCreation": "23/02/2023",
        "dateDeRendu": "21/06/2023",
        "note": 18,
        "remarque": "Praesent blandit lacinia erat.",
        "rendu": true
    },
    {
        "titre": "Nurse",
        "etudiant": 2,
        "professeur": 4,
        "dateDeCreation": "08/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
        "rendu": false
    },
    {
        "titre": "Electrical Engineer",
        "etudiant": 5,
        "professeur": 2,
        "dateDeCreation": "22/01/2023",
        "dateDeRendu": "01/09/2023",
        "note": 8,
        "remarque": "Nulla nisl.",
        "rendu": true
    },
    {
        "titre": "Executive Secretary",
        "etudiant": 12,
        "professeur": 3,
        "dateDeCreation": "09/05/2023",
        "dateDeRendu": "14/02/2024",
        "note": 9,
        "remarque": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "rendu": false
    },
    {
        "titre": "VP Product Management",
        "etudiant": 10,
        "professeur": 4,
        "dateDeCreation": "01/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam non mauris.",
        "rendu": false
    },
    {
        "titre": "Senior Cost Accountant",
        "etudiant": 1,
        "professeur": 3,
        "dateDeCreation": "20/12/2023",
        "dateDeRendu": "21/08/2023",
        "note": 13,
        "remarque": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
        "rendu": false
    },
    {
        "titre": "Junior Executive",
        "etudiant": 3,
        "professeur": 1,
        "dateDeCreation": "31/08/2023",
        "dateDeRendu": "14/04/2023",
        "note": 10,
        "remarque": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "rendu": false
    },
    {
        "titre": "Financial Advisor",
        "etudiant": 7,
        "professeur": 3,
        "dateDeCreation": "21/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam tristique tortor eu pede.",
        "rendu": false
    },
    {
        "titre": "VP Accounting",
        "etudiant": 7,
        "professeur": 1,
        "dateDeCreation": "14/02/2024",
        "dateDeRendu": "05/08/2023",
        "note": 9,
        "remarque": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        "rendu": true
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 20,
        "professeur": 4,
        "dateDeCreation": "23/07/2023",
        "dateDeRendu": "24/08/2023",
        "note": 11,
        "remarque": "In congue.",
        "rendu": true
    },
    {
        "titre": "Executive Secretary",
        "etudiant": 16,
        "professeur": 5,
        "dateDeCreation": "29/11/2023",
        "dateDeRendu": "30/01/2024",
        "note": 12,
        "remarque": "Donec vitae nisi.",
        "rendu": false
    },
    {
        "titre": "Teacher",
        "etudiant": 2,
        "professeur": 1,
        "dateDeCreation": "25/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam non mauris.",
        "rendu": false
    },
    {
        "titre": "Statistician II",
        "etudiant": 14,
        "professeur": 2,
        "dateDeCreation": "02/02/2023",
        "dateDeRendu": "11/10/2023",
        "note": 15,
        "remarque": "Quisque id justo sit amet sapien dignissim vestibulum.",
        "rendu": true
    },
    {
        "titre": "Software Test Engineer III",
        "etudiant": 12,
        "professeur": 2,
        "dateDeCreation": "21/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam sit amet diam in magna bibendum imperdiet.",
        "rendu": false
    },
    {
        "titre": "Software Test Engineer II",
        "etudiant": 10,
        "professeur": 4,
        "dateDeCreation": "20/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam dui.",
        "rendu": false
    },
    {
        "titre": "Account Representative I",
        "etudiant": 9,
        "professeur": 1,
        "dateDeCreation": "08/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Pellentesque viverra pede ac diam.",
        "rendu": false
    },
    {
        "titre": "Marketing Manager",
        "etudiant": 5,
        "professeur": 1,
        "dateDeCreation": "30/06/2023",
        "dateDeRendu": "03/04/2023",
        "note": 18,
        "remarque": "Duis at velit eu est congue elementum.",
        "rendu": false
    },
    {
        "titre": "Structural Analysis Engineer",
        "etudiant": 5,
        "professeur": 4,
        "dateDeCreation": "23/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Proin at turpis a pede posuere nonummy.",
        "rendu": false
    },
    {
        "titre": "Budget/Accounting Analyst III",
        "etudiant": 16,
        "professeur": 4,
        "dateDeCreation": "19/12/2023",
        "dateDeRendu": "29/04/2024",
        "note": 19,
        "remarque": "Nulla tempus.",
        "rendu": false
    },
    {
        "titre": "Tax Accountant",
        "etudiant": 19,
        "professeur": 1,
        "dateDeCreation": "19/01/2023",
        "dateDeRendu": "20/02/2024",
        "note": 20,
        "remarque": "Donec ut mauris eget massa tempor convallis.",
        "rendu": false
    },
    {
        "titre": "Actuary",
        "etudiant": 19,
        "professeur": 1,
        "dateDeCreation": "18/04/2023",
        "dateDeRendu": "16/04/2023",
        "note": 14,
        "remarque": "Nam tristique tortor eu pede.",
        "rendu": false
    },
    {
        "titre": "Tax Accountant",
        "etudiant": 8,
        "professeur": 1,
        "dateDeCreation": "01/01/2024",
        "dateDeRendu": "24/05/2023",
        "note": 9,
        "remarque": "Praesent blandit lacinia erat.",
        "rendu": false
    },
    {
        "titre": "Executive Secretary",
        "etudiant": 16,
        "professeur": 5,
        "dateDeCreation": "19/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
        "rendu": false
    },
    {
        "titre": "Statistician I",
        "etudiant": 3,
        "professeur": 3,
        "dateDeCreation": "06/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis bibendum.",
        "rendu": false
    },
    {
        "titre": "Business Systems Development Analyst",
        "etudiant": 14,
        "professeur": 3,
        "dateDeCreation": "27/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Sed sagittis.",
        "rendu": false
    },
    {
        "titre": "Nuclear Power Engineer",
        "etudiant": 5,
        "professeur": 1,
        "dateDeCreation": "27/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        "rendu": false
    },
    {
        "titre": "Accountant II",
        "etudiant": 11,
        "professeur": 5,
        "dateDeCreation": "06/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi non quam nec dui luctus rutrum.",
        "rendu": false
    },
    {
        "titre": "Quality Engineer",
        "etudiant": 12,
        "professeur": 2,
        "dateDeCreation": "24/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus tortor.",
        "rendu": false
    },
    {
        "titre": "Executive Secretary",
        "etudiant": 2,
        "professeur": 1,
        "dateDeCreation": "03/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Phasellus id sapien in sapien iaculis congue.",
        "rendu": false
    },
    {
        "titre": "Analog Circuit Design manager",
        "etudiant": 2,
        "professeur": 4,
        "dateDeCreation": "03/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "rendu": false
    },
    {
        "titre": "Community Outreach Specialist",
        "etudiant": 10,
        "professeur": 1,
        "dateDeCreation": "07/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla ut erat id mauris vulputate elementum.",
        "rendu": false
    },
    {
        "titre": "Sales Associate",
        "etudiant": 11,
        "professeur": 5,
        "dateDeCreation": "17/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "Marketing Manager",
        "etudiant": 14,
        "professeur": 2,
        "dateDeCreation": "12/01/2024",
        "dateDeRendu": "03/06/2023",
        "note": 20,
        "remarque": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
        "rendu": true
    },
    {
        "titre": "Nurse Practicioner",
        "etudiant": 19,
        "professeur": 5,
        "dateDeCreation": "21/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi vel lectus in quam fringilla rhoncus.",
        "rendu": false
    },
    {
        "titre": "Account Representative I",
        "etudiant": 18,
        "professeur": 5,
        "dateDeCreation": "18/11/2023",
        "dateDeRendu": "21/06/2023",
        "note": 9,
        "remarque": "Suspendisse potenti.",
        "rendu": true
    },
    {
        "titre": "Health Coach I",
        "etudiant": 11,
        "professeur": 5,
        "dateDeCreation": "16/05/2023",
        "dateDeRendu": "17/03/2024",
        "note": 12,
        "remarque": "Nulla ut erat id mauris vulputate elementum.",
        "rendu": false
    },
    {
        "titre": "Geological Engineer",
        "etudiant": 8,
        "professeur": 5,
        "dateDeCreation": "13/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
        "rendu": false
    },
    {
        "titre": "Analyst Programmer",
        "etudiant": 3,
        "professeur": 5,
        "dateDeCreation": "18/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Etiam pretium iaculis justo.",
        "rendu": false
    },
    {
        "titre": "Systems Administrator IV",
        "etudiant": 11,
        "professeur": 3,
        "dateDeCreation": "02/07/2023",
        "dateDeRendu": "18/10/2023",
        "note": 17,
        "remarque": "Maecenas pulvinar lobortis est.",
        "rendu": true
    },
    {
        "titre": "Actuary",
        "etudiant": 1,
        "professeur": 4,
        "dateDeCreation": "26/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": false
    },
    {
        "titre": "Tax Accountant",
        "etudiant": 8,
        "professeur": 1,
        "dateDeCreation": "12/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam molestie nibh in lectus.",
        "rendu": false
    },
    {
        "titre": "Design Engineer",
        "etudiant": 12,
        "professeur": 2,
        "dateDeCreation": "15/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        "rendu": false
    },
    {
        "titre": "Automation Specialist I",
        "etudiant": 20,
        "professeur": 4,
        "dateDeCreation": "31/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "Sales Associate",
        "etudiant": 2,
        "professeur": 2,
        "dateDeCreation": "27/05/2023",
        "dateDeRendu": "14/05/2024",
        "note": 11,
        "remarque": "Maecenas tincidunt lacus at velit.",
        "rendu": false
    },
    {
        "titre": "Senior Quality Engineer",
        "etudiant": 20,
        "professeur": 4,
        "dateDeCreation": "29/06/2023",
        "dateDeRendu": "18/04/2023",
        "note": 14,
        "remarque": "Vivamus vel nulla eget eros elementum pellentesque.",
        "rendu": true
    },
    {
        "titre": "Web Designer I",
        "etudiant": 18,
        "professeur": 2,
        "dateDeCreation": "03/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "rendu": false
    },
    {
        "titre": "General Manager",
        "etudiant": 19,
        "professeur": 4,
        "dateDeCreation": "28/07/2023",
        "dateDeRendu": "19/02/2024",
        "note": 9,
        "remarque": "Proin interdum mauris non ligula pellentesque ultrices.",
        "rendu": false
    },
    {
        "titre": "GIS Technical Architect",
        "etudiant": 6,
        "professeur": 4,
        "dateDeCreation": "26/04/2023",
        "dateDeRendu": "18/11/2023",
        "note": 10,
        "remarque": "Nullam molestie nibh in lectus.",
        "rendu": false
    },
    {
        "titre": "Graphic Designer",
        "etudiant": 16,
        "professeur": 5,
        "dateDeCreation": "21/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam non mauris.",
        "rendu": false
    },
    {
        "titre": "Nurse",
        "etudiant": 17,
        "professeur": 1,
        "dateDeCreation": "27/03/2023",
        "dateDeRendu": "24/12/2023",
        "note": 15,
        "remarque": "Sed sagittis.",
        "rendu": false
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 8,
        "professeur": 5,
        "dateDeCreation": "17/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Fusce consequat.",
        "rendu": false
    },
    {
        "titre": "Health Coach II",
        "etudiant": 10,
        "professeur": 3,
        "dateDeCreation": "18/09/2023",
        "dateDeRendu": "06/11/2023",
        "note": 16,
        "remarque": "Aenean auctor gravida sem.",
        "rendu": false
    },
    {
        "titre": "Nurse Practicioner",
        "etudiant": 11,
        "professeur": 1,
        "dateDeCreation": "23/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Etiam justo.",
        "rendu": false
    },
    {
        "titre": "Civil Engineer",
        "etudiant": 18,
        "professeur": 1,
        "dateDeCreation": "07/04/2023",
        "dateDeRendu": "07/12/2023",
        "note": 18,
        "remarque": "Donec dapibus.",
        "rendu": false
    },
    {
        "titre": "Technical Writer",
        "etudiant": 7,
        "professeur": 2,
        "dateDeCreation": "08/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla mollis molestie lorem.",
        "rendu": false
    },
    {
        "titre": "Clinical Specialist",
        "etudiant": 16,
        "professeur": 5,
        "dateDeCreation": "14/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Pellentesque viverra pede ac diam.",
        "rendu": false
    },
    {
        "titre": "Biostatistician IV",
        "etudiant": 2,
        "professeur": 3,
        "dateDeCreation": "18/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
        "rendu": false
    },
    {
        "titre": "Associate Professor",
        "etudiant": 14,
        "professeur": 2,
        "dateDeCreation": "25/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
        "rendu": false
    },
    {
        "titre": "Human Resources Manager",
        "etudiant": 11,
        "professeur": 4,
        "dateDeCreation": "02/05/2023",
        "dateDeRendu": "04/05/2024",
        "note": 14,
        "remarque": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "rendu": false
    },
    {
        "titre": "Financial Analyst",
        "etudiant": 3,
        "professeur": 4,
        "dateDeCreation": "30/09/2023",
        "dateDeRendu": "14/04/2024",
        "note": 11,
        "remarque": "Nam nulla.",
        "rendu": true
    },
    {
        "titre": "Associate Professor",
        "etudiant": 8,
        "professeur": 2,
        "dateDeCreation": "22/10/2023",
        "dateDeRendu": "22/05/2023",
        "note": 18,
        "remarque": "Morbi porttitor lorem id ligula.",
        "rendu": false
    },
    {
        "titre": "Pharmacist",
        "etudiant": 16,
        "professeur": 3,
        "dateDeCreation": "01/09/2023",
        "dateDeRendu": "22/03/2024",
        "note": 14,
        "remarque": "Morbi a ipsum.",
        "rendu": false
    },
    {
        "titre": "Senior Sales Associate",
        "etudiant": 2,
        "professeur": 3,
        "dateDeCreation": "04/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "Nurse",
        "etudiant": 1,
        "professeur": 1,
        "dateDeCreation": "29/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Phasellus id sapien in sapien iaculis congue.",
        "rendu": false
    },
    {
        "titre": "Project Manager",
        "etudiant": 9,
        "professeur": 3,
        "dateDeCreation": "12/12/2023",
        "dateDeRendu": "27/07/2023",
        "note": 11,
        "remarque": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
        "rendu": true
    },
    {
        "titre": "Statistician II",
        "etudiant": 1,
        "professeur": 2,
        "dateDeCreation": "17/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Maecenas rhoncus aliquam lacus.",
        "rendu": false
    },
    {
        "titre": "Systems Administrator III",
        "etudiant": 20,
        "professeur": 1,
        "dateDeCreation": "03/03/2023",
        "dateDeRendu": "06/11/2023",
        "note": 18,
        "remarque": "Morbi porttitor lorem id ligula.",
        "rendu": false
    },
    {
        "titre": "Web Designer I",
        "etudiant": 4,
        "professeur": 1,
        "dateDeCreation": "04/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi non lectus.",
        "rendu": false
    },
    {
        "titre": "VP Quality Control",
        "etudiant": 18,
        "professeur": 5,
        "dateDeCreation": "15/09/2023",
        "dateDeRendu": "25/10/2023",
        "note": 13,
        "remarque": "Donec posuere metus vitae ipsum.",
        "rendu": false
    },
    {
        "titre": "Chemical Engineer",
        "etudiant": 16,
        "professeur": 4,
        "dateDeCreation": "08/02/2024",
        "dateDeRendu": "21/08/2023",
        "note": 18,
        "remarque": "Maecenas pulvinar lobortis est.",
        "rendu": true
    },
    {
        "titre": "VP Accounting",
        "etudiant": 11,
        "professeur": 5,
        "dateDeCreation": "23/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Ut at dolor quis odio consequat varius.",
        "rendu": false
    },
    {
        "titre": "Office Assistant I",
        "etudiant": 2,
        "professeur": 2,
        "dateDeCreation": "22/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cras pellentesque volutpat dui.",
        "rendu": false
    },
    {
        "titre": "Marketing Assistant",
        "etudiant": 7,
        "professeur": 4,
        "dateDeCreation": "29/06/2023",
        "dateDeRendu": "06/09/2023",
        "note": 11,
        "remarque": "Aenean auctor gravida sem.",
        "rendu": false
    },
    {
        "titre": "Help Desk Technician",
        "etudiant": 19,
        "professeur": 3,
        "dateDeCreation": "15/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
        "rendu": false
    },
    {
        "titre": "Senior Developer",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "07/08/2023",
        "dateDeRendu": "02/04/2023",
        "note": 8,
        "remarque": "Nullam sit amet turpis elementum ligula vehicula consequat.",
        "rendu": true
    },
    {
        "titre": "Help Desk Operator",
        "etudiant": 19,
        "professeur": 1,
        "dateDeCreation": "30/09/2023",
        "dateDeRendu": "29/06/2023",
        "note": 13,
        "remarque": "Donec ut dolor.",
        "rendu": false
    },
    {
        "titre": "Social Worker",
        "etudiant": 10,
        "professeur": 2,
        "dateDeCreation": "08/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "rendu": false
    },
    {
        "titre": "Geological Engineer",
        "etudiant": 13,
        "professeur": 3,
        "dateDeCreation": "17/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam sit amet diam in magna bibendum imperdiet.",
        "rendu": false
    },
    {
        "titre": "Payment Adjustment Coordinator",
        "etudiant": 12,
        "professeur": 2,
        "dateDeCreation": "21/04/2023",
        "dateDeRendu": "20/07/2023",
        "note": 20,
        "remarque": "Ut tellus.",
        "rendu": true
    },
    {
        "titre": "General Manager",
        "etudiant": 1,
        "professeur": 3,
        "dateDeCreation": "10/02/2024",
        "dateDeRendu": "26/06/2023",
        "note": 17,
        "remarque": "Nullam sit amet turpis elementum ligula vehicula consequat.",
        "rendu": false
    },
    {
        "titre": "Compensation Analyst",
        "etudiant": 9,
        "professeur": 4,
        "dateDeCreation": "14/05/2023",
        "dateDeRendu": "30/12/2023",
        "note": 12,
        "remarque": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "rendu": false
    },
    {
        "titre": "Analog Circuit Design manager",
        "etudiant": 15,
        "professeur": 4,
        "dateDeCreation": "27/01/2023",
        "dateDeRendu": "19/05/2023",
        "note": 20,
        "remarque": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
        "rendu": true
    },
    {
        "titre": "Administrative Assistant I",
        "etudiant": 1,
        "professeur": 5,
        "dateDeCreation": "31/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Mauris lacinia sapien quis libero.",
        "rendu": false
    },
    {
        "titre": "Accountant II",
        "etudiant": 20,
        "professeur": 5,
        "dateDeCreation": "11/03/2024",
        "dateDeRendu": "20/08/2023",
        "note": 12,
        "remarque": "Donec dapibus.",
        "rendu": true
    },
    {
        "titre": "VP Sales",
        "etudiant": 6,
        "professeur": 4,
        "dateDeCreation": "16/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi non lectus.",
        "rendu": false
    },
    {
        "titre": "Recruiter",
        "etudiant": 19,
        "professeur": 3,
        "dateDeCreation": "13/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis bibendum.",
        "rendu": false
    },
    {
        "titre": "VP Quality Control",
        "etudiant": 19,
        "professeur": 2,
        "dateDeCreation": "09/02/2023",
        "dateDeRendu": "01/10/2023",
        "note": 11,
        "remarque": "In sagittis dui vel nisl.",
        "rendu": true
    },
    {
        "titre": "Legal Assistant",
        "etudiant": 3,
        "professeur": 2,
        "dateDeCreation": "15/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Proin at turpis a pede posuere nonummy.",
        "rendu": false
    },
    {
        "titre": "Desktop Support Technician",
        "etudiant": 4,
        "professeur": 5,
        "dateDeCreation": "07/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "rendu": false
    },
    {
        "titre": "Design Engineer",
        "etudiant": 16,
        "professeur": 3,
        "dateDeCreation": "18/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
        "rendu": false
    },
    {
        "titre": "Dental Hygienist",
        "etudiant": 13,
        "professeur": 1,
        "dateDeCreation": "13/12/2023",
        "dateDeRendu": "10/05/2023",
        "note": 12,
        "remarque": "Integer ac neque.",
        "rendu": true
    },
    {
        "titre": "Legal Assistant",
        "etudiant": 4,
        "professeur": 4,
        "dateDeCreation": "27/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis mattis egestas metus.",
        "rendu": false
    },
    {
        "titre": "Media Manager IV",
        "etudiant": 4,
        "professeur": 1,
        "dateDeCreation": "28/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Pellentesque ultrices mattis odio.",
        "rendu": false
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 5,
        "professeur": 2,
        "dateDeCreation": "31/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam porttitor lacus at turpis.",
        "rendu": false
    },
    {
        "titre": "Analog Circuit Design manager",
        "etudiant": 11,
        "professeur": 2,
        "dateDeCreation": "04/02/2023",
        "dateDeRendu": "03/11/2023",
        "note": 17,
        "remarque": "In congue.",
        "rendu": true
    },
    {
        "titre": "Actuary",
        "etudiant": 15,
        "professeur": 1,
        "dateDeCreation": "05/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "rendu": false
    },
    {
        "titre": "Structural Analysis Engineer",
        "etudiant": 18,
        "professeur": 3,
        "dateDeCreation": "12/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec posuere metus vitae ipsum.",
        "rendu": false
    },
    {
        "titre": "Junior Executive",
        "etudiant": 17,
        "professeur": 3,
        "dateDeCreation": "15/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Quisque id justo sit amet sapien dignissim vestibulum.",
        "rendu": false
    },
    {
        "titre": "Accounting Assistant II",
        "etudiant": 18,
        "professeur": 2,
        "dateDeCreation": "14/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "rendu": false
    },
    {
        "titre": "Recruiter",
        "etudiant": 19,
        "professeur": 4,
        "dateDeCreation": "15/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "Programmer Analyst II",
        "etudiant": 3,
        "professeur": 2,
        "dateDeCreation": "03/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cras in purus eu magna vulputate luctus.",
        "rendu": false
    },
    {
        "titre": "Human Resources Manager",
        "etudiant": 20,
        "professeur": 5,
        "dateDeCreation": "13/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Fusce consequat.",
        "rendu": false
    },
    {
        "titre": "VP Marketing",
        "etudiant": 5,
        "professeur": 1,
        "dateDeCreation": "08/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus vel nulla eget eros elementum pellentesque.",
        "rendu": false
    },
    {
        "titre": "Nurse Practicioner",
        "etudiant": 18,
        "professeur": 3,
        "dateDeCreation": "22/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum rutrum rutrum neque.",
        "rendu": false
    },
    {
        "titre": "Software Engineer IV",
        "etudiant": 17,
        "professeur": 4,
        "dateDeCreation": "14/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Etiam pretium iaculis justo.",
        "rendu": false
    },
    {
        "titre": "Programmer II",
        "etudiant": 20,
        "professeur": 2,
        "dateDeCreation": "12/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "rendu": false
    },
    {
        "titre": "Electrical Engineer",
        "etudiant": 17,
        "professeur": 5,
        "dateDeCreation": "23/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "rendu": false
    },
    {
        "titre": "Graphic Designer",
        "etudiant": 10,
        "professeur": 4,
        "dateDeCreation": "20/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nunc purus.",
        "rendu": false
    },
    {
        "titre": "Research Associate",
        "etudiant": 4,
        "professeur": 2,
        "dateDeCreation": "15/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
        "rendu": false
    },
    {
        "titre": "Staff Accountant III",
        "etudiant": 5,
        "professeur": 3,
        "dateDeCreation": "06/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Phasellus in felis.",
        "rendu": false
    },
    {
        "titre": "Environmental Tech",
        "etudiant": 3,
        "professeur": 1,
        "dateDeCreation": "06/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": false
    },
    {
        "titre": "Editor",
        "etudiant": 19,
        "professeur": 5,
        "dateDeCreation": "11/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi porttitor lorem id ligula.",
        "rendu": false
    },
    {
        "titre": "Marketing Assistant",
        "etudiant": 6,
        "professeur": 3,
        "dateDeCreation": "29/05/2023",
        "dateDeRendu": "08/05/2024",
        "note": 12,
        "remarque": "Suspendisse ornare consequat lectus.",
        "rendu": false
    },
    {
        "titre": "Automation Specialist I",
        "etudiant": 2,
        "professeur": 3,
        "dateDeCreation": "05/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi quis tortor id nulla ultrices aliquet.",
        "rendu": false
    },
    {
        "titre": "Analyst Programmer",
        "etudiant": 11,
        "professeur": 5,
        "dateDeCreation": "06/11/2023",
        "dateDeRendu": "30/08/2023",
        "note": 19,
        "remarque": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
        "rendu": false
    },
    {
        "titre": "Payment Adjustment Coordinator",
        "etudiant": 5,
        "professeur": 3,
        "dateDeCreation": "01/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "rendu": false
    },
    {
        "titre": "Dental Hygienist",
        "etudiant": 12,
        "professeur": 5,
        "dateDeCreation": "29/01/2024",
        "dateDeRendu": "17/12/2023",
        "note": 19,
        "remarque": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "rendu": false
    },
    {
        "titre": "Nurse",
        "etudiant": 10,
        "professeur": 2,
        "dateDeCreation": "05/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "rendu": false
    },
    {
        "titre": "Computer Systems Analyst IV",
        "etudiant": 20,
        "professeur": 3,
        "dateDeCreation": "15/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer ac neque.",
        "rendu": false
    },
    {
        "titre": "Help Desk Operator",
        "etudiant": 11,
        "professeur": 2,
        "dateDeCreation": "20/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
        "rendu": false
    },
    {
        "titre": "Developer II",
        "etudiant": 4,
        "professeur": 3,
        "dateDeCreation": "30/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Sed ante.",
        "rendu": false
    },
    {
        "titre": "Data Coordinator",
        "etudiant": 6,
        "professeur": 1,
        "dateDeCreation": "26/02/2024",
        "dateDeRendu": "22/04/2023",
        "note": 8,
        "remarque": "Morbi porttitor lorem id ligula.",
        "rendu": true
    },
    {
        "titre": "Assistant Manager",
        "etudiant": 8,
        "professeur": 2,
        "dateDeCreation": "11/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "rendu": false
    },
    {
        "titre": "Mechanical Systems Engineer",
        "etudiant": 20,
        "professeur": 3,
        "dateDeCreation": "30/12/2023",
        "dateDeRendu": "27/02/2024",
        "note": 13,
        "remarque": "Donec ut mauris eget massa tempor convallis.",
        "rendu": true
    },
    {
        "titre": "Administrative Officer",
        "etudiant": 17,
        "professeur": 3,
        "dateDeCreation": "19/12/2023",
        "dateDeRendu": "19/05/2024",
        "note": 8,
        "remarque": "Cras in purus eu magna vulputate luctus.",
        "rendu": false
    },
    {
        "titre": "Recruiting Manager",
        "etudiant": 3,
        "professeur": 5,
        "dateDeCreation": "08/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
        "rendu": false
    },
    {
        "titre": "Chemical Engineer",
        "etudiant": 16,
        "professeur": 5,
        "dateDeCreation": "22/02/2023",
        "dateDeRendu": "17/10/2023",
        "note": 15,
        "remarque": "Praesent lectus.",
        "rendu": true
    },
    {
        "titre": "Professor",
        "etudiant": 16,
        "professeur": 4,
        "dateDeCreation": "14/12/2023",
        "dateDeRendu": "21/05/2023",
        "note": 14,
        "remarque": "Nulla ac enim.",
        "rendu": false
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 18,
        "professeur": 5,
        "dateDeCreation": "28/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis ac nibh.",
        "rendu": false
    },
    {
        "titre": "Structural Analysis Engineer",
        "etudiant": 19,
        "professeur": 1,
        "dateDeCreation": "28/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Praesent blandit.",
        "rendu": false
    },
    {
        "titre": "Senior Sales Associate",
        "etudiant": 8,
        "professeur": 4,
        "dateDeCreation": "15/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Maecenas ut massa quis augue luctus tincidunt.",
        "rendu": false
    },
    {
        "titre": "Programmer Analyst III",
        "etudiant": 17,
        "professeur": 2,
        "dateDeCreation": "12/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec dapibus.",
        "rendu": false
    },
    {
        "titre": "Compensation Analyst",
        "etudiant": 8,
        "professeur": 4,
        "dateDeCreation": "28/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        "rendu": false
    },
    {
        "titre": "Account Executive",
        "etudiant": 17,
        "professeur": 2,
        "dateDeCreation": "20/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Actuary",
        "etudiant": 12,
        "professeur": 2,
        "dateDeCreation": "09/05/2023",
        "dateDeRendu": "28/05/2023",
        "note": 13,
        "remarque": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "rendu": false
    },
    {
        "titre": "Recruiter",
        "etudiant": 17,
        "professeur": 4,
        "dateDeCreation": "23/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi non quam nec dui luctus rutrum.",
        "rendu": false
    },
    {
        "titre": "Clinical Specialist",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "09/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
        "rendu": false
    },
    {
        "titre": "Associate Professor",
        "etudiant": 8,
        "professeur": 1,
        "dateDeCreation": "08/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In sagittis dui vel nisl.",
        "rendu": false
    },
    {
        "titre": "Internal Auditor",
        "etudiant": 17,
        "professeur": 2,
        "dateDeCreation": "25/10/2023",
        "dateDeRendu": "14/09/2023",
        "note": 8,
        "remarque": "Duis bibendum.",
        "rendu": false
    },
    {
        "titre": "Budget/Accounting Analyst IV",
        "etudiant": 15,
        "professeur": 1,
        "dateDeCreation": "01/03/2024",
        "dateDeRendu": "23/04/2024",
        "note": 13,
        "remarque": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "rendu": true
    },
    {
        "titre": "Electrical Engineer",
        "etudiant": 6,
        "professeur": 3,
        "dateDeCreation": "18/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus in felis eu sapien cursus vestibulum.",
        "rendu": false
    },
    {
        "titre": "Cost Accountant",
        "etudiant": 14,
        "professeur": 3,
        "dateDeCreation": "17/02/2024",
        "dateDeRendu": "09/05/2024",
        "note": 11,
        "remarque": "Phasellus id sapien in sapien iaculis congue.",
        "rendu": true
    },
    {
        "titre": "Staff Scientist",
        "etudiant": 14,
        "professeur": 1,
        "dateDeCreation": "09/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Statistician II",
        "etudiant": 3,
        "professeur": 3,
        "dateDeCreation": "02/01/2024",
        "dateDeRendu": "30/07/2023",
        "note": 18,
        "remarque": "Vestibulum sed magna at nunc commodo placerat.",
        "rendu": true
    },
    {
        "titre": "Senior Editor",
        "etudiant": 1,
        "professeur": 5,
        "dateDeCreation": "29/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
        "rendu": false
    },
    {
        "titre": "Assistant Professor",
        "etudiant": 19,
        "professeur": 1,
        "dateDeCreation": "20/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "rendu": false
    },
    {
        "titre": "Biostatistician II",
        "etudiant": 14,
        "professeur": 1,
        "dateDeCreation": "11/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla ut erat id mauris vulputate elementum.",
        "rendu": false
    },
    {
        "titre": "Marketing Manager",
        "etudiant": 17,
        "professeur": 4,
        "dateDeCreation": "14/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis at velit eu est congue elementum.",
        "rendu": false
    },
    {
        "titre": "Help Desk Technician",
        "etudiant": 20,
        "professeur": 5,
        "dateDeCreation": "19/03/2023",
        "dateDeRendu": "08/04/2024",
        "note": 18,
        "remarque": "In sagittis dui vel nisl.",
        "rendu": false
    },
    {
        "titre": "Help Desk Technician",
        "etudiant": 13,
        "professeur": 5,
        "dateDeCreation": "14/08/2023",
        "dateDeRendu": "14/07/2023",
        "note": 14,
        "remarque": "Etiam pretium iaculis justo.",
        "rendu": true
    },
    {
        "titre": "Business Systems Development Analyst",
        "etudiant": 20,
        "professeur": 4,
        "dateDeCreation": "09/02/2023",
        "dateDeRendu": "06/04/2024",
        "note": 10,
        "remarque": "Sed sagittis.",
        "rendu": false
    },
    {
        "titre": "Web Designer I",
        "etudiant": 9,
        "professeur": 1,
        "dateDeCreation": "26/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aenean lectus.",
        "rendu": false
    },
    {
        "titre": "Payment Adjustment Coordinator",
        "etudiant": 14,
        "professeur": 4,
        "dateDeCreation": "01/08/2023",
        "dateDeRendu": "07/05/2023",
        "note": 16,
        "remarque": "Duis aliquam convallis nunc.",
        "rendu": true
    },
    {
        "titre": "Actuary",
        "etudiant": 16,
        "professeur": 5,
        "dateDeCreation": "04/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
        "rendu": false
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 5,
        "professeur": 1,
        "dateDeCreation": "11/08/2023",
        "dateDeRendu": "19/06/2023",
        "note": 17,
        "remarque": "Vivamus in felis eu sapien cursus vestibulum.",
        "rendu": false
    },
    {
        "titre": "VP Quality Control",
        "etudiant": 14,
        "professeur": 4,
        "dateDeCreation": "14/03/2024",
        "dateDeRendu": "07/02/2024",
        "note": 18,
        "remarque": "Cras pellentesque volutpat dui.",
        "rendu": true
    },
    {
        "titre": "Community Outreach Specialist",
        "etudiant": 2,
        "professeur": 1,
        "dateDeCreation": "21/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In congue.",
        "rendu": false
    },
    {
        "titre": "VP Quality Control",
        "etudiant": 15,
        "professeur": 3,
        "dateDeCreation": "26/11/2023",
        "dateDeRendu": "18/10/2023",
        "note": 19,
        "remarque": "Sed sagittis.",
        "rendu": false
    },
    {
        "titre": "Business Systems Development Analyst",
        "etudiant": 4,
        "professeur": 4,
        "dateDeCreation": "11/08/2023",
        "dateDeRendu": "12/11/2023",
        "note": 10,
        "remarque": "Morbi non lectus.",
        "rendu": false
    },
    {
        "titre": "Actuary",
        "etudiant": 15,
        "professeur": 2,
        "dateDeCreation": "20/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "rendu": false
    },
    {
        "titre": "Software Test Engineer II",
        "etudiant": 16,
        "professeur": 5,
        "dateDeCreation": "13/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
        "rendu": false
    },
    {
        "titre": "Graphic Designer",
        "etudiant": 5,
        "professeur": 5,
        "dateDeCreation": "30/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nunc nisl.",
        "rendu": false
    },
    {
        "titre": "Design Engineer",
        "etudiant": 4,
        "professeur": 5,
        "dateDeCreation": "15/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Sed ante.",
        "rendu": false
    },
    {
        "titre": "Research Assistant IV",
        "etudiant": 1,
        "professeur": 2,
        "dateDeCreation": "25/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Help Desk Technician",
        "etudiant": 3,
        "professeur": 5,
        "dateDeCreation": "16/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec quis orci eget orci vehicula condimentum.",
        "rendu": false
    },
    {
        "titre": "Senior Quality Engineer",
        "etudiant": 11,
        "professeur": 4,
        "dateDeCreation": "13/04/2024",
        "dateDeRendu": "22/06/2023",
        "note": 16,
        "remarque": "Morbi ut odio.",
        "rendu": true
    },
    {
        "titre": "Accountant I",
        "etudiant": 13,
        "professeur": 2,
        "dateDeCreation": "17/08/2023",
        "dateDeRendu": "18/03/2024",
        "note": 8,
        "remarque": "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "rendu": true
    },
    {
        "titre": "Administrative Assistant III",
        "etudiant": 8,
        "professeur": 5,
        "dateDeCreation": "24/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam porttitor lacus at turpis.",
        "rendu": false
    },
    {
        "titre": "Operator",
        "etudiant": 6,
        "professeur": 4,
        "dateDeCreation": "24/12/2023",
        "dateDeRendu": "11/04/2024",
        "note": 13,
        "remarque": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "rendu": true
    },
    {
        "titre": "Chief Design Engineer",
        "etudiant": 16,
        "professeur": 3,
        "dateDeCreation": "22/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec vitae nisi.",
        "rendu": false
    },
    {
        "titre": "Tax Accountant",
        "etudiant": 5,
        "professeur": 5,
        "dateDeCreation": "06/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec dapibus.",
        "rendu": false
    },
    {
        "titre": "Senior Cost Accountant",
        "etudiant": 10,
        "professeur": 5,
        "dateDeCreation": "14/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cras pellentesque volutpat dui.",
        "rendu": false
    },
    {
        "titre": "Dental Hygienist",
        "etudiant": 8,
        "professeur": 4,
        "dateDeCreation": "15/10/2023",
        "dateDeRendu": "27/10/2023",
        "note": 19,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
        "rendu": false
    },
    {
        "titre": "Programmer Analyst IV",
        "etudiant": 16,
        "professeur": 2,
        "dateDeCreation": "01/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer a nibh.",
        "rendu": false
    },
    {
        "titre": "Quality Control Specialist",
        "etudiant": 2,
        "professeur": 5,
        "dateDeCreation": "25/03/2024",
        "dateDeRendu": "05/04/2023",
        "note": 14,
        "remarque": "Quisque porta volutpat erat.",
        "rendu": false
    },
    {
        "titre": "Professor",
        "etudiant": 19,
        "professeur": 2,
        "dateDeCreation": "13/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec vitae nisi.",
        "rendu": false
    },
    {
        "titre": "Actuary",
        "etudiant": 17,
        "professeur": 2,
        "dateDeCreation": "24/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Financial Analyst",
        "etudiant": 17,
        "professeur": 5,
        "dateDeCreation": "16/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi non lectus.",
        "rendu": false
    },
    {
        "titre": "Web Designer III",
        "etudiant": 6,
        "professeur": 5,
        "dateDeCreation": "19/01/2023",
        "dateDeRendu": "03/02/2024",
        "note": 19,
        "remarque": "Nullam sit amet turpis elementum ligula vehicula consequat.",
        "rendu": false
    },
    {
        "titre": "Accountant I",
        "etudiant": 18,
        "professeur": 5,
        "dateDeCreation": "06/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nullam sit amet turpis elementum ligula vehicula consequat.",
        "rendu": false
    },
    {
        "titre": "Nurse",
        "etudiant": 20,
        "professeur": 4,
        "dateDeCreation": "18/11/2023",
        "dateDeRendu": "13/10/2023",
        "note": 9,
        "remarque": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
        "rendu": true
    },
    {
        "titre": "Librarian",
        "etudiant": 12,
        "professeur": 1,
        "dateDeCreation": "12/02/2023",
        "dateDeRendu": "17/03/2024",
        "note": 10,
        "remarque": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "rendu": true
    },
    {
        "titre": "Social Worker",
        "etudiant": 12,
        "professeur": 3,
        "dateDeCreation": "02/03/2024",
        "dateDeRendu": "10/04/2023",
        "note": 9,
        "remarque": "Quisque ut erat.",
        "rendu": true
    },
    {
        "titre": "Senior Developer",
        "etudiant": 10,
        "professeur": 4,
        "dateDeCreation": "20/03/2024",
        "dateDeRendu": "28/05/2023",
        "note": 20,
        "remarque": "Morbi porttitor lorem id ligula.",
        "rendu": false
    },
    {
        "titre": "Civil Engineer",
        "etudiant": 9,
        "professeur": 4,
        "dateDeCreation": "15/01/2023",
        "dateDeRendu": "05/05/2024",
        "note": 10,
        "remarque": "Etiam justo.",
        "rendu": false
    },
    {
        "titre": "General Manager",
        "etudiant": 11,
        "professeur": 2,
        "dateDeCreation": "02/01/2024",
        "dateDeRendu": "17/12/2023",
        "note": 14,
        "remarque": "Nulla ac enim.",
        "rendu": false
    },
    {
        "titre": "Senior Editor",
        "etudiant": 7,
        "professeur": 1,
        "dateDeCreation": "07/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla facilisi.",
        "rendu": false
    },
    {
        "titre": "Clinical Specialist",
        "etudiant": 12,
        "professeur": 5,
        "dateDeCreation": "24/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Sed vel enim sit amet nunc viverra dapibus.",
        "rendu": false
    },
    {
        "titre": "Software Test Engineer I",
        "etudiant": 3,
        "professeur": 5,
        "dateDeCreation": "30/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cras non velit nec nisi vulputate nonummy.",
        "rendu": false
    },
    {
        "titre": "VP Accounting",
        "etudiant": 11,
        "professeur": 5,
        "dateDeCreation": "20/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In blandit ultrices enim.",
        "rendu": false
    },
    {
        "titre": "Payment Adjustment Coordinator",
        "etudiant": 6,
        "professeur": 1,
        "dateDeCreation": "08/06/2023",
        "dateDeRendu": "16/02/2024",
        "note": 18,
        "remarque": "Duis ac nibh.",
        "rendu": false
    },
    {
        "titre": "Geological Engineer",
        "etudiant": 15,
        "professeur": 1,
        "dateDeCreation": "11/09/2023",
        "dateDeRendu": "27/03/2024",
        "note": 20,
        "remarque": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
        "rendu": true
    },
    {
        "titre": "Environmental Specialist",
        "etudiant": 14,
        "professeur": 5,
        "dateDeCreation": "25/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Pellentesque viverra pede ac diam.",
        "rendu": false
    },
    {
        "titre": "Systems Administrator IV",
        "etudiant": 7,
        "professeur": 5,
        "dateDeCreation": "16/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis mattis egestas metus.",
        "rendu": false
    },
    {
        "titre": "Senior Sales Associate",
        "etudiant": 2,
        "professeur": 4,
        "dateDeCreation": "09/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis mattis egestas metus.",
        "rendu": false
    },
    {
        "titre": "Recruiter",
        "etudiant": 7,
        "professeur": 1,
        "dateDeCreation": "16/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "rendu": false
    },
    {
        "titre": "Clinical Specialist",
        "etudiant": 16,
        "professeur": 1,
        "dateDeCreation": "04/02/2023",
        "dateDeRendu": "16/03/2024",
        "note": 11,
        "remarque": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
        "rendu": false
    },
    {
        "titre": "Speech Pathologist",
        "etudiant": 18,
        "professeur": 2,
        "dateDeCreation": "01/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
        "rendu": false
    },
    {
        "titre": "Staff Accountant I",
        "etudiant": 5,
        "professeur": 2,
        "dateDeCreation": "04/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec ut dolor.",
        "rendu": false
    },
    {
        "titre": "Speech Pathologist",
        "etudiant": 3,
        "professeur": 1,
        "dateDeCreation": "11/02/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi ut odio.",
        "rendu": false
    },
    {
        "titre": "Operator",
        "etudiant": 2,
        "professeur": 2,
        "dateDeCreation": "27/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "rendu": false
    },
    {
        "titre": "Accountant II",
        "etudiant": 11,
        "professeur": 2,
        "dateDeCreation": "21/11/2023",
        "dateDeRendu": "23/04/2023",
        "note": 16,
        "remarque": "Etiam vel augue.",
        "rendu": false
    },
    {
        "titre": "Cost Accountant",
        "etudiant": 8,
        "professeur": 4,
        "dateDeCreation": "10/03/2024",
        "dateDeRendu": "26/01/2024",
        "note": 20,
        "remarque": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
        "rendu": true
    },
    {
        "titre": "Payment Adjustment Coordinator",
        "etudiant": 2,
        "professeur": 3,
        "dateDeCreation": "21/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Maecenas pulvinar lobortis est.",
        "rendu": false
    },
    {
        "titre": "Administrative Assistant III",
        "etudiant": 17,
        "professeur": 1,
        "dateDeCreation": "12/05/2023",
        "dateDeRendu": "10/11/2023",
        "note": 20,
        "remarque": "Integer non velit.",
        "rendu": false
    },
    {
        "titre": "Food Chemist",
        "etudiant": 9,
        "professeur": 5,
        "dateDeCreation": "10/01/2024",
        "dateDeRendu": "19/11/2023",
        "note": 11,
        "remarque": "In blandit ultrices enim.",
        "rendu": false
    },
    {
        "titre": "Dental Hygienist",
        "etudiant": 6,
        "professeur": 1,
        "dateDeCreation": "05/08/2023",
        "dateDeRendu": "16/03/2024",
        "note": 10,
        "remarque": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
        "rendu": true
    },
    {
        "titre": "Health Coach III",
        "etudiant": 14,
        "professeur": 1,
        "dateDeCreation": "31/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "Payment Adjustment Coordinator",
        "etudiant": 19,
        "professeur": 2,
        "dateDeCreation": "17/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
        "rendu": false
    },
    {
        "titre": "Account Coordinator",
        "etudiant": 10,
        "professeur": 4,
        "dateDeCreation": "23/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam sit amet diam in magna bibendum imperdiet.",
        "rendu": false
    },
    {
        "titre": "General Manager",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "07/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aenean auctor gravida sem.",
        "rendu": false
    },
    {
        "titre": "Developer II",
        "etudiant": 5,
        "professeur": 5,
        "dateDeCreation": "22/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
        "rendu": false
    },
    {
        "titre": "Accountant I",
        "etudiant": 3,
        "professeur": 3,
        "dateDeCreation": "23/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "VP Accounting",
        "etudiant": 7,
        "professeur": 1,
        "dateDeCreation": "25/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aenean fermentum.",
        "rendu": false
    },
    {
        "titre": "Community Outreach Specialist",
        "etudiant": 1,
        "professeur": 5,
        "dateDeCreation": "15/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla mollis molestie lorem.",
        "rendu": false
    },
    {
        "titre": "VP Quality Control",
        "etudiant": 9,
        "professeur": 2,
        "dateDeCreation": "19/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi a ipsum.",
        "rendu": false
    },
    {
        "titre": "Software Test Engineer I",
        "etudiant": 18,
        "professeur": 3,
        "dateDeCreation": "13/02/2023",
        "dateDeRendu": "07/06/2023",
        "note": 12,
        "remarque": "Aliquam non mauris.",
        "rendu": true
    },
    {
        "titre": "Senior Developer",
        "etudiant": 11,
        "professeur": 2,
        "dateDeCreation": "10/08/2023",
        "dateDeRendu": "05/05/2024",
        "note": 8,
        "remarque": "Integer ac neque.",
        "rendu": true
    },
    {
        "titre": "Food Chemist",
        "etudiant": 17,
        "professeur": 2,
        "dateDeCreation": "07/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "rendu": false
    },
    {
        "titre": "Paralegal",
        "etudiant": 12,
        "professeur": 4,
        "dateDeCreation": "23/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Curabitur at ipsum ac tellus semper interdum.",
        "rendu": false
    },
    {
        "titre": "Computer Systems Analyst IV",
        "etudiant": 8,
        "professeur": 1,
        "dateDeCreation": "28/03/2024",
        "dateDeRendu": "08/07/2023",
        "note": 17,
        "remarque": "Nam nulla.",
        "rendu": false
    },
    {
        "titre": "VP Sales",
        "etudiant": 2,
        "professeur": 3,
        "dateDeCreation": "04/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Pellentesque ultrices mattis odio.",
        "rendu": false
    },
    {
        "titre": "Project Manager",
        "etudiant": 11,
        "professeur": 5,
        "dateDeCreation": "13/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
        "rendu": false
    },
    {
        "titre": "Media Manager IV",
        "etudiant": 20,
        "professeur": 4,
        "dateDeCreation": "06/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Curabitur gravida nisi at nibh.",
        "rendu": false
    },
    {
        "titre": "Recruiting Manager",
        "etudiant": 17,
        "professeur": 4,
        "dateDeCreation": "29/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis aliquam convallis nunc.",
        "rendu": false
    },
    {
        "titre": "Internal Auditor",
        "etudiant": 11,
        "professeur": 3,
        "dateDeCreation": "16/01/2024",
        "dateDeRendu": "27/07/2023",
        "note": 11,
        "remarque": "Duis at velit eu est congue elementum.",
        "rendu": true
    },
    {
        "titre": "Internal Auditor",
        "etudiant": 7,
        "professeur": 4,
        "dateDeCreation": "29/06/2023",
        "dateDeRendu": "02/12/2023",
        "note": 13,
        "remarque": "Donec vitae nisi.",
        "rendu": false
    },
    {
        "titre": "Software Test Engineer II",
        "etudiant": 18,
        "professeur": 1,
        "dateDeCreation": "24/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Etiam pretium iaculis justo.",
        "rendu": false
    },
    {
        "titre": "Senior Quality Engineer",
        "etudiant": 2,
        "professeur": 1,
        "dateDeCreation": "11/04/2024",
        "dateDeRendu": "29/05/2023",
        "note": 19,
        "remarque": "Morbi non lectus.",
        "rendu": false
    },
    {
        "titre": "Administrative Officer",
        "etudiant": 15,
        "professeur": 1,
        "dateDeCreation": "23/07/2023",
        "dateDeRendu": "17/01/2024",
        "note": 8,
        "remarque": "Nam nulla.",
        "rendu": true
    },
    {
        "titre": "Nurse",
        "etudiant": 7,
        "professeur": 4,
        "dateDeCreation": "05/02/2024",
        "dateDeRendu": "16/04/2023",
        "note": 10,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": false
    },
    {
        "titre": "Environmental Specialist",
        "etudiant": 6,
        "professeur": 1,
        "dateDeCreation": "13/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Duis at velit eu est congue elementum.",
        "rendu": false
    },
    {
        "titre": "Editor",
        "etudiant": 4,
        "professeur": 3,
        "dateDeCreation": "16/07/2023",
        "dateDeRendu": "16/10/2023",
        "note": 9,
        "remarque": "Nullam sit amet turpis elementum ligula vehicula consequat.",
        "rendu": true
    },
    {
        "titre": "Product Engineer",
        "etudiant": 9,
        "professeur": 1,
        "dateDeCreation": "03/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus tortor.",
        "rendu": false
    },
    {
        "titre": "Assistant Professor",
        "etudiant": 20,
        "professeur": 4,
        "dateDeCreation": "15/01/2024",
        "dateDeRendu": "10/06/2023",
        "note": 16,
        "remarque": "Ut at dolor quis odio consequat varius.",
        "rendu": true
    },
    {
        "titre": "Speech Pathologist",
        "etudiant": 20,
        "professeur": 2,
        "dateDeCreation": "12/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Integer ac leo.",
        "rendu": false
    },
    {
        "titre": "Geological Engineer",
        "etudiant": 12,
        "professeur": 2,
        "dateDeCreation": "09/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aenean auctor gravida sem.",
        "rendu": false
    },
    {
        "titre": "Civil Engineer",
        "etudiant": 7,
        "professeur": 4,
        "dateDeCreation": "28/02/2023",
        "dateDeRendu": "07/02/2024",
        "note": 17,
        "remarque": "Donec ut dolor.",
        "rendu": true
    },
    {
        "titre": "Research Nurse",
        "etudiant": 7,
        "professeur": 3,
        "dateDeCreation": "01/01/2024",
        "dateDeRendu": "04/04/2024",
        "note": 20,
        "remarque": "Quisque porta volutpat erat.",
        "rendu": true
    },
    {
        "titre": "Clinical Specialist",
        "etudiant": 17,
        "professeur": 5,
        "dateDeCreation": "25/10/2023",
        "dateDeRendu": "05/11/2023",
        "note": 19,
        "remarque": "Donec vitae nisi.",
        "rendu": false
    },
    {
        "titre": "Analog Circuit Design manager",
        "etudiant": 1,
        "professeur": 4,
        "dateDeCreation": "10/03/2023",
        "dateDeRendu": "10/01/2024",
        "note": 10,
        "remarque": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        "rendu": true
    },
    {
        "titre": "Financial Analyst",
        "etudiant": 5,
        "professeur": 3,
        "dateDeCreation": "24/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Curabitur convallis.",
        "rendu": false
    },
    {
        "titre": "General Manager",
        "etudiant": 1,
        "professeur": 4,
        "dateDeCreation": "19/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam non mauris.",
        "rendu": false
    },
    {
        "titre": "Business Systems Development Analyst",
        "etudiant": 15,
        "professeur": 2,
        "dateDeCreation": "24/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla suscipit ligula in lacus.",
        "rendu": false
    },
    {
        "titre": "Staff Scientist",
        "etudiant": 10,
        "professeur": 5,
        "dateDeCreation": "19/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "rendu": false
    },
    {
        "titre": "Information Systems Manager",
        "etudiant": 8,
        "professeur": 3,
        "dateDeCreation": "27/07/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aliquam sit amet diam in magna bibendum imperdiet.",
        "rendu": false
    },
    {
        "titre": "Account Representative I",
        "etudiant": 2,
        "professeur": 1,
        "dateDeCreation": "05/03/2024",
        "dateDeRendu": "06/05/2023",
        "note": 15,
        "remarque": "Donec ut mauris eget massa tempor convallis.",
        "rendu": false
    },
    {
        "titre": "Environmental Specialist",
        "etudiant": 14,
        "professeur": 2,
        "dateDeCreation": "18/06/2023",
        "dateDeRendu": "15/11/2023",
        "note": 14,
        "remarque": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
        "rendu": true
    },
    {
        "titre": "Data Coordinator",
        "etudiant": 16,
        "professeur": 4,
        "dateDeCreation": "09/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In eleifend quam a odio.",
        "rendu": false
    },
    {
        "titre": "Accounting Assistant IV",
        "etudiant": 10,
        "professeur": 4,
        "dateDeCreation": "06/04/2024",
        "dateDeRendu": "16/04/2024",
        "note": 12,
        "remarque": "Sed ante.",
        "rendu": true
    },
    {
        "titre": "Account Executive",
        "etudiant": 16,
        "professeur": 2,
        "dateDeCreation": "30/05/2023",
        "dateDeRendu": "22/08/2023",
        "note": 9,
        "remarque": "Nunc rhoncus dui vel sem.",
        "rendu": false
    },
    {
        "titre": "Safety Technician II",
        "etudiant": 4,
        "professeur": 4,
        "dateDeCreation": "12/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Mauris lacinia sapien quis libero.",
        "rendu": false
    },
    {
        "titre": "Speech Pathologist",
        "etudiant": 11,
        "professeur": 1,
        "dateDeCreation": "27/08/2023",
        "dateDeRendu": "24/08/2023",
        "note": 15,
        "remarque": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "rendu": false
    },
    {
        "titre": "VP Quality Control",
        "etudiant": 12,
        "professeur": 2,
        "dateDeCreation": "26/05/2023",
        "dateDeRendu": "05/07/2023",
        "note": 12,
        "remarque": "Fusce posuere felis sed lacus.",
        "rendu": false
    },
    {
        "titre": "Executive Secretary",
        "etudiant": 16,
        "professeur": 1,
        "dateDeCreation": "28/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi vel lectus in quam fringilla rhoncus.",
        "rendu": false
    },
    {
        "titre": "Accounting Assistant IV",
        "etudiant": 8,
        "professeur": 3,
        "dateDeCreation": "10/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Pellentesque eget nunc.",
        "rendu": false
    },
    {
        "titre": "Human Resources Manager",
        "etudiant": 11,
        "professeur": 2,
        "dateDeCreation": "17/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum sed magna at nunc commodo placerat.",
        "rendu": false
    },
    {
        "titre": "Director of Sales",
        "etudiant": 17,
        "professeur": 2,
        "dateDeCreation": "20/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi vel lectus in quam fringilla rhoncus.",
        "rendu": false
    },
    {
        "titre": "Nurse Practicioner",
        "etudiant": 7,
        "professeur": 2,
        "dateDeCreation": "09/04/2024",
        "dateDeRendu": "25/03/2024",
        "note": 16,
        "remarque": "Aliquam non mauris.",
        "rendu": false
    },
    {
        "titre": "Technical Writer",
        "etudiant": 5,
        "professeur": 1,
        "dateDeCreation": "28/05/2023",
        "dateDeRendu": "04/05/2023",
        "note": 8,
        "remarque": "Curabitur at ipsum ac tellus semper interdum.",
        "rendu": true
    },
    {
        "titre": "Product Engineer",
        "etudiant": 12,
        "professeur": 2,
        "dateDeCreation": "04/02/2024",
        "dateDeRendu": "10/02/2024",
        "note": 8,
        "remarque": "Praesent blandit lacinia erat.",
        "rendu": true
    },
    {
        "titre": "GIS Technical Architect",
        "etudiant": 16,
        "professeur": 5,
        "dateDeCreation": "04/03/2024",
        "dateDeRendu": "15/12/2023",
        "note": 18,
        "remarque": "Mauris lacinia sapien quis libero.",
        "rendu": false
    },
    {
        "titre": "Research Assistant III",
        "etudiant": 1,
        "professeur": 4,
        "dateDeCreation": "17/06/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "rendu": false
    },
    {
        "titre": "VP Accounting",
        "etudiant": 4,
        "professeur": 5,
        "dateDeCreation": "05/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
        "rendu": false
    },
    {
        "titre": "General Manager",
        "etudiant": 15,
        "professeur": 5,
        "dateDeCreation": "13/04/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "rendu": false
    },
    {
        "titre": "Statistician I",
        "etudiant": 6,
        "professeur": 4,
        "dateDeCreation": "14/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In quis justo.",
        "rendu": false
    },
    {
        "titre": "Librarian",
        "etudiant": 15,
        "professeur": 1,
        "dateDeCreation": "19/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cras in purus eu magna vulputate luctus.",
        "rendu": false
    },
    {
        "titre": "Information Systems Manager",
        "etudiant": 15,
        "professeur": 5,
        "dateDeCreation": "05/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "Media Manager I",
        "etudiant": 20,
        "professeur": 3,
        "dateDeCreation": "07/10/2023",
        "dateDeRendu": "27/09/2023",
        "note": 8,
        "remarque": "Nulla facilisi.",
        "rendu": true
    },
    {
        "titre": "Food Chemist",
        "etudiant": 3,
        "professeur": 1,
        "dateDeCreation": "18/03/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "rendu": false
    },
    {
        "titre": "Web Developer I",
        "etudiant": 4,
        "professeur": 4,
        "dateDeCreation": "02/04/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Aenean sit amet justo.",
        "rendu": false
    },
    {
        "titre": "Compensation Analyst",
        "etudiant": 8,
        "professeur": 5,
        "dateDeCreation": "20/06/2023",
        "dateDeRendu": "27/05/2024",
        "note": 8,
        "remarque": "Phasellus id sapien in sapien iaculis congue.",
        "rendu": true
    },
    {
        "titre": "Senior Sales Associate",
        "etudiant": 16,
        "professeur": 2,
        "dateDeCreation": "12/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "Environmental Specialist",
        "etudiant": 6,
        "professeur": 2,
        "dateDeCreation": "06/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "rendu": false
    },
    {
        "titre": "Nuclear Power Engineer",
        "etudiant": 11,
        "professeur": 3,
        "dateDeCreation": "21/11/2023",
        "dateDeRendu": "11/07/2023",
        "note": 13,
        "remarque": "Cras in purus eu magna vulputate luctus.",
        "rendu": false
    },
    {
        "titre": "Actuary",
        "etudiant": 3,
        "professeur": 2,
        "dateDeCreation": "05/01/2024",
        "dateDeRendu": "18/05/2024",
        "note": 10,
        "remarque": "Cras non velit nec nisi vulputate nonummy.",
        "rendu": true
    },
    {
        "titre": "Marketing Assistant",
        "etudiant": 19,
        "professeur": 4,
        "dateDeCreation": "09/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Food Chemist",
        "etudiant": 11,
        "professeur": 2,
        "dateDeCreation": "27/05/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nulla nisl.",
        "rendu": false
    },
    {
        "titre": "Graphic Designer",
        "etudiant": 19,
        "professeur": 1,
        "dateDeCreation": "25/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "In hac habitasse platea dictumst.",
        "rendu": false
    },
    {
        "titre": "Administrative Assistant II",
        "etudiant": 18,
        "professeur": 5,
        "dateDeCreation": "28/08/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Nam nulla.",
        "rendu": false
    },
    {
        "titre": "Electrical Engineer",
        "etudiant": 6,
        "professeur": 3,
        "dateDeCreation": "22/12/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi non lectus.",
        "rendu": false
    },
    {
        "titre": "Clinical Specialist",
        "etudiant": 2,
        "professeur": 4,
        "dateDeCreation": "13/02/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vivamus in felis eu sapien cursus vestibulum.",
        "rendu": false
    },
    {
        "titre": "Recruiter",
        "etudiant": 2,
        "professeur": 5,
        "dateDeCreation": "15/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
        "rendu": false
    },
    {
        "titre": "Director of Sales",
        "etudiant": 18,
        "professeur": 5,
        "dateDeCreation": "11/09/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Suspendisse potenti.",
        "rendu": false
    },
    {
        "titre": "Business Systems Development Analyst",
        "etudiant": 13,
        "professeur": 2,
        "dateDeCreation": "16/02/2024",
        "dateDeRendu": "16/06/2023",
        "note": 12,
        "remarque": "Sed sagittis.",
        "rendu": true
    },
    {
        "titre": "Geologist IV",
        "etudiant": 6,
        "professeur": 2,
        "dateDeCreation": "17/02/2024",
        "dateDeRendu": "27/11/2023",
        "note": 20,
        "remarque": "Mauris lacinia sapien quis libero.",
        "rendu": false
    },
    {
        "titre": "Structural Engineer",
        "etudiant": 11,
        "professeur": 2,
        "dateDeCreation": "04/09/2023",
        "dateDeRendu": "13/02/2024",
        "note": 10,
        "remarque": "Integer ac neque.",
        "rendu": false
    },
    {
        "titre": "Technical Writer",
        "etudiant": 17,
        "professeur": 5,
        "dateDeCreation": "07/11/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Praesent id massa id nisl venenatis lacinia.",
        "rendu": false
    },
    {
        "titre": "Biostatistician II",
        "etudiant": 17,
        "professeur": 3,
        "dateDeCreation": "02/10/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Morbi quis tortor id nulla ultrices aliquet.",
        "rendu": false
    },
    {
        "titre": "Administrative Assistant IV",
        "etudiant": 4,
        "professeur": 2,
        "dateDeCreation": "21/03/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Vestibulum sed magna at nunc commodo placerat.",
        "rendu": false
    },
    {
        "titre": "Account Executive",
        "etudiant": 14,
        "professeur": 2,
        "dateDeCreation": "29/04/2023",
        "dateDeRendu": "15/11/2023",
        "note": 17,
        "remarque": "Nam dui.",
        "rendu": false
    },
    {
        "titre": "Structural Engineer",
        "etudiant": 18,
        "professeur": 5,
        "dateDeCreation": "30/01/2023",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Donec vitae nisi.",
        "rendu": false
    },
    {
        "titre": "Analog Circuit Design manager",
        "etudiant": 10,
        "professeur": 3,
        "dateDeCreation": "06/01/2024",
        "dateDeRendu": null,
        "note": -1,
        "remarque": "Etiam pretium iaculis justo.",
        "rendu": false
    }
];