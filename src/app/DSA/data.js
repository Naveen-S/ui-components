export const studyCadence = {
  weekdays: [
    "45-60 min: new topic problems",
    "20-25 min: re-solve or weak problem",
    "10-15 min: notes, complexity, and edge-case review",
  ],
  weekends: [
    "90-120 min: deeper topic block or selective hard problem",
    "30-45 min: mixed revision set",
    "20-30 min: audit cleanup, mistake review, and next-week planning",
  ],
};

export const phases = [
  {
    id: "phase-1",
    title: "Foundation Audit And Cleanup",
    goal: "Convert current DSA work from scattered practice into a reliable base.",
    outputs: [
      "Classify existing files into solid, needs revisit, and incomplete",
      "Re-solve weak array, recursion, sorting, linked-list, string, and stack/queue questions",
      "Create a short weak-topics list that drives the next phase",
    ],
  },
  {
    id: "phase-2",
    title: "Topic-By-Topic Course Completion",
    goal: "Finish Namaste DSA in pattern blocks instead of random question hopping.",
    outputs: [
      "Learn pattern, solve easy problems, then medium problems",
      "Add 1-2 selective hard problems for interview-heavy topics",
      "Do mini checkpoints before moving to the next topic",
    ],
  },
  {
    id: "phase-3",
    title: "Revision Loop Running In Parallel",
    goal: "Prevent forgetting earlier topics while new topics are still being added.",
    outputs: [
      "Re-solve one old problem daily",
      "Review one failed or slow problem every 3-4 days",
      "Run one mixed revision set every week",
    ],
  },
  {
    id: "phase-4",
    title: "Interview-Readiness Layer",
    goal: "Practice solving and explaining under time pressure before interviews start.",
    outputs: [
      "Start timed mocks after the first major half of the syllabus",
      "Track speed, clarity, edge-case handling, and correctness",
      "Finish with mixed sets instead of only topic-based practice",
    ],
  },
];

export const topicRoadmap = [
  {
    topic: "Complexity, arrays, strings, recursion",
    status: "Foundation built",
    focus: "Clean weak spots and finish remaining basics before moving on.",
  },
  {
    topic: "Searching and sorting",
    status: "Partially built",
    focus: "Finish merge sort and tighten edge cases in current practice files.",
  },
  {
    topic: "Linked lists",
    status: "Strong head start",
    focus: "Revisit rotation and deletion edge cases, then keep this as a strength area.",
  },
  {
    topic: "Stacks and queues",
    status: "Good base",
    focus: "Keep monotonic-stack problems fresh and clean up draft-style implementations.",
  },
  {
    topic: "Hashing",
    status: "Light coverage",
    focus: "Promote hashmap thinking from string problems into dedicated pattern work.",
  },
  {
    topic: "Two pointers",
    status: "Not started",
    focus: "Treat as a high-priority interview pattern block.",
  },
  {
    topic: "Sliding window",
    status: "Not started",
    focus: "Study immediately after two pointers because the techniques overlap.",
  },
  {
    topic: "Trees",
    status: "Not started",
    focus: "Make this the first major untouched data-structure block.",
  },
  {
    topic: "BST",
    status: "Not started",
    focus: "Follow trees while traversal and recursion patterns are fresh.",
  },
  {
    topic: "Heaps / priority queue",
    status: "Not started",
    focus: "Add once tree comfort is established.",
  },
  {
    topic: "Graphs",
    status: "Early glimpse only",
    focus: "Build from BFS/DFS basics before moving to harder graph variants.",
  },
  {
    topic: "Advanced / remaining course topics",
    status: "Later phase",
    focus: "Only after easy + medium mastery is stable.",
  },
];

export const readinessChecks = [
  "Solve common easy problems quickly and cleanly",
  "Solve medium problems with structure and reasonable speed",
  "Explain time complexity, space complexity, and edge cases aloud",
  "Complete 8-12 timed mock sessions before calling yourself interview-ready",
  "Clear your major re-solve backlog instead of only stacking new problems",
];

export const recurringMistakes = [
  "Off-by-one errors",
  "Pointer movement and loop boundaries",
  "Hashmap bookkeeping",
  "Recursion base cases",
  "Tree traversal choice",
  "Graph visited-state bugs",
];

export const trackerBuckets = [
  "New",
  "Solved with help",
  "Solved independently",
  "Needs re-solve",
];

