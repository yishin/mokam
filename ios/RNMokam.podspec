
Pod::Spec.new do |s|
  s.name         = "RNMokam"
  s.version      = "1.0.0"
  s.summary      = "RNMokam"
  s.description  = ""
  s.homepage     = "https://github.com/yishin/mokam"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/yishin/mokam.git", :tag => "master" }
  s.source_files  = "RNMokam/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  
