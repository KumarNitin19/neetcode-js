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
