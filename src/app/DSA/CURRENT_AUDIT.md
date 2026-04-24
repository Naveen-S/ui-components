# Current DSA Audit

This file is the working audit for the problems already present in `src/app/DSA`.

## Status definitions
- `Solid`: acceptable as a current reference solution
- `Needs revisit`: useful attempt, but should be re-solved or polished before counting as interview-ready
- `Incomplete`: not done yet
- `Missing`: not present in the repo yet

## Current summary
- Strongest current area: linked lists
- Good base: arrays, strings, stacks, and queues
- Cleanup needed: sorting polish, draft-style warm-up files, BFS polish
- Biggest gaps: two pointers, sliding window, trees, BST, heaps, and graphs

## By topic

### Warm-up and fundamentals
| Problem | Status | Notes |
| --- | --- | --- |
| `countDigits.js` | Needs revisit | Exploratory style, not final reference quality yet |
| `palindrome.js` | Needs revisit | Multiple variants plus debug-oriented output |
| `reverseNumber.js` | Needs revisit | Re-solve for overflow and sign handling |
| `secondLargest.js` | Needs revisit | Good warm-up, still better as a revision problem |
| `starPattern.js` | Needs revisit | Useful practice, low interview priority |
| `sumOfN.js` | Needs revisit | Keep as fundamentals refresher |

### Arrays and strings
| Problem | Status | Notes |
| --- | --- | --- |
| `removeDuplicates.js` | Solid | Strong base array problem |
| `removeElement.js` | Solid | Good in-place array pattern |
| `mergeArray.js` | Solid | Worth keeping as a reference |
| `missingNumber.js` | Solid | Good baseline problem |
| `singleNumber.js` | Solid | Useful bit-manipulation warm-up |
| `stock.js` | Solid | Good interview staple |
| `reverseString.js` | Solid | Reliable easy-level reference |
| `String_anagram.js` | Solid | Good hashmap/string pattern |
| `String_Isomorphic.js` | Solid | Good mapping problem |
| `String_JewelsAndStones.js` | Solid | Fine as a quick string/hash reference |
| `String_LargestOddNumber.js` | Solid | Simple string scan |
| `String_LengthOfLastWord.js` | Solid | Good easy-level review |
| `Strings_BalancedStrings.js` | Solid | Good greedy/counting warm-up |
| `String_groupAnagram.js` | Needs revisit | Good content, but should be re-solved once more |
| `String_ReverseString.js` | Needs revisit | Keep in the re-solve bucket |
| `Strings_FrequentVowelsAndConsonant.js` | Needs revisit | Good cleanup candidate for hashing work |

### Recursion, searching, and sorting
| Problem | Status | Notes |
| --- | --- | --- |
| `Recursion_Factorial.js` | Solid | Fine fundamentals reference |
| `Recursion_Fibonacci.js` | Solid | Good basic recursion practice |
| `Recursion_PowerOfTwo.js` | Solid | Good small recursion refresher |
| `recursion_SumOfArray.js` | Needs revisit | Re-solve from memory |
| `binarySearch.js` | Solid | Good core search reference |
| `bubbleSort.js` | Needs revisit | Use for revision, not as a final anchor |
| `selectionSort.js` | Needs revisit | Same as above |
| `insertionSort.js` | Needs revisit | Same as above |
| `mergeSort.js` | Incomplete | Finish during Phase 1 |

### Linked lists
| Problem | Status | Notes |
| --- | --- | --- |
| `LinkedList_Reverse.js` | Solid | One of the stronger current files |
| `LinkedList_cycle.js` | Solid | Good interview staple |
| `LinkedList_MergeSortedList.js` | Solid | Reliable reference |
| `LinkedList_remove_nth.js` | Solid | Good two-pointer linked-list practice |
| `LinkedList_OddEven.js` | Solid | Good pointer manipulation problem |
| `LinkedList_Palindrome.js` | Solid | Good linked-list pattern |
| `LinkedList_intersection.js` | Solid | Good interview staple |
| `LinkedList.removeNode.js` | Needs revisit | Re-solve for presentation and polish |
| `LinkedList_Rotate.js` | Needs revisit | Review edge cases around empty input and rotations |

### Stacks and queues
| Problem | Status | Notes |
| --- | --- | --- |
| `Stack_ValidParens.js` | Solid | Good stack baseline |
| `Stack_DailyTemperature.js` | Solid | Good monotonic-stack reference |
| `Stack_NextGreaterElement.js` | Solid | Good monotonic-stack reference |
| `Stack_NextGreaterElement2.js` | Solid | Good follow-up variant |
| `Stack_QueueUsingStacks.js` | Needs revisit | Re-solve once more for confidence |
| `Stack_StackUsingQueue.js` | Needs revisit | Multiple implementations, treat as revision |
| `Queue_Rotting_Oranges.js` | Needs revisit | BFS is close, but debug-heavy right now |

### Major gaps
| Topic | Status | Notes |
| --- | --- | --- |
| Two pointers | Missing | High interview priority |
| Sliding window | Missing | Should follow two pointers immediately |
| Trees | Missing | First major untouched data-structure block |
| BST | Missing | Schedule directly after trees |
| Heaps / priority queue | Missing | Add after trees and BST |
| Graphs | Missing | Only one BFS-style glimpse so far |
