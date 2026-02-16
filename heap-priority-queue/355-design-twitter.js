/**
 * 355. Design Twitter
 * https://leetcode.com/problems/design-twitter/
 *
 * ------------------------------------
 * Brute Force / Simple Design
 * ------------------------------------
 * Time Complexity:
 *   postTweet   -> O(1)
 *   follow      -> O(1)
 *   unfollow    -> O(1)
 *   getNewsFeed -> O(T log T) where T = total tweets from user + followees
 *
 * Space Complexity: O(T + F)
 *   T = total tweets stored
 *   F = total follow relationships
 */

var Twitter = function () {
    this.tweets = new Map();   // userId -> [{ tweetId, time }]
    this.follows = new Map();  // userId -> Set of followeeIds
    this.time = 0;             // global timestamp
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    if (!this.tweets.has(userId)) {
        this.tweets.set(userId, []);
    }
    this.tweets.get(userId).push({ tweetId, time: this.time++ });
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    let allTweets = this.tweets.get(userId) || [];

    const following = this.follows.get(userId) || new Set();
    for (const followeeId of following) {
        allTweets = allTweets.concat(this.tweets.get(followeeId) || []);
    }

    return allTweets
        .sort((a, b) => b.time - a.time)
        .slice(0, 10)
        .map(t => t.tweetId);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.follows.has(followerId)) {
        this.follows.set(followerId, new Set());
    }
    this.follows.get(followerId).add(followeeId);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (this.follows.has(followerId)) {
        this.follows.get(followerId).delete(followeeId);
    }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId, tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId, followeeId)
 * obj.unfollow(followerId, followeeId)
 */



// Max Heap Implementation 

/**
 * 355. Design Twitter
 * https://leetcode.com/problems/design-twitter/
 *
 * ------------------------------------
 * Max Heap (K-way Merge) Solution
 * ------------------------------------
 * Time Complexity:
 *   postTweet   -> O(1)
 *   follow      -> O(1)
 *   unfollow    -> O(1)
 *   getNewsFeed -> O((F + 1) * log(F + 1) + 10 * log(F + 1))
 *      where F = number of followed users
 *
 * Space Complexity:
 *   O(T + F)
 *   T = total tweets
 *   F = follow relationships
 */

class Tweet {
    constructor(tweetId, timestamp) {
        this.tweetId = tweetId;
        this.timestamp = timestamp;
    }
}

var Twitter = function () {
    this.tweetMap = new Map(); // userId -> [Tweet, Tweet, ...]
    this.followMap = new Map(); // userId -> Set<followeeId>
    this.timestamp = 0;
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    if (!this.tweetMap.has(userId)) {
        this.tweetMap.set(userId, []);
    }
    this.tweetMap.get(userId).push(new Tweet(tweetId, this.timestamp++));
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    const maxHeap = []; 
    const followed = this.followMap.get(userId) || new Set();
    const userIds = [...followed, userId];

    // Push latest tweet of each user
    for (const uid of userIds) {
        const tweets = this.tweetMap.get(uid);
        if (tweets && tweets.length > 0) {
            const lastIndex = tweets.length - 1;
            const tweet = tweets[lastIndex];
            maxHeap.push([tweet.timestamp, tweet.tweetId, uid, lastIndex]);
        }
    }

    // Max heap by timestamp
    maxHeap.sort((a, b) => b[0] - a[0]);

    const res = [];
    while (maxHeap.length && res.length < 10) {
        const [time, tweetId, uid, index] = maxHeap.shift();
        res.push(tweetId);

        if (index > 0) {
            const nextTweet = this.tweetMap.get(uid)[index - 1];
            maxHeap.push([nextTweet.timestamp, nextTweet.tweetId, uid, index - 1]);
            maxHeap.sort((a, b) => b[0] - a[0]);
        }
    }

    return res;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.followMap.has(followerId)) {
        this.followMap.set(followerId, new Set());
    }
    this.followMap.get(followerId).add(followeeId);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (this.followMap.has(followerId) && followerId !== followeeId) {
        this.followMap.get(followerId).delete(followeeId);
    }
};

/**
 * Usage:
 * var obj = new Twitter()
 * obj.postTweet(userId, tweetId)
 * var feed = obj.getNewsFeed(userId)
 * obj.follow(followerId, followeeId)
 * obj.unfollow(followerId, followeeId)
 */
