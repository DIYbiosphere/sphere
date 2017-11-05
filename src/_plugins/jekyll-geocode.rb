require 'rubygems'
require 'geokit'

module GeoCode
  class Generator < Jekyll::Generator
    priority :highest

    def generate(site)
    	@site = site

    	@site.documents.each do |collection|
    		if(collection.respond_to? :data)
          if collection.data['_geoloc.lat'].nil?
            # Address
            unless collection.data['address'].nil?
              address_exists = collection.data['address']
              geo_address = address_exists + ', '
              else
                geo_address = ""
            end
            # City
            unless collection.data['city'].nil?
              city_exists = collection.data['city']
              geo_city = city_exists + ', '
              else
                geo_city = ""
            end
            # Postcode
            unless collection.data['postcode'].nil?
              postcode_exists = collection.data['postcode'].to_s
              geo_postcode = postcode_exists + ''
              else
                geo_postcode = ""
            end
            # Country
            unless collection.data['country'].nil?
              country_exists = collection.data['country']
              geo_country = country_exists
              else
                geo_country = ""
            end

            geo_coord = geo_address + geo_city + geo_country
            geo_coord.strip!
            unless geo_coord.nil?

               Geokit::Geocoders::GoogleGeocoder.api_key = 'AIzaSyA0K_9qGrfRKKOn0u243HsmGNtKlvAyJ4I'
               geo_response = Geokit::Geocoders::GoogleGeocoder.geocode geo_coord
               geo_lat = geo_response.lat
               geo_lng = geo_response.lng
              collection.data["_geoloc"] = {
                :lat => geo_lat,
                :lng => geo_lng
                }
            end # unless
          end # if geoloc empty

        end # if collection
      end # do collection
    end # generate site
  end # class Generator
end # module
