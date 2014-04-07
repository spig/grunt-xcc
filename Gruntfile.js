module.exports = function(grunt){
  //
  // load all grunt tasks and not need to declare them at the end
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		watch:{
      files: ['*.xqy', '../**/*.xqy'],
      tasks: ['exec:xcc'],
      options: {
        event: ['added', 'changed'],
        spawn: false
      }
    },
    exec:{
      xcc: {
        cmd: function() {
          return "java -classpath \"$XCC_HOME/lib/marklogic-xcc-7.0.2.jar:$XCC_HOME/lib/marklogic-xcc-examples-7.0.2.jar\" com.marklogic.xcc.examples.ModuleRunner xcc://admin:admin@localhost:8020 qconsole.xqy";
//          return "echo 'make sure to change me in the watch event'";
        }
      }
    }

	});

  /*
  grunt.event.on('watch', function(action, filepath) {
    grunt.config('exec.xcc.cmd', function() {
      var file = grunt.option('file');
      if (file) {
        console.log("using custom file " + file);
        filepath = grunt.option('file');
      } else {
        filepath = filepath.replace('src/main/xquery', '');
        console.log("using " + action + " file " + filepath);
      }
      return "java -classpath \"$XCC_HOME/lib/marklogic-xcc-7.0.2.jar:$XCC_HOME/lib/marklogic-xcc-examples-7.0.2.jar\" com.marklogic.xcc.examples.ModuleRunner xcc://admin:admin@localhost:8020 " + filepath;
    });
  });
  */

	grunt.registerTask('default',['watch']);
};
