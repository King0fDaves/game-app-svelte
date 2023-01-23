<div class="mainGridContainer">
    <section id="Owned" class="ownedSection"></section> 
    <section id="Wishlist" class="wishlistSection"></section>
    <section id="Sold" class="soldSection"></section>
</div>

<style lang="scss">
    .mainGridContainer{
        display: grid;
        padding: 0%;
        margin: 0%;
        grid-template-columns: repeat(40, 1fr);
        grid-template-rows: repeat(65, 1.875vw);
        height:80vh;
        width:100vw;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .ownedSection{
        grid-column: 2/34;
        grid-row: 2/22;
        background-color: aqua;
    }

    .wishlistSection{
        grid-column: 2/34;
        grid-row: 24/44;
        background-color: red;
    }

    .soldSection{
        grid-column: 2/34;
        grid-row: 46/66;
        background-color: green;
    }
</style>

<script>
    import pageNavStore from "/src/store";
    let pageNavItems = [
                        {name:"Owned", route:"Owned"},
                        {name:'Wishlist', route:'Wishlist'},
                        {name:"Sold", route:"Sold"}
                    ];

    pageNavStore.update((currentData) =>{
        return currentData = pageNavItems;
    })
</script>