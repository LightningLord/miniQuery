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

describe("DOM", function(){
  it("is defined", function(){
    expect(DOM).toBeDefined()
  })
  describe("domCollection", function(){
    it("is defined", function(){
      expect(DOM.domCollection).toBeDefined()
    })
    it("can find elements using SweetSelector", function(){
      expect(DOM.domCollection("#eyed")).toBe(SweetSelector.select("#eyed"))
    })
  })
  describe("changeDisplay", function(){
    it("is defined", function(){
      expect(DOM.changeDisplay).toBeDefined()
    })
    describe("can change the display", function(){
      it("of all elements in a collection", function(){
        var collection = DOM.domCollection('a')
        DOM.changeDisplay('inline-block', collection)
        expect(collection[0].style.display).toBe('inline-block')
      })
      it("of a single element", function(){
        var element = DOM.domCollection('#eyed')
        DOM.changeDisplay('inline-block', element)
        expect(element.style.display).toBe('inline-block')
      })
    })
  })
  describe(".hide", function(){
    it("is defined", function(){
      expect(DOM.hide).toBeDefined()
    })
    it("hides elements", function(){
      DOM.hide('#eyed')
      expect(DOM.domCollection('#eyed').style.display).toBe('none')
    })
  })
  describe(".show", function(){
    it("is defined", function(){
      expect(DOM.addClass).toBeDefined()
    })
    it("shows an element", function(){
      DOM.show('#eyed')
      expect(DOM.domCollection('#eyed').style.display).toBe('block')
    })
  })
  describe(".addClass", function(){
    it("is defined", function(){
      expect(DOM.addClass).toBeDefined()
    })
    it("adds a class to an element", function(){
      DOM.addClass("#eyed", "new-class")
      expect(DOM.domCollection("#eyed").classList[0]).toContain("new-class")
    })
  })
  describe(".removeClass", function(){
    it("is defined", function(){
      expect(DOM.removeClass).toBeDefined()
    })
    it("removes a class from an element", function(){
      DOM.addClass("#eyed", "new-class")
      DOM.removeClass("#eyed", "new-class")
      var result = DOM.domCollection("#eyed").classList.contains("new-class")
      expect(result).toBeFalsy()
    })
  })
})

describe("EventDispather", function(){
  it("is defined", function(){
    expect(EventDispatcher).toBeDefined()
  })
  describe("on and trigger", function(){
    it("on is defined", function(){
      expect(EventDispatcher.on).toBeDefined()
    })
    it("trigger is defined", function(){
      expect(EventDispatcher.trigger).toBeDefined()
    })
    describe("can bind and trigger event listeners", function(){
      it("to a single element", function(){
        var eventTarget;
        var success = false;
        EventDispatcher.on("#eyed", "testEvent", function(e){
          eventTarget = e
          success = true
        })
        EventDispatcher.trigger("#eyed", "testEvent")
        expect(success).toBeTruthy()
        expect(eventTarget).toBeTruthy()
      })
      it("to a collection of elements", function(){
        var eventTarget;
        var success = false;
        EventDispatcher.on(".klass", "testEvent", function(e){
          eventTarget = e
          success = true
        })
        EventDispatcher.trigger(".klass", "testEvent")
        expect(success).toBeTruthy()
        expect(eventTarget).toBeTruthy()
      })
    })

  })
})

describe("AjaxWrapper", function(){
  it("is defined", function(){
    expect(AjaxWrapper).toBeDefined()
  })
  describe("request", function(){
    it("is defined", function(){
      expect(AjaxWrapper.request).toBeDefined()
    })
    it("can make an Ajax request", function(){
      jasmine.Ajax.install()
      var done = jasmine.createSpy("success")

      jasmine.Ajax.stubRequest("/awesome/url").andReturn({
        "responseText": "response"
      })

      AjaxWrapper.request({
        url: '/awesome/url',
        type: 'GET',
        success: function(){
          done("this.responseText")
        }
      })

      expect(jasmine.Ajax.requests.mostRecent().url).toBe('/awesome/url')
      expect(done).toHaveBeenCalled()
    })
  })

})




