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
		post_or_page.data["last_modified"] = last_modified
	end

	def set_last_modified_date_collection(collection)
		last_modified = `git log -1 --format="%ad" -- "#{collection.path}"`
		last_modified.strip!
		collection.data["last_modified"] = last_modified
	end

  end
end
