new Vue({
  el: '#app',
  data: {
    current: new Date()
  },
  created: function() {
    let that = this;
    timer = setInterval(function() {
      that.current = new Date();
    }, 1000);
  },
  beforeDestroy: function() {
    clearInterval(timer);
  }
});
