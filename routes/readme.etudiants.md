# ROUTE PRINCIPALE = /etudiants

# LISTE des assignments d'un étudiant (Toutes les paramètres après `?` sont facultatives)
    URI = /:id/assignments?page=1&limit=1&tri=1&rendu=all
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


# RECHERCHE des assignments d'un étudiant (Toutes les paramètres après `?` sont facultatives)
    URI = /:id/assignments/search?titre=aaa&matiere=Web&dateDeCreationInf=2024-01-01&dateDeCreationSup=2024-01-01&dateDeRenduInf=2024-01-01&dateDeRenduSup=2024-01-01

    {
        "docs": [
            {
                "_id": "65fc77ff956c55528fd02f85",
                "note": 11,
                "remarque": "morbi vel lectus in quam fringilla rhoncus",
                "rendu": true,
                "dateDeCreation": "2024-01-12T00:00:00.000Z",
                "titre": "Budget/Accounting Analyst IV",
                "etudiant": "65fc66a63aa4303f31038322",
                "professeur": [
                    {
                        "_id": "65fc6ac32ee5764347e57ad5",
                        "matiere": {
                            "intitule": "Technologies WEB",
                            "imagePath": ""
                        },
                        "nom": "Streatfeild",
                        "prenom": "Mata",
                        "email": "mata@gmail.com",
                        "imagePath": ""
                    }
                ],
                "dateDeRendu": "2024-06-01T00:00:00.000Z",
                "__v": 0
            },
            ...
        ],
        "totalDocs": 6,
        "limit": 10,
        "page": 1,
        "totalPages": 1,
        "pagingCounter": 1,
        "hasPrevPage": false,
        "hasNextPage": false,
        "prevPage": null,
        "nextPage": null
    }