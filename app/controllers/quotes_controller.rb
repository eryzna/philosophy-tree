class QuotesController < ApplicationController

    def index
        quotes = Quote.all
        
        render json: QuoteSerializer.new(quotes).to_serialized_json
        
    end

    def create 
        quote = Quote.new
        quote.content = params[:content]
        quote.author = params[:author]
        quote.category_id = params[:category_id]
        quote.save
        render json: QuoteSerializer.new(quote).to_serialized_json 
    end

end
