/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max_wealth = 0;
    accounts.forEach(item_i => {
        let item_i_wealth = 0;
        item_i.forEach(item_j => {
            item_i_wealth = item_i_wealth + item_j;
        })
        max_wealth = max_wealth > item_i_wealth ? max_wealth : item_i_wealth;
    })
    return max_wealth
};
