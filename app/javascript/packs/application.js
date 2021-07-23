// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
export { scroll_bottom };

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap"
import "../stylesheets/application"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


let scroll_bottom = function() {
  if ($('#message-box').children.length > 0) {
    $('#message-box').scrollTop($('#message-box')[0].scrollHeight);
  }
};

let send_on_enter = function() {
  $('#message-content').on('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      $('#send').trigger("click");
      e.target.value = "";
    };
  });
};

let clear_on_click = function() {
  $('#send').on('mouseup', function(e) {
    e.preventDefault();
    $('#send').trigger("click");
    $('#message-content').val("");
  });
};

$(document).on('turbolinks:load', function() {
  scroll_bottom();
  send_on_enter();
  clear_on_click();
})