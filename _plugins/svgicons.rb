module Jekyll
	class IconsTag < Liquid::Tag

		def initialize(tag_name, icon, tokens)
			super
			@icon = icon.gsub(/\s+/, "")
		end

		def render(context)
			"<div><svg class=\"icon\"><use xlink:href=\"/assets/icons.svg\##{@icon}\" /></svg></div>"
		end
	end
end

Liquid::Template.register_tag('icons', Jekyll::IconsTag)
