# Exposes select environment variables (set in Netlify's dashboard, not
# committed to git) to Liquid as site.env.*, so secrets/tokens don't have to
# live in _config.yml or a committed asset file.

Jekyll::Hooks.register :site, :after_reset do |site|
  site.config["env"] ||= {}
  site.config["env"]["mapbox_access_token"] = ENV["MAPBOX_ACCESS_TOKEN"]
end
