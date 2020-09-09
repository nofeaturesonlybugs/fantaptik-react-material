const path = require( 'path' );

module.exports = {
    styleguideDir : "docs",
    
    skipComponentsWithoutExample : true,
    
    require : [
        path.join( __dirname, 'node_modules/materialize-css/dist/css/materialize.min.css' ),
        path.join( __dirname, 'styleguide.globals.js' ),
    ],

    template : {
        head : {
            links : [
                {
                    rel : 'stylesheet',
                    href : 'https://fonts.googleapis.com/icon?family=Material+Icons',
                },
            ],
        },
    },

    ignore : [
        '**/components/**/common.js',
    ],

    //
    // SECTIONS

    //tocMode : 'collapse', // TODO

    pagePerSection : true,

    sections : [
        {
            name : 'Collections',
            content : 'src/components/collections/collections.md',
            components : 'src/components/collections/**/*.js',
            sectionDepth : 1,
        },
        {
            name : 'Containers',
            content : 'src/components/containers/containers.md',
            components : 'src/components/containers/**/*.js',
            sectionDepth : 1,
        },
        {
            name : 'Inputs',
            content : 'src/components/inputs/inputs.md',
            components : 'src/components/inputs/**/*.js',
            sectionDepth : 1,
        },
    ],

    //
    // STYLES
    styles : './styleguide.styles.js',
};