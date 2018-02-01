=begin
module GetLocation
  class Generator < Jekyll::Generator

    def generate(site)
    	@site = site

    	@site.documents.each do |doc|
    		if(doc.respond_to? :data)
          docName = "#{doc.file_name}"

          @site.data['geocodes'].each do |geocode|
            fileName = "#{geocode.doc_name}"
            if docName = fileName
              geocode.data['present'] = true
            end
          end
        end # if collection
      end # do collection
    end # generate site
  end # class Generator
end # module
=end
