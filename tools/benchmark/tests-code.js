var b = require('benchmark-pyret');
require('jasmine-node');

jasmine.getEnv().addReporter(new jasmine.ConsoleReporter(console.log));

var validProgram = '1';
var invalidProgram = '1 + true';
var nonParsableProgram = '...';
var longProgram = '';
for(var i = 0; i < 10000; i++){
  longProgram += '1 + ';
}
longProgram += '1';

xdescribe('checkResult', function(){
  it('returns true given a SuccessResult', function(){
    expect(b.test.testCheckResult(true)).toBe(true);
  });

  it('returns false given a FailureResult', function(){
    expect(b.test.testCheckResult(false)).toBe(false);
  });
});

xdescribe('ensureSuccess', function() {

  it('passes on a valid program', function() {
  	var passed, flag;  	

  	runs(function(){
  		passed = false;
  		flag = false;
  		b.test.testEnsureSuccess(validProgram, {}, function(result){
  			passed = result;
  			flag = true;
  		})
  	});

  	waitsFor(function(){
  		return flag;
  	}, 'failure',5000);

  	runs(function(){
  		expect(passed).toBe(true);
  	});
  });

  it('fails on an invalid program', function() {
  	var passed, flag;  	

  	runs(function(){
  		passed = false;
  		flag = false;
  		b.test.testEnsureSuccess(invalidProgram,{},function(result){
  			passed = result;
  			flag = true;
  		})
  	});

  	waitsFor(function(){
  		return flag;
  	}, 'failure',5000);

  	runs(function(){
  		expect(passed).toBe(false);
  	});
  });

  it('fails on a nonparsable program', function() {
  	var passed, flag;  	

  	runs(function(){
  		passed = false;
  		flag = false;
  		b.test.testEnsureSuccess(nonParsableProgram,{},function(result){
  			passed = result;
  			flag = true;
  		})
  	});

  	waitsFor(function(){
  		return flag;
  	}, 'failure',5000);

  	runs(function(){
  		expect(passed).toBe(false);
  	});
  });
});

xdescribe('parsePyret', function(){
  it('passes on a valid program', function() {
  	var passed, flag;  	

  	runs(function(){
  		passed = false;
  		flag = false;
  		b.test.testDeferredFunction(validProgram, {}, 'parsePyret',function(result){
  			passed = result;
  			flag = true;
  		});
  	});

  	waitsFor(function(){
  		return flag;
  	}, 'failure',5000);

  	runs(function(){
  		expect(passed).toBe(true);
  	});
  });

  it('fails on a nonparsable program', function() {
  	var passed, flag;  	

  	runs(function(){
  		passed = false;
  		flag = false;
  		b.test.testDeferredFunction(nonParsableProgram, {}, 'parsePyret',function(result){
  			passed = result;
  			flag = true;
  		});
  	});

  	waitsFor(function(){
  		return flag;
  	}, 'failure',5000);

  	runs(function(){
  		expect(passed).toBe(false);
  	});
  });
});

xdescribe('compilePyret', function(){
  it('passes on a valid program', function() {
  	var passed, flag;  	

  	runs(function(){
  		passed = false;
  		flag = false;
  		b.test.testDeferredFunction(validProgram, {}, 'compilePyret',function(result){
  			passed = result;
  			flag = true;
  		});
  	});

  	waitsFor(function(){
  		return flag;
  	}, 'failure',5000);

  	runs(function(){
  		expect(passed).toBe(true);
  	});
  });
});

xdescribe('evaluatePyret', function(){
  it('passes on a valid program', function() {
  	var passed, flag;  	

  	runs(function(){
  		passed = false;
  		flag = false;
  		b.test.testDeferredFunction(validProgram, {}, 'evaluatePyret',function(result){
  			passed = result;
  			flag = true;
  		});
  	});

  	waitsFor(function(){
  		return flag;
  	}, 'failure',5000);

  	runs(function(){
  		expect(passed).toBe(true);
  	});
  });

  it('fails on an invalid program', function() {
  	var passed, flag;  	

  	runs(function(){
  		passed = false;
  		flag = false;
  		b.test.testDeferredFunction(invalidProgram, {}, 'evaluatePyret',function(result){
  			passed = result;
  			flag = true;
  		});
  	});

  	waitsFor(function(){
  		return flag;
  	}, 'failure',5000);

  	runs(function(){
  		expect(passed).toBe(false);
  	});
  });
});

