class DivebarsController < ApplicationController
  before_action :set_divebar, only: [:show, :update, :destroy]

  # GET /divebars
  def index
    @divebars = Divebar.select("id, title, published").all
    render json: @divebars.to_json
  end

  # GET /divebars/1
  def show
    @divebar = Divebar.find(params[:id])
    render json: @divebar.to_json(:include => { :ratings => { :only => [:id, :stars] }})
  end

  # POST /divebars
  def create
    @divebar = Divebar.new(divebar_params)

    if @divebar.save
      render json: @divebar, status: :created, location: @divebar
    else
      render json: @divebar.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /divebars/1
  def update
    if @divebar.update(divebar_params)
      render json: @divebar
    else
      render json: @divebar.errors, status: :unprocessable_entity
    end
  end

  # DELETE /divebars/1
  def destroy
    @divebar.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_divebar
      @divebar = Divebar.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def divebar_params
      params.require(:divebar).permit(:title, :description, :location, :submitted_by, :published)
    end
end
