import { connection, wallet, walletconn, RayLiqPoolv4, tipAcct } from "../config";
import { PublicKey, ComputeBudgetProgram, VersionedTransaction,  TransactionInstruction, TransactionMessage, SystemProgram, Keypair, LAMPORTS_PER_SOL, AddressLookupTableAccount } from '@solana/web3.js';
import { DEFAULT_TOKEN, LP_MINT_ASSOCIATED_SEED, PROGRAMIDS, addLookupTableInfo, makeTxVersion } from './clients/constants';
import { TOKEN_PROGRAM_ID, getMint } from '@solana/spl-token';
import { Liquidity, MARKET_STATE_LAYOUT_V3, Token, TokenAmount, simulateTransaction, Market, MAINNET_PROGRAM_ID } from "@raydium-io/raydium-sdk";
import { BN, LangErrorCode, Wallet } from "@project-serum/anchor";
import { ammCreatePool, getWalletTokenAccount } from "./clients/raydiumUtil";
import { loadKeypairs } from './createKeys';
import { lookupTableProvider } from "./clients/LookupTableProvider";
//import { getRandomTipAccount } from "./clients/config";
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";
import { searcherClient } from "./clients/jito";
import { Bundle as JitoBundle } from 'jito-ts/dist/sdk/block-engine/types.js';
import promptSync from 'prompt-sync';
import * as spl from '@solana/spl-token';
import { IPoolKeys } from './clients/interfaces';
import { derivePoolKeys } from "./clients/poolKeysReassigned"; 
import path from 'path';
import fs from 'fs';
import { Key } from "readline";

const prompt = promptSync();
const keyInfoPath = path.join(__dirname, 'keyInfo.json');

swapper();

export async function swapper() {
    const bundledTxns: VersionedTransaction[] = [];
    const keypairs: Keypair[] = loadKeypairs();

    let poolInfo: { [key: string]: any } = {};
    if (fs.existsSync(keyInfoPath)) {
        const data = fs.readFileSync(keyInfoPath, 'utf-8');
        poolInfo = JSON.parse(data);
    }

    const lut = new PublicKey(poolInfo.addressLUT.toString());

    const lookupTableAccount = (
        await connection.getAddressLookupTable(lut)
    ).value;

    if (lookupTableAccount == null) {
        console.log("Lookup table account not found!");
        process.exit(0);
    }

    // -------- step 1: ask questions for pool build  --------
    const OpenBookID = prompt('OpenBook MarketID: ') || '';
    const jitoTipAmtInput = prompt('Jito tip in Sol (Ex. 0.01): ') || '0';
    const jitoTipAmt = parseFloat(jitoTipAmtInput) * LAMPORTS_PER_SOL;

    const targetMarketId = new PublicKey(OpenBookID)

    const { blockhash } = await connection.getLatestBlockhash('finalized');

        [[ REDACTED ]]
        [[370 lines left]]
        [[this is only a function file from the whole project]]

        [[ @benoriz0 on telegram]]
