=begin
require 'rubygems'
require 'open-uri'
require 'json'

module GeoCode
  class Generator < Jekyll::Generator
    priority :highest

    def generate(site)
    	@site = site

    	@site.documents.each do |collection|
    		if(collection.respond_to? :data)

          # Address
          unless collection.data['address'].nil?
            address_exists = collection.data['address']
            geo_address = address_exists + ',+'
            else
              geo_address = ""
          end
          # City
          unless collection.data['city'].nil?
            city_exists = collection.data['city']
            geo_city = city_exists + ',+'
            else
              geo_city = ""
          end
          # Postcode
          unless collection.data['postcode'].nil?
            postcode_exists = collection.data['postcode'].to_s
            geo_postcode = postcode_exists + '+'
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

          geo_coord = geo_address + geo_city + geo_postcode + geo_country
          geo_coord.strip!
          unless geo_coord.nil?
            geo_service = 'https://maps.googleapis.com/maps/api/geocode/json?address='
            geo_API = '&key=AIzaSyA0K_9qGrfRKKOn0u243HsmGNtKlvAyJ4I'
            geo_request = geo_service + geo_coord + geo_API
            geo_response = open(geo_request).read
            geo_json = JSON.parse(geo_response, :symbolize_names => true)
             # we convert the returned JSON data to native Ruby
             # data structure - a hash
             result = JSON.parse(resp)


             # if the hash has 'Error' as a key, we raise an error
             if result.has_key? 'Error'
                raise "web service error"
             end
             return result
          # geo_string = open(geo_request).read
          # google maps api : result.geometry.location.lat&lng
          #  geo_array = JSON.parse(geo_string)
            collection.data["geocode"] = result['']
          end # unless

        end # if collection
      end # do collection
    end # generate site
  end # class Generator
end # module
=end
