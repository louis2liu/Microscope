if(Posts.find().count() === 0){
    Posts.insert({
        title: "Introducing telescope",
        url: "http://sachagreif.com/introducing-telescope"
    });
    
    Posts.insert({
        title: "Meteor",
        url: "http://meteor.com"
    });

    Posts.insert({
        title: "The meteor Book",
        url: "http://themeteorbook.com"
    });
}
