const pdf = require('html-pdf-node');
const fs = require('fs');

const createPDF = (res, assignments, id, nom, prenom, email, niveau) => {
    const htmlContent = createHTMLContent(assignments, nom, prenom, email, niveau);
    const options = { format: 'A4' };
    pdf.generatePdf({ content: htmlContent }, options).then(pdfBuffer => {
        const filePath = './public/pdf/' + id + '.pdf';
        fs.writeFileSync(filePath, pdfBuffer);
        fs.readFile(filePath, function (err, data) {
            if (err) {}
            else {
                res.contentType("application/pdf");
                res.send(data);
            }
        });
    }).catch(error => {
        console.error('Erreur lors de la génération du PDF:', error);
    });
} ;

function createHTMLContent(assignments, nom, prenom, email, niveau) {
    let total = 0 ;
    let nombre = 0 ;
    let result = `<!DOCTYPE html>
                    <html>
                    <head>
                        <title>Relevé des notes</title>

                        <style>
                            table {
                                border-collapse: collapse;
                                width: 100%;
                            }
                            td,th {
                                border: 1px solid #dddddd;
                                padding: 5px;
                            }
                            th {
                                font-weight: bold;
                            }
                        </style>
                    </head>
                    <body>` ;
            
    let table = `<table>
                    <tr>
                        <th>Matière</th>
                        <th>Intitule</th>
                        <th>Date de rendu</th>
                        <th>Note /20</th>
                    </tr>` ;
    assignments.forEach(assign => {
        nombre++ ;
        total += parseInt(assign['note']);
        const dateDeRendu = new Date(assign['dateDeRendu']);
        table += `<tr>
                        <td>` + assign['professeur']['matiere']['intitule'] +`</td>
                        <td>` + assign['titre'] + `</td>
                        <td style='text-align: center'>` + formatDate(dateDeRendu) + `</td>
                        <td style='text-align: center'>` + assign['note'] + `</td>
                    </tr>` ;
    });

    const moyenne = nombre > 0 ? total / nombre : 0 ;
    table += `<tr>
                <th></th>
                <th></th>
                <th>Moyenne</th>  
                <th>` + moyenne.toFixed(2) + `</th>
            </tr>
        </table>` ;

    let top = `<style>
        .left-column {
            padding: 5px;
            border: 1px solid #dddddd;
            margin-bottom: 5px;
        }
        .myTitle {
            text-align: center;
        }
    </style>
    <div class="left-column">
        <h2 class='myTitle'>Relevé des notes</h2>
        <b> Étudiant : </b>` + prenom + ` ` + nom +`<br>
        <b> Promotion : </b>` + niveau + `<br>
        <b> Adresse électronique : </b>` + email + `<br>
        <b> Mention : </b>` + getMention(moyenne) + `
    </div>` ;

    result += top + table ;
    result += `</body></html>` ;
    return result ;
}

function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function getMention(moyenne) {
    if (moyenne >= 16) return 'TRÈS BIEN' ;
    if (moyenne >= 14) return 'BIEN' ;
    if (moyenne >= 12) return 'ASSEZ BIEN' ;
    if (moyenne >= 10) return 'PASSABLE' ;
    return 'NON-MENTIONNÉ' ;
}

module.exports = {
    createPDF
};