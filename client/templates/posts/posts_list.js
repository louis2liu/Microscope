var postsData = [
    {
        title: 'Indroducing telescope',
        url: 'http://sachagreif.com/introducing-telescope.html'
    },
    {
        title: 'Meteor',
        url: 'http://www.meteor.com'
    },
    {
        title: 'The meteor book',
        url: 'http://themeteorbook.com'
    }
];
Template.postsList.helpers({
    posts: postsData
});
