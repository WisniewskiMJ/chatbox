import consumer from "./consumer";
import { scroll_bottom } from "../packs/application";

consumer.subscriptions.create("ChatboxChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    $('#message-box').append(data.rendered_msg);
    scroll_bottom();
  }
});
