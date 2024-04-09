<template>
  <div class="contacts">
    <h1>Contacts</h1>
    <div class="container">
      <form action="https://submit-form.com/SwxF6yyxs" target="_blank" class="row g-2">
      <div class="col-md-6">
          <label for="firstName" class="form-label">First Name:</label>
          <input type="text" class="form-control" id="firstName" name="firstName" required v-model="firstName">
      </div>
      <div class="col-md-6">
          <label for="lastName" class="form-label">Last Name:</label>
          <input type="text" class="form-control" id="lastName" name="lastName" required v-model="lastName">
      </div>
      <div class="col-12">
          <label for="emailAddress" class="form-label">Email Address:</label>
          <input type="email" class="form-control" id="emailAddress" name="emailAddress" placeholder="example@gmail.com" required v-model="emailAddress">
      </div>
      <div class="col-12">
          <label for="message" class="form-label">Message:</label>
          <textarea id="message" class="form-control" name="message" cols="30" rows="3" required v-model="message"></textarea>
      </div>
      <div class="col-12">
          <button type="submit" class="btn btn-success">Submit</button>
      </div>
  </form>     
    </div>
    <div class="container d-sm-block d-md-flex">
      <div class="col">
        <div class="row">
        <table class="table table-striped mt-2">
          <tbody>
            <tr>
              <th scope="row"><img id="contactImg" src=""></th>
              <td class="text-white">0603364154</td>
            </tr>
            <tr>
              <th scope="row"><img id="contactImg" src=""></th>
              <td >makhanyasm11@gmail.com</td>
            </tr>
            <tr>
              <th scope="row"><img id="contactImg" src=""></th>
              <td class="text-white">Langa, Cape Town</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13239.069157922102!2d18.529903849999997!3d-33.94711295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b5c78086627%3A0x4d5b92f00481418f!2sLanga%2C%20Cape%20Town%2C%207456!5e0!3m2!1sen!2sza!4v1711375770585!5m2!1sen!2sza" width="290" height="290" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
      </div>
        </div>
    </div><br>
  </div>

</template>

<script>
export default {
  data(){
   return{
    firstName:"",
    lastName:"",
    emailAddress:"",
    message:""
   }
  },methods:{
    reloadForm(){
    alert("Form submitted"),
    this.firstName="",
    this.lastName="",
    this.emailAddress="",
    this.message=""
    }
  }
}
</script>

<style scoped>
.contacts{
  font-family: "Nanum Myeongjo", serif;
  color: whitesmoke;
  height: 100vh;
}
tr td{
  color: aliceblue;
}

.col iframe{
  width: 280px;
}
</style>