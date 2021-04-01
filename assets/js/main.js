    let work = true;
    var menu_burger = () => {
        let menu_mobile_off = document.querySelector("#menu_mobile_off")
        let hero = document.querySelector(".hero")
        let get_started_btn = document.querySelector("#btn_get_started")
        let hero_text = document.querySelector(".text_content")
        let span_2_burger = document.querySelector("#span_2_burger_off")

        span_2_burger
        if (work == true) {
            hero.style = "padding: 40px 0px ";
            hero_text.style = "padding-top:0px";
            span_2_burger.id = "span_2_burger_on";



            menu_mobile_off.id = "menu_mobile_on";
            work = false;
            console.log(work)
        } else if (work == false) {
            hero.style = "padding: 81 0px 120px 0px ";
            hero_text.style = "padding-top:49px";
            let span_2_burger = document.querySelector("#span_2_burger_on")
            span_2_burger.id = "span_2_burger_off";
            let menu_mobile_off = document.querySelector("#menu_mobile_on")
            menu_mobile_off.id = "menu_mobile_off";

            work = true;
            console.log(work)

        }


    }

    var x = true;
    let change_langage = () => {
        let chine = document.querySelector(".chin");
        if (x == true) {
            chine.style = "display:block;";
            x = false;
        } else {
            chine.style = "display:none;";
            x = true;
        }


    }


    var json = {
        pack: [{
                pack_name: "Istanbul",
                path_img: "assets/img/pack/istanbul.jpg",
                apr: "+80%",
                apr_number: 80
            },
            {

                pack_name: "Chafchaouin",
                path_img: "assets/img/pack/chefchaouin.jpg ",
                apr: "+36%",
                apr_number: 36
            },
            {

                pack_name: "Madrid",
                path_img: "assets/img/pack/madrir.jpg ",
                apr: "+66%",
                apr_number: 66
            },
            {

                pack_name: "Paris ",
                path_img: "assets/img/pack/paris.jpg ",
                apr: "+50%",
                apr_number: 50
            },
            {

                pack_name: "Ryo",
                path_img: "assets/img/pack/ryo.jpg ",
                apr: "+20%",
                apr_number: 20
            }
        ]
    }


    ////////////: pack price

    let next_btn = document.querySelector(".next");
    let back_btn = document.querySelector(".back");
    let img_slider = document.querySelector(".img_slider");
    let name_pack = document.querySelector(".name_pack");
    let apr_pack = document.querySelector(".apr_value");
    let daily = document.querySelector(".daily_total");
    let monthly = document.querySelector(".monthly_total");
    let yearly = document.querySelector(".yearly_total");
    let daily_ridotto = 0.10;
    let monthly_ridotto = 3;
    let yearly_ridotto = 36;


    let z = 0;

    const change_pack = (number) => {
        name_pack.innerHTML = json.pack[number].pack_name
        img_slider.src = json.pack[number].path_img;
        apr_pack.innerHTML = json.pack[number].apr
    }

    const daily_price = (apr, ridotto_prix) => {
        let res;
        res = ridotto_prix * 100 + ridotto_prix * apr;
        return res + "$";

    }


    change_pack(z);
    daily.innerHTML = daily_price(parseInt(json.pack[z].apr), daily_ridotto)
    monthly.innerHTML = daily_price(parseInt(json.pack[z].apr), monthly_ridotto)
    yearly.innerHTML = daily_price(parseInt(json.pack[z].apr), yearly_ridotto)



    next_btn.addEventListener("click", function() {
        let lengh = json.pack.length
        if (z < lengh - 1) {
            z++;
            change_pack(z);
            daily.innerHTML = daily_price(parseInt(json.pack[z].apr), daily_ridotto)
            monthly.innerHTML = daily_price(parseInt(json.pack[z].apr), monthly_ridotto)
            yearly.innerHTML = daily_price(parseInt(json.pack[z].apr), yearly_ridotto)

        }
    })
    back_btn.addEventListener("click", function() {
        if (z > 0) {
            z--;
            change_pack(z);
            daily.innerHTML = daily_price(parseInt(json.pack[z].apr), daily_ridotto)
            monthly.innerHTML = daily_price(parseInt(json.pack[z].apr), monthly_ridotto)
            yearly.innerHTML = daily_price(parseInt(json.pack[z].apr), yearly_ridotto)
        }
    })