function showDiceRoll(diceValue) {
    const dots = document.querySelectorAll(".dot");

    // Hide all dots
    dots.forEach(dot => dot.style.display = "none");

    // Dice Patterns: (row, col) positions in the 3x3 grid
    const positions = {
        1: [[2, 2]],
        2: [[1, 1], [3, 3]],
        3: [[1, 1], [2, 2], [3, 3]],
        4: [[1, 1], [1, 3], [3, 1], [3, 3]],
        5: [[1, 1], [1, 3], [2, 2], [3, 1], [3, 3]],
        6: [[1, 1], [1, 3], [2, 1], [2, 3], [3, 1], [3, 3]]
    };

    // Show and position the correct dots
    positions[diceValue].forEach((pos, index) => {
        let dot = dots[index];
        dot.style.display = "block";
        dot.style.gridColumn = pos[1];
        dot.style.gridRow = pos[0];
    });
}
