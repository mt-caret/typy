var str = '';
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  str = request.str;
});
$('input').click(function() {
  if (str === $(this).val()) {
    $(this).val('');
  } else {
    $(this).val(str);
  }
});
