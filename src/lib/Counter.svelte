<svelte:options customElement={{
  tag: "counter-test",
  // svelte scopes styles already
  shadow: "none"
}} />

<script lang="ts">

  let count: number = $state(0)
  const increment = () => {
    count += 1
  }
</script>


<button onclick={increment} class="bg-blue-500 hover:bg-blue-700 text-white">
  count is {count}
</button>
