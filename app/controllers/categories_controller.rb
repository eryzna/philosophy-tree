class CategoriesController < ApplicationController

    def index 
        categories = Category.all
        render json: CategorySerializer.new(categories).to_serialized_json 
    end

    def show
        category = Category.find_by(id: params[:id])
        render json: CategorySerializer.new(category).to_serialized_json 
    end

    def create
        category = Category.new
        category.name = params[:name]
        category.description = params[:description]
        category.save
        render json: CategorySerializer.new(category).to_serialized_json
    end

    def edit
        binding.pry
    end

    def update
        category = Category.find_by(id: params[:id])
        category.description = params[:description]
        category.save
    end

end
