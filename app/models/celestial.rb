class Celestial < ApplicationRecord
  belongs_to :user
  has_many :reviews

  validates :name, presence: true, uniqueness: true
  validates :distance, presence: true
  validates :celestial_type, presence: true, inclusion: { in: ['star', 'planet', 'satellite', 'comet', 'galaxy', 'asteroid', 'constellation', 'other']}
  validates :size, presence: true
end
