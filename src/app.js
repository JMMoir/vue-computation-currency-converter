import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  console.log('vue loaded');

  new Vue({
    el: '#app',
    data: {
      selectedRate1: 0,
      selectedRate2: 0,
      convertToAny: null,
      convertToEuro:null,
      euroAmount: "",
      selected: null,
      selectedRate: null,
      currencies: null
    },

    methods:{
      fetchCurrencies: function(){
      fetch('https://api.exchangeratesapi.io/latest')
      .then(response => response.json())
      .then((data) => this.currencies = data)
    }
  },
  computed:{
    convertedRate: function(){
      return (this.euroAmount * this.selected).toFixed(2)
    },
    convertedEuroRate: function(){
      return (this.convertToEuro/ this.selectedRate).toFixed(2)
    },
    convertedAny: function(){
      return ((this.convertToAny/this.selectedRate1) * this.selectedRate2).toFixed(2)
    }
  },
  mounted(){
    this.fetchCurrencies();
  }


  })




})
