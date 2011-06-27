require 'rubygems'
require 'sinatra'
require 'rest_client'
require 'json/pure'
require 'helpers'

LAME_BROWSER = /BlackBerry/

get '/' do
  puts request.env['WURFL'].inspect
  erb :index
end

get '/tweets', :agent => LAME_BROWSER do
  erb render_data(tweets_for params[:username])
end

get '/tweets' do
  tweets_for params[:username]
end

def is_lame_browser
  request.user_agent =~ LAME_BROWSER
end

private

def tweets_for (username)
  feed = RestClient.get "http://twitter.com/status/user_timeline/#{username}.json?count=10"
  {:tweets => JSON.parse(feed)}.to_json
end

def render_data (feed_data)
  RestClient.post "http://localhost:1337/", :data => feed_data, :template => tweet_template
end

def tweet_template
  File.read "#{File.dirname(__FILE__)}/views/tweet_template.html"
end
