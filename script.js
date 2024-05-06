const { createApp } = Vue

createApp({
  data() {
    return {
      cards: [],
      message: 'Ciao',
    }
  },
  methods: {
    diskApiCall() {
        axios.get("server.php", {})
          .then( (response) => {
            this.cards = response.data;
            console.log(this.cards);
          })
        }
    },
    mounted() {
        this.diskApiCall()
    }
}).mount('#app')

