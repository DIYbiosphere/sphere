module logoPath
  class Generator < Jekyll::Generator
    priority :highest
    def generate(site)
		@site = site
		@site.pages.each do |page|
			set_logoPath(page)
		end
		@site.posts.docs.each do |post|
			set_logoPath(post)
		end
		@site.documents.each do |collection|
			if(collection.respond_to? :data)
				set_logoPath_collection(collection)
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
		post_or_page.data["logoPath"] = last_modified
	end

	def set_last_modified_date_collection(collection)
		last_modified = `git log -1 --format="%ad" -- "#{collection.path}"`
		last_modified.strip!
		collection.data["logoPath"] = last_modified
	end

  end
end
