module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    copy: {
      main: {
        files: [
          {
            src: 'index.html',
            dest: 'dist/index.html'
          }
        ]
      },
      assets: {
        files: [
          {
            expand: true,
            cwd: 'assets/',
            src: ['**', '!styles/**'],
            dest: 'dist/'
          }
        ],
      },
      bower_components: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/',
            src: ['**'],
            dest: 'dist/vendor/'
          }
        ],
      }
    },

    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['index.html'],
        tasks: ['copy:main']
      },
      sass: {
        files: ['main.scss', 'assets/styles/**'],
        tasks: ['sass', 'cssmin']
      },
      assets: {
        files: ['assets/**', '!assets/styles/**'],
        tasks: ['copy:assets', 'imagemin:assets']
      },
      bower_components: {
        files: ['bower_components/**'],
        tasks: ['copy:bower_components']
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/main.css': 'main.scss'
        }
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['*.css', '!*.min.css'],
          dest: 'dist',
          ext: '.min.css'
        }]
      }
    },

    imagemin: {
      assets: {
        files: [{
          expand: true,
          cwd: 'dist/images',
          src: ['**/*.{png,jpg,gif,svg, ico}'],
          dest: 'dist/images'
        }]
      }
    },

    clean: {
      release: ["dist"]
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: 'dist',
          hostname: 'localhost',
          livereload: true
        }
      }
    },

    npmcopy: {
      dist: {
        options: {
          destPrefix: 'dist/vendor'
        },
        files: {
          'js/jquery/jquery.js': 'jquery/dist/jquery.min.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-npmcopy');

  grunt.registerTask('electron-pdf', '', function () {
    var exec = require('child_process').execSync;
    var result = exec("electron-pdf dist/index.html dist/threats-vermus.pdf", { encoding: 'utf8' });
    grunt.log.writeln(result);
	// grunt.util.spawn({
	//   cmd: ['electron-pdf'],
	//   args: ['dist/index.html', 'dist/threats-vermus.pdf'],
	// }, function done() {
	//   grunt.log.ok('Exported HTML to PDF');
	// });
  });

  grunt.registerTask('default', ['copy', 'sass', 'cssmin', 'imagemin', 'npmcopy']);
  grunt.registerTask('run', ['clean', 'default', 'connect', 'watch']);
  grunt.registerTask('publish', ['clean', 'default', 'electron-pdf']);
};
