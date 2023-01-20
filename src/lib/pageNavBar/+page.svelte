<ul class="pageNavBar">
    {#each items as item}
        <li class="pageNavBar__item"><a class="pageNavBar__link" href=#>{item.name}</a></li>
    {/each}
</ul>

<script>
    export let items = [];
</script>

<style lang="scss">
    .pageNavBar{
    display: flex;
    justify-content: flex-start;
    list-style-type: none;
    margin-top:-5vh;

    .pageNavBar__link{
        text-decoration: none;
        color:#fff;
        padding-right: 2vw;
        padding-left: 2vw;
        font-size: 1.5rem;
    }
}
</style>