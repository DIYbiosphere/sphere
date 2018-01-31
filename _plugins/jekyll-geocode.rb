=begin
require 'rubygems'
require 'geokit'
require 'filewatcher'

module GeoCode
  class Generator < Jekyll::Generator
    priority :highest

    def generate(site)
    	@site = site

    	@site.documents.each do |doc|
    		if(doc.respond_to? :data)
          if doc.data['_geoloc.lat'].nil?
            # Address
            unless doc.data['address'].nil?
              address_exists = doc.data['address']
              geo_address = address_exists + ', '
              else
                geo_address = ""
            end
            # City
            unless doc.data['city'].nil?
              city_exists = doc.data['city']
              geo_city = city_exists + ', '
              else
                geo_city = ""
            end
            # Postcode
            unless doc.data['postcode'].nil?
              postcode_exists = doc.data['postcode'].to_s
              geo_postcode = postcode_exists + ''
              else
                geo_postcode = ""
            end
            # Country
            unless doc.data['country'].nil?
              country_exists = doc.data['country']
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
              doc.data["_geoloc"] = {
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
=end
