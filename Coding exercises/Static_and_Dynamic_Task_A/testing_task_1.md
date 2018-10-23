### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

# wrong naming - not following CamelCase convention
  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

# spelling mistake (incorrect syntax) in line 24 - "dif" -> "def"
# wrong indentation - code is hard to read
# missing comma between arguments
  dif highest_card(card1 card2)
  if card1.value > card2.value
# non existing variable card line 28
    return card.name
  else
    card2
# missing return statement
  end
end
end


def self.cards_total(cards)
  total
  for card in cards
    total += card.value
# return statement in wrong place
    return "You have a total of" + total
  end
# return statement of total should be returned here
end
# class ending should be here
```
