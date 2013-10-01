describe("Hello world", function() {
    beforeEach(function() {
        this.addMatchers({
            toBeDivisibleByTwo: function() {
                return (this.actual % 2) === 0;
                // you often have to say this.actual instead of just this
               //  bc you're usually referring to the content of the object, not the instance of the object.
            }
        });
    });

    it('is divisible by 2', function() {
        expect(6).toBeDivisibleByTwo();
    });

    it("says Hello", function() {
        expect(helloWorld()).toEqual("Hello world!");
    });

     it("has world in it", function() {
        expect(helloWorld()).toContain("world");
    });
});

describe("Person", function() {
	// let's say we want to make sure it calls the sayHello() function when we call the helloSomeone() function
    it("calls the sayHello() function", function() {
        var fakePerson = new Person();
        spyOn(fakePerson, "sayHello");
        fakePerson.helloSomeone("Bobak");
        expect(fakePerson.sayHello).toHaveBeenCalled();
    });

    // to make sure that helloSomeone is called with "Bobak" as its argument
    it("greets Bobak", function() {
        var fakePerson = new Person();
        spyOn(fakePerson, "helloSomeone");
        fakePerson.helloSomeone("Bobak");
        expect(fakePerson.helloSomeone).toHaveBeenCalledWith("Bobak");
    });

    it("says hello", function() {
        var fakePerson = new Person();
        fakePerson.sayHello = jasmine.createSpy("Say-hello spy").andReturn("ello ello");
        fakePerson.helloSomeone("world");
        expect(fakePerson.sayHello).toHaveBeenCalled();
    });

    // give your spy functions something to do.
        it("Talks French now", function() {
        var fakePerson = new Person();
        fakePerson.sayHello = jasmine.createSpy('"Say hello" spy').andCallFake(function() {
          alert("Merci Beaucoup");
          return "bonjour";
		});
        fakePerson.helloSomeone("world");
        expect(fakePerson.sayHello).toHaveBeenCalled();
    });

    // just for the sake of syntax of runs method:
    it("is a test of run()", function() {
    	runs(function() {
        	var bar = 2;
        	bar ++;
        	expect(bar).toEqual(3);
    });

});

});