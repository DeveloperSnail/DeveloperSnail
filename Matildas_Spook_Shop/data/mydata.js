class Kategorija{
    constructor(id, name, products) { 
        this.id = id;
        this.name = name;
        this.products = products;
    }  
};
class Proizvod {
    constructor(id, name, image, category) { 
        this.id = id;
        this.name = name;    
        this.image = image;
        this.category = category;
    }  
};
const data = {
    website: "Matildas Spook Shop",
    categories: []
};

let CatId = 100;
let ProdId = 10000;
data.categories.push( 
    new Kategorija(CatId++, "Costumes", [
        new Proizvod(ProdId++, "Kangaroo costume", "2_kangaroo_costume.png"),
        new Proizvod(ProdId++, "Ghost costume", "2 ghost.jpg"),
        new Proizvod(ProdId++, "Witch costume", "2 witch costume.png"),
        new Proizvod(ProdId++, "Shrek costume", "2 shrek costume.jpg"),
        new Proizvod(ProdId++, "Garfield costume", "2 garfield costume.jpg")
    ])
);
data.categories.push( 
    new Kategorija(CatId++, "Jewelry", [
        new Proizvod(ProdId++, "Mustach nose glasses", "1 mustach nose glasses.png"),
        new Proizvod(ProdId++, "Special edition nail polish", "1 halloween nail polish.png"),
        new Proizvod(ProdId++, "Tiara", "1 tiara for princess.png"),
        new Proizvod(ProdId++, "Metal skeleton earrings", "1 skull earrings.png"),
        new Proizvod(ProdId++, "Special cat colored eye contacts", "1 special cat eye contacts.png")
    ])
);
data.categories.push( 
    new Kategorija(CatId++, "Make up", [
        new Proizvod(ProdId++, "Face paint", "3 bojanje lica.png"),
        new Proizvod(ProdId++, "Temporary tattoes", "3 temporary tattoes.png"),
        new Proizvod(ProdId++, "Face glitter", "3 glitter sminka.png"),
        new Proizvod(ProdId++, "Clown afro", "3 clown mask.png"),
        new Proizvod(ProdId++, "Bald cap", "3 bald cap.png")
    ])
);
data.categories.push( 
    new Kategorija(CatId++, "Front house decorations", [
        new Proizvod(ProdId++, "Jack-o-lantern", "4 jack o lantern.png"),
        new Proizvod(ProdId++, "Bush spider web decoration", "4 spider web bush decoration.png"),
        new Proizvod(ProdId++, "Inflatable ghost decoration", "4 inflatable decoration.png"),
        new Proizvod(ProdId++, "Hanging bat decoration", "4 hanging bats.png"),
        new Proizvod(ProdId++, "Laser projector for scary display", "4 house projector.png")
    ])
);
data.categories.push( 
    new Kategorija(CatId++, "Candy buckers", [
        new Proizvod(ProdId++, "Bucket", "5 bucket.jpg"),
        new Proizvod(ProdId++, "Jack-o-lantern bucket", "5 jack o lantern bucket.png"),
        new Proizvod(ProdId++, "Skull candy bucket", "5 skull-candy-bucket.jpeg"),
        new Proizvod(ProdId++, "Witches candy pot", "5 withces candy pot.png"),
        new Proizvod(ProdId++, "Zombie candy bucket", "5 zombie candy bucket.jpeg")
    ])
);
data.categories.push( 
    new Kategorija(CatId++, "Costume props", [
        new Proizvod(ProdId++, "Devils trident", "6 trident.png"),
        new Proizvod(ProdId++, "Matildas wand.png", "6 wand.png"),
        new Proizvod(ProdId++, "Garlic necklace", "6 garlic necklace.png"),
        new Proizvod(ProdId++, "Prop gun", "6 fake gun.jpg"),
        new Proizvod(ProdId++, "Creepy mask", "6 creppy mask.jpg")
    ])
);
data.categories.push( 
    new Kategorija(CatId++, "Candy selection", [
        new Proizvod(ProdId++, "Chocolate bars", "7 chocolate bar.png"),
        new Proizvod(ProdId++, "Chocolate coins", "7 chocolate candy.png"),
        new Proizvod(ProdId++, "Gummy bears", "7 gummy bears.png"),
        new Proizvod(ProdId++, "Lolli pop", "7 lolli pop.png"),
        new Proizvod(ProdId++, "Protein bar", "7 protein bar.png")
    ])
);
data.categories.push( 
    new Kategorija(CatId++, "Indoor decorations", [
        new Proizvod(ProdId++, "Candy jar", "8 candy jar.jpg"),
        new Proizvod(ProdId++, "Halloween themed candles", "8 halloween candles.png"),
        new Proizvod(ProdId++, "Table cloth", "8 table cloth.jpg"),
        new Proizvod(ProdId++, "Skeleton display", "8 skeleton display.png"),
        new Proizvod(ProdId++, "Halloween painted glass", "8 painted glass.png")
    ])
);
data.categories.push( 
    new Kategorija(CatId++, "Entertainment", [
        new Proizvod(ProdId++, "Card trick set", "9 card trick set.jpeg"),
        new Proizvod(ProdId++, "Eye pop out glasses", "9 eye pop out glasses.jpg"),
        new Proizvod(ProdId++, "Hand buzzer", "9 hand buzzer.jpg"),
        new Proizvod(ProdId++, "Maracas", "9 maracas.jpg"),
        new Proizvod(ProdId++, "Snake in a can", "9 snake in a can.jpg")
    ])
);
data.categories.push( 
    new Kategorija(CatId++, "Party supplies", [
        new Proizvod(ProdId++, "Boombox", "10 boombox.png"),
        new Proizvod(ProdId++, "Fog machine", "10 fog machine.png"),
        new Proizvod(ProdId++, "Skull shaped beer mug", "10 glass beer mug.jpg"),
        new Proizvod(ProdId++, "Beer pong", "10 inflattable beer pong.png"),
        new Proizvod(ProdId++, "Laser machine", "10 laser machine.png")
    ])
);

module.exports = data;