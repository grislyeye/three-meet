module.exports = function (grunt) {
  'use strict';

  var resolve = require('rollup-plugin-node-resolve')

  grunt.initConfig({
    copy: {
      main: {
        files: [
          {
            src: 'index.html',
            dest: 'dist/html/index.html'
          },
          {
            src: 'main.css',
            dest: 'dist/html/main.css'
          }
        ]
      },
      assets: {
        files: [
          {
            expand: true,
            cwd: 'assets/',
            src: ['**', '!styles/**'],
            dest: 'dist/html/'
          }
        ],
      }
    },

    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['index.html', 'main.css'],
        tasks: ['copy:main']
      },
      assets: {
        files: ['assets/**', '!assets/styles/**'],
        tasks: ['copy:assets']
      },
      rollup_modules: {
        files: [
          'node_modules/ink-elements/**/*',
          '!node_modules/ink-elements/**/node_modules/**/*'
        ],
        tasks: ['rollup']
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/html/main.css': 'main.scss'
        }
      }
    },

    clean: {
      release: ["dist"]
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: 'dist/html/',
          hostname: 'localhost',
          livereload: true
        }
      }
    },

    rollup: {
      options: {
        format: 'es',
        plugins: [
          resolve()
        ]
      },
      dist: {
        files: {
          'dist/html/ink.js': 'ink.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-rollup');

  grunt.registerTask('default', ['copy', 'rollup']);
  grunt.registerTask('run', ['clean', 'default', 'connect', 'watch']);
};
