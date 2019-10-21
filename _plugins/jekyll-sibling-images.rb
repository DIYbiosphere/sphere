# not sure if this file is based on another file...
#
# for some reason algolia is not noticing `doc.data["logo"]` fields added by this..
#
# this comment is not accurate, not sure why its here (copy-pasted?)
# Based on nquinlan's plugin "Jekyll-gir-last-modified" on https://github.com/nquinlan/jekyll-git-last-modified

module SiblingImages
  class Generator < Jekyll::Generator
    priority :highest
    def generate(site)
    	@site = site

    	@site.documents.each do |doc|
    		if(doc.respond_to? :data)
          docDir = "#{doc.relative_path}"
          docName = "#{doc.basename}"
          # For Logos
            logoPath = docDir.sub(docName, 'logo').strip

            logoPathPNG = logoPath + '.png'
            logoPathPNG.strip!

            logoPathJPG = logoPath + '.jpg'
            logoPathJPG.strip!

            logoPathSVG = logoPath + '.svg'
            logoPathSVG.strip!


            if File.exist?(logoPathPNG)
        		  doc.data["logo"] = '/'+ logoPathPNG.delete('_')
              # print '...found logo png ', doc.data["logo"]
            end # if

            if File.exist?(logoPathJPG)
              doc.data["logo"] = '/'+ logoPathJPG.delete('_')
              # print '...found logo jpg ', doc.data["logo"]
            end # if

            if File.exist?(logoPathSVG)
              doc.data["logo"] = '/'+ logoPathSVG.delete('_')
              # print '...found logo svg ', doc.data["logo"]
            end # if


            # For Header
            headerPath = docDir.sub(docName, 'header').strip


            headerPathPNG = headerPath + '.png'
            headerPathPNG.strip!

            headerPathJPG = headerPath + '.jpg'
            headerPathJPG.strip!

            headerPathSVG = headerPath + '.svg'
            headerPathSVG.strip!

            if File.exist?(headerPathPNG)
              doc.data["header"] = '/'+ headerPathPNG.delete('_')
            end # if

            if File.exist?(headerPathJPG)
              doc.data["header"] = '/'+ headerPathJPG.delete('_')
            end # if

            if File.exist?(headerPathSVG)
              doc.data["header"] = '/'+ headerPathSVG.delete('_')
            end # if

            # For Thumbnail
            thumbnailPath = docDir.sub(docName, 'thumbnail').strip

            thumbnailPathPNG = thumbnailPath + '.png'
            thumbnailPathPNG.strip!

            thumbnailPathJPG = thumbnailPath + '.jpg'
            thumbnailPathJPG.strip!

            thumbnailPathSVG = thumbnailPath + '.svg'
            thumbnailPathSVG.strip!

            if File.exist?(thumbnailPathPNG)
              doc.data["thumbnail"] = '/'+ thumbnailPathPNG.delete('_')
            end # if

            if File.exist?(thumbnailPathJPG)
              doc.data["thumbnail"] = '/'+ thumbnailPathJPG.delete('_')
            end # if

            if File.exist?(thumbnailPathSVG)
              doc.data["thumbnail"] = '/'+ thumbnailPathJPG.delete('_')
            end # if

    		end
    	end # do collection
    end # generate site

  end # class Generator
end # module
