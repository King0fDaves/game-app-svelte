<script>

    let pageNavItems = [{name:"Friends", route:"/C"}];
    
    import pageNavStore from "/src/store";
    pageNavStore.update((currentData) =>{
        return currentData = pageNavItems;
    })

</script>