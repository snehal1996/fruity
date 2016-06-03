

module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-express");

    grunt.initConfig({
        jshint: {
            all: ['GruntFile.js', 'src/**/*.js', 'test/**/*.js']
        },
        watch: {
            files: ['GruntFile.js', 'src/*.js', 'src/**/*.js', 'test/**/*.js'],
            tasks: ['concat']

        },
        concat: {
            dist: {
                src: [
                    'node_modules/angular/angular.min.js',
                    'node_modules/angular-ui-router/release/angular-ui-router.min.js',
                    'src/app.js',
                    'src/**/*.js'],
                dest: 'public/dest/output.js',
                        nonull:true

            },
            style: {
                src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'
                   ],
                dest: "public/dest/output.css"
            }
        },
        express: {
            server: {
                options: {
                    port: 9000,
                    bases: 'public',
                    livereload: true
                }
            }

        }


    });

    grunt.registerTask("default", ['jshint', 'concat', 'express', 'watch']);


};