  <template>
   <row>
      <column col="6" sm="4" md="4 card-bottom mt-4">
      </column>
      <column  col="6" sm="4" md="4 card-bottom mt-4">
        <card>
          <card-body>Welcome to Dashboard {{selectedValue}} </card-body>
          <button v-on:click="clear">Clear localstorage</button>
        </card>
      </column>
      <column  col="6" sm="4" md="4 card-bottom mt-4">
       
      </column>
  </row>
  </template>

  <script>
  // import Vue from 'vue';
  // import Vuex from 'vuex';
  import card from '@/components/Card';
  import cardHeader from '@/components/CardHeader';
  import cardBody from '@/components/CardBody';
  import Container from '@/components/Container';
  import Row from '@/components/Row';
  import Column from '@/components/Col';
  import Btn from '@/components/Button';
//   export default  new Vuex.Store({
//    getters:{
//     search(state) {
//       return keyword => state.items.filter(item =>{
//         return item.name === keyword
//       });
//     }
//   }
// })
  export default {
    // getters:{
    //   search(state) {
    //     // var keyword = "siva";
    //     return keyword => state.items.filter(item => {
    //       return item.name === keyword;
    //     });
    //   }
    // },
    name: 'dashboard',
    components: {
      'Card': card,
      'CardHeader': cardHeader,
      'CardBody': cardBody,
      Container,
      Column,
      Row,
      Btn
    },
    data () {
      return {
        loading: false,
        result: null,
        DataRepType : 0,
        selectedValue : ''
      };
    },
    mounted() {
      console.log(this.$route.params);
      this.selectedValue  = localStorage.getItem("selectValue");
    },
    methods: {
      clear() {
        localStorage.clear();
      }
    }
  };
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
