/* Tests for Tic-Tac Javascript */


describe("Tic Tac JS", function () {

    it("should detect a full board as full", function () {
        board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
        expect(isBoardFull()).toBeTruthy();
    });

    // STEP 2: Uncomment this out.

    it("should detect a non-full board as not full", function () {
       board = ["X", "X", null, "X", "X", "X", "X", "X", "X"];
       expect(isBoardFull()).toBeFalsy();
    });
    
    it("should convert x, y to cell #", function () {
       var cellNumber1 = xyToCell(1, 1);
       var cellNumber2 = xyToCell(0, 0);
       expect(cellNumber1).toBe(4);
       expect(cellNumber2).toBe(0);

    });
    
    it("should make computer moves", function () {
       board = ["X", null, null, null, null, null, null, null, null];
       computerMove();
       var newBoardPiece = board[1];
       expect(newBoardPiece).toBe("O");
    });

    // END STEP 2

    // Add the following tests, or think of some of your own.
    // it should update the board correctly based on the board
    it("should update board", function() {
        board = [null, null,"X",null, null,"O", null, null, null];
        updateBoard();
        var cell2Text = $('#cell-2').text();
        var cell5Text = $('#cell-5').text();
        expect(cell2Text).toEqual("X");
        expect(cell5Text).toEqual("O");
    });
    // it should not fill in board slots that are already occupied
    // it should be able to determine a winner
    // it should not determine a winner when there is a tie
    // it should be able to deduce the correct cell number
    // it should be able to declare a tie and end the game

});
