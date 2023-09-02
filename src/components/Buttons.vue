<template>
    <div class="buttons">
      <button
        @click.prevent="$store.dispatch('decreaseCounter')"        
      >-</button>
      <button
        @click.prevent="$store.dispatch('increaseCounter')"        
      >+</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>