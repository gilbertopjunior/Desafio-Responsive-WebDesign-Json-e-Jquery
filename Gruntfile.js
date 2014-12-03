module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        //less compiler

        less: {

            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'css/style.css': ['css/less/main.less','css/less/responsive.less']
                }
            }

        },

        concat: {
            dist: {
                src: 'css/vendor/*.css',
                dest: 'css/plugin.min.css'
            }
        },

    });
    grunt.registerTask('default', ['less', 'concat']);
}
