<script lang="ts">
  import { goto } from "$app/navigation";
  import { createEventDispatcher, onMount } from "svelte";
  import Dropdown from "./Dropdown.svelte";

  export let autofocus: boolean = true;

  const dispatch = createEventDispatcher();

  const searchType = ["PLAYER", "CLASH"];
  const regions = {
    BR: "BR1",
    EUN: "EUN1",
    EUW: "EUW1",
    JP: "JP1",
    KR: "KR",
    LA: "LA1",
    NA: "NA1",
    OC: "OC1",
    TR: "TR1",
    RU: "RU",
  };

  let depth: number = 50;
  let search: string = "";
  let searchInput = null;
  let type: string = searchType[0];
  let region: string = "";

  function onEnter(e) {
    if (e.key === "Enter") {
      execute();
    }
  }

  function execute() {
    if (!(search && depth && region)) {
      dispatch("error", "Please fill out everything.");
      return;
    }

    dispatch("execute", {
      depth: Number(depth),
      search,
      type,
      region: regions[region],
    });
  }

  function filterDepth() {
    if (this.value > 100) {
      this.value = 100;
    }

    let newValue = this.value.match(/^[1-9][0-9]?$|^100$/);
    this.value = (newValue && newValue[0]) || "";
  }

  onMount(() => {
    autofocus && searchInput.focus();
  });
</script>

<div class="w-full rounded-lg flex items-center bg-[#09090A] shadow-lg h-12">
  <div class="h-full flex items-center border-0 border-r-1 border-base-200 px-2">
    <Dropdown options={searchType} bind:selected={type} />
    <span class="mx-1" />
    <Dropdown options={Object.keys(regions)} placeholder="Region" bind:selected={region} />
  </div>
  <input
    type="text"
    placeholder="Playername"
    class="flex-1 h-full px-2 bg-transparent placeholder-content-100 outline-none"
    on:keydown={onEnter}
    bind:value={search}
    bind:this={searchInput}
  />
  <button
    class="px-4 py-3 text-content transition duration-200 ease-in-out bg-transparent cursor-pointer focus:outline-none hover:bg-base-200"
    on:click={execute}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22">
      <path stroke="url(#paint0_linear_4_12)" stroke-opacity=".77" stroke-width="2.5" d="M13 13l-2 2H6l-4-4V6l4-4h5l4 4v5l-2 2zm0 0l4 4 4 4" />
      <defs>
        <linearGradient id="paint0_linear_4_12" x1="2.5" x2="26" y1="1" y2="20.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#28C8FB" />
          <stop offset="1" stop-color="#28C8FB" stop-opacity=".6" />
        </linearGradient>
      </defs>
    </svg>
  </button>
  <input
    type="text"
    placeholder="Depth"
    on:input={filterDepth}
    on:keydown={onEnter}
    bind:value={depth}
    class="w-18 bg-transparent placeholder-[#444] border-0 border-l-1 border-base-200 h-full text-center focus:(outline-none bg-transparent)"
  />
</div>

<style>
</style>
