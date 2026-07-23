# Based on nquinlan's plugin "Jekyll-gir-last-modified" on https://github.com/nquinlan/jekyll-git-last-modified

module SiblingImages
  class Generator < Jekyll::Generator
    priority :highest

    # Case-insensitive sibling-file lookup. Netlify's Linux build
    # environment is case-sensitive, so a contributor-uploaded
    # `Logo.png`/`logo.PNG` previously never matched here at all even
    # though the file really existed (see GitHub issue #258 - this is
    # what happened to TwistBioscience's logo).
    #
    # NOTE: Dir.glob(path, File::FNM_CASEFOLD) looks like the obvious
    # tool for this but does NOT work here - for a literal pattern with
    # no wildcard characters, Dir.glob takes a fast path that stats the
    # exact path and ignores FNM_CASEFOLD entirely on a case-sensitive
    # filesystem (confirmed by testing against a real case-sensitive
    # volume, not just this dev machine's case-insensitive default).
    # Listing the directory and comparing names case-insensitively
    # ourselves is what actually works.
    def find_ci(path)
      dir = File.dirname(path)
      target = File.basename(path).downcase
      return nil unless Dir.exist?(dir)
      match = Dir.entries(dir).find { |f| f.downcase == target }
      match ? File.join(dir, match) : nil
    end

    def generate(site)
    	@site = site

    	@site.documents.each do |doc|
    		if(doc.respond_to? :data)
          docDir = "#{doc.relative_path}"
          docName = "#{doc.basename}"
          # For Logos
            logoPath = docDir.sub(docName, 'logo').strip

            logoPathPNG = find_ci(logoPath + '.png')
            logoPathJPG = find_ci(logoPath + '.jpg')
            logoPathJPEG = find_ci(logoPath + '.jpeg')
            logoPathSVG = find_ci(logoPath + '.svg')

            if logoPathPNG
        		  doc.data["logo"] = '/'+ logoPathPNG.delete('_')
            end # if

            if logoPathJPG
              doc.data["logo"] = '/'+ logoPathJPG.delete('_')
            end # if

            if logoPathJPEG
              doc.data["logo"] = '/'+ logoPathJPEG.delete('_')
            end # if

            if logoPathSVG
              doc.data["logo"] = '/'+ logoPathSVG.delete('_')
            end # if


            # For Header
            headerPath = docDir.sub(docName, 'header').strip

            headerPathPNG = find_ci(headerPath + '.png')
            headerPathJPG = find_ci(headerPath + '.jpg')
            headerPathJPEG = find_ci(headerPath + '.jpeg')
            headerPathSVG = find_ci(headerPath + '.svg')

            if headerPathPNG
              doc.data["header"] = '/'+ headerPathPNG.delete('_')
            end # if

            if headerPathJPG
              doc.data["header"] = '/'+ headerPathJPG.delete('_')
            end # if

            if headerPathJPEG
              doc.data["header"] = '/'+ headerPathJPEG.delete('_')
            end # if

            if headerPathSVG
              doc.data["header"] = '/'+ headerPathSVG.delete('_')
            end # if

            # For Thumbnail
            thumbnailPath = docDir.sub(docName, 'thumbnail').strip

            thumbnailPathPNG = find_ci(thumbnailPath + '.png')
            thumbnailPathJPG = find_ci(thumbnailPath + '.jpg')
            thumbnailPathJPEG = find_ci(thumbnailPath + '.jpeg')
            thumbnailPathSVG = find_ci(thumbnailPath + '.svg')

            if thumbnailPathPNG
              doc.data["thumbnail"] = '/'+ thumbnailPathPNG.delete('_')
            end # if

            if thumbnailPathJPG
              doc.data["thumbnail"] = '/'+ thumbnailPathJPG.delete('_')
            end # if

            if thumbnailPathJPEG
              doc.data["thumbnail"] = '/'+ thumbnailPathJPEG.delete('_')
            end # if

            if thumbnailPathSVG
              # This used to overwrite with thumbnailPathJPG here due to
              # a copy-paste typo, so an actual thumbnail.svg was never
              # used even when present (flagged in issue #258, never
              # fixed at the time).
              doc.data["thumbnail"] = '/'+ thumbnailPathSVG.delete('_')
            end # if

    		end
    	end # do collection
    end # generate site

  end # class Generator
end # module
