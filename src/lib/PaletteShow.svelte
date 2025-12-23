<svelte:options customElement={{
  tag: "command-palette-manager",
  shadow: "none"
}} />

<script lang="ts">
  import Palette from "./Palette.svelte"

  export let onselect: (item: string) => void = () => {}
  export let choices: string[] = []
  export function showPalette() {
    show = true
  }
  export function hidePalette() {
    show = false
  }
  let show: boolean = true
</script>

{#if show}
  <Palette items={choices} onselect={(item) => {onselect(item); hidePalette();}} />
{/if}