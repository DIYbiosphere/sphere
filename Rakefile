desc "Run dev"
task :s do
  puts "Running jekyll @ http://localhost:4000"
  puts "webpack is watching"
  `bundle exec jekyll s -w`
end

desc "Build"
task :b do
  system("bundle exec jekyll b --verbose")
end

desc "Webpack watch"
task :webpack do
  `webpack -w`
end

desc "Run all dev tasks"
task :start do
  threads = []
  %w{s webpack}.each do |t|
    threads << Thread.new(t) do |my_task|
      Rake::Task[my_task].invoke
    end
  end
  threads.each { |thread| thread.join }
end
