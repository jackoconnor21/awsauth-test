import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Amplify from 'aws-amplify'
import '@aws-amplify/ui-vue'
import aws_exports from './aws-exports'

Amplify.configure(aws_exports)

Vue.config.productionTip = false

// import AWSAppSyncClient, {AUTH_TYPE} from "aws-appsync";

// const client = new AWSAppSyncClient({
//     url: 'https://455mb7wsybbntmcmq3inmsfphq.appsync-api.eu-west-1.amazonaws.com/graphql',
//     region: 'eu-west-1',
//     auth: {
//         type: AUTH_TYPE.API_KEY,
//         apiKey: 'da2-rxfssikhmbcwrkvwvuasr5i43y',
//     },
// });


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
