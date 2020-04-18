module.exports = function (grunt) {

    const sass = require('node-sass');

    var assets = 'webroot/assets/components_premium/con-material-adui/src/app/assets/';

    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'webroot/assets/stylesheets',
                    src: ['*.scss'],
                    dest: 'webroot/css',
                    ext: '.css'
                  }]
            },
            options: { implementation: sass, sourceMap: true }
        },
        concat: {
            options: {
                separator: "\n"
            },
            css: {
                files: {
                    // 'dist-grunt/css/styles.css': [
                    //     'dist-grunt/css/style.css',
                    //     'assets/css/test.css'
                    // ],
                },
            },
            js: {
                files: {
                    'webroot/js/application.js': [
                        assets + 'jquery/jquery.min.js',

                        // blockUI missing

                        // underscore
                        'webroot/assets/components_premium/con-material-adui/src/src/js/materialize/scrollspy.js',

                        assets + 'jqueryRAF/jquery.requestAnimationFrame.min.js',
                        assets + 'nanoScroller/jquery.nanoscroller.min.js',
                        assets + 'materialize/js/materialize.min.js',
                        assets + 'parsley/parsley.min.js',
                        assets + 'sortable/parsley.min.js',
                        assets + '_con/Sortable.min.js',
                        assets + 'dataTables/js/jquery.dataTables.min.js',
                        assets + 'dataTables/extensions/TableTools/js/dataTables.tableTools.min.js',
                        'webroot/assets/javascripts/base.js',

                        'webroot/assets/javascripts/_CAKE.js'
                    ],
                    'webroot/js/full_screen.js': [
                        'webroot/js/application.js',

                        'webroot/assets/javascripts/sections/users/add.js',
                        'webroot/assets/javascripts/sections/users/login.js'
                    ],

                    'webroot/js/public.js': [
                        'webroot/js/application.js',

                        'webroot/assets/javascripts/sections/pages/index.js'

                    ],
                },
            },
        },
        cssmin: {
            dist: {
                // files: {
                //     'webroot/css/application.min.css': ['webroot/css/application.css']
                // }
                files: [{
                    expand: true,
                    cwd: 'webroot/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'webroot/css',
                    ext: '.min.css'
                  }]
            }
        },
        uglify: {
            dist: {
                // files: {
                //     'dist-grunt/js/scripts.min.js': ['dist-grunt/js/scripts.js']
                // }
                files: [{
                    expand: true,
                    cwd: 'webroot/js',
                    src: ['*.js', '!*.min.css'],
                    dest: 'webroot/js',
                    ext: '.min.js'
                  }]
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist-grunt/img'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', [
        'sass',
        'concat',
        'cssmin',
        //'uglify', // no change in practice since they're already minified
        //'imagemin'
    ]);

};
