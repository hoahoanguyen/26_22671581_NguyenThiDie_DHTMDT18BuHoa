$(document).ready(function() {
    function checkMaThanhVien() {
        let maThanhVien = $('#mathanhvien').val().trim();
        let regex = /^K16-\d{9}$/;
    
        if (maThanhVien == "") {
            $('#errmathanhvien').text("Mã thành viên không được bỏ trống.");
            return false;
        } else if (!regex.test(maThanhVien)) {
            $('#errmathanhvien').text("Mã thành viên phải đúng định dạng K16-xxxxxxxxx (9 chữ số).");
            return false;
        } else {
            $('#errmathanhvien').text("");
            return true;
        }
    }

    $('#mathanhvien').blur(function() {
        checkMaThanhVien()
    })

    function checkName() {
        let hoten = $('#hoten').val()
        let hotenValid = /^([A-Z][a-z]*)*([A-Z][a-z]*)$/

        if (hoten.trim() == '') {
            $('#errhoten').text('Họ tên không được trống')
            return false
        } else
        if (!hotenValid.test(hoten.trim())) {
            $('#errhoten').text('ký tự đầu của mỗi từ là chữ hoa')
            return false
        } else {
            $('#errhoten').text('')
            return true
        }
    }

    $('#hoten').blur(function() {
        checkName()
    })


    function checkLop() {
        var lop = $('#lop').val().trim();
    
        var regex = /^[A-Z0-9]{11}$/;
    
        if (lop === "") {
            $('#errlop').text("Lớp không được bỏ trống.");
            return false;
        } else if (!regex.test(lop)) {
            $('#errlop').text("Lớp phải có đúng 11 ký tự, gồm chữ in hoa và chữ số (VD: DHKTPM16BTT).");
            return false;
        } else {
            $('#errlop').text("");
            return true;
        }
    }

    $('#lop').blur(function() {
        checkLop()
    })


    function checkThoiGian() {
        var ngayThamGia = $('#ngaythamgia').val();
    
        if (ngayThamGia === "") {
            $('#errngaythamgia').text("Ngày tham gia không được bỏ trống.");
            return false;
        }
    
        var dateThamGia = new Date(ngayThamGia);
        var today = new Date();
    
        var minDate = new Date();
        minDate.setDate(today.getDate() + 30);
    
        if (dateThamGia < minDate) {
            $('#errngaythamgia').text("Ngày tham gia phải cách ngày hiện tại ít nhất 30 ngày.");
            return false;
        } else {
            $('#errngaythamgia').text("");
            return true;
        }
    }
    
    $(document).ready(function() {
        $('#ngaythamgia').on('blur', checkThoiGian);
    });


    function checkSDT() {
        var sdt = $('#sdt').val();
    
        if (sdt === "") {
            $('#errsdt').text("Số điện thoại không được bỏ trống.");
            return false;
        }
    
        var regexSDT = /^0\d{3}-\d{3}-\d{3}$/;
        
        if (!regexSDT.test(sdt)) {
            $('#errsdt').text("Số điện thoại phải theo định dạng 0xxx-xxx-xxx.");
            return false;
        } else {
            $('#errsdt').text("");
            return true;
        }
    }
    
    $(document).ready(function() {
        $('#sdt').on('blur', checkSDT);
    });

    function checkAddress() {
        let address = $('#diachi').val();

        if (address == '') {
            $('#errDiaChi').text('Địa chỉ không được rỗng')
            return false
        } else {
            $('#errDiaChi').text('')
            return true
        }
    }

    $('#diachi').blur(function() {
        checkAddress()
    })

    function checkSoLuong() {
        let soluong = $('#soluong').val();
        let dongia = $('#dongia').val()
        let thanhtien = $('#thanhtien')
        if (soluong == '') {
            $('#errSoLuong').text('Số lượng không được rỗng')
            return false
        } else if (!Number(soluong)) {
            $('#errSoLuong').text('Số lượng phải là số')
            return false
        } else if (!(Number(soluong) >= 1 && Number(soluong) <= 50)) {
            $('#errSoLuong').text('Số lượng phải là số và có giá trị trong khoảng 1-50')
            return false
        } else {
            $('#errSoLuong').text('')
            thanhtien.val(soluong * dongia)
            return true
        }
    }

    $('#soluong').blur(function() {
        checkSoLuong()
    })

    $('#luachon').change(function() {
        $('#dongia').val($('#luachon').val())
    })

    $('input[name="thanhtoan"]').change(function() {
        $('#errHinHThuc').text('')
        console.log(1);
    })

    var i = 1
    $('#btnDangKy').click(function(e) {
        if (checkName() && checkMaThanhVien() && checkSDT() && checkAddress()) {
            let hinhThuc = $('input[name="hinhThuc"]:checked').val()
            let code = $('#txtMaThe').val()
            let hoten = $('#hoten').val()
            let sdt = $('#sdt').val()
            let address = $('#diachi').val();
            let tensanpham = $('#luachon').val();
            let dongia = $('#dongia').val()
            let soluong = $('#soluong').val();
            let thanhtien = $('#thanhtien').val()
            let thanhtoan = $('input[name="thanhtoan"]:checked')


            if (!thanhtoan.val()) {
                $('#errHinHThuc').text('Hình thức thanh toán bắt buộc phải chọn')

            } else {

                let newRow = `
                    <tr>
                        <th>${i++}</th>
                        <th>${hoten}</th>
                        <th>${sdt}</th>
                        <th>${address}</th>
                        <th>${tensanpham}</th>
                        <th>${dongia}</th>
                        <th>${soluong}</th>
                        <th>${thanhtien}</th>
                        <th>${thanhtoan.val()}</th>
                    </tr>
                `
                $('tbody').append(newRow)
            }
        } else {
            alert('Thông tin không hợp lệ!')
        }
    })
    $('#cancel').click(function(e) {
        $('#modalID').modal('hide')
    })

})