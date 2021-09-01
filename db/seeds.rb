# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Article.destroy_all
Category.destroy_all
User.destroy_all

@Caleb =
  User.create!(
    username: 'Caleb',
    first_name: 'Caleb',
    last_name: 'Lee',
    email: 'caleb@email.com',
    password: 'caleb123',
  )
@Jeff =
  User.create!(
    username: 'Jeff',
    first_name: 'Jeff',
    last_name: 'Jefferson',
    email: 'jeff@email.com',
    password: 'jeffword',
  )
@Rebecca =
  User.create!(
    username: 'Rebecca',
    first_name: 'Rebecca',
    last_name: 'Smith',
    email: 'rebecca@email.com',
    password: 'rebecca123',
  )

puts "#{User.count} users created."

@legends = Category.create!(name: 'legends')
@meta = Category.create!(name: 'meta')
@updates = Category.create!(name: 'updates')
@maps = Category.create!(name: 'maps')
@gametypes = Category.create!(name: 'gametypes')
@skins = Category.create!(name: 'skins')

@filter = [@legends, @meta, @updates, @maps, @gametypes, @skins]

puts "#{Category.count} categories created."

puts "#{Article.count} articles created."
