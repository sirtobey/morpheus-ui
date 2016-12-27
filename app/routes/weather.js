import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      hour: '8:00',
      temp: 8
    }, {
      hour: '9:00',
      temp: 12
    }]
  }
});
