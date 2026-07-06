export type Finger =
  | "left-pinky"
  | "left-ring"
  | "left-middle"
  | "left-index"
  | "right-index"
  | "right-middle"
  | "right-ring"
  | "right-pinky"
  | "thumb";

export type Drill = {
  type: "keys" | "words" | "sentences";
  content: string;
};

export type Lesson = {
  id: number;
  phase: number;
  newKeys: string[];
  allKeys: string[];
  drills: Drill[];
  completionThreshold: number;
  isFree: boolean;
};

export type LessonMeta = {
  title: string;
  subtitle: string;
  newKeysLabel: string;
  completionMessage: string;
  /** Gedankenfutter: short learning-science note shown with the lesson.
   *  Explains WHY the practice works (myelin, spacing effect, chunking, ...)
   *  so adult learners understand the method and stay motivated. */
  insight: string;
};
