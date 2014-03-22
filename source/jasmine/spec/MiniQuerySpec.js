describe("MiniQuery module", function() {
    it("is defined", function() {
        expect($).toBeDefined();
    });

    describe("can find", function() {
      it("an element by class", function() {
        var result = $(".klass");

        expect(result.slice).toBeDefined();
        expect(result.length).toBe(1);
      });

      it("an element by id", function() {
        var result = $("#eyed");

        expect(result.slice).toBeDefined();
        expect(result.length).toBe(1);
      });

      it("an element by tag and class", function() {
        var result = $("div.klass");

        expect(result.slice).toBeDefined();
        expect(result.length).toBe(1);
      });
    });


    describe("can update DOM", function() {
      it("by hiding  an element found by class", function() {
        var elem = $(".klass"),
          result = elem.hide(),
          test = elem[0].style.cssText.match(/display: none/);

        expect(test).toBeTruthy();
      });

      it("by hiding  an element found by id", function() {
        var elem = $("#eyed"),
          result = elem.hide(),
          test = elem[0].style.cssText.match(/display: none/);

        expect(test).toBeTruthy();
      });

      it("by adding and removing a class", function() {
        var target = $("div.klass"),
          result = target.addClass('foo'),
          hasFoo = result[0].className.match(/foo/),
          result = target.removeClass('foo'),
          removedFoo = !result[0].className.match(/foo/);

        expect(hasFoo.length).toBe(1);
        expect(removedFoo).toBeTruthy();
      });
    });

    describe("can bind events and trigger them", function() {
      it("by using on() and trigger()", function() {
        var eventTarget,
          success = false;

        $("a").on("testEvent", function(e) {
          eventTarget = e;
          success = true;
        });

        $("a").trigger("testEvent");

        expect(success).toBeTruthy();
        expect(eventTarget).toBeTruthy();
      });
    });

    describe("can make an AJAX request", function() {
      xit("successful query triggers success() callback", function() {
      });
    });

});
