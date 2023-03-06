---
title: "Labuladong Notes"
date: 2023-02-26
type: "post"
tags: ["Note"]
showTableOfContents: True
---

## 0 Core frame

### 2 pointer for array

#### notes
1. When the problem is related to subtree, then we need to write the func at the position of postorder

#### 26. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

1. in-place -> do not new a array
2. fast and slow pointer for changes

#### 543. [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)
1. the diameter of each binary tree is the max sum of depth of the subtree of each node

### Binary tree

1. quick sort: preorder traversal, merge sort: postorder traversal
   - Quick sort
    ```Java
    void sort(int[] nums, int lo, int hi) {
        /****** preorder recursion ******/
        // breakpoint p
        int p = partition(nums, lo, hi);
        /************************/

        sort(nums, lo, p - 1);
        sort(nums, p + 1, hi);
    }
    ```
    - Merger sort
    ```Java
    void sort(int[] nums, int lo, int hi) {
        int mid = (lo + hi) / 2;
        // order nums[lo..mid]
        sort(nums, lo, mid);
        //order nums[mid+1..hi]
        sort(nums, mid + 1, hi);

        /****** postorder recursion ******/
        // merge nums[lo..mid] and nums[mid+1..hi]
        merge(nums, lo, mid, hi);
        /*********************/
    }
    ```
2. pre/in/postorder
    - traverse
    ```java
    void traverse(TreeNode root) {
        if (root == null) {
            return;
        }
        // preorder
        traverse(root.left);
        // inorder
        traverse(root.right);
        // postorder
    }
    ```

    ```java
    /* iterate list */
    void traverse(int[] arr) {
        for (int i = 0; i < arr.length; i++) {

        }
    }

    /* recursse array */
    void traverse(int[] arr, int i) {
        if (i == arr.length) {
            return;
        }
        // 前序位置
        traverse(arr, i + 1);
        // 后序位置
    }

    /* iterate list */
    void traverse(ListNode head) {
        for (ListNode p = head; p != null; p = p.next) {

        }
    }

    /* recurse list */
    void traverse(ListNode head) {
        if (head == null) {
            return;
        }
        // 前序位置
        traverse(head.next);
        // 后序位置
    }
    ```
    
### Dynamic Programming

1. return max/min -> listing with memo/dp table
2. func: clarify base case -> state/variable -> choice/action -> def dp/func 
3. template
   ```python
    # top-down
    def dp(state1, state2, ...):
        for choice in all_possible_choices:
            # current state due to choice
            result = min_max(result, dp(state1, state2, ...))
        return result

    # buttom-up
    # base case
    dp[0][0][...] = base_case
    # state change
    for state1 in all_min_max_in_state1：
        for state2 in all_min_max_in_state2：
            for ...
                dp[state1][state2][...] = min_max(state1，state2, ...)

   ```
4. the subquestions should be independent in between

### Backtracking
1. Backtracking traversals the branch, and dfs traversals the node
2. template
```java
result = []
def backtrack(route, choices):
    if satisfied:
        result.add(route)
        return
    
    for choice in choices:
        make_decision
        backtrack(route, choices)
        cancel_decision
```


### Backtracking for order/group/combination 
1. Styles
    - Elements distinct and could not be repeatedly chosen
      - Subsets: ensure the relative order between the elements remains unchanged
      - Combination: the combination with size of k is the subset of the size of k
      - Order: need extra `used` for marking the elements that be chosen before
    ```java
    // subset/combination
    void backtrack(int[] nums, int start) {
        for (int i = start; i < nums.length; i++) {
            track.addLast(nums[i]);
            backtrack(nums, i + 1);
            track.removeLast();
        }
    }

    // order    
    void backtrack(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }

            used[i] = true;
            track.addLast(nums[i]);
            backtrack(nums);
            track.removeLast();
            used[i] = false;
        }
    }
    ```
    - Elements not distinct and could not be repeatedly chosen
    ```java
    Arrays.sort(nums);
    // subset/combination
    void backtrack(int[] nums, int start) {

        for (int i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i - 1]) {
                continue;
            }

            track.addLast(nums[i]);
            backtrack(nums, i + 1);
            track.removeLast();
        }
    }


    Arrays.sort(nums);
    // order 
    void backtrack(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }

            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
                continue;
            }

            used[i] = true;
            track.addLast(nums[i]);
            backtrack(nums);
            track.removeLast();
            used[i] = false;
        }
    }
    ```
      - Subsets/combination: 
    - Elements distinct and could be repeatedly chosen
      - same as elements not distinct and could be repeatedly chosen
    ```java
    // subset/combination
    void backtrack(int[] nums, int start) {
        for (int i = start; i < nums.length; i++) {
            track.addLast(nums[i]);
            backtrack(nums, i);
            track.removeLast();
        }
    }


    // order
    void backtrack(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            track.addLast(nums[i]);
            backtrack(nums);
            track.removeLast();
        }
    }
    ```

### BFS

