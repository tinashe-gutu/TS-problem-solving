type Status = "unknown" | "matched" | "included";
interface MarkedGuess {
  char1: { value: string; status: Status };
  char2: { value: string; status: Status };
  char3: { value: string; status: Status };
  char4: { value: string; status: Status };
  char5: { value: string; status: Status };
}


function markWordleGuess(guess: string, hiddenTaget: string): MarkedGuess {
  let MarkedGuess: MarkedGuess = {
    char1: { value: guess[0], status: "unknown" },
    char2: { value: guess[1], status: "unknown" },
    char3: { value: guess[2], status: "unknown" },
    char4: { value: guess[3], status: "unknown" },
    char5: { value: guess[4], status: "unknown" },
  };
  return MarkedGuess;
}
