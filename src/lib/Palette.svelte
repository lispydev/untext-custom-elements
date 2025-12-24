<svelte:options customElement={{
  tag: "command-palette",
  // svelte scopes styles already
  shadow: "none"
}} />

<script lang="ts">

  export let items: string[] = []
  export let value: string = ""
  export let onselect: (item: string) => void = () => {}
  let preselected = 0

  let displayedItems: string[] = items

  function onkeydown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      if (displayedItems.length > 0) {
        onselect(displayedItems[preselected])
      } else {
        onselect(value)
      }
    }
    if (e.key === "ArrowUp") {
      preselected = Math.max(0, preselected - 1)
    }
    if (e.key === "ArrowDown") {
      preselected = Math.min(preselected + 1, items.length - 1)
    }
  }


  function filterItems() {
    let old_displayedItems = displayedItems
    displayedItems = items.filter((item) => item.includes(value))
    if (preselected >= displayedItems.length) {
      preselected = displayedItems.length - 1
    }
    if (old_displayedItems.length === 0 && displayedItems.length > 0) {
      preselected = 0
    }
  }

  export function update() {
    filterItems()
  }

</script>

<div class="flex w-full justify-center">
  <div class="flex bg-blue-200 justify-center items-center w-1/2 flex-col">
    <input type="text" bind:value={value} on:input={filterItems} on:keydown={onkeydown} class="bg-gray-200 w-full" />
    <ul class="w-full">
      {#each displayedItems as item, i}
        <li class={[preselected == i ? "bg-blue-300" : ""]} on:mouseover={() => preselected = i} on:focus={() => preselected = i}>
          <button class="p-2 w-full text-left" on:click={() => onselect(item)}>
            {item}
          </button>
        </li>
      {/each}
    </ul>
  </div>
</div>