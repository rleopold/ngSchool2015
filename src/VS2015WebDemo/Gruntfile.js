/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        //install all bower dependencies
        bower: {
            install: {
                options: {
                    targetDir: 'wwwroot/lib',
                    layout: 'byComponent',
                    cleanTargetDir: true
                }
            }
        },

        //cleanup staging and temp files
        clean: ["wwwroot/dist", '.tmp'],

        copy: {
            //copy our html files for angular views
            main: {
                expand: true,
                cwd: 'wwwroot/app/',
                src: ['**/*.html', '!**/*.js', '!**/*.css'],
                dest: 'wwwroot/dist/'
            },
            //need to copy fonts for bootstrap to work correctly!
            fonts: {
                expand: true,
                cwd: 'wwwroot/lib/bootstrap/',
                src: 'fonts/**',
                dest: 'wwwroot/dist'
            }
        },

        //rev the files
        rev: {
            files: {
                src: ['wwwroot/dist/**/*.{js,css}']
            }
        },

        //usemin will concat out js and css files
        useminPrepare: {
            html: 'wwwroot/app/index.html',
            options: {
                dest: 'wwwroot/dist'
            }
        },

        //..and then transform our html to use the compact css and js
        usemin: {
            html: ['wwwroot/dist/index.html'],
            options: {
                dest: 'wwwroot/dist'
            }
        },

        //minify and shrink up
        uglify: {
            options: {
                report: 'min',
                mangle: false //don't mangle or it will screw up angular DI!!
            }
        }
    });

    //register tasks
    grunt.registerTask('default', ['bower:install']);
    grunt.registerTask('stage', ['clean', 'copy', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'rev', 'usemin']);

    //load NPM tasks
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');
};