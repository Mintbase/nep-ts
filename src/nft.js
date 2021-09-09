export var ProposalBatch;
(function (ProposalBatch) {
    /**
     * Mint a number of tokens for `owner_id` with optional royalty and split ownership shares.
     *
     * @param owner_id "owner.near"
     * @param num_to_mint 10
     * @param royalty_args
     * ```json
     * {"split_between":{"royalty1.near":1275,"royalty2":8750},"percentage":"10000"}
     * ```
     *
     * royalty1 = `12.5%`
     *
     * royalty2 =  `87.5%`
     * @param split_owners
     * ```json
     * {"co.owner.near":5000}
     * ```
     *
     * `owner_id` = `50%`
     *
     * `co.owner.id` = `50%`
     */
    function nft_batch_mint(owner_id, num_to_mint, royalty_args, split_owners) { }
    ProposalBatch.nft_batch_mint = nft_batch_mint;
    /**
     * Transfer 2d array of tokens mapped to destination accounts
     *
     * Caller of the method must attach a deposit of 1 yoctoⓃ for security purposes
     *
     * Contract MUST panic if called by someone other than token owner
     * @param token_ids
     * ```json
     * [ ["1","account.near"], ["2","account2.near"] ]
     * ```
     */
    function nft_batch_transfer(token_ids) { }
    ProposalBatch.nft_batch_transfer = nft_batch_transfer;
    /**
     * The token will be permanently removed from this contract.
     * Burn each token_id in `token_ids`.
     * @param token_ids
     */
    function nft_batch_burn(token_ids) { }
    ProposalBatch.nft_batch_burn = nft_batch_burn;
})(ProposalBatch || (ProposalBatch = {}));
