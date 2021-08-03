const path = require( 'path' );

module.exports = {
    styleguideDir : "docs",
    
    skipComponentsWithoutExample : false,
    
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
            name : 'jsdocs',
            href : '../jsdocs/index.html',
            external : true,
        },
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
        {
            name : 'Layout',
            content : 'src/components/layout/layout.md',
            components : 'src/components/layout/**/*.js',
            sectionDepth : 1,
        },
        {
            name : 'Positional',
            content : 'src/components/positional/positional.md',
            components : 'src/components/positional/**/*.js',
            sectionDepth : 1,
        },
        {
            name : 'Tackle',
            content : 'src/components/tackle/tackle.md',
            components : 'src/components/tackle/**/*.js',
            sectionDepth : 1,
        },
        {
            name : 'Visual',
            content : 'src/components/visual/visual.md',
            components : 'src/components/visual/**/*.js',
            sectionDepth : 1,
        }
    ],

    //
    // STYLES
    styles : './styleguide.styles.js',
};