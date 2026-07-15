let arrows = {
    1:2,
    2:3,
    3:4,
    4:3,
    5:2,
    6:1
}

function define_arrows(){
    setTimeout(() => {

        // Object.keys(arrows).forEach(arrow => {
        //     let target = arrows[arrow];
        //     console.log("arrow",arrow, "section", target )
        //     $("#arrow"+arrow).on("click", function(){
        //         $("[arrow_target_id='"+target+"']").get(0).scrollIntoView({behavior: 'smooth'});
        //     });
        // });


        $.each($("[arrow_target]"), (i,arrow) => {
            let target_id = $(arrow).attr("arrow_target");
            $(arrow).on("click", function(){
                $("[arrow_target_id='"+target_id+"']").get(0).scrollIntoView({behavior: 'smooth'});
            });
        });
    
    }, 100);
}