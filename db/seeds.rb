# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all
Article.destroy_all
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
@Rebecca=
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

Article.create!(
    title: 'Seer is OP',
    content: 'Bloodhound scan is balanced by 1) enemies being alerted that they are exposed 2) long cooldown 3)commitment to direction of investigation 4) loud noise 5) bright visual. Seer passive shows you where enemies are 1) without alerting them 2) zero cooldown 3)360 degree coverage by turning 4) near zero noise 5) zero visual. (Yes there are disadvantages of the passive, but only if you neglect the rest of his kit which covers them easily.)

"Ratting" no longer exists in any way. Crouched or otherwise perfectly hidden enemies will be discovered trivially.

Seer alone can determine which building are unoccupied for rotation purposes, which gives him extreme risk management potential. Seer passive is so good that he wouldn\'t be bottom tier legend even if he had no tactical or ultimate at all. Knowing where people are and how many there are is a huge benefit in a game where most passives do essentially nothing.

Seer tactical does so much that there is hardly longer any room for counter play. It soft counters picking up teammates, batt-ing, using escape abilities, shooting (due to visual effects and screen shake), outmaneuvering or "faking" with movement, "peeking" enemies (who can easily pre-fire you every time)... What counter-play options are even left? How many other tacticals in the game accomplish a fraction of this?

Rev tactical disrupts abilities for more duration at the cost of scans, health info, area, line-of-sight, AOE, heal cancel, pickup cancel, flash/shake.

Bangalore is hard-countered by several characters now. Not that any sane person mains bangalore anyway.

Seer tactical gives assist points in ranked. You know, that thing that was too OP for bloodhound to have.

Seer ultimate gives your team a greater advantage in a fight than any ability so far imo. Having full information is an overwhelming benefit which is optimally used in the most common situations (ie close combat scuffles in and around buildings). Is it worse that a gib ult against a team that has no roof and no ability to rotate away? Sure, but how frequent are each of those types of exchanges? Seer ult is almost always hugely impactful.

What they should do to fix it (opinion):

Seer passive should not detect crouching or knocked enemies. This creates counter-play and prohibits seer from a guarantee of safety in rotations. It forces seers to not lazily over-rely on heartbeats.

Seer tactical should not BOTH 1)cancel heals and picks AND 2) cancel abilities. It could even do neither and still be a great ability.

Seer ult should have a health reduction. 135 Damage to destroy is a lot to dish out 1) in the middle of a fight with enemies close 2) on a target that is trivial to hide in a corner or around a wall 3) while being exposed. It would be a great ability even with 10 health.

Seer ult should have a duration reduction. 30 seconds is so long that it will outlast almost every fight.',
   img_url: 'https://cdn.vox-cdn.com/thumbor/T9WvmdyLA8IwK_wo2yRmMgQl48M=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22726734/seer_emergence.jpg',
   user: @Jeff,
   category: @legends,
)

puts "#{Article.count} articles created."
