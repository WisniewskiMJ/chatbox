class MessagesController < ApplicationController
  def index
    @messages = Message.all
    puts " Lala #{current_user}"
  end
  
  def create
    @message = current_user.messages.new(message_params)
    @message.save
    redirect_to messages_url
  end

  private
    def message_params
      params.require(:message).permit(:content)
    end
end
