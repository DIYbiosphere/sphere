# Based on nquinlan"s plugin "Jekyll-gir-last-modified" on https://github.com/nquinlan/jekyll-git-last-modified
# added support for collections(documents)
# converts DateTime into Unix Timestamp
require 'kramdown'

module AddVariablesToFiles
  class Generator < Jekyll::Generator
    priority :highest
    def generate(site)
    	@site = site

      @site.pages.each do |page|
        pageURL = "#{page.url}"
        page.data["file_name"] = pageURL.split('/').last
      end


    	@site.documents.each do |doc|
    		if(doc.respond_to? :data)
          docURL = "#{doc.url}"
          doc.data["file_name"] = docURL.split('/').last

          docDir = "#{doc.relative_path}"

            if docDir.include? "_projects"
              doc.data["project"] = true
            end

            if docDir.include? "_labs"
              doc.data["lab"] = true
            end

            if docDir.include? "_groups"
              doc.data["group"] = true
            end

            if docDir.include? "_incubators"
              doc.data["incubator"] = true
            end

            if docDir.include? "_startups"
              doc.data["startup"] = true
            end

            if docDir.include? "_networks"
              doc.data["network"] = true
            end

            if docDir.include? "_events"
              doc.data["event"] = true
            end

            if docDir.include? "_others"
              doc.data["other"] = true
            end

            regex = /\[.+?\]/

            if doc.data["hosts"]
              hostsString = "#{doc.data["hosts"]}"
              hostsArray = hostsString.delete('"[]')
              hosts = hostsArray.split(',')
                doc.data["hostsArray"] = true
                doc.data["hostsSimple"] =  hosts.map {|item|
                  if item.index("(")
                    stop = item.index("(")
                    item[0, stop]
                  else
                    item
                  end }
            end # end if data

            if doc.data["partners"]
              partnersString = "#{doc.data["partners"]}"
              partnersArray = partnersString.delete('"[]')
              partners = partnersArray.split(',')
              if partners.is_a?(Array)
                doc.data["partnersArray"] = true
                doc.data["partnersSimple"] =  partners.map {|item|
                  if item.index("(")
                    stop = item.index("(")
                    item[0, stop]
                  else
                    item
                  end }
              else # if not array
                doc.data["partnersArray"] = false
                if partners.index("(")
                  stop = partners.index("(")
                  doc.data["partnersSimple"] = partners[0, stop]
                else # if index
                  doc.data["partnersSimple"] = partners
                end # if index
              end # end if Array
            end # end if data

            if doc.data["tags"]
              keywordsString = "#{doc.data["tags"]}"
              keywordsArray = keywordsString.delete('"[]')
              keywords = keywordsArray.split(',')
              doc.data["keywords"] = keywords.map { |x| ['keyword', x] }.to_h
            end





# => "This is an example (http://example.org/)."


    		end # respond to data


    	end # do collection


    end # generate site

  end # class Generator
end # module
