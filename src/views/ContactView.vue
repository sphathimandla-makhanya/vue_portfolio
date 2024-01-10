<template>
  <h1>Contacts</h1>
  <div class="container">
    <table class="table table-striped mt-2">
        <tbody>
          <tr>
            <th scope="row"><img id="contactImg" src=""></th>
            <td>0603364154</td>
          </tr>
          <tr>
            <th scope="row"><img id="contactImg" src=""></th>
            <td>crafted@gmail.com</td>
          </tr>
          <tr>
            <th scope="row"><img id="contactImg" src=""></th>
            <td>314 Imam Haron, Lansdowne</td>
          </tr>
        </tbody>
      </table>
    <form action="" method="" class="row g-2">
        <div class="col-md-6">
          <label class="form-label">First Name:</label>
          <input type="text" class="form-control" id="inputEmail4">
        </div>
        <div class="col-md-6">
          <label class="form-label">Last Name:</label>
          <input type="text" class="form-control" id="lastName">
        </div>
        <div class="col-12">
          <label class="form-label">Email Address:</label>
          <input type="email" class="form-control" id="emailAddress" placeholder="crafted@gmail.com">
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">Message: </label>
          <textarea id="message" class="form-control" cols="30" rows="2"></textarea>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-success">Submit</button>
        </div>
      </form>       
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>