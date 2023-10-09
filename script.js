 $(document).ready(function() {
    $(".grid-item").click(function() {
        var link = $(this).data("link");
        if (link){
            window.open(link,'_blank');
        }
    });
});