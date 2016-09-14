module Jekyll
	class SvglabelTag < Liquid::Tag

		def initialize(tag_name, icon, tokens)
			super
			@icon = icon.gsub(/\s+/, "")
		end

		def render(context)
			"<span><svg class=\"labels\"><use xlink:href=\"/assets/icons.svg\##{@icon}\"></use></svg></span>"
		end
	end
end

Liquid::Template.register_tag('svglabel', Jekyll::SvglabelTag)
