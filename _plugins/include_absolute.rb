module Jekyll
  class IncludeTagError < StandardError
    attr_accessor :path

    def initialize(msg, path)
      super(msg)
      @path = path
    end
  end

  class IncludeAbsoluteTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super

      @file   = markup.strip
    end

    def render(context)
      source = File.expand_path(context.registers[:site].config['source']).freeze
      path   = File.join(source, @file)

      begin
        partial = Liquid::Template.parse(read_file(path, context))

        context.stack do
          context['include'] = parse_params(context) if @params
          partial.render!(context)
        end
      rescue => e
        raise IncludeTagError.new e.message, path
      end
    end

    def read_file(file, context)
      File.read(file, file_read_opts(context))
    end

    def file_read_opts(context)
      context.registers[:site].file_read_opts
    end
  end
end

Liquid::Template.register_tag('include_absolute', Jekyll::IncludeAbsoluteTag)
