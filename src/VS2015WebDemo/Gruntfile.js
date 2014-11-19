/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: 'wwwroot/lib',
                    layout: 'byComponent',
                    cleanTargetDir: true
                }
            }
        },

        clean: ["wwwroot/dist", '.tmp'],

        copy: {
            main: {
                expand: true,
                cwd: 'wwwroot/app/',
                src: ['**', '!**/*.js', '!**/*.css'],
                dest: 'wwwroot/dist/'
            }
        },

        rev: {
            files: {
                src: ['wwwroot/dist/**/*.{js,css}']
            }
        },

        useminPrepare: {
            html: 'wwwroot/app/index.html'
        },

        usemin: {
            html: ['wwwroot/dist/index.html']
        },

        uglify: {
            options: {
                report: 'min',
                mangle: false
            }
        }
    });

    //register tasks
    grunt.registerTask('default', ['bower:install']);
    grunt.registerTask('pack', ['copy', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'rev', 'usemin']);

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