describe("SweetSelector", function(){
  it("is defined", function(){
    expect(SweetSelector).toBeDefined()
  })
  it(".select is defined", function(){
    expect(SweetSelector.select).toBeDefined()
  })
  describe("can find elements", function(){
    it("by id", function(){
      expect(SweetSelector.select('#eyed')).toBe(document.getElementById('eyed'))
    })
    it("by class", function(){
      expect(SweetSelector.select('.klass')).toBe(document.getElementsByClassName('klass'))
    })
    it("by tag", function(){
      expect(SweetSelector.select('a')).toBe(document.getElementsByTagName('a'))
    })
  })

})


