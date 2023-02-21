<div class="main">
    <div class="mainGridContainer">
        <section
            on:focus={onHover}
            on:mouseover={() => [onHover('Owned')]} 
            id="Owned" class="ownedSection"
        >
        </section> 

        <section 
            on:focus={onHover}
            on:mouseover={() => [onHover('Wishlist')]}
            id="Wishlist" class="wishlistSection"
        >
        </section>

        <section
            on:focus={onHover}
            on:mouseover={() => [onHover('Sold')]}
            id="Sold" class="soldSection"
        >
        </section>
    </div>
</div>

<style lang="scss">
    @media screen and (max-width: $shrinkWidth){
        .main{
            display:none
        }
    }
    
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
    import { pageNavStore, currentPageStore, currentSectionStore } from "/src/store";

    let page = 'Library';

    let section;

    let pageNavItems = [
                        {name:"Owned", route:"Owned", clicked:false},
                        {name:'Wishlist', route:'Wishlist', clicked: false},
                        {name:"Sold", route:"Sold", clicked:false}
                    ];

    pageNavStore.update((currentData) =>{
        return currentData = pageNavItems;
    })

    currentPageStore.update((currentData) =>{
            return currentData = page;
    })

    function onHover(element){
        
        section = element;

        currentSectionStore.update((currentData) => {
        return currentData = section;
        })
    }
</script>