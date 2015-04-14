module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		watch:{
			options:{
				livereload:true
			},
			files:['*.html','app/controllers/*.js','app/directives/*.js','app/services/*.js','app/css/*.css'],
		},
		express:{
			all:{
				options:{
					port:9000,
					hostname:'localhost',
					bases:['.'],
					livereload:true
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');
	grunt.registerTask('default',['watch']);
	grunt.registerTask('server',['express','watch'])
}