<script>

    let pageNavItems = [{name:"Category", route:"/C"}];
    
    import pageNavStore from "/src/store";
    pageNavStore.update((currentData) =>{
        return currentData = pageNavItems;
    })

</script>