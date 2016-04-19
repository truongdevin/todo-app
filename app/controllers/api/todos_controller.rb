class Api::TodosController < ApplicationController
  def index
    @todos = Todo.all
    render json: @todos
  end

  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render json: @todo
    else
      render json: {errors: @todo.errors.full_messages}, status: 302
    end
  end

  def show
    @todo = Todo.find(params[:id])
    render json: @todo
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: {errors: @todo.errors.full_messages}, status: 302
    end

  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    render json: @todo
    # redirect_to api_todos_url
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
