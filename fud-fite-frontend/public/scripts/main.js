(function(window) {
  "use strict";

  var App = window.App;
  var LoadMainContent = App.LoadMainContent;
  var LoadCategories =  App.LoadCategories;
  var SCROLL_BOX_SELECTOR = "[class=\"scroll-box\"]";

  var mainContent = new LoadMainContent();
  var categories = new LoadCategories(SCROLL_BOX_SELECTOR);

  mainContent.mainContentLoader();
  mainContent.addClickHandler();

  categories.loadSidebar();

})(window);
