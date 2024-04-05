<template>
  <footer>
      <div class="container-fluid">
      <div class="row ">
        <div>
          <p class="text">
               <span>{{ currYear }}</span>&copy;S'phathimandlaMakhanya
          </p>
          <!-- <a href="https://github.com/sphathimandla-makhanya" target="blank"><img src="https://i.ibb.co/jZPNNZn/img-icons8.png" alt=""></a>
          <a href="https://www.linkedin.com/in/s-phathimandla-makhanya-0b80391aa/" target="blank"><img src="https://i.ibb.co/KmB7tDr/img-icons8.png" alt=""></a> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
name: 'FooterComp',
data(){
    return{
        currYear: new Date().getFullYear()
    }
}
}
</script>

<style scoped>
.text{
  font-size: medium;
  color: aliceblue;
  font-family: "Nanum Myeongjo", serif;
}
/* a img:hover{
  width: 30px;
  margin: 3px;
  border-radius: 3px;
  background-color: rgb(51, 144, 28);
  border-color: blue;
} */
a img{
  height: 25px;
  width: 25px;
  margin: 3px;
  border-radius: 3px;
}
.row{
  background-color: rgb(109, 109, 109);
}

</style>