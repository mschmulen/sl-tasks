module.exports = function(grunt) {
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });
  
  // Load the plugins
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-bg-shell');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-preprocess');
  
  var shell = require('shelljs');
  
  grunt.registerTask('default', 'My "default" task description.', function() {
    grunt.log.writeln('grunt strongloop or grunt strongloop-community');
  });
  
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // StrongLoop Community iOS
  // grunt strongloop-community
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  grunt.registerTask('strongloop-community-loopback-mobile-getting-started', 'My "strongloop" task description.', function() {
    shell.exec('xcodebuild -sdk iphonesimulator -project "/Users/mattschmulen/life-strongloop/trees/strongloop-community/loopback-mobile-getting-started/loopback-ios-app/loopback-ios-multi-model.xcodeproj" clean build');
  });
  
  grunt.registerTask('strongloop-community-ios-mapview-simple-example', 'My "strongloop" task description.', function() {
    shell.exec('xcodebuild -sdk iphonesimulator -project "/Users/mattschmulen/life-strongloop/trees/strongloop-community/loopback-examples-ios/ios-mapview-simple-example/mapview-example.xcodeproj" clean build');
  });
  
  grunt.registerTask('strongloop-community-ios-remote-method-example', 'My "strongloop" task description.', function() {
    shell.exec('xcodebuild -sdk iphonesimulator -project "/Users/mattschmulen/life-strongloop/trees/strongloop-community/loopback-examples-ios/ios-remote-method-example/remote-method.xcodeproj" clean build');
  });
  
  grunt.registerTask('strongloop-community-ios-tableview-simple-example', 'My "strongloop" task description.', function() {
    shell.exec('xcodebuild -sdk iphonesimulator -project "/Users/mattschmulen/life-strongloop/trees/strongloop-community/loopback-examples-ios/ios-tableview-simple-example/tableview-example.xcodeproj" clean build');
  });
  
  grunt.registerTask('strongloop-community-ios-filter-example', 'My "strongloop" task description.', function() {
    shell.exec('xcodebuild -sdk iphonesimulator -project "/Users/mattschmulen/life-strongloop/trees/strongloop-community/loopback-examples-ios/ios-filter-example/ios-filter-example.xcodeproj" clean build');
  });
  
  grunt.registerTask('strongloop-community', 'My "strongloop-community" task description.', function() {
    grunt.task.run('strongloop-community-loopback-mobile-getting-started', 'strongloop-community-ios-mapview-simple-example','strongloop-community-ios-remote-method-example','strongloop-community-ios-tableview-simple-example','strongloop-community-ios-filter-example');
  });  
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // StrongLoop iOS
  // grunt strongloop-community
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  grunt.registerTask('strongloop', 'My "strongloop" task description.', function() {
    grunt.task.run('strongloop-community-loopback-mobile-getting-started','strongloop-loopback-clients');
  });
  
  grunt.registerTask('strongloop-loopback-clients', 'My "strongloop" task description.', function() {
    shell.exec('xcodebuild -sdk iphonesimulator -project "/Users/mattschmulen/life-strongloop/trees/strongloop/loopback-clients/ios/LoopBack.xcodeproj" clean build');
  });
  
  grunt.registerTask('strongloop-loopback-ios-getting-started', 'My "strongloop" task description.', function() {
    shell.exec('xcodebuild -sdk iphonesimulator -project "/Users/mattschmulen/life-strongloop/trees/strongloop/loopback-ios-getting-started/LoopBackGuideApplication/LoopBackGuideApplication.xcodeproj" clean build');
  });
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  //Main task for our designer
  //grunt.registerTask('emulator', ['env:dev', 'preprocess:dev', 'bgShell:weinre', 'bgShell:rails', 'shell:xcodebuild', 'shell:iphonesimulator']);
  
  grunt.registerTask( 'matt', ' my "matt" task', function()
  {
    //shell.exec('wget http://jqueryui.com/download/jquery-ui-1.7.3.custom.zip');
    shell.exec('xcodebuild -sdk iphonesimulator -project "/Users/mattschmulen/life-strongloop/trees/strongloop-community/loopback-mobile-getting-started/loopback-ios-app/loopback-ios-multi-model.xcodeproj" clean build');
    
    //grunt.task
      //cmd: 'weinre --httpPort 8080 --boundHost=' + ipAddress,
      //    bg: true    
  });
  
  grunt.registerTask('asyncfoo', 'My "asyncfoo" task.', function() {
    // Force task into async mode and grab a handle to the "done" function.
    var done = this.async();
    // Run some sync stuff.
    grunt.log.writeln('Processing task...');
    // And some async stuff.
    setTimeout(function() {
      grunt.log.writeln('All done!');
      done();
    }, 1000);
  });
  
  grunt.registerTask('foo', 'My "foo" task.', function() {
    if (failureOfSomeKind) {
      grunt.log.error('This is an error message.');
    }

    // Fail by returning false if this task had errors
    if (ifErrors) { return false; }

    grunt.log.writeln('This is the success message');
  });

  grunt.registerTask('asyncme', 'My asynchronous task.', function() {
    var done = this.async();
    doSomethingAsync(done);
  });
  
  /*
grunt.registerTask('foo', 'My "foo" task.', function() {
  // Fail synchronously.
  return false;
});

grunt.registerTask('bar', 'My "bar" task.', function() {
  var done = this.async();
  setTimeout(function() {
    // Fail asynchronously.
    done(false);
  }, 1000);
});  
  
  */
  /*
  
var myTerminal = require("child_process").exec,
    commandToBeExecuted = "sh myCommand.sh";

myTerminal(commandToBeExecuted, function(error, stdout, stderr) {
    if (!error) {
         //do something
    }
});
  
  
  
  
Check out grunt.util.spawn:

grunt.util.spawn({
  cmd: ['rm'],
  args: ['-rf', '/tmp'],
}, function done() {
  grunt.log.ok('/tmp deleted');
});
  
  */
  
  
  
  // Usage:
  // grunt foo foo:bar
  //   logs: "foo", undefined, undefined
  //   logs: "foo", "bar", undefined
  // grunt foo:bar:baz
  //   logs: "foo", "bar", "baz"
  
  
  //Main task I'll probably use, via 'grunt servers --weinre=true --host=192.168.1.100'
  //grunt.registerTask('servers', ['bgShell:weinre', 'bgShell:rails'])
  

};


