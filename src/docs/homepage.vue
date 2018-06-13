  <template>
   <row>
     <column>
      </column>
      <column col="6" sm="4" md="4 card-bottom mt-4 mr-5 p-4">
        <card>
           <h2>State Management</h2>
          <card-header>{{title}}</card-header>
          <card-body>{{title}}</card-body>
             <select class="custom-select m-auto font-weight-bold" v-model="DataRepType" v-on:change="onChange">
      <i class="fa fa-github" aria-hidden="true"></i>
      <option selected class="font-weight-bold" value='0'> Select The Application</option>
      <option>Heroku</option>
      <option>Bitrise</option>
      <option>jenkins</option>
     </select>
          <button id="button" v-on:click="vars" type="button" class="googleButtons btn btn-google-plus">
            <a id="herok" href="https://id.heroku.com/oauth/authorize?client_id=9f2de3e1-4270-42b9-9d15-c890062c5577&response_type=code">
            Sign Up
          </a>
        </button>
          <!-- <button v-on:click="demo()">Demo {{$store.state.count}} counter is {{evenOrOdd}}</button> -->
        </card>
      </column>
      <!-- <column  col="6" sm="4" md="4 card-bottom mt-4">
        <card> -->
          <!-- <button id="button" v-on:click="vars" type="button" class="googleButtons btn btn-google-plus">
            <a id="herok" href="https://id.heroku.com/oauth/authorize?client_id=9f2de3e1-4270-42b9-9d15-c890062c5577&response_type=code">
            Sign Up
          </a>
        </button> -->
        <!-- <button v-on:click="show()">modal</button>
        <button v-on:click="demo()">Demo {{$store.state.count}} counter is {{evenOrOdd}}</button> -->
        <!-- <button id="button" type="button" class="googleButtons btn btn-google-plus">
            <a href="https://github.com/login/oauth/authorize/?client_id=fd0e3bbf36bb7a946aec&scope&state=xyz123&allow_signup">
            github
          </a>
        </button> -->
        <!-- </card>
      </column> -->
      <column  id= "shakingimage" col="6" sm="4" md="4 card-bottom mt-4">
      <img src="https://www.nature.com/polopoly_fs/7.41225.1481804479!/image/WEB_Lightening.jpg_gen/derivatives/landscape_630/WEB_Lightening.jpg" alt="Pineapple" width="300" height="300">
   </column>
  </row>
  </template>

  <script>
  import Vue from 'vue';
  import card from '@/components/Card';
  import cardHeader from '@/components/CardHeader';
  import cardBody from '@/components/CardBody';
  import Container from '@/components/Container';
  import Row from '@/components/Row';
  import Column from '@/components/Col';
  import Btn from '@/components/Button';
  import VueResource from "vue-resource";
  import VModal from 'vue-js-modal';
  // import MdInput from '@/components/MdInput';
  // import MdTextarea from '@/components/MdTextarea';
  import axios from "axios";
  import VueAWN from "vue-awesome-notifications";
  import VueNotifications from 'vue-notifications';
  // import request from 'request';
  Vue.use(VueNotifications);
  Vue.use(axios);
  Vue.use(VueResource);
  Vue.use(VueAWN);
  Vue.use(VModal);

  // Vue.use(request);
  import {mapState} from 'vuex';
  export default {
    name: 'dashboard',
    computed: mapState([
      'title'
    ]),
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
        DataRepType : 0
      };
    },
    mounted() {
      // console.log(this.$route.params);
      // var store = {
      //   debug: true,
      //   state: {
      //     message: 'Hello!'
      //   },
      // };
      var ourSearch = window.location.search;
      var refCode=ourSearch.replace('?code=', '');
      // var request = require("request");
      let headers = 
        { 
          'Postman-Token': 'fee53ed9-026b-42d1-90c9-3137b101275d',
          'Cache-Control': 'no-cache',
          'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
        };
      let formData =
        { 
          client_id: 'fd0e3bbf36bb7a946aec',
          client_secret: 'b40554f93e3d57fffbfd4311506e25b2f5f5aaf2',
          code: refCode,
          redirect_uri: 'http://localhost:8080/#/',
          state: 'xyz123' 
        };
      var options =  { 
        method: 'POST',
        url: 'https://github.com/login/oauth/access_token',
        headers: 
        { 
          'Postman-Token': 'fee53ed9-026b-42d1-90c9-3137b101275d',
          'Cache-Control': 'no-cache',
          'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
        },
        formData: 
        { 
          client_id: 'fd0e3bbf36bb7a946aec',
          client_secret: 'b40554f93e3d57fffbfd4311506e25b2f5f5aaf2',
          code: refCode,
          redirect_uri: 'http://localhost:8080/#/',
          state: 'xyz123' 
        } 
      };
      console.log(options);
      // request(options, function (error, response, body) {
      //   if (error) throw new Error(error);
      //   console.log(body);
      // });
      axios.post("https://github.com/login/oauth/access_token", formData, headers)
      .then(response => {
        console.log(response);
      },error => {
        console.log(error);
      });
    },
    // computed: mapGetters ([
    //   'evenOrOdd'  
    // ])
      
      // var data = [
      //   ('grant_type', 'authorization_code'),
      //   ('code', refCode),
      //   ('client_secret', '8fee0c01-89a7-4f56-8ed6-a8397596c091'),
      // ];
      // var response = request.get('https://id.heroku.com/oauth/token', data);
      // console.log(data);
      // console.log(response);
      // const str = 'https://id.heroku.com/oauth/token \-d "grant_type=authorization_code&code='+refCode+'&client_secret=8fee0c01-89a7-4f56-8ed6-a8397596c091"';
      // got.apply(got, curlToNode('got', str)).then(response => {
      //   console.log(response.body);
      // })
      // .catch(error => {
      //   console.log(error.response.body);
      // });
      // this.$http.get('https:www.google.com');

      // axios.get('https://id.heroku.com/oauth/token \-d "grant_type=authorization_code&code='+refCode+'&client_secret=8fee0c01-89a7-4f56-8ed6-a8397596c091"').then(response => {this.result = response.data.articles;});
      // this.init();
      // var url1='https://id.heroku.com/oauth/token \-d "grant_type=authorization_code&code='+refCode+'&client_secret=01234567-89ab-cdef-0123-456789abcdef"';
      // console.log(url1);
      // axios.get('https://id.heroku.com/oauth/token \-d "grant_type=authorization_code&code='+refCode+'&client_secret=01234567-89ab-cdef-0123-456789abcdef"').then(response => (this.info = response));
    // mounted: {
    //     init();
    // },
    methods: {
      demo () {
        this.$router.push('/demo');
      },
      show () {
        this.$modal.show('hello-world');
      },
      hide () {
        this.$modal.hide('hello-world');
      },
      onChange() {
        // this.state.message = "Hello";
        // console.log(store);
        localStorage.setItem("selectValue", this.DataRepType);
        console.log(localStorage.getItem("selectValue"));
      },
      vars () {
        // let dataString = {
        //   "grant_type": "authorization_code",
        //   "code": "b3e09e7f-2171-4d95-b680-903195208cc4",
        //   "client_secret": "8fee0c01-89a7-4f56-8ed6-a8397596c091"  
        // };
        // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        // axios.post("https://id.heroku.com/oauth/token",data)
        // .then(response => {
        //   console.log(response);
        // },error => {
        //   console.log(error);
        // });
        // var options = {
        //   url: "https://id.heroku.com/oauth/token",
        //   formData: dataString
        // };
        // request.post(options, (error, response, body) => {
        //   if (!error && response.statusCode == 200) {
        //     console.log(body);
        //   }
        //   console.log(response.statusCode,error);
        // });
        // var vm = this
        // this.$http.post('https://id.heroku.com/oauth/token',dataString),function (data) {
        //   console.log(data);
        // };

        // this.$http.get('https://id.heroku.com/oauth/token', dataString,{headers: { 
        //   'Access-Control-Allow-Origin': '*',
        // }}).then(function (response) {
        //     // Success
        //   console.log(response.data);
        // },function (response) {
        //     // Error
        //   console.log(response.data);
        // });
        // { name: 'contract', params: { contractId: 123 }}
        this.$router.push({name: 'dashboard',props: true, params: { foo: "bar"}});
        // var ourSearch = window.location.search;
        // var refCode=ourSearch.replace('?code=', '');
        // console.log(refCode);
        // axios.post('https://id.heroku.com/oauth/token \-d "grant_type=authorization_code&code=01234567-89ab-cdef-0123-456789abcdef&client_secret=01234567-89ab-cdef-0123-456789abcdef"', { data: this.data })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error.message);
        //   });
        // var request = require('request');
        // var dataString = "grant_type=authorization_code&code=$refCode&client_secret=01234567-89ab-cdef-0123-456789abcdef";
        // var options = {
        //   url: 'https://id.heroku.com/oauth/token',
        //   method: 'POST',
        //   body: dataString
        // };
      },
      // callback(error, response, body) {
      //   if (!error && response.statusCode == 200) {
      //     console.log(body);
      //   }
      // },
      // request(options, callback);
    },
    // githubAuthorize() {
      
    // },
  };
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    button#button {
    background-color: #4285f4;
    color: #ffffff;
  }
  a {
    color: #ffffff;
}
img:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
  </style>