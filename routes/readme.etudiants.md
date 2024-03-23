# ROUTE PRINCIPALE = /etudiants

# Liste des assignments d'un étudiant (Toutes les paramètres après `?` sont facultatives)
    URI = /id/assignments?page=1&limit=1&tri=1&rendu=all
    tri = 1 | -1
    rendu = all | 1 | -1

    {
        "docs": [
            {
                "_id": "65fc77ff956c55528fd0301c",
                "note": 11,
                "remarque": "nisl venenatis lacinia aenean sit",
                "rendu": true,
                "dateDeCreation": "2024-01-07T00:00:00.000Z",
                "titre": "Account Representative III",
                "etudiant": "65fc66a63aa4303f31038322",
                "professeur": [
                    {
                        "_id": "65fc6ac32ee5764347e57ad7",
                        "matiere": {
                            "intitule": "Base de données",
                            "imagePath": ""
                        },
                        "nom": "Sudy",
                        "prenom": "Gabrielle",
                        "email": "gabrielle@gmail.com",
                        "imagePath": ""
                    }
                ],
                "dateDeRendu": "2024-07-30T00:00:00.000Z",
                "__v": 0
            },
            {
                "_id": "65fc77ff956c55528fd031a2",
                "note": 17,
                "remarque": "suscipit ligula in lacus curabitur at ipsum ac",
                "rendu": true,
                "dateDeCreation": "2024-01-12T00:00:00.000Z",
                "titre": "Clinical Specialist",
                "etudiant": "65fc66a63aa4303f31038322",
                "professeur": [
                    {
                        "_id": "65fc6ac32ee5764347e57ad6",
                        "matiere": {
                            "intitule": "Big Bridge",
                            "imagePath": ""
                        },
                        "nom": "Cristofori",
                        "prenom": "Vincents",
                        "email": "vincents@gmail.com",
                        "imagePath": ""
                    }
                ],
                "dateDeRendu": "2024-07-28T00:00:00.000Z",
                "__v": 0
            },
            ...
        ],
        "totalDocs": 54,
        "limit": 10,
        "page": 1,
        "totalPages": 6,
        "pagingCounter": 1,
        "hasPrevPage": false,
        "hasNextPage": true,
        "prevPage": null,
        "nextPage": 2
    }