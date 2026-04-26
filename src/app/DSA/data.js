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

export const weeklyMilestones = [
  {
    week: "Week 1",
    id: "week-1",
    startDate: "2026-04-27",
    endDate: "2026-05-03",
    dateRange: "Apr 27 - May 03, 2026",
    title: "Foundation Reset",
    theme: "Clean the current base so you stop carrying shaky wins into the harder topics.",
    primaryFocus: "Warm-up cleanup, arrays, strings, recursion, and sorting repair",
    completionTarget: "14-18 lessons",
    masteryTarget: "6 mastery wins",
    bossBattle: "Finish `mergeSort`, re-solve 3 weak old problems without looking at code, and close your top 5 known gaps.",
    reward: "You earn the right to stop second-guessing the basics and start the real climb.",
    tasks: [
      {
        label: "Complete 14 lessons across arrays, strings, recursion, and sorting",
        rule: { type: "completeLessonsInModules", moduleIds: ["arrays", "strings", "recursion", "searching-sorting"], target: 14 },
      },
      {
        label: "Finish the Merge Sort lesson",
        rule: { type: "completeSpecificLessons", lessonIds: [47], target: 1 },
      },
      {
        label: "Master 6 lessons from the foundation block",
        rule: { type: "masterLessonsInModules", moduleIds: ["arrays", "strings", "recursion", "searching-sorting"], target: 6 },
      },
      {
        label: "Clear 4 core reset problems",
        rule: { type: "completeSpecificLessons", lessonIds: [27, 39, 43, 47], target: 4 },
      },
    ],
  },
  {
    week: "Week 2",
    id: "week-2",
    startDate: "2026-05-04",
    endDate: "2026-05-10",
    dateRange: "May 04 - May 10, 2026",
    title: "Linked List Fortress",
    theme: "Turn your strongest topic into a confidence engine.",
    primaryFocus: "Linked list finish, edge-case drills, and one mixed revision set",
    completionTarget: "16-20 lessons",
    masteryTarget: "7 mastery wins",
    bossBattle: "Solve reverse, cycle, remove nth, rotate, and merge sorted lists cold in one sitting.",
    reward: "You unlock a true comfort topic for interview warm-up rounds.",
    tasks: [
      {
        label: "Complete 16 linked list lessons",
        rule: { type: "completeLessonsInModules", moduleIds: ["linked-list"], target: 16 },
      },
      {
        label: "Master 7 linked list lessons",
        rule: { type: "masterLessonsInModules", moduleIds: ["linked-list"], target: 7 },
      },
      {
        label: "Clear the core linked-list boss set",
        rule: { type: "completeSpecificLessons", lessonIds: [53, 55, 60, 64, 65], target: 5 },
      },
      {
        label: "Finish at least 2 advanced linked-list variants",
        rule: { type: "completeSpecificLessons", lessonIds: [63, 66, 67], target: 2 },
      },
    ],
  },
  {
    week: "Week 3",
    id: "week-3",
    startDate: "2026-05-11",
    endDate: "2026-05-17",
    dateRange: "May 11 - May 17, 2026",
    title: "Stack and Queue Engine",
    theme: "Build momentum with pattern repetition and speed.",
    primaryFocus: "Stacks, queues, monotonic stack patterns, BFS-flavored queue practice",
    completionTarget: "14-18 lessons",
    masteryTarget: "7 mastery wins",
    bossBattle: "Do valid parentheses, next greater element, daily temperatures, and rotting oranges back-to-back.",
    reward: "You start feeling the difference between memorizing solutions and recognizing patterns.",
    tasks: [
      {
        label: "Complete 12 stack and queue lessons",
        rule: { type: "completeLessonsInModules", moduleIds: ["stack-queue"], target: 12 },
      },
      {
        label: "Master 7 stack and queue lessons",
        rule: { type: "masterLessonsInModules", moduleIds: ["stack-queue"], target: 7 },
      },
      {
        label: "Finish the implementation trio",
        rule: { type: "completeSpecificLessons", lessonIds: [85, 86, 87], target: 3 },
      },
      {
        label: "Clear the stack and queue boss set",
        rule: { type: "completeSpecificLessons", lessonIds: [88, 93, 94, 95, 96], target: 5 },
      },
    ],
  },
  {
    week: "Week 4",
    id: "week-4",
    startDate: "2026-05-18",
    endDate: "2026-05-24",
    dateRange: "May 18 - May 24, 2026",
    title: "Binary Search and Hashing Week",
    theme: "Sharpen precision before entering the big interview-heavy modules.",
    primaryFocus: "Binary search patterns plus dedicated hashing cleanup",
    completionTarget: "15-19 lessons",
    masteryTarget: "8 mastery wins",
    bossBattle: "Solve 4 binary search variants and 3 hashing/string problems under time pressure.",
    reward: "Your error rate drops because you start trusting your decision patterns.",
    tasks: [
      {
        label: "Complete 10 binary-search lessons",
        rule: { type: "completeLessonsInModules", moduleIds: ["binary-search"], target: 10 },
      },
      {
        label: "Complete 8 hashing lessons",
        rule: { type: "completeLessonsInModules", moduleIds: ["hashing"], target: 8 },
      },
      {
        label: "Master 8 lessons across binary search and hashing",
        rule: { type: "masterLessonsInModules", moduleIds: ["binary-search", "hashing"], target: 8 },
      },
      {
        label: "Clear the precision boss set",
        rule: { type: "completeSpecificLessons", lessonIds: [100, 104, 108, 79, 81, 82], target: 6 },
      },
    ],
  },
  {
    week: "Week 5",
    id: "week-5",
    startDate: "2026-05-25",
    endDate: "2026-05-31",
    dateRange: "May 25 - May 31, 2026",
    title: "Two Pointer Sprint",
    theme: "Move into one of the highest-return interview blocks.",
    primaryFocus: "Two pointers from basics to tricky medium patterns",
    completionTarget: "12-16 lessons",
    masteryTarget: "8 mastery wins",
    bossBattle: "Clear two sum II, is subsequence, container with most water, three sum, and trapping rain water review.",
    reward: "You unlock one of the cleanest pattern families in interviews.",
    tasks: [
      {
        label: "Complete 7 two-pointer lessons",
        rule: { type: "completeSpecificLessons", lessonIds: [109, 110, 111, 112, 114, 115, 116, 117], target: 7 },
      },
      {
        label: "Master 8 lessons in the two-pointer/sliding-window block",
        rule: { type: "masterLessonsInModules", moduleIds: ["two-pointers-sliding-window"], target: 8 },
      },
      {
        label: "Clear the two-pointer boss set",
        rule: { type: "completeSpecificLessons", lessonIds: [110, 115, 116, 117], target: 4 },
      },
      {
        label: "Finish KMP or first-occurrence string matching work",
        rule: { type: "completeSpecificLessons", lessonIds: [112, 113], target: 2 },
      },
    ],
  },
  {
    week: "Week 6",
    id: "week-6",
    startDate: "2026-06-01",
    endDate: "2026-06-07",
    dateRange: "Jun 01 - Jun 07, 2026",
    title: "Sliding Window Wave",
    theme: "Stay inside one mental model until it becomes instinctive.",
    primaryFocus: "Sliding window from fixed to dynamic windows",
    completionTarget: "10-14 lessons",
    masteryTarget: "8 mastery wins",
    bossBattle: "Solve longest substring, character replacement, permutation in string, and sliding window maximum with no notes.",
    reward: "You gain a pattern that shows up again and again in interview rounds.",
    tasks: [
      {
        label: "Complete the 4 sliding-window cornerstone lessons",
        rule: { type: "completeSpecificLessons", lessonIds: [118, 119, 120, 121], target: 4 },
      },
      {
        label: "Master all 4 cornerstone sliding-window lessons",
        rule: { type: "masterSpecificLessons", lessonIds: [118, 119, 120, 121], target: 4 },
      },
      {
        label: "Reach 12 completed lessons in the combined pointers/window module",
        rule: { type: "completeLessonsInModules", moduleIds: ["two-pointers-sliding-window"], target: 12 },
      },
      {
        label: "Hit 8 mastery wins in the combined pointers/window module",
        rule: { type: "masterLessonsInModules", moduleIds: ["two-pointers-sliding-window"], target: 8 },
      },
    ],
  },
  {
    week: "Week 7",
    id: "week-7",
    startDate: "2026-06-08",
    endDate: "2026-06-14",
    dateRange: "Jun 08 - Jun 14, 2026",
    title: "Tree Traversal Week",
    theme: "Start the tree mountain with traversal fluency first.",
    primaryFocus: "Binary tree traversals, BFS/DFS, level order, and depth problems",
    completionTarget: "16-20 lessons",
    masteryTarget: "9 mastery wins",
    bossBattle: "Do preorder, inorder, postorder, level order, and max depth in one revision block.",
    reward: "Trees stop looking like a wall and start looking like a toolkit.",
    tasks: [
      {
        label: "Complete 12 binary-tree lessons",
        rule: { type: "completeLessonsInModules", moduleIds: ["binary-tree"], target: 12 },
      },
      {
        label: "Clear the traversal boss set",
        rule: { type: "completeSpecificLessons", lessonIds: [124, 125, 126, 127, 131, 133], target: 6 },
      },
      {
        label: "Master 9 binary-tree lessons",
        rule: { type: "masterLessonsInModules", moduleIds: ["binary-tree"], target: 9 },
      },
      {
        label: "Finish both level-order approaches",
        rule: { type: "completeSpecificLessons", lessonIds: [131, 132], target: 2 },
      },
    ],
  },
  {
    week: "Week 8",
    id: "week-8",
    startDate: "2026-06-15",
    endDate: "2026-06-21",
    dateRange: "Jun 15 - Jun 21, 2026",
    title: "Tree Problems Deep Dive",
    theme: "Turn traversal knowledge into actual interview problem solving.",
    primaryFocus: "Path sum, symmetric tree, invert, same tree, balanced tree, diameter, LCA, right-side view",
    completionTarget: "15-18 lessons",
    masteryTarget: "9 mastery wins",
    bossBattle: "Solve 5 medium tree problems across recursion and BFS styles in a timed set.",
    reward: "You unlock real interview-grade confidence in trees.",
    tasks: [
      {
        label: "Reach 22 completed binary-tree lessons overall",
        rule: { type: "completeLessonsInModules", moduleIds: ["binary-tree"], target: 22 },
      },
      {
        label: "Complete the medium tree boss set",
        rule: { type: "completeSpecificLessons", lessonIds: [134, 139, 140, 143, 144], target: 5 },
      },
      {
        label: "Master 14 binary-tree lessons overall",
        rule: { type: "masterLessonsInModules", moduleIds: ["binary-tree"], target: 14 },
      },
      {
        label: "Finish both symmetric-tree approaches",
        rule: { type: "completeSpecificLessons", lessonIds: [135, 136], target: 2 },
      },
    ],
  },
  {
    week: "Week 9",
    id: "week-9",
    startDate: "2026-06-22",
    endDate: "2026-06-28",
    dateRange: "Jun 22 - Jun 28, 2026",
    title: "BST and Heap Power-Up",
    theme: "Exploit structure and ordering instead of brute force.",
    primaryFocus: "BST core operations and heap / priority queue fundamentals",
    completionTarget: "14-18 lessons",
    masteryTarget: "9 mastery wins",
    bossBattle: "Solve validate BST, kth smallest, kth largest, top K frequent, and last stone weight in one stretch.",
    reward: "You gain stronger judgment about when sorted structure can save time.",
    tasks: [
      {
        label: "Complete 5 BST lessons",
        rule: { type: "completeLessonsInModules", moduleIds: ["bst"], target: 5 },
      },
      {
        label: "Complete 10 heap / priority queue lessons",
        rule: { type: "completeLessonsInModules", moduleIds: ["heap-priority-queue"], target: 10 },
      },
      {
        label: "Master 9 lessons across BST and heaps",
        rule: { type: "masterLessonsInModules", moduleIds: ["bst", "heap-priority-queue"], target: 9 },
      },
      {
        label: "Clear the BST and heap boss set",
        rule: { type: "completeSpecificLessons", lessonIds: [149, 152, 163, 165, 166], target: 5 },
      },
    ],
  },
  {
    week: "Week 10",
    id: "week-10",
    startDate: "2026-06-29",
    endDate: "2026-07-05",
    dateRange: "Jun 29 - Jul 05, 2026",
    title: "Graph Foundation Week",
    theme: "Build graph comfort before touching the bigger algorithms.",
    primaryFocus: "Graph representation, BFS, DFS, path existence, all paths, cycle detection, topo intuition",
    completionTarget: "14-18 lessons",
    masteryTarget: "10 mastery wins",
    bossBattle: "Solve one BFS graph problem, one DFS graph problem, and one topo-style problem in one timed block.",
    reward: "Graphs stop feeling like chaos and start feeling like traversal choices.",
    tasks: [
      {
        label: "Complete 10 foundation graph lessons",
        rule: { type: "completeSpecificLessons", lessonIds: [215, 216, 217, 218, 219, 220, 222, 223, 224, 226], target: 10 },
      },
      {
        label: "Master 10 graph lessons",
        rule: { type: "masterLessonsInModules", moduleIds: ["graphs"], target: 10 },
      },
      {
        label: "Clear the graph foundation boss set",
        rule: { type: "completeSpecificLessons", lessonIds: [216, 217, 220, 223], target: 4 },
      },
      {
        label: "Reach 12 completed graph lessons overall",
        rule: { type: "completeLessonsInModules", moduleIds: ["graphs"], target: 12 },
      },
    ],
  },
  {
    week: "Week 11",
    id: "week-11",
    startDate: "2026-07-06",
    endDate: "2026-07-12",
    dateRange: "Jul 06 - Jul 12, 2026",
    title: "Backtracking and Greedy Split",
    theme: "Switch between exhaustive search and smart local decisions without confusion.",
    primaryFocus: "Backtracking core set plus key greedy interview problems",
    completionTarget: "18-22 lessons",
    masteryTarget: "10 mastery wins",
    bossBattle: "Solve subsets or permutations, one combination sum, one interval problem, and one scheduling greedy problem.",
    reward: "You unlock variety without feeling scattered.",
    tasks: [
      {
        label: "Complete 8 backtracking lessons",
        rule: { type: "completeLessonsInModules", moduleIds: ["backtracking"], target: 8 },
      },
      {
        label: "Complete 8 greedy lessons",
        rule: { type: "completeLessonsInModules", moduleIds: ["greedy"], target: 8 },
      },
      {
        label: "Master 10 lessons across backtracking and greedy",
        rule: { type: "masterLessonsInModules", moduleIds: ["backtracking", "greedy"], target: 10 },
      },
      {
        label: "Clear the mixed boss set",
        rule: { type: "completeSpecificLessons", lessonIds: [169, 171, 173, 186, 190], target: 5 },
      },
    ],
  },
  {
    week: "Week 12",
    id: "week-12",
    startDate: "2026-07-13",
    endDate: "2026-07-19",
    dateRange: "Jul 13 - Jul 19, 2026",
    title: "Dynamic Programming Launch",
    theme: "Start with the most common DP patterns, not every possible DP trick.",
    primaryFocus: "1D DP, coin change, house robber, LIS, partition, decoding, palindromic DP",
    completionTarget: "16-20 lessons",
    masteryTarget: "10 mastery wins",
    bossBattle: "Do 5 DP problems where you must explain state, transition, and base cases aloud before coding.",
    reward: "DP becomes structured instead of mystical.",
    tasks: [
      {
        label: "Complete 12 dynamic-programming lessons",
        rule: { type: "completeLessonsInModules", moduleIds: ["dynamic-programming"], target: 12 },
      },
      {
        label: "Master 10 dynamic-programming lessons",
        rule: { type: "masterLessonsInModules", moduleIds: ["dynamic-programming"], target: 10 },
      },
      {
        label: "Clear the DP boss set",
        rule: { type: "completeSpecificLessons", lessonIds: [198, 200, 202, 207, 211], target: 5 },
      },
      {
        label: "Reach the halfway point of the DP module",
        rule: { type: "completeLessonsInModules", moduleIds: ["dynamic-programming"], target: 10 },
      },
    ],
  },
  {
    week: "Week 13",
    id: "week-13",
    startDate: "2026-07-20",
    endDate: "2026-07-26",
    dateRange: "Jul 20 - Jul 26, 2026",
    title: "Final Boss Month-End",
    theme: "Shift from learning mode to interview mode.",
    primaryFocus: "Mixed revision, mocks, weak-area recovery, and any unfinished advanced modules",
    completionTarget: "Remaining lessons to close the syllabus",
    masteryTarget: "12 mastery wins",
    bossBattle: "Run 3 mixed mock sets, clear your starred backlog aggressively, and close the biggest unfinished module.",
    reward: "You end the 3-month cycle with a system, not just a pile of solved questions.",
    tasks: [
      {
        label: "Reach 100% overall course completion",
        rule: { type: "overallCompletionPercent", target: 100 },
      },
      {
        label: "Master 60% of the full course",
        rule: { type: "overallMasteryPercent", target: 60 },
      },
      {
        label: "Complete the Tries module",
        rule: { type: "completeLessonsInModules", moduleIds: ["tries"], target: 4 },
      },
      {
        label: "Clear all starred hard problems to mastery",
        rule: { type: "allStarredMastered", target: 1 },
      },
    ],
  },
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
