Ember.Handlebars.registerHelper('errorField', function(property, options) {
  if (this.get('errors')) {
    options.hash.property = property;
    return Ember.Handlebars.helpers.view.call(this, Ember.EasyForm.Error, options);
  }
});
