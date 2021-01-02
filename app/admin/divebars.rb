ActiveAdmin.register Divebar do
  permit_params :title, :description, :location, :submitted_by, :published
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :title, :description, :location, :submitted_by
  #
  # or
  #
  # permit_params do
  #   permitted = [:title, :description, :location, :submitted_by]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
