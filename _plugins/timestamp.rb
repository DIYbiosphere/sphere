# Based on nquinlan's plugin "Jekyll-gir-last-modified" on https://github.com/nquinlan/jekyll-git-last-modified
# Returns date of last git log in ISO format

module LastModified
  class Generator < Jekyll::Generator
    priority :highest
    def generate(site)
    	@site = site
    	@site.documents.each do |collection|
    		if(collection.respond_to? :data)
          last_modified = `git log -1 --format="%ct" -- "#{collection.path}"`
      		last_modified.strip!
          #collection.data["timestamp"] = last_modified
          # dirty hack to make jekyll think everything was just modified 
          collection.data["timestamp"] = 1571657847
    		end
    	end
    end
  end
end
