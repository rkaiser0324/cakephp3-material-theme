module.exports = function (grunt) {

    var assets = 'webroot/assets/components_premium/con-material-adui/src/app/assets/';

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                   // 'dist-grunt/css/style.css': 'assets/scss/style.scss'
                }
            }
        },
        concat: {
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

                        // underscore
                        // blockUI

                        assets + 'jqueryRAF/jquery.requestAnimationFrame.min.js',
                        assets + 'nanoScroller/jquery.nanoscroller.min.js',
                        assets + 'materialize/js/materialize.min.js',
                        assets + 'parsley/parsley.min.js',
                        //
                        assets + '_con/js/_con.js',
                        'webroot/assets/javascripts/base.js',

                        'webroot/assets/javascripts/_CAKE.js'
                    ],
                    'webroot/js/full_screen.js': [
                        assets + 'jquery/jquery.min.js',

                        // underscore
                        // blockUI

                        assets + 'jqueryRAF/jquery.requestAnimationFrame.min.js',
                        assets + 'nanoScroller/jquery.nanoscroller.min.js',
                        assets + 'materialize/js/materialize.min.js',
                        assets + 'parsley/parsley.min.js',
                        //
                        assets + '_con/js/_con.js',
                        'webroot/assets/javascripts/base.js',


                        'webroot/assets/javascripts/sections/users/add.js',
                        'webroot/assets/javascripts/sections/users/login.js',

                        'webroot/assets/javascripts/_CAKE.js',
                    ],

                    'webroot/js/public.js': [
                        assets + 'jquery/jquery.min.js',

                        // underscore
                        // blockUI

                        assets + 'jqueryRAF/jquery.requestAnimationFrame.min.js',
                        assets + 'nanoScroller/jquery.nanoscroller.min.js',
                        assets + 'materialize/js/materialize.min.js',
                        assets + 'parsley/parsley.min.js',
                        //
                        assets + '_con/js/_con.js',
                        'webroot/assets/javascripts/base.js',


                        'webroot/assets/javascripts/sections/pages/index.js',

                        'webroot/assets/javascripts/_CAKE.js',
                    ],
                },
            },
        },
        cssmin: {
            dist: {
                files: {
                //    'dist-grunt/css/styles.min.css': ['dist-grunt/css/styles.css']
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist-grunt/js/scripts.min.js': ['dist-grunt/js/scripts.js']
                }
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
        /*'sass',*/
        'concat',
        'cssmin'
        //'uglify',
        //'imagemin'
    ]);

};
