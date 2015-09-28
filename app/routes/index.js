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


    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
