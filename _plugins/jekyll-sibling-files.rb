# Based on nquinlan's plugin "Jekyll-gir-last-modified" on https://github.com/nquinlan/jekyll-git-last-modified
# added support for collections(documents)
# converts DateTime into Unix Timestamp

module SiblingFiles
  class Generator < Jekyll::Generator
    priority :highest
    def generate(site)
    	@site = site

    	@site.documents.each do |collection|
    		if(collection.respond_to? :data)
    			set_logo_collection(collection)
          set_header_collection(collection)
          set_thumbnail_collection(collection)
          set_uberimage_collection(collection)
    		end
    	end # do collection
    end # generate site

  	def set_logo_collection(collection)
  		logofilePath = "#{collection.path}"
      logofileName = "#{collection.basename}"
      logoPathPNG = logofilePath.sub(logofileName, 'logo.png')
  		logoPathPNG.strip!
      if File.exist?(logoPathPNG)
        logoURLPNG = "#{collection.url}" + 'logo.png'
  		  collection.data["logo"] = logoURLPNG
      end # if

      logoPathJPG = logofilePath.sub(logofileName, 'logo.jpg')
      logoPathJPG.strip!
      if File.exist?(logoPathJPG)
        logoURLJPG = "#{collection.url}" + 'logo.jpg'
        collection.data["logo"] = logoURLJPG
      end # if
    end # set logo

    def set_header_collection(collection)
      headerfilePath = "#{collection.path}"
      headerfileName = "#{collection.basename}"
      headerPathPNG = headerfilePath.sub(headerfileName, 'header.png')
      headerPathPNG.strip!
      if File.exist?(headerPathPNG)
        headerURLPNG = "#{collection.url}" + 'header.png'
        collection.data["header"] = headerURLPNG
      end # if

      headerPathJPG = headerfilePath.sub(headerfileName, 'header.jpg')
      headerPathJPG.strip!
      if File.exist?(headerPathJPG)
        headerURLJPG = "#{collection.url}" + 'header.jpg'
        collection.data["header"] = headerURLJPG
      end # if
    end # set logo

    def set_thumbnail_collection(collection)
      thumbnailfilePath = "#{collection.path}"
      thumbnailfileName = "#{collection.basename}"
      thumbnailPathPNG = thumbnailfilePath.sub(thumbnailfileName, 'thumbnail.png')
      thumbnailPathPNG.strip!
      if File.exist?(thumbnailPathPNG)
        thumbnailURLPNG = "#{collection.url}" + 'thumbnail.png'
        collection.data["thumbnail"] = thumbnailURLPNG
      end # if

      thumbnailPathJPG = thumbnailfilePath.sub(thumbnailfileName, 'thumbnail.jpg')
      thumbnailPathJPG.strip!
      if File.exist?(thumbnailPathJPG)
        thumbnailURLJPG = "#{collection.url}" + 'thumbnail.jpg'
        collection.data["thumbnail"] = thumbnailURLJPG
      end # if
    end # set thumbnail

    def set_uberimage_collection(collection)
      unless collection.data['thumbnail'].nil?
        collection.data["uberimage"] = collection.data['thumbnail']
      else
        unless collection.data['logo'].nil?
          collection.data["uberimage"] = collection.data['logo']
        else
          unless collection.data['header'].nil?
            collection.data["uberimage"] = collection.data['header']
          else
            randomNumber = rand(1..8).to_s
            defaultImage = '/assets/img/uberimage' + randomNumber + '.png'
            defaultImage.strip!
            collection.data["uberimage"] = defaultImage
          end # if
        end # if
      end # if


    end # set thumbnail

  end # class Generator
end # module
