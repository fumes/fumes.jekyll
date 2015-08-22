module Jekyll
  class CategoriesGenerator < Generator

    def generate(site)
        categories_dir = Dir.pwd + '/categories'

        if !Dir.exists?(categories_dir)
            puts "Creating categories dir"
            Dir.mkdir(categories_dir)
        end
        regenerate_flag = false

        site.categories.each do |i|
           if !File.exists?(categories_dir + '/' + i[0])
               puts "Creating category page for: " + i[0]
               category_file = File.new(categories_dir + '/' + i[0], "w")
               category_file.puts("---\nlayout: categories\ncategory: " + i[0] + "\npermalink: /" + i[0] + "/\n---")
               category_file.close

               regenerate_flag = true
           end
        end

        if regenerate_flag
           FileUtils.touch Dir.pwd+'/_config.yml'
        end
   end
 end
end
