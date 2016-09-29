heroCarouselProp = {
        infiniteMode: true,
        enableFlicking: true,
        alwaysShowControls: true,
        startItemIndex: 0,
        animationDuration: 400,
        onStageCallback: function(onStageItem) {
          // execute your code here
        }
      }

var mycarousel = {
  init: function() {

    if ($('#myCarousel').length > 0 && $('#myCarousel div.item').length > 1) {
      this.heroCarousel();

    }
  },
  heroCarousel: function() {
    // Home page carousel - BOOTSTRAP Carousel
    $(this.heroCarouselHandler).carousel(this.defaults);

    // bind swipe getures
    //  this.bindSwipeEvent($(this.heroCarouselHandler));
    this.determineCarouselMode();

    //bind carousel events
    this.bindEvents();
  },
  /**
   * binds the touch gestures to the carousel to enable
   * flicking and cover all user interaction
   */
  bindTouchInteraction: function() {
    var self = this;
    this.carouselList
      .on('touchstart', function(e) {
        self.handleTouchStart(self, e.originalEvent);
      })
      .on('touchmove', function(e) {
        self.handleTouchMove(self, e.originalEvent);
      })
      .on('touchend', function(e) {
        self.handleTouchEnd(self, e.originalEvent);
      })
      .on('touchcancel', function(e) {
        //on cancel we do as well the finishing move ;)
        self.handleTouchEnd(self, e.originalEvent);
      })
      .on('tap click', 'li a', function(e) {
        if (!$(this).closest("li").hasClass(self.options.onStageClass)) {
          e.preventDefault();
        }
      });

  },

  /**
   * handling the touch start event
   * initialise all necessary parameters
   */
  handleTouchStart: function(self, e) {
    if (self.isMoving) {
      e.preventDefault();
      return false;
    }

    self.touchStartX = e.touches[0].pageX;
    self.touchStartY = e.touches[0].pageY;
    self.touchStartTime = (new Date()).getTime();
    // saving a epic reference for touch-end comparison
    self.touchEpicStartTime = self.touchStartTime;
    self.touchEpicStartX = self.touchCurrentX = self.touchStartX;
    self.touchEpicStartY = self.touchCurrentY = self.touchStartY;
  },

  /**
   * handling the touch move event
   * update the affected parameters
   */
  handleTouchMove: function(self, e) {

    self.touchCurrentX = e.touches[0].pageX;
    self.touchCurrentY = e.touches[0].pageY;
    self.touchCurrentTime = (new Date()).getTime();

    self.distanceX = self.touchCurrentX - self.touchStartX;
    self.distanceY = self.touchCurrentY - self.touchStartY;

    self.horizontalFlick = (Math.abs(self.distanceX) > Math.abs(self.distanceY));

    if (self.horizontalFlick && !self.isVerticalScrolling) {
      e.preventDefault();
      // reset position hooks
      self.touchStartX = self.touchCurrentX;
      self.touchStartY = self.touchCurrentY;

      // moving the carousel along the movement
      self.carouselPos += self.distanceX;
      // cover speed attacks so the carousel never runs out of its boundaries
      self.carouselPos = (self.carouselPos > self.minCarouselPos) ? self.minCarouselPos : self.carouselPos;
      self.carouselPos = (self.carouselPos < self.maxCarouselPos) ? self.maxCarouselPos : self.carouselPos;

      var crouselPosition = ($("html").attr("dir") && $("html").attr("dir") === "rtl") ? {
        right: self.carouselPos
      } : {
        left: self.carouselPos
      };
      self.carouselList.css(crouselPosition);
    } else {
      self.isVerticalScrolling = true;
    }
  },

  /**
   * handling the touch end event
   * finish all bounded actions and clean up
   */
  handleTouchEnd: function(self, e) {
    var closestToStageItemIndex, movedX, movedY;

    // if we have encountered only a tiny flick we help the user moving on to the next item
    movedX = self.touchEpicStartX - self.touchCurrentX;
    movedY = self.touchEpicStartY - self.touchCurrentY;
    closestToStageItemIndex = self.onStageItemIndex;
    if (!self.isVerticalScrolling && Math.abs(movedX) > 20) {
      closestToStageItemIndex = (movedX < 0) ? (self.onStageItemIndex - 1) : (self.onStageItemIndex + 1);
    }
    // protect carousels from overflowing the items stack
    if (!self.options.infiniteMode) {
      closestToStageItemIndex = (closestToStageItemIndex < self.itemsCount) ? closestToStageItemIndex : self.itemsCount;
    }

    // animate to snap perfectly on stage
    self.moveTo(closestToStageItemIndex, self.options.animationDuration, true);



    self.isVerticalScrolling = false;

    // being a good kid - cleaning up
    self.touchStartX = 0;
    self.touchStartY = 0;
    self.touchCurrentX = 0;
    self.touchCurrentY = 0;
    self.distanceX = 0;
    self.distanceY = 0;
    self.touchEpicStartX = 0;
    self.touchEpicStartY = 0;
  },

  /**
   * check how to interact with the carousel - using touch
   * gestures like flicking or the common scroll control-links
   */
  determineInteraction: function() {
      //multiple item mode
    if (heroCarouselProp.enableFlicking) {
      this.bindTouchInteraction();

      // if we wanna flick only, so hide the disturbing controls
      if (!this.options.alwaysShowControls) {
        this.hideCarouselControls();
      }
    }

    if (this.options.alwaysShowControls || !this.options.enableFlicking) {
      // get the carousel controls to work
      this.bindCarouselControls();
    }
  },

  /**
   * check which elements and which options have been set and
   * determine the appropriate carousel mode
   */
  determineCarouselMode: function() {

    // determine the appropriate behaviour based on the item count
    itemsCount = $('#myCarousel div.item').length ;
    if (itemsCount > 1) {

      // check how to interact with the carousel (-items)
      this.determineInteraction();

      // check how to behave when reaching the edge elements (first/last)
      this.bindEdgeBehaviour();

    } else {
      // single item mode
      // this.hideCarouselControls();
    }

    // set stage context parameters
    this.setStageContext();
  },

  /**
   * calculate the new carousel position based on the passed
   * target item's index
   *
   * @param {integer} zero based index of the target item
   */
  calculateCarouselPosition: function(ix) {
    return (this.stageWidth * ix * (-1));
  },

  /**
   * move to the specified item (zero based index)
   * this can be done immediately or animated based on the parameter
   *
   *  @param {integer} zero based index of the target item
   *  @param {integer} duration in ms for the animation
   *  @param {boolean} flag to determine an (non-)animated start
   */
  moveTo: function(targetItemIndex, animDuration, doAnimation) {
    var self = this,
      newPos = this.calculateCarouselPosition(targetItemIndex);

    // we don't put effort in already staged elements
    if (targetItemIndex === this.onStageItemIndex && this.carouselPos === newPos) {
      return;
    }

    if (isNaN(animDuration)) {
      //animDuration = self.options.animationDuration;
      animDuration = 400;
    }

    // validating that we have a boolean passed
    if (doAnimation === true && !self.isMoving) {
      self.isMoving = true;

      var crouselPosition = ($("html").attr("dir") && $("html").attr("dir") === "rtl") ? {
        'right': newPos
      } : {
        'left': newPos
      };
      self.carouselList
        .animate(crouselPosition, {
          duration: animDuration,
          complete: function() {
            self.carouselPos = newPos;
            self.setOnStageItem(targetItemIndex);
            self.isMoving = false;
            // triggered onStage event for edge cases (first / last element)
            $(self.items[targetItemIndex]).trigger('onStage');
          }
        });
    } else {
      var crouselPosition = ($("html").attr("dir") && $("html").attr("dir") === "rtl") ? {
        'right': newPos
      } : {
        'left': newPos
      };
      this.carouselList.css(crouselPosition);
      this.carouselPos = newPos;
      this.setOnStageItem(targetItemIndex);
      // triggered onStage event for edge cases (first / last element)
      $(self.items[targetItemIndex]).trigger('onStage');
    }
  },
  /**
   * initialise stage context
   * sets all related thresholds and position offsets to handle
   * carousel stage in different context and orientation
   */
  setStageContext: function() {
    var self = this,
      stageOffset, refImage, refCanvas;
    this.stageWidth = $('.carousel-inner').width();
    $('.carousel-inner li').width(this.stageWidth);

    if (heroCarouselProp.infiniteMode) {
      self.maxCarouselPos = this.stageWidth * (this.itemsCount * 2) * (-1);
      self.minCarouselPos = this.stageWidth * (this.itemsCount - 1) * (-1);
    } else {
      self.maxCarouselPos = this.stageWidth * (this.itemsCount - 1) * (-1);
      self.minCarouselPos = 0;
    }

    this.moveTo(this.onStageItemIndex, 0, false);

  },

}

$(function() {
  mycarousel.init();
})
