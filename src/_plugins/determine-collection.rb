# Based on nquinlan's plugin "Jekyll-gir-last-modified" on https://github.com/nquinlan/jekyll-git-last-modified
# added support for collections(documents)
# converts DateTime into Unix Timestamp

module DetermineCollection
  class Generator < Jekyll::Generator
    def generate(site)
    	@site = site

    	@site.documents.each do |doc|
    		if(doc.respond_to? :data)
          docDir = "#{doc.relative_path}"
          # For Logos
            if docDir.include? "projects"
              doc.data["project"] = true
            end

            if docDir.include? "labs"
              doc.data["lab"] = true
            end

            if docDir.include? "groups"
              doc.data["group"] = true
            end

            if docDir.include? "incubators"
              doc.data["incubator"] = true
            end

            if docDir.include? "startups"
              doc.data["startup"] = true
            end

            if docDir.include? "events"
              doc.data["event"] = true
            end

            if docDir.include? "others"
              doc.data["other"] = true
            end

    		end # respond to data
    	end # do collection
    end # generate site

  end # class Generator
end # module
