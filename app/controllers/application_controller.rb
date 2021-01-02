class ApplicationController < ActionController::Base
    after_action :set_csrf_cookie

    def set_csrf_cookie
      cookies["csrf-token"] = form_authenticity_token
    end

    protect_from_forgery with: :null_session

    def fallback_index_html
        render :file => 'public/index.html'
    end
end