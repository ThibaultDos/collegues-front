export class Collegue {

    constructor(
        public matricule: string,
        public nom: string,
        public prenoms: string,
        public dateDeNaissance: Date,
        public email: string,
        public photoUrl: string
    ) { }
}