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
                src: ['**/*.html', '!**/*.js', '!**/*.css'],
                dest: 'wwwroot/dist/'
            },
            fonts: {
                expand: true,
                cwd: 'wwwroot/lib/bootstrap/',
                src: 'fonts/**',
                dest: 'wwwroot/dist'
            }
        },

        rev: {
            files: {
                src: ['wwwroot/dist/**/*.{js,css}']
            }
        },

        useminPrepare: {
            html: 'wwwroot/app/index.html',
            options: {
                dest: 'wwwroot/dist'
            }
        },

        usemin: {
            html: ['wwwroot/dist/index.html'],
            options: {
                dest: 'wwwroot/dist'
            }
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
    grunt.registerTask('pack', ['clean', 'copy', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'rev', 'usemin']);

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