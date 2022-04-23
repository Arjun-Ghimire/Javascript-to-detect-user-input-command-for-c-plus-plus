
        function findcin() {
            const variables=[];
            const array=[];
            const start =[];
            const end = [];
            var value=" ";
            var input = document.getElementById('text').value;
            document.getElementById('res').innerText = input;
            var inputlen = input.length;
            var m =0;
            var j;
            for (var i = 0; i < inputlen; i++) {

                if (input.substr(i, 3) == "cin") {
                    
                    start[m]=i+3;

                    for(j=i;j<inputlen;j++){
                        if(input.substr(j, 1) == ";"){

                            end[m]=j;
                            break;
                        }
                    }
                    m++;

                }
            }
           
            
            for(k=0;k<m;k++){
                variables[k] = input.substr(start[k],end[k]-start[k]);
                variables[k] = variables[k].replaceAll(">>"," ");
                value = value + " " + variables[k];
            }

            
            value = value.replace(/  +/g,' ');

            document.getElementById('fields').innerText = value;

            document.getElementById('dis').setAttribute("class","show");
            
            var valuearray = value.split(' ');

            arraylen = valuearray.length;
            var c=0;
            for(i=1;i<arraylen;i++){
                var myid = 'id="field'+i+'"';
                document.getElementById('entervalue').innerHTML += 'Enter value of ' + valuearray[i] + ' <input type="text"' +myid+ '> <br><br>';
                
                document.getElementById('field'+i).setAttribute("name","value"+i);
                
                c++;
                var myval = 'value="'+c+'"';
                document.getElementById('hidendata').innerHTML = '<input type="number" name="totalval" '+myval+' hidden >';
            }
        }