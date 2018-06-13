export default {
  name: 'Test',
  data () {
    return {
      name: 'John Smith',
      city: 'Charlotte, NC'
    }
  },
  computed: {
    getCounter() {
      return this.$store.getters.getCounter;
    },
  },
  created: function(){
    this.$store.commit('increment');
  }
}