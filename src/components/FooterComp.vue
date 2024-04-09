<template>
  <footer>
      <div class="container-fluid mt-4">
      <div class="row ">
        <div>
          <p class="text">
               <span>{{ currYear }}</span>&copy;S'phathimandlaMakhanya
          </p>
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

.row{
  background-color: transparent;
}

</style>