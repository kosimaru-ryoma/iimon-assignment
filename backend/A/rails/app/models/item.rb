class Item < ApplicationRecord

  validates :name,
            presence: true,
            uniqueness: true,
            length: { maximum: 30 }
  validates :price,
            presence: true,
            numericality: { only_integer: true, greater_than_or_equal_to: 0 }

end
