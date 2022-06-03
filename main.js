
// BAI TAP 1

/**MO HINH 3 KHOI
 * - DAU VAO
 *  + luong1Ngay = 100
 *
 * - Xu Ly
 *  + Tao bien soNgayLam gan gia tri la 30, tao bien tienLuong gan gia tri la 0
 *
 *  + tienLuong = luong1Ngay * soNgayLam
 *
 * - Dau Ra
 * +  tienLuong = ?
 */
var luong1Ngay = 100;
var soNgayLam = 30;
var tienLuong = 0;

tienLuong = luong1Ngay * soNgayLam;

console.log("tienLuong: " + tienLuong);

// BAI TAP 2

/**MO HINH 3 KHOI
 * - DAU VAO
 *  + number1 ?
 *  + number2 ?
 *  + number3 ?
 *  + number4 ?
 *  + number5 ?
 *
 * - Xu Ly
 * + gan gia tri cho number1 den number 5 lan luot la 1, 2, 3, 4, 5
 * + gan gia tri cho averageValue = 0
 *
 * + averageValue = (number1 + number2 + number3 + number4 + number5) / 5
 *
 * - Dau Ra
 * + averageValue = ?
 */
var number1 = 1;
var number2 = 2;
var number3 = 3;
var number4 = 4;
var number5 = 5;
var averageValue = 0;

averageValue = (number1 + number2 + number3 + number4 + number5) / 5;

console.log("giaTriTrungBinh: " + averageValue);

// BAI TAP 3

/**MO HINH 3 KHOI
 *  - Dau vao
 * + Usd = 23500
 * + so USD quy doi ?
 * + tienQuyDoiVnd ?
 * 
 * - Xu ly
 * + gan cho so Usd quy doi = 2, 
 * + gan cho tienQuyDoiVnd = 0;
 * 
 * + tienQuyDoiVnd = 1Usd * soUsd;
 * 
 * - Dau ra
 * tienQuyDoiVnd = ?
 */

var Usd = 23500;
var soUsdQuyDoi = 2;
var tienQuyDoiVnd = 0;

tienQuyDoiVnd = Usd * soUsdQuyDoi;

console.log("tienQuyDoiVnd: " + tienQuyDoiVnd);

// BAI TAP 4

/**MO HINH 3 KHOI
 * - Dau vao
 * + width ?
 * + length ?
 * 
 * - Xu Ly
 * + Khai bao bien width , length, area, perimeter, gan gia tri width = 2, length = 2, 
 * + area, perimeter = 0
 * 
 * + area = width * length
 * + perimeter = (length + width) * 2
 * 
 * - Dau ra
 * + area = ?
 * + perimeter = ?
 * 
 */

var width = 0;
var length = 0;
var area = 0;
var perimeter = 0;

width = 2;
length = 2;

area = width * length;
perimeter = (width + length) * 2;

console.log("dienTich: " + area);
console.log("chuVi: " + perimeter);

// BAI TAP 5
/**MO HINH 3 KHOI
 * - Dau vao
 * + So co 2 chu so ?
 * 
 * - Xu Ly
 * + gan gia tri cho soCo2ChuSo = 22
 * + Tách lấy hang chục => soCo2ChuSo / 10  => lam tron so Math.floor ()
 * + Tách lấy hàng đơn vị => lam tron so Math.floor (soCo2ChuSo % 10)
 * tong2KySo = hangChuc + hangDonVi
 * 
 * - Dau ra
 * + tong2KySo = ?
 */

var soCo2ChuSo = 22;
var tong2KySo = 0;

var hangChuc = Math.floor(soCo2ChuSo / 10);
var hangDonVi = Math.floor(soCo2ChuSo % 10);

tong2KySo = hangChuc + hangDonVi;

console.log("tong2KySo: " + tong2KySo);
