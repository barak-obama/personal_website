let arrows = {
    1:2,
    2:3,
    3:4,
    4:3,
    5:2,
    6:1
}

setTimeout(() => {

    Object.keys(arrows).forEach(arrow => {
        let section = arrows[arrow];
        console.log("arrow",arrow, "section", section )
        $("#arrow"+arrow).click(function(){
            
            $("#section" + section).get(0).scrollIntoView({behavior: 'smooth'});
        })
    });

}, 100);