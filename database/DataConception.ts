/**
 * [...] on gérera le cas particulier admin
 * qui lui seul peut faire EDIT et DELETE des assignments
 */
const Admin = [
  {
    nom: 'Université Côte d\'Azur',
    prenom: 'Administration',
    email: 'administration@univ.uca',
    password: 'admin@univ',
    role: 'ADMIN'
  }
];

/**
 * Les formulaires d'ajout et de détails proposeront un choix fixe de matières 
 * et associeront automatiquement le prof et l'image illustrant la matière
 */
const Professeur = [
  {
    id: 1,
    nom: 'Michel',
    prenom: 'BUFFA',
    email: 'michel.buffa@gmail.com',
    password: 'michelbuff',
    imagePath: '',
    role: 'PROFESSEUR' ,
    matiere: {
      intitule: 'SQL Avancé et BIG Data' ,
      imagePath: ''
    } 
  }
];


/**
 * [...] chaque Assignment sous forme d'une Material Card, 
 * avec le titre, la date, l'élève, une petite image illustrant la matière, la photo du prof
 */
const Etudiant = [
  {
    nom: 'RAKOTO',
    prenom: 'Naivo',
    email: 'rak.naivo@gmail.com',
    password: 'raknaiv',
    role: 'ETUDIANT',
    niveau: 'L1',
    imagePath: '' ,
    assignments: [
      {
        titre: 'TP1 BigDATA',
        professeur: 1,
        dateDeCreation: '2023-06-03',
        dateDeRendu: '',
        note: -1,
        remarque: '',
        rendu: false
      }
    ]
  }
];