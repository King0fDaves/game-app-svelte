<div class="main">
    <ul class="pageNavBar">
        {#each items as item}
            <li class="pageNavBar__item"><a on:click={scrollIntoView} class="pageNavBar__link" href='#{item.route}'>{item.name}</a></li>
        {/each}
    </ul>
</div>

<script>

    export let items = [];    

    function scrollIntoView({ target }) {
		const element = document.querySelector(target.getAttribute('href'));
		if (!element) return;
        element.scrollIntoView()
    };

</script>

<style lang="scss">

    @media screen and (max-width: 750px){
        .main{
            display: none;
        }
    }
    .pageNavBar{

    display: flex;
    justify-content: flex-start;
    list-style-type: none;
    margin-top:3vh;

    .pageNavBar__link{
        text-decoration: none;
        color:#fff;
        padding-right: 2vw;
        padding-left: 2vw;
        font-size: 1.2rem;
    }
}
</style>