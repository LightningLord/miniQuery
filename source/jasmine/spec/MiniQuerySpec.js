describe("MiniQuery module", function() {
    it("is defined", function() {
        expect($).toBeDefined();
    });

    it("finds an element by class", function() {
      var result = $(".klass");

      expect(result.slice).toBeDefined();
      expect(result.length).toBe(1);
    });

    it("finds an element by id", function() {
      var result = $("#eyed");

      expect(result.slice).toBeDefined();
      expect(result.length).toBe(1);
    });

    it("finds an element by tag and class", function() {
      var result = $("div.klass");

      expect(result.slice).toBeDefined();
      expect(result.length).toBe(1);
    });
});
