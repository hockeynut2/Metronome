require 'bundler'
Bundler.require

get '/' do
  erb :metronome
end

get '/tuner' do
  erb :tuner
end