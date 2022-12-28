<template>
  <div 
    @click="$router.push({name: 'entry', params: {id: 10}})"
    class="mb-3 pinter p-2 entry-container">
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5">marzo</span>
        <span class="mx-2 fw-light">1982, jueves</span>

    </div>
    <div class="entry-description">
      Hoy un dia muy normal aca no saben nada de mañana aaaa a a  aa  a a a  a a a a a a aa  a aa aa a  
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: -.2s all ease-in;
  }
  
}

</style>