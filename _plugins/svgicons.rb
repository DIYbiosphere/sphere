module Jekyll
	class SvgiconTag < Liquid::Tag

		def initialize(tag_name, icon, tokens)
			super
			@icon = icon.gsub(/\s+/, "")
		end

		def render(context)
			"<div><svg class=\"icons\"><use xlink:href=\"/assets/icons.svg\##{@icon}\"></use></svg></div>"
		end
	end
end

Liquid::Template.register_tag('svgicon', Jekyll::SvgiconTag)
