const reado_btn = document.getElementById("reado_btn");
reado_btn.addEventListener('click', () => {
  window.location.replace("https://brishpalsingh.github.io/colllegeproject/login.html");
  // console.log("clicked");
});
const user = {
  username: "brish",
  class: 10,
  rollno: 27,
  welcome: function () {
      console.log(`${this.username},hello`);
  }
}
user.welcome()