xdescribe('initializeGlobalRuntime', function(){
	it('sets a runtime to global.rt', function(){
		expect(b.test.testInitializeGlobalRuntime()).toBe(true);
	})
});

xdescribe('loadParsedPyret', function(){
  it('passes on a valid program', function() {
    var passed, flag;   

    runs(function(){
      passed = false;
      flag = false;
      b.test.testDeferredFunction(validProgram, {}, 'loadParsedPyret',function(result){
        passed = result;
        flag = true;
      });
    });

    waitsFor(function(){
      return flag;
    }, 'failure',5000);

    runs(function(){
      expect(passed).toBe(true);
    });
  });

  it('fails on a nonparsable program', function() {
    var passed, flag;   

    runs(function(){
      passed = false;
      flag = false;
      b.test.testDeferredFunction(nonParsableProgram, {}, 'loadParsedPyret',function(result){
        passed = result;
        flag = true;
      });
    });

    waitsFor(function(){
      return flag;
    }, 'failure',5000);

    runs(function(){
      expect(passed).toBe(false);
    });
  });
});

xdescribe('setup', function(){
  it('sets the result of a valid program to global.ast and global.loaded', function(){
    var passed, flag;   

    runs(function(){
      passed = false;
      flag = false;
      b.test.testSetup(validProgram, {}, function(result){
        passed = result;
        flag = true;
      });
    });

    waitsFor(function(){
      return flag;
    }, 'failure',5000);

    runs(function(){
      expect(passed).toBe(true);
    });
  });
});

describe('evalLoadedPyret', function(){
  it('passes on a valid program', function() {
    var passed, flag;   

    runs(function(){
      passed = false;
      flag = false;
      b.test.testDeferredFunction(validProgram, {}, 'evalLoadedPyret',function(result){
        passed = result;
        flag = true;
      });
    });

    waitsFor(function(){
      return flag;
    }, 'failure',5000);

    runs(function(){
      expect(passed).toBe(true);
    });
  });

  it('fails on a nonparsable program', function() {
    var passed, flag;   

    runs(function(){
      passed = false;
      flag = false;
      b.test.testDeferredFunction(nonParsableProgram, {}, 'evalLoadedPyret',function(result){
        passed = result;
        flag = true;
      });
    });

    waitsFor(function(){
      return flag;
    }, 'failure',5000);

    runs(function(){
      expect(passed).toBe(false);
    });
  });
});

xdescribe('createSuite', function(){
  it('creates an instance of Benchmark.Suite with the correct number of benchmarks', function(){
    expect(b.test.testCreateSuite()).toBe(true);
  });
});

xdescribe('runBenchmarks', function(){
  it('returns array of objects with correct field types', function() {
    debugger;
    var isArray = (benchmarkResults instanceof Array);
    var fields = true;
    for(var i = 0; i <benchmarkResults.length; i++){
      fields = fields 
      && (typeof benchmarkResults[i].program == 'string')
      && (typeof benchmarkResults[i].name == 'string')
      && (typeof benchmarkResults[i].results == 'object')
      && (typeof benchmarkResults[i].success == 'boolean');
    }
    var passed = isArray && fields;

    expect(passed).toBe(true);
  });

  it('reports success for valid program, non-success for invalid program', function(){
    expect(benchmarkResults[0].success && !benchmarkResults[1].success).toBe(true);
  });

  it('reports proper results for a valid program', function(){
    var results = benchmarkResults[0].results;
    var passed = true;
    for(var name in results){
      passed = passed
      && (typeof results[name].hz == 'number')
      && (typeof results[name].rme == 'number')
      && (typeof results[name].samples == 'number');
    }
    expect(passed).toBe(true);
  })
});

// var benchmarks = 
// [
// {program: validProgram, name: 'validProgram'},
// {program: invalidProgram, name: 'invalidProgram'}
// ];

// var benchmarkResults = undefined;
// b.runBenchmarks(benchmarks, {}, false, function(r){
//   benchmarkResults = r;
//  jasmine.getEnv().execute();
// });

jasmine.getEnv().execute();
