name_array=[];
function submit(){
    var display_array=[];
    for ( var j=1;j<=4;j++){
        var student=document.getElementById("name_of_the_student_"+j).value;
        console.log(student);
        name_array.push(student);
    }
    console.log(name_array);
    var length= name_array.length;
    console.log(length);
    for (var k=0; k<length; k++){
        display_array.push("<h4> name-"+name_array[k]+"</h4>");
        console.log (display_array);

    }
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    var remove=display_array.join(" ");
    console.log(remove);
    document.getElementById("display_name_without_commas").innerHTML=remove;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
    name_array.sort();
    var display1_array=[];
    var length1= name_array.length;
    console.log(length1);
    for (var k=0; k<length1; k++){
        display1_array.push("<h4> name-"+name_array[k]+"</h4>");
        console.log (display1_array);

    }
    
    var remove1=display1_array.join(" ");
    console.log(remove1);
    document.getElementById("display_name_without_commas").innerHTML=remove1;
}