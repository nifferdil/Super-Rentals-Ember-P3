import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return { "rentals": this.store.findAll('rental'),
      "cities": this.store.findAll('city') };
  },

  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    update(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          rental.set(key,params[key]);
        }
      });

    rental.save();
    this.transitionTo('index');
  },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },

    saveCity3(input) {
      var newCity = this.store.createRecord('city', input);
      newCity.save();
      this.transitionTo('index');
    }
  }
});
