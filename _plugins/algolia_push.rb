class AlgoliaSearchJekyllPush < Jekyll::Command
  class << self
    # Hook to exclude some files from indexing
    def custom_hook_excluded_file?(file)
      # Excluding file if matches regexp
      unless file.path =~ %r{_labs|_events|_groups|_networks|_projects|_startups|_incubators|_others}
        # puts file.path
        return true
      end
    end
  end
end
