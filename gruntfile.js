module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'dist/grid.css': 'src/grid.scss',
          'examples/css/main.css': 'examples/sass/main.scss'
        }
      }
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: true
          }
        },
        files: {
          "examples/index.html": ["examples/jade/index.jade"]
        }
      }
    },
    watch: {
			css: {
				files: ['**/*.scss', '**/*.jade'],
				tasks: ['sass', 'jade']
			}
		}
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('default', ['sass', 'jade', 'watch']);
};
