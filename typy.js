var str = '';
function update_str(val) {
  str = val;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {str: str}, function(response) {
      if (!response) {
      chrome.tabs.executeScript(null, {file: "jquery-2.1.4.min.js"});
      chrome.tabs.executeScript(null, {file: "typer.js"});
      }
    });
  });
}
update_str('');
$(document).ready(function() {
  $('input').keyup(function() {
    update_str($(this).val());
  });
  $('button').click(function() {
    update_str('');
    $('input').val(str);
  });
});
