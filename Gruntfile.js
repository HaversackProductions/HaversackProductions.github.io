module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    purgecss: {
      my_target: {
        options: {
          content: ['./*.html']
        },
        files: {
          'css/styles.dist.css': ['css/archived_styles.css']
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'css/styles.dist.css': ['css/styles.dist.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-purgecss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['purgecss', 'cssmin']);

};