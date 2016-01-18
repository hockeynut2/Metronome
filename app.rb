require 'bundler'
Bundler.require

get '/' do
  erb :metronome_V2
end

get '/tuner' do
  erb :tuner
end
