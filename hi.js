let inputYear = prompt('Nhập năm: ');
let inputMonth = prompt('Nhập tháng: ');
let inputDate = prompt('Nhập ngày: ');
let year = parseInt(inputYear);
let month = parseInt(inputMonth);
let date = parseInt(inputDate);
if(date == 1 || date == 2 || date == 3 || date == 4 || date == 5 || date == 6 || date == 7 || date == 8 || date == 9) {
  date = "0" + date;
}
if(month == 1 || month == 2 || month == 3 || month == 4 || month == 5 || month == 6 || month == 7 || month == 8 || month == 9) {
  month = "0" + month;
}
document.write('Hôm nay là: ' + date + "-" + month + "-" + year);
