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
      beforeEach(function() {
        jasmine.Ajax.install();
      });

      afterEach(function() {
        jasmine.Ajax.uninstall();
      });

      it("successful query triggers success() callback", function() {
        var doneFn = jasmine.createSpy("success");

        jasmine.Ajax.stubRequest('/some/cool/url').andReturn({
          "responseText": 'immediate response'
        });

        $.request({
          url: '/some/cool/url',
          type: 'GET',
          success: function() {
            doneFn(this.responseText);
          }
        });

        expect(jasmine.Ajax.requests.mostRecent().url).toBe('/some/cool/url');
        expect(doneFn).toHaveBeenCalled();
      });
    });
});

describe("SelectorStrategy.TagsWithSpecifiers strategy", function() {
  describe("when asked about applicability", function() {
    it("is applicable to a tag and class selector specification", function() {
      expect(SelectorStrategy.TagsWithSpecifiers.applies("div.class")).toBeTruthy();
    });

    it("is applicable to a tag and id selector specification", function() {
      expect(SelectorStrategy.TagsWithSpecifiers.applies("div#someId")).toBeTruthy();
    });

    it("is not applicable to a tag and id selector specification", function() {
      expect(SelectorStrategy.TagsWithSpecifiers.applies(".klass")).not.toBeTruthy();
    });

    it("is not applicable to a tag and id selector specification", function() {
      expect(SelectorStrategy.TagsWithSpecifiers.applies("p")).not.toBeTruthy();
    });
  });

  describe("extracts the tag and the specifiers", function() {
    beforeEach(function() {
      SelectorStrategy.TagsWithSpecifiers.selector = "div.klass";
    });

    it("locates an HTMLNodel based on class", function() {
      expect(SelectorStrategy.TagsWithSpecifiers.set()[0].className).toEqual("klass");
    });
  });
});

describe("SelectorStrategy.StringDeriver utility class", function() {
  describe("when asked to extract from div#larry.foo.bar", function() {
    beforeEach(function() {
      this.instance = new SelectorStrategy.StringDeriver("div#larry.foo.bar").derive();
    });

    it("knows the tag to be 'div'", function() {
      expect(this.instance.tagString).toEqual("div");
    });

    it("knows the specifiers to be #larry, .foo, and .bar", function() {
      expect(this.instance.specifierStrings.sort()).toEqual([ '#larry', '.bar', '.foo' ]);
    });
  });
});
