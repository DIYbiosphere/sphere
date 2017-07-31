=begin
module Jekyll_Geocode
  class Generator < Jekyll::Generator
    safe true
    priority :highest

    def generate(site)
      @site = site

      @site.documents.each do |collection|
        if(collection.respond_to? :data)
          set_geoloc_lat(collection)
          set_geoloc_lng(collection)
        end
      end # do collection
    end # generate site

      #regEx for removing empty line
      regEx = /^[\s]*$\n/

      #Get Geo service
      geo_service = 'https://nominatim.openstreetmap.org/?format=json&q='



        filename       = site.config['jekyll_geocode']['file-name']
        filepath       = site.config['jekyll_geocode']['file-path']
        outputfile     = site.config['jekyll_geocode']['outputfile']
        geo_name       = "#{collection.title}"
        geo_address    = "#{collection.address}"
        geo_postcode   = "#{collection.postcode}"
        geo_city       = "#{collection.city}"
        geo_region     = site.config['jekyll_geocode']['region']
        geo_country    = "#{collection.country}"


      # Loop YML file
      members.each do |d|
        geo_name_field = d[geo_name].downcase.tr(" ", "-")
        if d[geo_postcode]
          geo_postcode_field = ", #{d[geo_postcode]}"
        end
        if d[geo_city]
          geo_city_field = ", #{d[geo_city]}"
        end
        if d[geo_region]
          geo_region_field = ", #{d[geo_region]}"
        end
        if d[geo_country]
          geo_country_field = ", #{d[geo_country]}"
        end
        geo_coord = "#{d[geo_address]}#{geo_postcode_field}#{geo_city_field}#{geo_region_field}#{geo_country_field}"
        geo_request = "#{geo_service}#{geo_coord}&limit=1"
        p geo_request


        # Loop for an YML output

          # No cache at the first loop
          geo_cache = true

          # Read the YML file

          # If YML file test if and address are the same as in the source file
          if file_yaml
            file_yaml.each do |coordinates|
              if coordinates['address'] == geo_coord
                geo_cache = false
              end
            end
          else
            geo_cache = true
          end

          # Write data
          if geo_cache == true
            p "geocode is requesting #{geo_coord}"
            request_service(geo_request).each do |coordinates|
              data = [ "title" => "#{d[geo_name]}", "url" => "##{d[geo_name]}", "data_set" => "01", "location" => { "latitude" => "#{coordinates["lat"]}","longitude" => "#{coordinates["lon"]}" }, "address" => "#{geo_coord}" ]
              data_yml = data.to_yaml
              # Add data in the YML file
            end
          end
        end

        # JSON output :: Test if a JSON file exists for performance issues
        if !outputfile && !File.file?("#{data_source}/#{d[geo_name]}.json")
          site.data[geo_name_field] = request_service(geo_request)
          #Create a JSON  files if cache is enabled
          if site.config['jekyll_geocode']['cache']
            path_json = "#{data_source}/#{geo_name_field}.json"
            open(path_json, 'wb') do |file|
              file << JSON.generate(site.data[geo_name_field])
            end
          end
        end
      end
    end
  end
end
=end
