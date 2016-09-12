module Jekyll
	class SvgiconTag < Liquid::Tag

		def initialize(tag_name, icon, tokens)
			super
			@icon = icon.gsub(/\s+/, "")
		end

		def render(context)
			"<span><svg class=\"icons\"><use xlink:href=\"/_assets/icons.svg\##{@icon}\"></use></svg></span>"
		end
	end
end

Liquid::Template.register_tag('svgicon', Jekyll::SvgiconTag)
