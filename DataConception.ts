const bdInitialProfesseur = [
  {nom:'',prenom:'',email:'',password:'',domaine:'',role:'professeur'},
];

const bdInitialAdmin = [
  {nom:'',prenom:'',email:'',password:'',role:'admin'},
];

const bdInitialStudents = [
  {nom:'',prenom:'',email:'',password:'',role:'etudiant',niveau:'L1',cursus:'Réseau',imagePath:''},
];

const bdInitialAssignments = [
  { nom: 'TP1 BigDATA',matiere:'BIGDATA',dateDeCreation: '2023-06-03',dateDeRendu: '2023-06-03',imagePath:'',note:'15',etudiant:'',professeur:'',remarque:'',rendu: false },
  { nom: 'TP1 BigDATA',matiere:'BIGDATA',dateDeCreation: '2023-06-03',dateDeRendu: '2023-06-03',imagePath:'',note:'15',etudiant:'',professeur:'',remarque:'',rendu: false },
];





export { bdInitialAssignments };
