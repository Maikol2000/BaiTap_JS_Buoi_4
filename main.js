

// Bài 1

/**
 * b1: nhập 3 số nguyên
 * b2: phân tích. Dùng if else và else if. khai báo soNguyen,
 *  - tách số hàng trăm ra : hangTram = soNguyen / 100
 *  - tách số hàng chục ra : hangChuc = soNguyen % 100 / 10
 *  - tách số hàng đơn vị ra : hangDonVi = soNguyen % 10
 * b3: xuất ra giá trị lớn nhât trong ba số
 */


var nutSoNguyen = document.getElementById('nutSoNguyen')

nutSoNguyen.onclick = function() {
    var soNguyen = document.getElementById('soNguyen').value;

   var hangTram = parseInt(soNguyen / 100);
   var hangChuc = parseInt(soNguyen % 100 / 10)
   var hangDonVi = Math.abs(soNguyen % 10);

    if(hangTram > hangChuc && hangTram > hangDonVi) {
        alert('Số lớn nhất trong ba số là: ' + hangTram)
    } else if(hangChuc >= hangTram && hangChuc >= hangDonVi) {
        alert('Số lớn nhất trong ba số là: ' + hangChuc)
    } else{
        alert('Số lớn nhất trong ba số là: ' + hangDonVi)
        
    }
}


// Bài 2


/**
 * b1: cho người dùng là những người trong gia đình ở đây 4 người ba mẹ chị tôi
 * b2: sử dụng prompt để xuất ra thông báo cho người dùng nhập vào 
 *  - sử dụng if else if 
 * b3: alert ra màng hình
 */

    var nhapTen = document.getElementById('nhapTen').value;
    
    nhapTen = prompt('Vui lòng nhập tên:')
    if(nhapTen == 'ba') {
        alert('Chào Ba')
    } else if(nhapTen == 'me') {
        alert('Chào Mẹ')
    } else if(nhapTen == 'chi') {
        alert('Chào Chị')
    } else if(nhapTen == 'cuong') {
        alert('chào Cường')
    } else if(nhapTen === '') {
        alert('Vui lòng điền tên' )
    } else{
        alert('Người dùng không hợp lệ')
    }



//bài 3
/**
 * b1: người dùng nhập vào ba số nguyên bắt kì
 * b2: tách ba số input ra
 * - tạo hai biến để nhận giá trị
 * - rồi kiểm tra ba số đó, nếu chãn cộng thêm một và ngược lại
 * b3: xuất 2 biến đó ra
 */

var nutLeChan = document.getElementById('nutLeChan').onclick = function() {
    var soLeChan = document.getElementById('soLeChan').value;

    var a = parseInt(soLeChan / 100);
    var b = parseInt(soLeChan % 100 / 10)
    var c = Math.abs(soLeChan % 10);
    
    var soLe = '';
    var soChan = '';

    if(soLe >= 0, soChan >= 0) {
         
        if (a%2 === 0) {
            soChan++
        } else {
            soLe++
        }
        if (b%2 === 0) {
            soChan++
        } else {
            soLe++
        }
        if (c%2 === 0) {
            soChan++
        } else {
            soLe++
        }
    }
    
    else{
        alert('Không thỏa')
    } 
    alert('có '+ soChan + ' số chẵn')
    alert('có ' + soLe + ' số lẽ')
}


//Bài 4

/**
 * b1: khởi tạo ba cạnh để nhập vào giá trị ba cạnh đó
 * b2: cho điêu kiện:
 * - nếu canh a = cạnh b và khác cạnh c --> tam giác cân
 * - nếu cạnh a = b = c thì là tam giác cân
 * - nếu ba cạnh theo công thức pytago c^2 = a^2 + b^2 thì là tam giác vuông
 * b3: xuất ra màng hình kết quả
 */


var xuatRaTamGiac = document.getElementById('xuatRaTamGiac').onclick = function() {
    var canhA = document.getElementById('canhA').value
    var canhB = document.getElementById('canhB').value
    var canhC = document.getElementById('canhC').value

    var tamGiacGi =document.getElementById('tamGiacGi')

    if (canhA >0 && canhB > 0 && canhC > 0) {
        if (canhA == canhB && canhA != canhC) {
            tamGiacGi.innerHTML = 'tam giác cân'
        } else if(canhA==canhB &&canhB==canhC && canhC==canhA){
            tamGiacGi.innerHTML = 'tam giác đều'
        } else if(Math.pow(canhC,2)== Math.pow(canhA,2)+Math.pow(canhB,2)){
        tamGiacGi.innerHTML = 'tam giác vuông'
    } 

}
     else{
        tamGiacGi.innerHTML = 'Tứ giác'
    }
}