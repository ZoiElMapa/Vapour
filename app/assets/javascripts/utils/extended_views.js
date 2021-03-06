Backbone.ExtendedView = Backbone.CompositeView.extend({

  addUserThumbs: function () {
    var $thumbs = this.$('.user-thumb');

    for (var i = 0; i < $thumbs.length; i++) {
      var $thumb = $($thumbs[i]);
      var user = Vapour.Users.getOrFetch($thumb.data('id'));
      var displayName = $thumb.data('display-name');
      var view = new Vapour.Views.UserThumb({ model: user, displayName: displayName });
      // $thumb.html(view.$el);
      this.addSubview($thumb, view);
    }
  },

  populateGames: function (selector, games) {
    var $gameList = this.$(selector)
    games.each(function (model) {
      var view = new Vapour.Views.GameList({model: model})
      this.addSubview($gameList, view);
    }.bind(this))
  }

})
