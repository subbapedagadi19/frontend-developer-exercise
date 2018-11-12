
export default {
  created() {
    this.$http
      .get("https://api.myjson.com/bins/199cqu")
      .then(function (response) {
        this.doctors = response.data
      }, function (error) {
        console.log(error.statusText);
      });
  }
}