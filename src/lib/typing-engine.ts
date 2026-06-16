export type CharStatus = "correct" | "incorrect" | "current" | "upcoming";

export type KeyError = {
  expected: string;
  typed: string;
  position: number;
};

export type TypingState = {
  text: string;
  typed: string;
  position: number;
  errors: KeyError[];
  errorsByKey: Record<string, number>;
  startTime: number | null;
  endTime: number | null;
  isComplete: boolean;
};

export function createTypingState(text: string): TypingState {
  return {
    text,
    typed: "",
    position: 0,
    errors: [],
    errorsByKey: {},
    startTime: null,
    endTime: null,
    isComplete: false,
  };
}

export function processKeystroke(
  state: TypingState,
  key: string
): TypingState {
  if (state.isComplete) return state;

  const now = Date.now();
  const startTime = state.startTime ?? now;
  const expected = state.text[state.position];

  if (key.length !== 1) return state;

  const isCorrect = key === expected;
  const newErrors = [...state.errors];
  const newErrorsByKey = { ...state.errorsByKey };

  if (!isCorrect) {
    newErrors.push({
      expected,
      typed: key,
      position: state.position,
    });
    newErrorsByKey[expected] = (newErrorsByKey[expected] || 0) + 1;
    return {
      ...state,
      startTime,
      errors: newErrors,
      errorsByKey: newErrorsByKey,
    };
  }

  const newPosition = state.position + 1;
  const isComplete = newPosition >= state.text.length;

  return {
    text: state.text,
    typed: state.typed + key,
    position: newPosition,
    errors: newErrors,
    errorsByKey: newErrorsByKey,
    startTime,
    endTime: isComplete ? now : null,
    isComplete,
  };
}

export function getCharStatuses(state: TypingState): CharStatus[] {
  return state.text.split("").map((_, i) => {
    if (i < state.position) {
      const typedChar = state.typed[i];
      return typedChar === state.text[i] ? "correct" : "incorrect";
    }
    if (i === state.position) return "current";
    return "upcoming";
  });
}

export function calculateWPM(state: TypingState, now?: number): number {
  if (!state.startTime) return 0;
  const elapsed = ((now ?? state.endTime ?? Date.now()) - state.startTime) / 1000;
  if (elapsed < 1) return 0;
  return Math.round((state.position / 5) / (elapsed / 60));
}

export function calculateAccuracy(state: TypingState): number {
  const totalKeystrokes = state.position + state.errors.length;
  if (totalKeystrokes === 0) return 100;
  if (state.errors.length > 0) {
    return Math.min(99, Math.floor((state.position / totalKeystrokes) * 100));
  }
  return 100;
}

export function getElapsedSeconds(state: TypingState, now?: number): number {
  if (!state.startTime) return 0;
  return Math.floor(((now ?? Date.now()) - state.startTime) / 1000);
}
