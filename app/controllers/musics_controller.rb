class MusicsController < ApplicationController
  before_action :set_music, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  # GET /musics
  # GET /musics.json
  def index
    @musics = Music.all
  end

  # GET /musics/1
  # GET /musics/1.json
  def show
    @user = current_user

    if @user.user_state
      return redirect_to action: 'new'
    end

    # params[:id] = 13
    # @music = Music.find(params[:id])
    respond_to do |format|
      format.html #show.html.erb
      format.json { render json: @music }
    end
  end

  # GET /musics/new
  def new
    @user = current_user

    if !(@user.user_state)
      params[:id] = 13
      @music_for_user = Music.find(params[:id])
      return redirect_to music_path(@music_for_user) 
    end

    # @user.user_state = true
    # @user.save

    @music = current_user.musics.build    
  end

  # GET /musics/1/edit
  def edit
  end

  # POST /musics
  # POST /musics.json
  def create
    @music = current_user.musics.build(music_params)
    @music.save

    params[:id] = 13
    @music_for_user = Music.find(params[:id])

    redirect_to music_path(@music_for_user)

    # respond_to do |format|
    #   redirect_to 'index'
    #   if @music.save
    #     # format.html { redirect_to 'show', notice: 'Music was successfully created.' }
    #     # format.json { render action: 'show', status: :created, location: @music }
    #   else
    #     format.html { render action: 'new' }
    #     # format.json { render json: @music.errors, status: :unprocessable_entity }
    #   end
    # end

  end

  # PATCH/PUT /musics/1
  # PATCH/PUT /musics/1.json
  def update
    respond_to do |format|
      if @music.update(music_params)
        format.html { redirect_to @music, notice: 'Music was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @music.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /musics/1
  # DELETE /musics/1.json
  def destroy
    @music.destroy
    respond_to do |format|
      format.html { redirect_to musics_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_music
      @music = Music.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def music_params
      params.require(:music).permit(:title, :description, :musician, :imageUrl, :videoUrl, :color)
    end
end
