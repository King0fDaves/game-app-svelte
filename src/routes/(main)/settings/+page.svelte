
<script>
    import pageNavStore from "/src/store";
    let pageNavItems = [];

    pageNavStore.update((currentData) =>{
        return currentData = pageNavItems;
    })
</script>