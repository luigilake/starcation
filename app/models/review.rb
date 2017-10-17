class Review < ApplicationRecord
  belongs_to :user
  belongs_to :celestial

  validates :body, presence: true
  validates :rating, presence: true, inclusion: { in: [1..5] }
  validates :photo, allow_nil: true
end
