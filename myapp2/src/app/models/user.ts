export class User{
    constructor(
        public userName: string,
        public wins: number,
        public totalGames: number,
        public _id: string,
        public pass: string
    ){
        /*this.title= title;
        this.description = description;
        this.url = url;*/
    }

}