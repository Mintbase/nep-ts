export namespace ProposalBatch {

    /**
     * Split ownership of first sale
     */
    export interface SplitOwners {
        /**
         * ```json
         * {"co.owner1.near":1275, "co.owner2.near":1275}
         * ```
         */
        [index:string]:number
    }

    /**
     * Lifetime royalties
     */
    export interface RoyaltyArgs {
        /**
         * ```json
         * {"royalty1.near":1275,"royalty2":8750}
         * ```
         */
        split_between:{[index:string]:number}
        /**
         * denominator
         */
        percentage:number
    }


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
    export function nft_batch_mint(
        owner_id: string,
        num_to_mint: number,
        royalty_args: RoyaltyArgs|null,
        split_owners: SplitOwners|null,
    ): void {}

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
    export function nft_batch_transfer(
        token_ids: string[][],
    ): void {}

    /**
     * The token will be permanently removed from this contract.
     * Burn each token_id in `token_ids`.
     * @param token_ids
     */
    export function nft_batch_burn(
        token_ids: string[]
    ): void {}

}

export namespace ApprovalManagement {

    /**
     * Add an approved account for a specific token.
     */
    export interface nft_approve {
        /**
         * Requirements:
         *
         * Caller of the method must attach a deposit of at least 1 yoctoⓃ for
         * security purposes
         *
         * Contract MAY require caller to attach larger deposit, to cover cost of
         * storing approver data
         *
         * Contract MUST panic if called by someone other than token owner
         *
         * Contract MUST panic if addition would cause `nft_revoke_all` to exceed
         * single-block gas limit. See below for more info.
         *
         * Contract MUST increment approval ID even if re-approving an account
         *
         * If successfully approved or if had already been approved, and if `msg` is
         * present, contract MUST call `nft_on_approve` on `account_id`. See
         * `nft_on_approve` description below for details.
         * @category change method
         * @param token_id the token for which to add an approval
         * @param account_id the account to add to `approvals`
         * @param msg optional string to be passed to `nft_on_approve`
         */
        (
            token_id: string,
            account_id: string,
            msg: string|null,
        ):void|Promise<any>
    }


    /**
     * Revoke an approved account for a specific token.
     */
    export interface nft_revoke {
        /**
         * Requirements
         *
         * - Caller of the method must attach a deposit of 1 yoctoⓃ for security purposes
         * - If contract requires >1yN deposit on `nft_approve`, contract
         * MUST refund all associated storage deposit when owner revokes approvals
         * - Contract MUST panic if called by someone other than token owner
         * @category change method
         * @param token_id the token for which to revoke an approval
         * @param account_id the account to remove from `approvals`
         */
        (
            token_id: string,
            account_id: string
        ):void
    }


    /**
     * Revoke all approved accounts for a specific token.
     */
    export interface nft_revoke_all {
        /**
         * Requirements
         *
         * - Caller of the method must attach a deposit of 1 yoctoⓃ for security purposes
         * - If contract requires >1yN deposit on `nft_approve`, contract
         * MUST refund all associated storage deposit when owner revokes approvals
         * - Contract MUST panic if called by someone other than token owner
         * @category change method
         * @param token_id the token with approvals to revoke
         */
        (token_id: string):void
    }


    /**
     * Check if a token is approved for transfer by a given account, optionally
     * checking an approval_id
     */
    export interface nft_is_approved {
        /**
         *
         * @category view method
         * @param token_id the token for which to revoke an approval
         * @param approved_account_id the account to check the existence of in `approvals`
         * @param approval_id an optional approval ID to check against current approval ID for given account
         * @return {boolean}
         * if `approval_id` given, `true` if `approved_account_id` is approved with given `approval_id`
         * otherwise, `true` if `approved_account_id` is in list of approved accounts
         */
        (
            token_id: string,
            approved_account_id: string,
            approval_id: number|null
        ): boolean
    }
}

