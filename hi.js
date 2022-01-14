let inputYear = prompt('Nhập năm: ');
let inputMonth = prompt('Nhập tháng: ');
let inputDate = prompt('Nhập ngày: ');
let Year = parseInt(inputYear);
let Month = parseInt(inputMonth);
let Date = parseInt(inputDate);
if(Date == 1 || Date == 2 || Date == 3 || Date == 4 || Date == 5 || Date == 6 || Date == 7 || Date == 8 || Date == 9) {
  Date = "0" + Date;
}
if(Month == 1 || Month == 2 || Month == 3 || Month == 4 || Month == 5 || Month == 6 || Month == 7 || Month == 8 || Month == 9) {
  Month = "0" + Month;
}
document.write('Hôm nay là: ' + Date + "-" + Month + "-" + Year);
