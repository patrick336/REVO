module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'css/main.css': 'scss/main.scss',
					          'css/grid.css': 'scss/partials/grid.scss'
                }
            }
        },


//        imagemin: {
//            dynamic: {
//                files: [{
//                    expand: true,
//                    cwd: 'images/',
//                    src: ['**/*.{png,jpg,jpeg,gif}'],
//                    dest: 'images/build/'
//                }]
//            }
//        },

        watch: {
            scripts: {
                files: 'scss/partials/*.scss',
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        },

        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
						"js/*.js",
                        "css/*.css",
                        "*.html"
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }
    });

    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
//    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    // Default task(s).
    grunt.registerTask('default', ['sass', 'browserSync','watch']);
//    grunt.registerTask('default', ['sass', 'browserSync','watch','imagemin']);

};
