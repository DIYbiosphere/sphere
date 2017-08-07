=begin
require 'mongoid'
require 'geocoder/models/mongoid'
require Jekyll


module Geocoding

  class Location < ActiveRecord::Base
    include Mongoid::Document
    include Geocoder::Model::Mongoid


    geocoded_by :address
    after_validation :geocode, :if => :address_changed?

    def address
      [city, postcode, address].compact.join(', ')
    end

  end



  class Generator < Jekyll::Generator
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

    def set_geoloc_lat_collection(collection)
        collection.data["_geoloc.lat"] =
    end # set logo
    def set_geoloc_lng_collection(collection)
        collection.data["_geoloc.lng"] =
    end # set logo

  end # class Generator
end # module
=end
