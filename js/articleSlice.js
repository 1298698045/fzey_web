let desc = $(".r_cont_wrap .article .column").html();
console.log(desc);
var number = 160;
number = parseInt(f1(number, desc, number / 2));
desc = f2(desc, number);
$(".r_cont_wrap .article").html('<div class="column">' + desc + "...</div>");
function f1(number, desc, total) {
  var prestr = f2(desc, number / 2); // 前100个字符串
  var endstr = f3(desc, number / 2); // 剩余字符串
  var len = getByteLen(prestr); // 前100个字符串的字符总数
  var num = 0;
  //前100个的字符数
  if (len != 0) {
    if (number > len) {
      num = number - len;
      total += num / 2;
      return f1(num, endstr, total);
    } else {
      return total;
    }
  } else {
    return total;
  }
}
function f2(desc, length) {
  return desc.slice(0, length);
}
function f3(desc, length) {
  return desc.slice(length, desc.length);
}
function getByteLen(val) {
  var len = 0;
  for (var i = 0; i < val.length; i++) {
    var a = val.charAt(i);
    if (a.match(/[^\x00-\xff]/gi) != null) {
      len += 2;
    } else {
      len += 1;
    }
  }
  return len;
}
