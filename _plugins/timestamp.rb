# Based on nquinlan's plugin "Jekyll-gir-last-modified" on https://github.com/nquinlan/jekyll-git-last-modified
# added support for collections(documents)
# converts DateTime into Unix Timestamp
=begin
module LastModified
  class Generator < Jekyll::Generator
    priority :highest
    def generate(site)
    	@site = site
    	@site.pages.each do |page|
    		set_last_modified_date(page)
    	end
    	@site.posts.docs.each do |post|
    		set_last_modified_date(post)
    	end
    	@site.documents.each do |collection|
    		if(collection.respond_to? :data)
    			set_last_modified_date_collection(collection)
    		end
    	end
    end

	def source(post_or_page)
		@site.source + "/" + post_or_page.path
	end

	def set_last_modified_date(post_or_page)
		entity_source = source(post_or_page)
		last_modified = `git log -1 --format="%ad" -- "#{entity_source}"`
		last_modified.strip!
    dateISO = DateTime.strptime(last_modified, %a %b %d %H:%M:%S %y %z)
    require "time"
    dateToStamp = Date.(dateISO).to_time.to_i
		post_or_page.data["timestamp"] = dateToStamp
	end

	def set_last_modified_date_collection(collection)
		last_modified = `git log -1 --format="%ad" -- "#{collection.path}"`
		last_modified.strip!
    dateISO = Date.strptime(last_modified, %a %b %d %H:%M:%S %y %z)
    require "time"
    dateToStamp = Date.(dateISO).to_time.to_i
		collection.data["timestamp"] = dateToStamp
	end

  end
end
=end
