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
              doc.data["hostsExist"] = true
              hostsString = "#{doc.data["hosts"]}"
              hostsClean = hostsString.delete('"[]')
              hostsSplit = hostsClean.split(',')
              doc.data["hostsSplit"] = hostsSplit
              hostsArray =  hostsSplit.map {|item|
                if item.index("(")
                  stop = item.index("(")
                  item[0, stop]
                else
                  item
                end }
                doc.data["hostsArray"] = hostsArray
              if hostsArray.length < 2
                doc.data["hostsSentence"] = hostsArray
              elsif hostsArray.length < 3
                doc.data["hostsSentence"] = hostsArray.join(' & ')
              else
                commaItems = hostsArray[0..-2].join(', ')
                lastItem = hostsArray.last
                doc.data["hostsSentence"] = commaItems + ', & ' + lastItem
              end
            end # end if data

            if doc.data["partners"]
              doc.data["partnersExist"] = true
              partnersString = "#{doc.data["partners"]}"
              partnersClean = partnersString.delete('"[]')
              partnersSplit = partnersClean.split(',')
              doc.data["partnersSplit"] = partnersSplit
              partnersArray =  partnersSplit.map {|item|
                if item.index("(")
                  stop = item.index("(")
                  item[0, stop]
                else
                  item
                end }
                doc.data["partnersArray"] = partnersArray
              if partnersArray.length < 2
                doc.data["partnersSentence"] = partnersArray
              elsif partnersArray.length < 3
                doc.data["partnersSentence"] = partnersArray.join(' & ')
              else
                commaItems = partnersArray[0..-2].join(', ')
                lastItem = partnersArray.last
                doc.data["partnersSentence"] = commaItems + ', & ' + lastItem
              end
            end # end if data

            if doc.data["tags"]
              tags = "#{doc.data["tags"]}"
              if tags.length > 2
                doc.data["tagsExist"] = true
                doc.data["tagsLength"] = tags.length
              end

            end





# => "This is an example (http://example.org/)."


    		end # respond to data


    	end # do collection


    end # generate site

  end # class Generator
end # module
