class JekyllCreativeCommons < Liquid::Tag
  Syntax = /\/\/creativecommons.org\/(licenses|publicdomain)\/([a-z\-]*)\/(\d\.?\d)?\//

  def initialize(tag_name, license, tokens)
    if !(license =~ Syntax) then
      raise "No license url provided in the \"license\" tag"
    end
    @license_url   = license.chop
    @license_class = $2
    license_ver    = $3
    jurisdiction   = "International"
    case @license_class
      when "by-nc-sa"
        license_name = "Creative Commons Attribution-NonCommercial-ShareAlike"
      when "by-nc-nd"
        license_name = "Creative Commons Attribution-NonCommercial-NoDerivs"
      when "by-nc"
        license_name = "Creative Commons Attribution-NonCommercial"
      when "by-sa"
        license_name = "Creative Commons Attribution-ShareAlike"
      when "by-nd"
        license_name = "Creative Commons Attribution-NoDerivs"
      when "by"
        license_name = "Creative Commons Attribution"
    end
    if @license_class == "mark" and $1 == "publicdomain"
      @license_name  = "free of known copyright restrictions."
    else
      @license_name  = "#{license_name} #{license_ver} #{jurisdiction} License"
    end
  end

  def render(context)
    if context["page.title"]
        begin
            gem 'redcarpet'
            if context["page.title"]
                page_link = Redcarpet::Render::SmartyPants.render(context["page.title"])
            end
        rescue Gem::LoadError
            page_link = context["page.title"]
        end
    end
    unless ((author_name = context["page.author.name"]))
      unless ((author_name = context["page.author"]))
        author_name = nil
      end
    end
    unless ((author_url = context["page.author.url"]))
      author_url = nil
    end
    unless (author_name == nil)
      unless (author_url == nil)
        author_link = " by <a href='#{author_url}'>#{author_name}</a>"
      else
        author_link = " by #{author_name}"
      end
    else
      author_link = ""
    end
    unless @license_class == "mark"
      license_prolog = "is licensed under a"
    else
      license_prolog = "is"
    end
"""
<a href='#{@license_url}' id='license' class='#{@license_class}'></a>
<span class='licensetext'>
<span property='dct:title' rel='dct:type'>#{page_link}</span>#{author_link}
 #{license_prolog}
 <a rel='license' itemprop='license' href='#{@license_url}'>#{@license_name}</a>
</span>
""".delete "\n"
  end
end

Liquid::Template.register_tag('license', JekyllCreativeCommons)
