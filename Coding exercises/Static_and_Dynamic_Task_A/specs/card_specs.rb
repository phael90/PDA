require('minitest/autorun')
require_relative('../testing_task_2.rb')
require_relative('../card.rb')

class CardGameTest < Minitest::Test

  def setup
    @ace_of_dimonds = Card.new("Dimonds", "Ace")
    @nine_of_dimonds = Card.new("Diamonds", 9)
    @four_of_hearts = Card.new("Hearts", 4)
    @six_of_clubs = Card.new("Clubs", 6)
    @seven_of_clubs = Card.new("Clubs", 7)
    @card_game = CardGame.new()
  end

  def test_chceck_Ace_return_true
    assert_equal(true, @card_game.checkForAce(@ace_of_dimonds))
  end

  def test_chceck_Ace_return_false
    assert_equal(false, @card_game.checkForAce(@nine_of_dimonds))
  end

  def test_check_first_card
    assert_equal(@nine_of_dimonds, @card_game.highest_card(@nine_of_dimonds, @four_of_hearts))
  end

  def test_check_second_card
    assert_equal(@nine_of_dimonds, @card_game.highest_card(@four_of_hearts, @nine_of_dimonds))
  end

  def test_check_for_tie
    assert_equal("Tie!", @card_game.highest_card(@nine_of_dimonds, @nine_of_dimonds))
  end

  def test_check_total
    expected = "You have a total of 20."
    actual = CardGame.cards_total([@nine_of_dimonds, @four_of_hearts, @seven_of_clubs])
    assert_equal(expected, actual)
  end
end
