class Vote < ApplicationRecord
  validates_uniqueness_of :user_id, :scope => [:review_id]
  validates :value, numericality: true

  belongs_to :user
  belongs_to :review
end
