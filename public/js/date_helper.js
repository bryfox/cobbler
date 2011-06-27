(function () {
  var DateHelper = {
    timeSince: function (date) {
      var since, diff;
      if (typeof date == 'string') {
        date = new Date(date);
      }
      diff = (new Date() - date) / 1000;
      switch (true) {
        case (diff < 30):
          since = 'just now';
          break;
        case (diff < 90):
          since = 'A minute ago';
          break;
        case (diff < 3200):
          since = Math.floor(diff / 60) + ' minutes ago';
          break;
        case (diff < 4000):
          since = 'An hour ago';
          break;
        case (diff < 86400):
          since = Math.floor(diff / 60 / 60) + ' hours ago';
          break;
        default:
          since = Math.floor(diff / 60 / 60 / 24) + ' days ago';
          break;
      }
      return since;
    }
  };

  if (typeof exports != 'undefined') {
    // export for node
    exports.timeSince = DateHelper.timeSince;
  } else {
    // make available to window
    this.DateHelper = DateHelper;
  }
    
}());
