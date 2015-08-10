module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              // Task
      dev: {                             // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'dist/grid.css': 'src/grid.scss',
          'examples/css/main.css': 'examples/sass/main.scss'
        }
      },
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {                         // Dictionary of files
          'dist/grid.min.css': 'dist/grid.css',
          'examples/css/main.min.css': 'examples/css/main.css'
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
