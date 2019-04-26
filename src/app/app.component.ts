import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <!doctype html>
<html>

<head>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>

<body>
    <header>
        <title>SGP App</title>
        <nav>
            <ul class="nav nav-pills nav-justified">
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Logout</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">collaborateurs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Statistiques</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Activités</a>
                </li>
            </ul>
        </nav>
    </header>

    <main>
        <div class="container">
          
                <button type="button" class="float-right">
                    <a href="./NouveauCollaborateur.html">Ajouter un nouveau collaborateur</a>
                </button>

            <div class="row-sm align justify-content-start">
                <h1>Les collaborateurs</h1>
            </div>

            <div class="row-sm align justify-content-start">
                <div class="col-sm">
                    <label for="input">Rechercher un nom ou un prénom qui commence par :</label>
                </div>

                <div class="col-sm">
                    <input id="input" type="text" placeholder="Tapez l'initiale de votre recherche">
                </div>

                <div class="col-sm">
                    <button submit>Rechercher</button>
                </div>

                <div class="col-sm">
                    <label>
                        <input type="checkbox" value="">Voir les collaborateurs désactivés</label>
                </div>
            </div>

            <div class="row-sm align justify-content-start">
                <div class="col-sm">
                    <label for="select">Filtrer par département :</label>
                </div>

                <div class="col-sm">
                    <select id="select">
                        <option value="">Tous</option>

                        <optgroup label="Service">
                            <option value="">Comptabilité</option>
                            <option value="">Ressources Humaines</option>
                            <option value="">Informatique</option>
                            <option value="">Accueil</option>
                        </optgroup>
                    </select>
                </div>
            </div>
        </div>

        <div class="card-deck">

            <div class="row">

                <div class="card">

                    <div class="card-body">

                        <h5 class="card-title">NOM Prénom</h5>

                        <div class="row">

                            <div class="col-sm-4">
                                <img class="img-fluid rounded"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Chihuahuas-_Holly%2C_Nina%2C_Doralice.jpg/1280px-Chihuahuas-_Holly%2C_Nina%2C_Doralice.jpg" />
                            </div>


                            <div class="col-sm-4">
                                <p class="card-text">Fonction</p>
                                <p class="card-text">Département</p>
                                <p class="card-text">E-mail</p>
                                <p class="card-text">Téléphone</p>
                            </div>

                            <div class="col-sm-4">
                                <p class="card-text">récupérer la fonction</p>
                                <p class="card-text">récupérer le département</p>
                                <p class="card-text">récupérer l'e-mail</p>
                                <p class="card-text">récupérer le téléphone</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-footer">
                        <input type="submit" class="btn float-right" value="Éditer" />
                    </div>
                </div>

                <div class="card">

                    <div class="card-body">

                        <h5 class="card-title">NOM Prénom</h5>

                        <div class="row">

                            <div class="col-sm-4">
                                <img class="img-fluid rounded"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Chihuahuas-_Holly%2C_Nina%2C_Doralice.jpg/1280px-Chihuahuas-_Holly%2C_Nina%2C_Doralice.jpg" />
                            </div>


                            <div class="col-sm-4">
                                <p class="card-text">Fonction</p>
                                <p class="card-text">Département</p>
                                <p class="card-text">E-mail</p>
                                <p class="card-text">Téléphone</p>
                            </div>

                            <div class="col-sm-4">
                                <p class="card-text">récupérer la fonction</p>
                                <p class="card-text">récupérer le département</p>
                                <p class="card-text">récupérer l'e-mail</p>
                                <p class="card-text">récupérer le téléphone</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-footer">
                        <input type="submit" class="btn float-right" value="Éditer" />
                    </div>
                </div>

                <div class="card">

                    <div class="card-body">

                        <h5 class="card-title">NOM Prénom</h5>

                        <div class="row">

                            <div class="col-sm-4">
                                <img class="img-fluid rounded"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Chihuahuas-_Holly%2C_Nina%2C_Doralice.jpg/1280px-Chihuahuas-_Holly%2C_Nina%2C_Doralice.jpg" />
                            </div>


                            <div class="col-sm-4">
                                <p class="card-text">Fonction</p>
                                <p class="card-text">Département</p>
                                <p class="card-text">E-mail</p>
                                <p class="card-text">Téléphone</p>
                            </div>

                            <div class="col-sm-4">
                                <p class="card-text">récupérer la fonction</p>
                                <p class="card-text">récupérer le département</p>
                                <p class="card-text">récupérer l'e-mail</p>
                                <p class="card-text">récupérer le téléphone</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-footer">
                        <input type="submit" class="btn float-right" value="Éditer" />
                    </div>
                </div>

            </div>

            <div class="card">

                <div class="card-body">

                    <h5 class="card-title">NOM Prénom</h5>

                    <div class="row">

                        <div class="col-sm-4">
                            <img class="img-fluid rounded"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Chihuahuas-_Holly%2C_Nina%2C_Doralice.jpg/1280px-Chihuahuas-_Holly%2C_Nina%2C_Doralice.jpg" />
                        </div>


                        <div class="col-sm-4">
                            <p class="card-text">Fonction</p>
                            <p class="card-text">Département</p>
                            <p class="card-text">E-mail</p>
                            <p class="card-text">Téléphone</p>
                        </div>

                        <div class="col-sm-4">
                            <p class="card-text">récupérer la fonction</p>
                            <p class="card-text">récupérer le département</p>
                            <p class="card-text">récupérer l'e-mail</p>
                            <p class="card-text">récupérer le téléphone</p>
                        </div>
                    </div>
                </div>

                <div class="card-footer">
                    <input type="submit" class="btn float-right" value="Éditer" />
                </div>
            </div>

            <div class="card">

                <div class="card-body">

                    <h5 class="card-title">NOM Prénom</h5>

                    <div class="row">

                        <div class="col-sm-4">
                            <img class="img-fluid rounded"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Chihuahuas-_Holly%2C_Nina%2C_Doralice.jpg/1280px-Chihuahuas-_Holly%2C_Nina%2C_Doralice.jpg" />
                        </div>


                        <div class="col-sm-4">
                            <p class="card-text">Fonction</p>
                            <p class="card-text">Département</p>
                            <p class="card-text">E-mail</p>
                            <p class="card-text">Téléphone</p>
                        </div>

                        <div class="col-sm-4">
                            <p class="card-text">récupérer la fonction</p>
                            <p class="card-text">récupérer le département</p>
                            <p class="card-text">récupérer l'e-mail</p>
                            <p class="card-text">récupérer le téléphone</p>
                        </div>
                    </div>
                </div>

                <div class="card-footer">
                    <input type="submit" class="btn float-right" value="Éditer" />
                </div>
            </div>

            <div class="card">

                <div class="card-body">

                    <h5 class="card-title">NOM Prénom</h5>

                    <div class="row">

                        <div class="col-sm-4">
                            <img class="img-fluid rounded"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Chihuahuas-_Holly%2C_Nina%2C_Doralice.jpg/1280px-Chihuahuas-_Holly%2C_Nina%2C_Doralice.jpg" />
                        </div>

                        <div class="col-sm-4">
                            <p class="card-text">Fonction</p>
                            <p class="card-text">Département</p>
                            <p class="card-text">E-mail</p>
                            <p class="card-text">Téléphone</p>
                        </div>

                        <div class="col-sm-4">
                            <p class="card-text">récupérer la fonction</p>
                            <p class="card-text">récupérer le département</p>
                            <p class="card-text">récupérer l'e-mail</p>
                            <p class="card-text">récupérer le téléphone</p>
                        </div>
                    </div>
                </div>

                <div class="card-footer">
                    <input type="submit" class="btn float-right" value="Éditer" />
                </div>
            </div>
        </div>

    </main>

    <footer>
        <p class = "float-right"> ©copyright - Tous droits réservés</p>
    </footer>

</body>

</html>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'collegues-front';
}
