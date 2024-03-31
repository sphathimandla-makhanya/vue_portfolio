<template>
  <div class="about">
    <div class="container" id="container-about">
      <div class="row">
        <h1>{{ $store.state.about.heading }}</h1>
        <div class="col m-5">
          <ul class="list-group list-group-item-dark list-group-flush">
            <li class="list-group-item list-group-item-dark">S'phathimandla Makhanya</li>
            <li class="list-group-item ">Gender: Male</li>
            <li class="list-group-item ">Gender: Male</li>
            <li class="list-group-item list-group-item-dark">Nationality: African</li>
            <li class="list-group-item">Driver's license: C1/10</li>
            <li class="list-group-item list-group-item-dark">Languages: English, Isizulu and IsiXhosa</li>
            <li class="list-group-item">Strong communication and interpersonal skills</li>
            <li class="list-group-item list-group-item-dark">MS Office (Excel, Power point, Word, Outlook, Visio)</li>
          </ul><br>
        </div>
        <div class="col m-5 ">
          <img id="image" :src="$store.state.about.img" class="mb-3">
          <p>{{ $store.state.about.description}}</p>
          <p>{{ $store.state.about.hobbies }}</p><br>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
computed: {
  fetchData(){
    this.$store.dispatch('fetchData')
  }
},
mounted(){
  this.fetchData
}
}
</script>

<style scoped> 
#image{
  height: 250px;
  width: 250px;
  border-radius:5px;
}
.about{
  background-color: cadetblue;
  /* background-color: #3d5861; */
}

#container-about{
  font-family: 'Playfair', serif;
  color:#101011;
  font-size:105%;
}

@media screen and (max-width:390px){
  #container-about{
  font-size:90%;
}
#image{
  height: 32%;
  width: 90%;
  border-radius:5px;
}
}

</style>