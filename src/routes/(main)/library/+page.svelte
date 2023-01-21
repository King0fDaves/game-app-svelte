<script>
    import pageNavStore from "/src/store";
    let pageNavItems = [
                        {name:"Owned", route:"/owned"},
                        {name:'Wishlist', route:'/wishlist'},
                        {name:"Sold", route:"/sold"}
                    ];

    pageNavStore.update((currentData) =>{
        return currentData = pageNavItems;
    })
</script>