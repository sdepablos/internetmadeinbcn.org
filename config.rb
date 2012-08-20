require 'haml'
set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'img'

# Localization (i18n)
activate :i18n, :path => "/:locale/", :mount_at_root => :es

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :cache_buster
  activate :gzip
end