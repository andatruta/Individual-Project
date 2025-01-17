'use strict';

module.exports = function(grunt) {

  // Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
            files: ['**/*.less'],
            tasks: ['compile:less', 'reload'],
   //          options: {
			// 	livereload: 5000,
			// }
        },
        reload: {
	        port: 5000,
	        proxy: {
	            host: 'localhost',
	            port: 5000,
	        }
	    },
        sass: {
	      default: {
	        files: [{
	        	'static/assets/css/main.css' : 'static/assets/sass/main.scss'
	        }]
	      }
	    },
	    less: {
	    	default: {
	    		files: [{
	    			'static/styles/css/main.css' : 'static/styles/less/main.less',
	    			'static/dashboard/css/main.css' : 'static/dashboard/less/main.less',
	    			'static/dashboard/css/graph.css' : 'static/dashboard/less/graph.less'
	    		}]
	    	}
	    }	
	});

  	// Default task(s).
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-connect');
	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-reload');

	grunt.registerTask('compile', ['less']);
	grunt.registerTask('default', ['watch']);


};