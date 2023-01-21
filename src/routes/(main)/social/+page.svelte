<script>
    import pageNavStore from "/src/store";
    let pageNavItems = [
                        {name:"Friends", route:"/friends"},
                        {name:'Group', route:'/groups'},
                        {name:"Communities", route:"/communities"}
                    ]
    ;
    pageNavStore.update((currentData) =>{
        return currentData = pageNavItems;
    })

</script>