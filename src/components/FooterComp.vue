<template>
  <div class="container-fluid fixed-bottom">
    <div class="row">
        <p class="lead">
            S'phathimandlaMakhanya&copy; <span>{{ currYear }}</span>
        </p>
    </div>
  </div>
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

<style>

</style>