
    function book(title, author, pages, read){
        this.title = title;
    this.author= author;
    this.pages= pages;
    this.read=read;
    this.readMessage = read === true ? 'book already read' : 'book not read';
    this.info= function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readMessage}` 
    }
}

book1 = new book('The Subtle Art of Not Giving a F***', 'Mark Manson', 224, true);





