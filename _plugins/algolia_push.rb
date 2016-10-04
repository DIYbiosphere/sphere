class AlgoliaSearchJekyllPush < Jekyll::Command
  class << self
    # Hook to exclude some files from indexing
    def custom_hook_excluded_file?(file)
      # Excluding file if matches regexp
      return true if file.path =~ %r{^docs/}
      false
    end
  end
end