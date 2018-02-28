# Based on nquinlan"s plugin "Jekyll-gir-last-modified" on https://github.com/nquinlan/jekyll-git-last-modified
# added support for collections(documents)
# converts DateTime into Unix Timestamp
require 'kramdown'
require 'date'



module AddVariablesToFiles
  class Generator < Jekyll::Generator
    priority :highest
    def generate(site)
    	@site = site

    	@site.documents.each do |doc|
    		if(doc.respond_to? :data)
          docURL = "#{doc.url}"
          doc.data["file_name"] = docURL.split('/').last

          docDir = "#{doc.relative_path}"
          now = Date.today

          # Determine if it has an end date

          if doc.data["end-date"]
              # Then grab it
             endDate = "#{doc.data["end-date"]}".to_s

             # Parse the date
             if endDate.size == 4
              dateEnd = Date.strptime(endDate, '%Y')

            elsif endDate.size == 7
               dateEnd = Date.strptime(endDate, '%Y-%m')

            elsif endDate.size == 10
               dateEnd = Date.strptime(endDate, '%Y-%m-%d')

             elsif endDate.size == 16
               dateEnd = DateTime.parse(endDate)
            end

            isEndPast = (dateEnd - now) < 0

           end

           if doc.data["start-date"]
             startDate = "#{doc.data["start-date"]}".to_s

             if startDate.size == 4
               dateStart = Date.strptime(startDate, '%Y')

             elsif startDate.size == 7
               dateStart = Date.strptime(startDate, '%Y-%m')

             elsif startDate.size == 10
               dateStart = Date.strptime(startDate, '%Y-%m-%d')

             elsif startDate.size == 16
               dateStart = DateTime.parse(startDate)
             end
             isStartPast = (dateStart - now) < 0
            end

            unless doc.data["status"]
              if isStartPast == true
                unless isEndPast == true
                  doc.data["status"] = "active"
                else
                  doc.data["status"] = "inactive"
                end
              elsif isStartPast == false
                 doc.data["status"] = "planned"
              else
                doc.data["status"] = "unknown"
              end
            else
            end



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

#            if docDir.include? "_NEW_COLLECTION(s)"
#              doc.data["NEW_COLLECTION"] = true
#            end

            regex = /\[.+?\]/

            if doc.data["hosts"]
              doc.data["hostsExist"] = true
              hostsString = "#{doc.data["hosts"]}"
              hostsClean = hostsString.delete('"[]')
              hostsSplit = hostsClean.split(',')
              hostsArray =  hostsSplit.map {|item|
                if item.index("(")
                  stop = item.index("(")
                  item[0, stop]
                else
                  item
                end }
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
              partnersString = "#{doc.data["partners"]}"
              partnersClean = partnersString.delete('"[]')
              partnersSplit = partnersClean.split(',')
              partnersArray =  partnersSplit.map {|item|
                if item.index("(")
                  stop = item.index("(")
                  item[0, stop]
                else
                  item
                end }
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
              end

            end





# => "This is an example (http://example.org/)."


    		end # respond to data


    	end # do collection


    end # generate site

  end # class Generator
end # module
