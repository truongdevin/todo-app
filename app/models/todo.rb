class Todo < ActiveRecord::Base
  validates :done, inclusion: { in: [true, false]}
  validates :title, :body, presence: true


end