export const auditTopics = [
  {
    topic: "Warm-up and core basics",
    status: "Needs revisit",
    note: "Good problem count, but several files still read like practice drafts instead of interview-ready references.",
    items: [
      { name: "countDigits.js", state: "Needs revisit", reason: "Contains debug-driven exploration rather than final reference quality." },
      { name: "palindrome.js", state: "Needs revisit", reason: "Multiple variants and debug output make it better as a revisit problem." },
      { name: "reverseNumber.js", state: "Needs revisit", reason: "Keep as a re-solve candidate to lock overflow and sign handling." },
      { name: "secondLargest.js", state: "Needs revisit", reason: "Useful warm-up, but it still has exploratory logging." },
      { name: "starPattern.js", state: "Needs revisit", reason: "Pattern practice is helpful, but not a high-priority interview reference file." },
      { name: "sumOfN.js", state: "Needs revisit", reason: "Treat as a quick fundamentals refresher rather than a finished anchor problem." },
    ],
  },
  {
    topic: "Arrays and strings",
    status: "Foundation built",
    note: "This is a solid starting area and should mostly shift into re-solve mode.",
    items: [
      { name: "removeDuplicates.js", state: "Solid" },
      { name: "removeElement.js", state: "Solid" },
      { name: "mergeArray.js", state: "Solid" },
      { name: "missingNumber.js", state: "Solid" },
      { name: "singleNumber.js", state: "Solid" },
      { name: "stock.js", state: "Solid" },
      { name: "reverseString.js", state: "Solid" },
      { name: "String_anagram.js", state: "Solid" },
      { name: "String_Isomorphic.js", state: "Solid" },
      { name: "String_JewelsAndStones.js", state: "Solid" },
      { name: "String_LargestOddNumber.js", state: "Solid" },
      { name: "String_LengthOfLastWord.js", state: "Solid" },
      { name: "Strings_BalancedStrings.js", state: "Solid" },
      { name: "String_groupAnagram.js", state: "Needs revisit", reason: "Two solutions are useful, but the optimized key generation should be reviewed once more." },
      { name: "String_ReverseString.js", state: "Needs revisit", reason: "Keep this in the re-solve bucket until the pattern feels automatic." },
      { name: "Strings_FrequentVowelsAndConsonant.js", state: "Needs revisit", reason: "A good candidate for hashing-focused cleanup." },
    ],
  },
  {
    topic: "Recursion, searching, and sorting",
    status: "Partially built",
    note: "You already started the essentials, but this area still needs one cleanup pass before it is interview-ready.",
    items: [
      { name: "Recursion_Factorial.js", state: "Solid" },
      { name: "Recursion_Fibonacci.js", state: "Solid" },
      { name: "Recursion_PowerOfTwo.js", state: "Solid" },
      { name: "recursion_SumOfArray.js", state: "Needs revisit", reason: "Good concept coverage, but it should be re-solved from memory." },
      { name: "binarySearch.js", state: "Solid" },
      { name: "bubbleSort.js", state: "Needs revisit", reason: "Keep as revision, not as a finished reference implementation." },
      { name: "selectionSort.js", state: "Needs revisit", reason: "Good for fundamentals, but not yet a locked-in strength." },
      { name: "insertionSort.js", state: "Needs revisit", reason: "Worth re-solving once more to strengthen loop invariants." },
      { name: "mergeSort.js", state: "Incomplete", reason: "Still empty and should be completed during Phase 1." },
    ],
  },
  {
    topic: "Linked lists",
    status: "Strong head start",
    note: "This is currently your strongest topic family and should become one of your dependable interview areas.",
    items: [
      { name: "LinkedList_Reverse.js", state: "Solid" },
      { name: "LinkedList_cycle.js", state: "Solid" },
      { name: "LinkedList_MergeSortedList.js", state: "Solid" },
      { name: "LinkedList_remove_nth.js", state: "Solid" },
      { name: "LinkedList_OddEven.js", state: "Solid" },
      { name: "LinkedList_Palindrome.js", state: "Solid" },
      { name: "LinkedList_intersection.js", state: "Solid" },
      { name: "LinkedList.removeNode.js", state: "Needs revisit", reason: "Keep for revision because naming and presentation still feel draft-like." },
      { name: "LinkedList_Rotate.js", state: "Needs revisit", reason: "Edge cases around empty input and full rotations should be revisited." },
    ],
  },
  {
    topic: "Stacks and queues",
    status: "Good base",
    note: "You already have the right problem mix here. The next step is polish, not starting over.",
    items: [
      { name: "Stack_ValidParens.js", state: "Solid" },
      { name: "Stack_DailyTemperature.js", state: "Solid" },
      { name: "Stack_NextGreaterElement.js", state: "Solid" },
      { name: "Stack_NextGreaterElement2.js", state: "Solid" },
      { name: "Stack_QueueUsingStacks.js", state: "Needs revisit", reason: "Useful pattern, but keep it in the re-solve bucket until it feels automatic." },
      { name: "Stack_StackUsingQueue.js", state: "Needs revisit", reason: "Contains multiple implementations and is better treated as revision material." },
      { name: "Queue_Rotting_Oranges.js", state: "Needs revisit", reason: "Logic is close, but debug logs and BFS polish are still needed." },
    ],
  },
  {
    topic: "High-priority gaps",
    status: "Not started yet",
    note: "These topics should drive the next major phase after Phase 1 cleanup is done.",
    items: [
      { name: "Two pointers", state: "Missing", reason: "High interview value and currently absent from the repo." },
      { name: "Sliding window", state: "Missing", reason: "Should follow two pointers immediately." },
      { name: "Trees", state: "Missing", reason: "The biggest untouched data-structure block." },
      { name: "BST", state: "Missing", reason: "Schedule directly after trees." },
      { name: "Heaps / priority queue", state: "Missing", reason: "Add after trees and BST." },
      { name: "Graphs", state: "Early glimpse only", reason: "You have rotting oranges, but not a full graph foundation yet." },
    ],
  },
];
