# Based on nquinlan's plugin "Jekyll-gir-last-modified" on https://github.com/nquinlan/jekyll-git-last-modified
# added support for collections(documents)
# converts DateTime into Unix Timestamp

module LastModified
  class Generator < Jekyll::Generator
    priority :highest
    def generate(site)
    	@site = site
    	@site.documents.each do |collection|
    		if(collection.respond_to? :data)
          last_modified = `git log -1 --format="%ct" -- "#{collection.path}"`
      		last_modified.strip!
      #    dateISO = Date.strptime(last_modified, '%a %b %d %H:%M:%S %y %z')
          collection.data["timestamp"] = last_modified
      #    require "time"
      #    dateToStamp = Date.(dateISO).to_time.to_i
      #		collection.data["timestamp"] = dateToStamp
    		end
    	end
    end
  end
end