1. BFS would find the shortest route, but the cost would be much bigger than dfs
2. frame
    ```java
    public int BFS(Node start, Node target)  {
        Queue<Node> q;
        Set<Node> visited;

        q.offer(start);
        visited.add(start);
        int step = 0;

        while (!q.isEmpty()) {
            int sz = q.size();

            for (int i = 0; i < sz; i++) {
                Node cur = q.poll();

                if (cur is target) {
                    return step
                }

                for (Node x : cur.adj()) {
                    if (x not in visited) {
                        q.offer(x);
                        visited.add(x);
                    }
                }
            }
            step++
        }
    }
    ```
3. BFS and DFS
    - Space complexity
      - DFS: $O(logN)$, BFS: $O(N)$
    - DFS: line and BFS: face
4. BFS could be on both side, but must know the ends

### Binary Search
1. Typically binary search
    ```java
    public int binarySearch(int[] nums, int target) {
        int left = 0; 
        int right = nums.length - 1; 

        while(left <= right) {
            int mid = left + (right - left) / 2;

            if(nums[mid] == target) 
                return mid; //
            else if (nums[mid] < target)
                left = mid + 1; 
            else if (nums[mid] > target)
                right = mid - 1; 
        }

        return -1; //
    }
    ```
    - $<$: the alg. starts with length-1
2. binary search for left bound
    ```java
    public int binarySearch_left(int[] nums, int target) {
        int left = 0; 
        int right = nums.length-1; 

        while(left <= right) {
            int mid = left + (right - left) / 2;

            if(nums[mid] == target)
                right = mid - 1; //
            else if (nums[mid] < target)
                left = mid + 1; 
            else if (nums[mid] > target)
                right = mid - 1; 
        }
        
        if (left == nums.length) 
            return -1;
        
        return nums[left] == target ? left : -1; //
    }
    ```
3. binary search for right bound
    ```java
    public int binarySearch_right(int[] nums, int target) {
        int left = 0, right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                left = mid + 1; //
            }
            else if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            }
        }

        if (left - 1 < 0) 
            return -1;

        return nums[left - 1] == target ? (left - 1) : -1; //
    }
    ```

### Slide Window
1. structure
```java
int left = 0, right = 0

while (right < s.size()) {
    window.add(s[right]);
    right++;

    while (window needs shrink) {
        window.remove(s[left]);
        left++;
    }
}
```
```java
private void slidingWindow(string s) {
    unordered_map<char, int> window;

    int left = 0, right = 0;

    while (right < s.size()) {
        char c = s[right];
        right++;
        ... // in-window update

        //debug
        printf("window: [%d, %d)\n", left, right);

        while (window needs shrink) {
            char d = s[left]
            left++;
            ... // in-window update
        }
    }
}
```
    - time: O(N)

### Stock sell
1. use state machine
2. all-in-one
   ```java
   // k limit, cooldown and fee
    int maxProfit_all_in_one(int max_k, int[] prices, int cooldown, int fee) {
        int n = prices.length;
        if (n <= 0) {
            return 0;
        }
        if (max_k > n / 2) {
            // no limit of k
            return maxProfit_k_inf(prices, cooldown, fee);
        }

        int[][][] dp = new int[n][max_k + 1][2];
        // k = 0 base case
        for (int i = 0; i < n; i++) {
            dp[i][0][1] = Integer.MIN_VALUE;
            dp[i][0][0] = 0;
        }

        for (int i = 0; i < n; i++) 
            for (int k = max_k; k >= 1; k--) {
                if (i - 1 == -1) {
                    // base case 1
                    dp[i][k][0] = 0;
                    dp[i][k][1] = -prices[i] - fee;
                    continue;
                }

                // 包含 cooldown 的 base case
                if (i - cooldown - 1 < 0) {
                    // base case 2
                    dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]);
                    // fee
                    dp[i][k][1] = Math.max(dp[i-1][k][1], -prices[i] - fee);
                    continue;
                }
                dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]);
                // cooldown and fee
                dp[i][k][1] = Math.max(dp[i-1][k][1], dp[i-cooldown-1][k-1][0] - prices[i] - fee);     
            }
        return dp[n - 1][max_k][0];
    }

    // k no limit, fee and cooldown
    int maxProfit_k_inf(int[] prices, int cooldown, int fee) {
        int n = prices.length;
        int[][] dp = new int[n][2];
        for (int i = 0; i < n; i++) {
            if (i - 1 == -1) {
                // base case 1
                dp[i][0] = 0;
                dp[i][1] = -prices[i] - fee;
                continue;
            }

            // cooldown and base case
            if (i - cooldown - 1 < 0) {
                // base case 2
                dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
                // fee
                dp[i][1] = Math.max(dp[i-1][1], -prices[i] - fee);
                continue;
            }
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
            // cooldown and fee
            dp[i][1] = Math.max(dp[i - 1][1], dp[i - cooldown - 1][0] - prices[i] - fee);
        }
        return dp[n - 1][0];
    }

   ```

## 1 Data Structure

### Linked list

### Array

#### Prefix

1. use a list to remember the sum before and use it in the future calculation
2. example
```java
class NumArray {
    private int[] preSum;

    public NumArray(int[] nums) {
        preSum = new int[nums.length + 1];
        for (int i = 1; i < preSum.length; i++) {
            preSum[i] = preSum[i - 1] + nums[i - 1];
        }
    }
    
    public int sumRange(int left, int right) {
        return preSum[right + 1] - preSum[left];
    }
}
```
