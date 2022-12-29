var emissions = 0;
            var household_emissions = 0;
            var tranport_emissions = 0;
            var waste_emissions = 0;
            var v1 = 0;
            var v2 = 0;
            var v3 = 0;
            var v4 = 0;
            var v5 = 0;
            var v6 = 0;
            var v7 = 0;
            var v8 = 0;
            var v9 = 0;
            var v10 = 0;
            var v11 = 0;
            var v12 = 0;
            var v13 = 0;
            var v14 = 0;
            var v15 = 0;
            var v16 = 0;
            var v17 = 0;




            function calc_1() {
                n = document.getElementById("members").value;
                if(n){
                    v1 = eval(n*1.850);
                } else {
                    v1 = 0;
                }
                document.getElementById("members_emissions").value = v1;
            }

            function calc_2() {
                n = document.getElementById("pv_petrol").value;
                if(n){
                    v2 = eval((n*119.60)/1000000);
                } else { v2 = 0; }
                document.getElementById("pv_petrol_emissions").value = v2;
            }

            function calc_3() {
                n = document.getElementById("pv_diesel").value;
                if(n){
                    v3 = eval((n*132)/1000000);
                } else { v3 = 0; }
                document.getElementById("pv_diesel_emissions").value = v3;
            }

            function calc_4() {
                n = document.getElementById("pv_cng").value;
                if(n){
                    v4 = eval((n*112.60)/1000000);
                } else { v4 = 0; }
                document.getElementById("pv_cng_emissions").value = v4;
            }

            function calc_5() {
                n = document.getElementById("bus").value;
                if(n){
                    v5 = eval((n*53.60)/1000000);
                } else { v5 = 0; }
                document.getElementById("bus_emissions").value = v5;
            }

            function calc_6() {
                n = document.getElementById("taxi").value;
                if(n){
                    v6 = eval((n*359)/1000000);   
                } else { v6 = 0;}
                document.getElementById("taxi_emissions").value = v6;
            }

            function calc_7() {
                n = document.getElementById("autorickshaw").value;
                if(n){
                    v7 = eval((n*54)/1000000);
                } else { v7 = 0;}
                document.getElementById("autorickshaw_emissions").value = v7;

            }

            function calc_8() {
                n = document.getElementById("train").value;
                if(n){
                    v8 = eval((n*100)/1000000);
                } else { v8 = 0;}
                document.getElementById("train_emissions").value = v8;
            }

            function calc_9() {
                n = document.getElementById("flight1").value;
                if(n){
                    v9 = eval((n*92)/1000);
                } else { v9 = 0;}
                document.getElementById("flight1_emissions").value = v9;
            }

            function calc_10() {
                n = document.getElementById("flight2").value;
                if(n){
                    v10 = eval((n*345)/1000);
                } else { v10 = 0;}
                document.getElementById("flight2_emissions").value = v10;
            }

            function calc_11() {
                n = document.getElementById("flight3").value;
                if(n){
                    v11 = eval((n*747.60)/1000);
                } else { v11 = 0;}
                document.getElementById("flight3_emissions").value = v11;
            }

            function calc_12() {
                n = document.getElementById("lpg").value;
                if(n){
                    v12 = eval((n*42.50)/1000);
                } else { v12 = 0;}
                document.getElementById("lpg_emissions").value = v12;
            }

            function calc_13() {
                n = document.getElementById("cng").value;
                if(n){
                    v13 = eval((n*1.82)/1000);
                } else { v13 = 0;}
                document.getElementById("cng_emissions").value = v13;
            }

            function calc_14() {
                n = document.getElementById("electricity").value;
                if(n){
                    v14 = eval((n*850)/1000000);
                } else { v14 = 0;}
                document.getElementById("electricity_emissions").value = v14;
            }

            function calc_15() {
                n = document.getElementById("plastic_bag").value;
                if(n){
                    v15 = eval((n*1.58)/1000);
                } else { v15 = 0; }
                document.getElementById("plastic_bag_emissions").value = v15;
            }

            function calc_16() {
                n = document.getElementById("solid_waste").value;
                if(n){
                    v16 = eval((n*1.1023)/1000);
                } else { v16 = 0; }
                document.getElementById("solid_waste_emissions").value = v16;
            }

            function calc_17() {
                n = document.getElementById("liquid_waste").value;
                if(n){
                    v17 = eval((n*850)/1000000);
                } else { v17 = 0; }
                document.getElementById("liquid_waste_emissions").value = v17;
            }

            function total_emissions(){
                tranport_emissions = v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10 + v11 ;
                household_emissions = v1 + v12 + v13 + v14 ;
                waste_emissions = v15 + v16 + v17 ;
                emissions = tranport_emissions + household_emissions + waste_emissions ;

                var result = "Your Total Emissions : " + emissions + " Tonns" ;
                var resulth = "Household Emissions : " + household_emissions + " Tonns" ;
                var resultt = "Transport Emissions : " + tranport_emissions + " Tonns" ;
                var resultw = "Waste Emissions : " + waste_emissions + " Tonns" ;
                document.getElementById("final_result").innerHTML=result;
                document.getElementById("finalh").innerHTML=resulth;
                document.getElementById("finalt").innerHTML=resultt;
                document.getElementById("finalw").innerHTML=resultw;
                

                

  }
