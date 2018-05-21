import Vue from 'vue';
import AppComponent from './components/app.components';
import './filters';

new Vue({

    el: '#app',

    components: {

        'app-component': AppComponent

    }

});
