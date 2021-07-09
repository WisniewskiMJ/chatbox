class MessagesController < ApplicationController
  def index
    @messages = Message.all
  end
  
  def create
    @message = current_user.messages.new(message_params)
    if @message.save
      ActionCable.server.broadcast("chatbox_channel", { rendered_msg: render_message(@message) })
    end
  end

  private
    def message_params
      params.require(:message).permit(:content)
    end

    def render_message(message)
      render(partial:'message', locals: { message: message})
    end
end
