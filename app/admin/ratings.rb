ActiveAdmin.register Rating do
  permit_params :divebar_id, :beers, :stars
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :divebar_id, :beers, :stars
  #
  # or
  #
  # permit_params do
  #   permitted = [:divebar_id, :beers, :stars]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
