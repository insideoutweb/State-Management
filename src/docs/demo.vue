<div id="demo">
    <p>
      Lastname: {{ user.lastname }}<br />
      Firstname: {{ user.firstname }}
    </p>
    <p>
      User object: {{ user }}
    </p>
    <input v-model="user.lastname" />
    <input v-model="user.firstname" />
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.6/vue.min.js"></script>
<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  import card from '@/components/Card';
  import cardHeader from '@/components/CardHeader';
  import cardBody from '@/components/CardBody';
  import Container from '@/components/Container';
  import Row from '@/components/Row';
  import Column from '@/components/Col';
  import Btn from '@/components/Button';
  Vue.use(Vuex);
  export default {
    name: 'demo',
    components: {
      'Card': card,
      'CardHeader': cardHeader,
      'CardBody': cardBody,
      Container,
      Column,
      Row,
      Btn
    },
    mounted() {
      console.log("hello");
      const store1 = new Vuex.Store({
        strict: true,
        state: {
          user: {
            lastname: '',
            firstname: ''
          }
        }
      });
      const demo = new Vue({
        el: '#demo',
        store: store1,
        computed: {
          user () {
            console.log(demo);
            return this.$store1.state.user;
          }
        },
      });
    },
  };
</script>