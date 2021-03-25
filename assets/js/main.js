    let work = true;
    var menu_burger = () =>{
            let menu_mobile_off = document.querySelector("#menu_mobile_off")
            let hero = document.querySelector(".hero")
            let get_started_btn = document.querySelector("#btn_get_started")
            let hero_text = document.querySelector(".text_content")
            let span_2_burger = document.querySelector("#span_2_burger_off")

            span_2_burger
        if(work == true)
        {
            hero.style="padding: 40px 0px ";
            hero_text.style="padding-top:0px";
            span_2_burger.id="span_2_burger_on";



            menu_mobile_off.id="menu_mobile_on";
            work= false;
            console.log(work)
        }
        else if(work == false){
            hero.style="padding: 81 0px 120px 0px ";
            hero_text.style="padding-top:49px";
            let span_2_burger = document.querySelector("#span_2_burger_on")
            span_2_burger.id="span_2_burger_off";
            let menu_mobile_off = document.querySelector("#menu_mobile_on")
            menu_mobile_off.id="menu_mobile_off";

            work= true;
            console.log(work)

        }


    }

    var x = true;
    let change_langage = () =>{
        let chine = document.querySelector(".chin");
        if(x == true)
        {
            chine.style="display:block;";
            x = false;
        }
        else{
            chine.style="display:none;";
            x = true;
        }

        
    }
