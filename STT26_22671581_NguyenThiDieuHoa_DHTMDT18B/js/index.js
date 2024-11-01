$(document).ready(function(){
    var i = 2;
    $("#btnDK").click(function(){
        console.log("ok");
        $("#myModal").modal();
    })
    
    function kiemTraMa(){
        var mauKT = /^[0-9]{9}$/
        var value = $("#ma").val();
        
        if(value == ''){
            $("#tbma").html("Bat buoc nhap")
            $("#tbma").addClass("mauDo");
            $("#tbma").removeClass("mauXanh")
        }
        else if(!mauKT.test(value)){
            $("#tbma").html("Nhap sai")
            $("#tbma").addClass("mauDo");
            $("#tbma").removeClass("mauXanh")
        }
        else{
            $("#tbma").html("")
            $("#tbma").addClass("mauXanh");
            $("#tbma").removeClass("mauDo")
        }
    }

    $("#ma").blur(kiemTraMa)

    function kiemTraTen(){
        var mauKT = /^([A-Z][a-z]+)(\s[A-Z][a-z]*)$/
        var value = $("#ten").val();
        
        if(value == ''){
            $("#tbten").html("Bat buoc nhap")
            $("#tbten").addClass("mauDo");
            $("#tbten").removeClass("mauXanh")
        }
        else if(!mauKT.test(value)){
            $("#tbten").html("Nhap sai")
            $("#tbten").addClass("mauDo");
            $("#tbten").removeClass("mauXanh")
        }
        else{
            $("#tbten").html("")
            $("#tbten").addClass("mauXanh");
            $("#tbten").removeClass("mauDo")
        }
    }

    $("#ten").blur(kiemTraTen)

    function kiemDC(){
        var mauKT = /^.{3,15}@iuh.edu.vn$/
        var value = $("#email").val();
        
        if(value == ''){
            $("#tbemail").html("Bat buoc nhap")
            $("#tbemail").addClass("mauDo");
            $("#tbemail").removeClass("mauXanh")
        }
        else if(!mauKT.test(value)){
            $("#tbemail").html("Nhap sai")
            $("#tbemail").addClass("mauDo");
            $("#tbemail").removeClass("mauXanh")
        }
        else{
            $("#tbemail").html("")
            $("#tbemail").addClass("mauXanh");
            $("#tbemail").removeClass("mauDo")
        }
    }

    $("#email").blur(kiemDC)

    $("#slGia").change(function(){
        $("#slGia option:selected").each(function(){
            $("#txtDV").val($(this).val())
        })
    })

    $(".ckDoDung").click(function(){
        var tien = 0
        var n = $(".ckDoDung:checked").length
        if(n == 0){
            $(".ckDoDung:unchecked").each(function(){
                tien = 0;
                $("#txtDD").val(tien)
            })
        }
        if(n > 0){
            $(".ckDoDung:checked").each(function(){
                tien += parseFloat($(this).val())
                $("#txtDD").val(tien)
            })
        }
        var tong = parseFloat($("#txtDD").val()) + parseFloat($("#txtDV").val()) 
        $("#txtTong").val(tong)
    })

    $("#btnSave").click(function(){
        var ma = $("#ma").val();
        var ten = $("#ten").val();
        var email = $("#email").val();
        var tdv = $("#txtDV").val();
        var tdd = $("#txtDD").val();
        var tong = $("#txtTong").val();

        var html = `<tr>
                        <td>${i++}</td>
                        <td>${ma}</td>
                        <td>${ten}</td>
                        <td>${email}</td>
                        <td>${tdv}</td>
                        <td>${tdd}</td>
                        <td>${tong}</td>
                    </tr>`
        $("#tdDanhSach").append(html);
        $("#myModal").modal("hide");
    })
})